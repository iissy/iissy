<template>
  <div style="width: 960px;flex: 1;margin: 20px 0;" class="g-container">
    <div style="flex: 0 0 auto;font-size: 18px;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;">页面组权限</div>
    <div style="padding: 0 20px;">
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.view"/>
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.create"/>
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.manage"/>
    </div>
  </div>
</template>

<script>
import PermissionItem from '@/views/component/common/block/permission_item';
import http from "@/scripts/http";

export default {
  data() {
    return {
      desc: '团队权限可以用于管理团队成员。',
      team: '',
      space: '',
      project: '',
      maps: {
        view: { code: 2003, permission: 'view_page', title: '阅览与反馈', desc: '允许用户进入页面组并查看页面', groups: [], roles: [], members: [], in_roles: ['everyone', 'team_owner'] },
        create: { code: 2002, permission: 'create_page', title: '编辑内容', desc: '允许用户新建、编辑、删除页面', groups: [], roles: [], members: [], in_roles: ['everyone', 'team_owner'] },
        manage: { code: 2001, permission: 'manage_space', title: '管理页面组', desc: '允许用户使用页面组控制台，管理页面回收站', groups: [], roles: [], members: [], in_roles: ['everyone', 'team_owner'] }
      },
      role_members: [],
      loaded: false
    }
  },
  mounted() {
    let self = this;
    self.space = self.$route.params.space;
    self.data = {
      permission_rule: {
        context_type: 'space',
        context_param: {
          space_uuid: self.space
        }
      }
    }
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.GetUserDomainGroups();
  },
  methods: {
    GetUserDomainGroups: function () {
      let self = this;
      let data = []
      for(let key in self.maps) {
        data.push(self.maps[key].code);
      }
      http.post(self.urls.team_permission_rules.format(self.team), data).then(function (response) {
        if(response.data && response.data.length > 0) {
          for (let i = 0; i < response.data.length; i++) {
            let rules = response.data[i];
            for (let key in self.maps) {
              let item = self.maps[key];
              item.groups = [];
              if (rules.permission === item.code) {
                item.groups = rules.groups;
                break;
              }
            }
          }
        }
        self.GetTeamMembers();
      });
    },
    GetTeamMembers: function () {
      let self = this;
      http.get(self.urls.team_member_list.format(self.team)).then(function (response) {
        if(response.data && response.data && response.data.length > 0) {
          let members = [];
          for (let i = 0; i < response.data.length; i++) {
            let member = response.data[i];
            member.type = 'single_user';
            members.push(member)
          }

          for (let key in self.maps) {
            let item = self.maps[key];
            item.members = members;
          }
        }
        self.loaded = true;
      });
    },
  },
  components: {
    PermissionItem
  }
}
</script>

<style scoped>

</style>
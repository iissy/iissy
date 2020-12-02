<template>
  <div class="wiki g-container">
    <div style="display: flex;flex-direction: row;align-items: center;">
      <div style="flex: 0 0 auto;font-size: 18px;">权限配置</div>
    </div>
    <Summary :desc="desc"/>
    <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.manage"/>
  </div>
</template>

<script>
import Summary from '@/views/component/common/block/summary';
import PermissionItem from '@/views/component/common/block/permission_item';
import http from "@/scripts/http";

export default {
  data() {
    return {
      desc: '文档权限可以用于管理项目文档组。',
      team: '',
      project: '',
      maps: {
        manage: { code: 2020, permission: 'create_space', title: '新建页面组权限', desc: '允许用户新建页面组', groups: [], roles: [], members: [], in_roles: ['everyone', 'team_owner'] }
      },
      role_members: [],
      loaded: false
    }
  },
  mounted() {
    let self = this;
    self.data = {
      permission_rule: {
        context_type: "wiki"
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
    Summary,
    PermissionItem
  }
}
</script>

<style scoped>
.wiki { max-width:1200px;flex: 1 1 auto;padding: 20px;min-height: 100%; }
</style>
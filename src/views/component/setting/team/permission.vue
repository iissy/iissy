<template>
  <div style="max-width:1200px;flex: 1 1 auto;min-height: 100%;" class="g-container">
    <PermissionHeader title="团队权限" desc="团队权限可以用于管理团队成员。"/>
    <div style="padding: 0 20px 20px 20px;">
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.browse"/>
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.reports"/>
    </div>
  </div>
</template>

<script>
import PermissionHeader from '@/views/component/common/permission/header';
import PermissionItem from '@/views/component/common/block/permission_item';
import http from "@/scripts/http";

export default {
  data() {
    return {
      team: '',
      project: '',
      maps: {
        browse: { code: 4, permission: 'invite_member', title: '邀请团队成员', desc: '允许用户邀请新的团队成员，并在顶栏显示邀请团队成员的快捷入口', groups: [], roles: [], members: [], in_roles: ['everyone', 'team_owner'] },
        reports: { code: 1, permission: 'administer_team', title: '团队管理员', desc: '超级管理员权限，可以更改团队信息和团队权限', groups: [], roles: [], members: [], in_roles: ['everyone', 'team_owner'] }
      },
      role_members: [],
      loaded: false
    }
  },
  mounted() {
    let self = this;
    self.data = {
      permission_rule: {
        context_type: "team"
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
        for (let key in self.maps) {
          let item = self.maps[key];
          item.groups = [];
        }

        if(response.data && response.data.length > 0) {
          for (let key in self.maps) {
            let item = self.maps[key];
            for (let i = 0; i < response.data.length; i++) {
              let rules = response.data[i];
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
    PermissionHeader,
    PermissionItem
  }
}
</script>

<style scoped>

</style>
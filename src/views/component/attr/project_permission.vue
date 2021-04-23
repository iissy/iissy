<template>
  <div class="app-main-content ibox">
    <PermissionHeader title="项目权限" desc="项目权限可以用于定制项目的操作权限控制。"/>
    <div style="padding: 0 20px 20px 20px;">
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.browse"/>
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.manage"/>
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.reports"/>
    </div>
  </div>
</template>

<script>
import PermissionHeader from '../common/permission/header';
import PermissionItem from '../common/block/permission_item';
import http from "../../../utils/http";

export default {
  data() {
    return {
      team: '',
      project: '',
      maps: {
        browse: { code: 1102, permission: 'browse_project', title: '查看项目', desc: '允许成员浏览当前项目，包括工作项，筛选器，报表等信息', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        manage: { code: 1101, permission: 'manage_project', title: '管理项目', desc: '管理当前项目并更新项目的配置信息', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        reports: { code: 1104, permission: 'view_project_reports', title: '查看项目报表', desc: '允许成员查看当前项目的数据报表', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] }
      },
      role_members: [],
      loaded: false
    }
  },
  mounted() {
    let self = this;
    self.data = {
      permission_rule: {
        context_type: "project",
        context_param: {
          project_uuid: self.project
        }
      }
    }
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = this.$route.params.project;
    self.GetUserDomainGroups();
  },
  methods: {
    GetUserDomainGroups: function () {
      let self = this;
      let data = []
      for(let key in self.maps) {
        data.push(self.maps[key].code);
      }
      http.post(self.urls.project_user_domain_group.format(self.team, self.project), data).then(function (response) {
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

        self.GetRoleMembers();
      });
    },
    GetRoleMembers: function () {
      let self = this;
      http.get(self.urls.role_members.format(self.team, self.project)).then(function (response) {
        if(response.data && response.data.role_members && response.data.role_members.length > 0) {
          for (let i = 0; i < response.data.role_members.length; i++) {
            let role_member = response.data.role_members[i];
            for (let key in self.maps) {
              let item = self.maps[key];
              item.roles = [];
              item.members = [];
              role_member.role.type = 'role';
              item.roles.push(role_member.role);
              for (let x=0;x<role_member.members.length;x++) {
                let user = role_member.members[x];
                user.type = 'single_user';
                item.members.push(user);
              }
            }
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
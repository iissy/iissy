<template>
  <div style="max-width:1200px;flex: 1 1 auto;min-height: 100%;" class="g-container">
    <div style="flex: 0 0 auto;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;" class="flex-row align-items-center">
      <div style="flex: 1;" class="flex-row align-items-center">
        <div style="font-size: 18px;flex: 0 0 auto;">项目管理</div>
        <div style="margin-left: 10px;flex: 0 0 auto;">
          <b-icon icon="chevron-right"/>
        </div>
        <div style="margin-left: 10px;flex: 0 0 auto;font-size: 18px;color: #909090;">{{ ProjectName }}</div>
      </div>
      <div style="flex: 0 0 auto;margin-right: 10px;color: #909090;">
        <b-icon icon="exclamation-diamond"/>
        项目管理、查看基本权限配置，需要更细致权限请到各个具体项目下配置。
      </div>
    </div>
    <div style="padding: 0 20px 20px 20px;">
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.read"/>
      <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.write"/>
    </div>
  </div>
</template>

<script>
import PermissionItem from '@/views/component/common/block/permission_item';
import http from "@/scripts/http";

export default {
  data: function () {
    return {
      dropdownActive: false,
      team: '',
      project: '',
      ProjectName: '',
      maps: {
        read: { code: 1102, permission: 'browse_project', title: '查看项目', desc: '允许成员浏览当前项目，包括工作项，筛选器，报表等信息', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        write: { code: 1101, permission: 'manage_project', title: '管理项目', desc: '管理当前项目并更新项目的配置信息', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] }
      },
      role_members: [],
      loaded: false
    };
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
    self.GetProjectName();
    self.GetUserDomainGroups();
  },
  methods: {
    GetProjectName: function() {
      let self = this;
      self.ProjectName = self.$route.params.title
      if (!self.ProjectName) {
        http.get(self.urls.project_get.format(self.team, self.project)).then(function (response) {
          self.ProjectName = response.data.name;
        });
      }
    },
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
    PermissionItem
  }
};
</script>

<style scoped>
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table .th { padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .last { width: 60px;flex: 0 0 auto; }
</style>
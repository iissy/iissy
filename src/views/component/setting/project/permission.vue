<template>
  <div style="flex: 1;height: 100%;">
    <div style="display: flex;flex-direction: row;align-items: center;border-bottom: 1px solid #e8e8e8;padding-bottom: 10px;">
      <div style="font-size: 18px;flex: 0 0 auto;">项目管理</div>
      <div style="margin-left: 10px;flex: 0 0 auto;">
        <div style="flex:0 0 auto;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
        </div>
      </div>
      <div style="margin-left: 10px;flex: 0 0 auto;font-size: 18px;">{{ ProjectName }}</div>
    </div>
    <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.read"/>
    <PermissionItem v-if="loaded" :role_members="role_members" :data="data" :group="maps.write"/>
  </div>
</template>

<script>
import http from "@/scripts/http";
import PermissionItem from '@/views/component/common/block/permission_item';

export default {
  data: function () {
    return {
      dropdownActive: false,
      team: '',
      project: '',
      ProjectName: '',
      maps: {
        read: { code: 1102, permission: 'browse_project', title: '查看项目', desc: '允许成员浏览当前项目，包括工作项，筛选器，报表等信息', groups: [], roles: [], members: [] },
        write: { code: 1101, permission: 'manage_project', title: '管理项目', desc: '管理当前项目并更新项目的配置信息', groups: [], roles: [], members: [] }
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
        if(response.data && response.data.length > 0) {
          for (let i = 0; i < response.data.length; i++) {
            let rules = response.data[i];
            for (let key in self.maps) {
              let item = self.maps[key];
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
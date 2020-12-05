<template>
  <div class="app-main-content">
    <div style="flex: 0 0 auto;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;" class="flex-row align-items-center">
      <div style="flex: 1;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;display: flex;">
          <router-link :to="{ name: 'ComponentDesigner', params: { team: team, project: project, com:'designer', attr: 'issue_type' } }">
            <span style="font-size: 16px;">工作项类型</span>
          </router-link>
        </div>
        <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
        </div>
        <div style="color:#909090;font-size: 16px;display: flex;">{{ title }}</div>
        <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
        </div>
        <div style="flex: 0 0 auto;display: flex;">
          <span style="font-size: 16px;color: #909090;">工作项权限</span>
        </div>
      </div>
      <div style="flex: 0 0 auto;margin-right: 10px;color: #909090;">
        <b-icon icon="exclamation-diamond"/>
        工作项权限可以用于定制工作项的操作权限控制。
      </div>
    </div>
    <div style="padding: 0 20px 20px 20px;" v-if="loaded">
      <PermissionItem v-for="(v,k) in maps" :data="data" :group="v" :key="k"/>
    </div>
  </div>
</template>

<script>
import PermissionItem from '@/views/component/common/block/permission_item';
import http from "@/scripts/http";

export default {
  data() {
    return {
      title: '',
      maps: {
        create: { code: 1201, permission: 'create_tasks', title: '创建#', desc: '允许成员创建#', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        view: { code: 1202, permission: 'view_tasks', title: '查看#', desc: '允许成员查看#', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        update: { code: 1203, permission: 'update_tasks', title: '编辑#', desc: '允许成员修改#，以及对#进行其他变更操作', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        delete: { code: 1204, permission: 'delete_tasks', title: '删除#', desc: '允许成员删除#', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        transit: { code: 1206, permission: 'transit_tasks', title: '更新#状态', desc: '允许成员更新#状态', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] }
      },
      loaded: false,
      data: {}
    }
  },
  mounted() {
    let self = this;
    self.data = {
      permission_rule: {
        context_type: "issue_type",
        context_param: {
          project_uuid: self.project,
          issue_type_uuid: self.issue_type
        }
      }
    }
  },
  created: function () {
    let self = this;
    self.title = self.$route.params.title;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$route.params.issue_type;
    self.issue_type_get();
  },
  methods: {
    issue_type_get: function() {
      let self = this;
      if (!self.title) {
        http.get(this.urls.issue_type_get.format(self.team, self.issue_type)).then(function (response) {
          self.title = response.data.name;
          self.GetUserDomainGroups();
        });
      } else {
        self.GetUserDomainGroups();
      }
    },
    GetUserDomainGroups: function () {
      let self = this;
      let data = []
      for(let key in self.maps) {
        data.push(self.maps[key].code);
      }
      http.post(self.urls.issue_type_user_domain_group.format(self.team, self.project, self.issue_type), data).then(function (response) {
        for (let key in self.maps) {
          let item = self.maps[key];
          item.title = item.title.replace("#", self.title);
          item.desc = item.desc.replace("#", self.title);
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
    }
  },
  components: {
    PermissionItem
  }
}
</script>

<style scoped>

</style>
<template>
  <div style="max-width:1200px;flex: 1 1 auto;padding: 20px;height: 100%;" class="g-container">
    <div style="padding-bottom: 10px;" class="flex-row align-items-center">
      <div style="flex: 0 0 auto;display: flex;">
        <router-link :to="{ name: 'TeamIssueTypeSetting', params: { team: team, type: 'list' } }">
          <span style="font-size: 18px;">工作项类型</span>
        </router-link>
      </div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="display: flex;">
        <router-link :to="{ name: 'IssueTypeSetting', params: { team: team, issue_type: issue_type, type: 'config', title: title } }">
          <span style="font-size: 18px;">{{ title }}</span>
        </router-link>
      </div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="flex: 0 0 auto;display: flex;">
        <span style="font-size: 18px;color: #909090;">工作项权限</span>
      </div>
    </div>
    <Summary :desc="desc"/>
    <div v-if="loaded">
      <PermissionItem v-for="(v,k) in maps" :role_members="role_members" :data="data" :group="v" :issue_type_name="title" :issue_type="issue_type" :key="k"/>
    </div>
  </div>
</template>

<script>
import Summary from '@/views/component/common/block/summary';
import PermissionItem from '@/views/component/setting/issue_type/config/permission_item';
import http from "@/scripts/http";

export default {
  data() {
    return {
      team: '',
      issue_type: '',
      title: '',
      desc: '配置中心下，工作项权限修改，不会同步到已经应用的项目中。',
      maps: {
        create: { permission: 'create_tasks', title: '创建#', desc: '允许成员创建#', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        view: { permission: 'view_tasks', title: '查看#', desc: '允许成员查看#', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        update: { permission: 'update_tasks', title: '编辑#', desc: '允许成员修改#，以及对#进行其他变更操作', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        delete: { permission: 'delete_tasks', title: '删除#', desc: '允许成员删除#', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] },
        transit: { permission: 'transit_tasks', title: '更新#状态', desc: '允许成员更新#状态', groups: [], roles: [], members: [], in_roles: ['everyone', 'project_assign'] }
      },
      role_members: [],
      loaded: false,
      data: {
        permission_rule: {}
      }
    }
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.issue_type = self.$route.params.issue_type;
    self.title = self.$route.params.title;
    self.project_issue_type_field();
  },
  methods: {
    project_issue_type_field: function() {
      let self = this;
      http.get(self.urls.issue_type_template_get.format(self.team, self.issue_type)).then(function (response) {
        self.title = response.data.name;
        let rules = response.data.default_configs.default_permission;

        for (let key in self.maps) {
          let item = self.maps[key];
          item.groups = [];
        }

        for (let key in self.maps) {
          let groups = [];
          let item = self.maps[key];
          for (let i = 0; i < rules.length; i++) {
            let rule = rules[i];
            if (rule.permission === item.permission) {
              let group =  { uuid: rule.uuid, param: rule.user_domain_param, type: rule.user_domain_type };
              groups.push(group);
            }
          }
          item.groups = groups;
        }

        self.GetTeamRolesAndMembers();
      });
    },
    GetTeamRolesAndMembers: function () {
      let self = this;
      http.get(self.urls.team_roles_members.format(self.team)).then(function (response) {
        for (let key in self.maps) {
          let item = self.maps[key];
          let roles = [];
          for (let i = 0; i < response.data.roles.length; i++) {
            let role = response.data.roles[i];
            let obj = {type: 'role', name: role.name, name_pinyin: role.name_pinyin, uuid: role.uuid};
            roles.push(obj);
          }

          let members = [];
          for (let i = 0; i < response.data.members.length; i++) {
            let member = response.data.members[i];
            member.type = 'single_user';
            members.push(member)
          }

          item.roles = roles;
          item.members = members;
        }

        self.loaded = true;
      });
    }
  },
  components: {
    Summary,
    PermissionItem
  }
}
</script>

<style scoped>

</style>
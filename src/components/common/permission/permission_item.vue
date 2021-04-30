<template>
  <PermissionItem :exist="exist" :items="items" :title="title" :desc="desc" @add="add" @del="del"/>
</template>

<script>
import http from "../../../utils/http";
import PermissionItem from "./permission_item_view";

export default {
  data: function () {
    return {
      visible: false,
      everyone: {uuid: 's3', name: '所有成员', desc: '当前团队所有成员', type: 'everyone', param: ''},
      project_assign: {uuid: 's16', name: '项目负责人', type: 'project_assign', param: ''},
      team_owner: {uuid: 's10', name: '团队负责人', type: 'team_owner', param: ''},
      template: {
        roles: {uuid: 'role', title: '角色', groups: [], exist: [] },
        members: {uuid: 'member', title: '成员', groups:[], exist: [], isMember: true}
      },
      exist: [],
      title: "",
      desc: "",
      permission: ""
    };
  },
  props: {
    group: Object,
    data: Object,
  },
  components: {
    PermissionItem
  },
  created() {
    let self = this;
    self.title = self.group.title;
    self.desc = self.group.desc;
    self.permission = self.group.permission;
  },
  methods: {
    add: function (u, t) {
      let self = this;
      self.team = self.$route.params.team;
      self.data.permission_rule.permission = self.permission;
      self.data.permission_rule.user_domain_type = t;
      self.data.permission_rule.user_domain_param = u;

      http.post(self.urls.permission_rules_add.format(self.team), self.data).then(function () {
        self.$parent.GetUserDomainGroups();
      });
    },
    del: function (p) {
      let self = this;
      self.team = self.$route.params.team;
      http.get(self.urls.permission_rule_delete.format(self.team, p)).then(function () {
        self.$parent.GetUserDomainGroups();
      });
    }
  },
  computed: {
    items: function () {
      let self = this;
      let types = [];
      let result = [];
      let memberUUIDS = [];
      self.exist = [];
      for (let m = 0; m < self.group.groups.length; m++) {
        let domain = self.group.groups[m];
        let type = '';
        let ignore = false;

        switch (domain.type) {
          case 1:
            type = 'single_user';
            for (let n = 0; n < domain.params.length; n++) {
              let param = domain.params[n];
              memberUUIDS.push(param.param);
              for (let x = 0; x < self.group.members.length; x++) {
                let member = self.group.members[x];
                if (member.uuid === param.param) {
                  let o = {uuid: param.uuid, permission: param.uuid, name: member.name, type: type, read_only: param.read_only};
                  self.exist.push(o);
                  break;
                }
              }
            }
            break;
          case 3:
            type = 'everyone';
            for (let n = 0; n < domain.params.length; n++) {
              let param = domain.params[n];
              self.everyone.permission = param.uuid;
              self.everyone.read_only = param.read_only;
              self.exist.push(self.everyone);
            }
            break;
          case 10:
            type = 'team_owner';
            for (let n = 0; n < domain.params.length; n++) {
              let param = domain.params[n];
              self.team_owner.permission = param.uuid;
              self.team_owner.read_only = param.read_only;
              self.exist.push(self.team_owner);
            }
            break;
          case 11:
            type = 'role';
            for (let n = 0; n < domain.params.length; n++) {
              let param = domain.params[n];
              for (let x = 0; x < self.group.roles.length; x++) {
                let role = self.group.roles[x];
                if (role.uuid === param.param) {
                  let newRole = { name: role.name, name_pinyin: role.name_pinyin, uuid: role.uuid, permission: param.uuid, read_only: param.read_only };
                  self.exist.push(newRole);
                  break;
                }
              }
            }
            break;
          case 16:
            type = 'project_assign';
            for (let n = 0; n < domain.params.length; n++) {
              let param = domain.params[n];
              self.project_assign.permission = param.uuid;
              self.project_assign.read_only = param.read_only;
              self.exist.push(self.project_assign);
            }
            break;
          default:
            ignore = true;
            break;
        }

        if (ignore) {
          continue;
        }

        types.push(type);
      }
      // self.template.roles.exist = existRoles;

      // 添加角色
      let roles = []
      for (let i=0;i<self.group.in_roles.length;i++) {
        let key = self.group.in_roles[i];
        roles.push(self[key]);
      }
      for (let x = 0; x < self.group.roles.length; x++) {
        let role = self.group.roles[x];
        role.param = role.uuid;
        roles.push(role);
      }

      // 添加成员
      let members = [];
      for (let x = 0; x < self.group.members.length; x++) {
        let member = self.group.members[x];
        member.param = member.uuid;
        members.push(member);
      }

      let template = self.template;
      // 去掉已经添加的角色成员
      let role_groups = []
      for (let x = 0; x < roles.length; x++) {
        let g = roles[x];
        let include = false;
        for (let y = 0; y < types.length; y++) {
          if (g.type === types[y]) {
            include = true;
            break;
          }
        }
        if (!include) {
          role_groups.push(g);
        }
      }
      template.roles.groups = role_groups;
      result.push(template.roles);

      // 去掉已经添加的成员
      let member_groups = [];
      for (let i=0;i<members.length;i++) {
        let member = members[i];
        let include = false;
        for (let y = 0; y < memberUUIDS.length; y++) {
          if (member.uuid === memberUUIDS[y]) {
            include = true;
            break;
          }
        }
        if (!include) {
          member_groups.push(member);
        }
      }
      template.members.groups = member_groups;
      result.push(template.members);

      return result;
    }
  }
};
</script>
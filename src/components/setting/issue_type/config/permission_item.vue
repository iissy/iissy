<template>
  <PermissionItem :exist="exist" :items="items" :title="title" :desc="desc" @add="add" @del="del"/>
</template>

<script>
import http from "../../../../utils/http";
import PermissionItem from "../../../common/permission/permission_item_view";

export default {
  data: function () {
    return {
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
    role_members: Array,
    data: Object,
    issue_type: String,
    issue_type_name: String
  },
  created() {
    let self = this;
    self.title = self.group.title.replace('#', self.issue_type_name);
    self.desc = self.group.desc.replace('#', self.issue_type_name);
    self.permission = self.group.permission;
  },
  methods: {
    add: function (u, t) {
      let self = this;
      self.team = self.$route.params.team;
      self.data.permission_rule.permission = self.group.permission;
      self.data.permission_rule.user_domain_type = t;
      self.data.permission_rule.user_domain_param = u;

      http.post(self.urls.issue_type_permission_rules_add.format(self.team, self.issue_type), self.data).then(function () {
        self.$parent.project_issue_type_field();
      });
    },
    del: function (p) {
      let self = this;
      self.team = self.$route.params.team;
      http.get(self.urls.issue_type_permission_rule_delete.format(self.team, self.issue_type, p)).then(function () {
        self.$parent.project_issue_type_field();
      });
    }
  },
  components: {
    PermissionItem
  },
  computed: {
    items: function () {
      let self = this;
      let types = [];
      let result = [];
      let memberUUIDS = [];
      self.exist = [];
      if (self.group.groups) {
        for (let m = 0; m < self.group.groups.length; m++) {
          let domain = self.group.groups[m];
          let ignore = false;

          switch (domain.type) {
            case 'single_user':
              memberUUIDS.push(domain.param);
              for (let x = 0; x < self.group.members.length; x++) {
                let member = self.group.members[x];
                if (member.uuid === domain.param) {
                  let o = {uuid: member.uuid, permission: domain.uuid, name: member.name, type: 'single_user'};
                  self.exist.push(o);
                  break;
                }
              }
              break;
            case 'everyone':
              self.everyone.permission = domain.uuid;
              self.exist.push(self.everyone);
              break;
              // case 'team_owner':
              //   for (let n = 0; n < domain.params.length; n++) {
              //     let param = domain.params[n];
              //     self.team_owner.permission = param.uuid;
              //     self.team_owner.read_only = param.read_only;
              //     self.exist.push(self.team_owner);
              //   }
              //   break;
            case 'role':
              for (let x = 0; x < self.group.roles.length; x++) {
                let role = self.group.roles[x];
                if (role.uuid === domain.param) {
                  role.permission = domain.uuid;
                  self.exist.push(role);
                  break;
                }
              }
              break;
            case 'project_assign':
              self.project_assign.permission = domain.uuid;
              self.exist.push(self.project_assign);
              break;
            default:
              ignore = true;
              break;
          }

          if (ignore) {
            continue;
          }

          types.push(domain.type);
        }
      }

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

<style scoped>
.content {
  margin: 10px;
}
.content .select {
  width: 300px;
  height: 38px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
}
/*transform(缩放、旋转、平移)，显示的是最终效果，没有动画过程*/
/*transition是对元素本身的属性(比如：width、height)设置动画效果*/
.content .select:after {
  content: '';
  display: block;
  width: 7px;
  height: 7px;
  border-left: 2px #ccc solid;
  border-bottom: 2px #ccc solid;
  position: absolute;
  bottom: initial;
  top: 14px;
  right: 10px;
  transform: rotate(-45deg);
  /*transition: transform .3 ease-out,top .3s ease-out;*/
}
.content .select input {
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  width: 100%;
  color:#b0b0b0;
  padding-left: 5px;
  height: 100%;
}
/*设置下拉框收起时的高度过渡动画*/
.content .select .group {
  overflow-y: auto;
  width: 100%;
  top: 40px;
  left: 0;
  max-height: 0;
  margin: 0;
  padding: 0;
  background-color: #ff0000;
  transition: max-height .3s ease-out;
}
.content .select .group .domain-group-header { padding: 0 15px;line-height: 34px;background-color: #f0f0f0; }
.content .select .group .domain-item { padding: 0 15px;line-height: 34px;cursor: pointer;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; }
.content .select .domain-item:hover { background-color: rgba(51,143,229,0.1); }

/*下拉框展开时调用动画slide-down*/
/*transform-origin设置缩放下拉框的基点位置*/
.content .select.open .group {
  max-height: 170px;
  -webkit-animation: slide-down .3s ease-in;
  transition: max-height .3s ease-in;
  transform-origin: 50% 0;
}
/*设置展开时下拉箭头的旋转动画*/
.content .select.open:after {
  transform: rotate(-225deg);
  top: initial;
  bottom: 14px;
  transition: all .3s ease-in-out;
}
/*为下拉框展开时添加名称为slide-down的关键帧动画*/
@-webkit-keyframes slide-down{
  100%{transform: scale(1,1);}
}

div.perm-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #eef2f7;border-top: 1px solid #eef2f7;background-color: #f8f8f8;font-weight: bolder; }
div.perm-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #eef2f7; }
</style>
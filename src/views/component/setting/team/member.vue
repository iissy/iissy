<template>
  <div class="teamDepartmentTree">
    <div class="left-team-tree">
      <div style="font-size: 18px;margin-bottom: 20px;flex: 0 0 auto;padding: 20px 0 0 20px;">组织架构</div>
      <div style="padding-right: 10px;">
        <DepartmentTree :tree="departmentTree" :selected="departmentUUID" :team="team" @open="fn_show" v-if="departmentTree && departmentTree.opened"/>
      </div>
    </div>
    <div class="right-member-list">
      <div style="flex: 0 0 auto;">
        <div style="font-size: 18px;margin-bottom: 20px;">成员列表</div>
      </div>
      <div style="flex: 0 0 auto;margin-bottom: 20px;" class="flex-row">
        <div style="flex: 1;">
          <Search placeholder="输入用户名，邮箱查找成员" />
        </div>
        <AddDepartMember v-if="departmentUUID !== 'all'" :members="items" :curMember="departMembers" :department="departmentUUID"></AddDepartMember>
        <InviterUser></InviterUser>
      </div>
      <div class="member-left">
        <div class="memberList">
          <div class="ui-table">
            <b-table :fields="fields" :items="members" striped>
              <template v-slot:cell(name)="data">
                <User :user="data.item"/>
              </template>
              <template v-slot:cell(email)="data">
                <div style="min-width: 120px;">{{ data.value }}</div>
              </template>
              <template v-slot:cell(phone)="data">
                <div style="min-width: 120px;">{{ data.value }}</div>
              </template>
              <template v-slot:cell(verify_status)="data">
                <div style="min-width: 80px;">{{ data.value }}</div>
              </template>
              <template v-slot:cell(create_time)="data">
                <div style="min-width: 120px;">{{ data.value | formatDate }}</div>
              </template>
              <template v-slot:cell(access_time)="data">
                <div style="min-width: 120px;">{{ data.value | formatDate }}</div>
              </template>
              <template v-slot:cell(op)="data">
                <div style="cursor: pointer;box-shadow: none;outline: none;" v-b-toggle.member-sidebar @click="setValue(data.item)">
                  <b-icon icon="pencil"/>
                </div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
    <SmallControl ref="SmallControl" :modifyMember="modifyMember"/>
  </div>
</template>

<script>
import http from '@/scripts/http';
import Search from '../../common/form/search';
import InviterUser from './inviter_user';
import User from '@/views/component/common/block/user';
import DepartmentTree from "@/views/component/setting/team/department_tree";
import SmallControl from "@/views/component/setting/team/small_control";
import AddDepartMember from "@/views/component/setting/team/add_department_member";


export default {
  data: function () {
    return {
      team: '',
      departmentOption: [],
      departmentTree: {},
      fields: [
        { key: 'name', label: '用户名' },
        { key: 'email', label: '邮箱' },
        { key: 'phone', label: '电话' },
        { key: 'verify_status', label: '状态' },
        { key: 'create_time', label: '创建时间' },
        { key: 'access_time', label: '最后访问时间' },
        { key: 'op', label: '操作' }
      ],
      items: [],
      nameState: null,
      selectedDepartment: '',
      email: '',
      show: false,
      modifyMember: {},
      modify_title: '',
      departmentUUID: '',
      inside: false,
      departMembers: []
    };
  },
  components: {
    Search,
    InviterUser,
    User,
    DepartmentTree,
    SmallControl,
    AddDepartMember
  },
  watch: {
    '$route' () {
      let self = this;
      if (self.departmentUUID !== self.$route.params.department) {
        self.departmentUUID = self.$route.params.department;
        if (self.departmentUUID === 'all') {
          self.get_team_members();
          self.get_department_tree();
        } else {
          self.get_depart_members();
        }
      }
    }
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.departmentUUID = self.$route.params.department;
    if (self.departmentUUID !== 'all') {
      self.get_depart_members();
    }

    self.get_team_members();
    self.get_department_tree();
  },
  methods: {
    get_department_tree: function () {
      let self = this;
      http.get(self.urls.department_tree.format(self.team)).then(function (response) {
        self.set_opened_attr(response.data);
        self.find_department(response.data);
        response.data.opened = true;
        self.departmentTree = response.data;
      });
    },
    set_opened_attr: function (t) {
      let self = this;
      t.opened = false;
      if (t.children && t.children.length > 0) {
        for (let i=0;i<t.children.length;i++) {
          self.set_opened_attr(t.children[i]);
        }
      }
    },
    find_department: function (tree) {
      let self = this;
      if (tree.children && tree.children.length > 0) {
        for (let i=0;i<tree.children.length;i++) {
          let depart = tree.children[i];
          if (depart.uuid === self.departmentUUID) {
            tree.opened = true;
            self.inside = true;
          } else {
            self.find_department(depart);
          }

          if (self.inside) {
            break;
          }
        }
      }

      if (self.inside) {
        tree.opened = true;
      }
    },
    get_team_members: function() {
      let self = this;
      http.get(self.urls.team_member_list.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    },
    get_depart_members: function() {
      let self = this;
      http.get(self.urls.department_member_list.format(self.team, self.departmentUUID)).then(function (response) {
        self.departMembers = response.data;
      });
    },
    setValue: function (item) {
      let self = this;
      self.modifyMember = item;
    },
    fn_show: function () {
      let self = this;
      self.show = true;
      console.log(self.show);
    }
  },
  computed: {
    members: function () {
      let self = this;
      if (self.departmentUUID === 'all') {
        return self.items;
      } else {
        return self.departMembers;
      }
    }
  }
};
</script>

<style scoped>
.tree-item { cursor: pointer;line-height: 30px; }
.left-team-tree .active { background-color: #f3f3f3; }
.tree-item:hover { background-color: #F0FFFF; }
</style>
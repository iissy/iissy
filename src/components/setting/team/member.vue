<template>
  <div class="teamDepartmentTree">
    <div class="left-team-tree ibox">
      <div style="font-size: 18px;margin-bottom: 20px;flex: 0 0 auto;padding: 20px 0 0 20px;">组织架构</div>
      <div style="padding-right: 10px;">
        <DepartmentTree :tree="departmentTree" :selected="departmentUUID" :team="team" v-if="departmentTree && departmentTree.opened"/>
      </div>
    </div>
    <div class="right-member-list ibox">
      <div style="flex: 0 0 auto;">
        <div style="font-size: 18px;margin-bottom: 20px;">成员列表</div>
      </div>
      <div style="flex: 0 0 auto;margin-bottom: 20px;" class="flex-row">
        <div style="flex: 1;">
          <Search placeholder="输入用户名，邮箱查找成员" />
        </div>
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
                  <b-icon icon="pencil-square"/>
                </div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
    <MemberSideBar :modifyMember="modifyMember"/>
  </div>
</template>

<script>
import http from '../../../utils/http';
import Search from '../../common/form/search';
import InviterUser from './inviter_user';
import User from '../../common/control/user';
import DepartmentTree from "./department_tree";
import MemberSideBar from "./member_sidebar";

export default {
  data: function () {
    return {
      team: '',
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
      members: [],
      show: false,
      modifyMember: {},
      modify_title: '',
      departMembers: [],
      departmentUUID: 'all'
    };
  },
  components: {
    Search,
    InviterUser,
    User,
    DepartmentTree,
    MemberSideBar
  },
  watch: {
    '$route' () {
      let self = this;
      self.get_department_tree();
      self.get_team_members();
    }
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.get_department_tree();
    self.get_team_members();
  },
  methods: {
    get_department_tree: function () {
      let self = this;
      http.get(self.urls.team_department_tree.format(self.team)).then(function (response) {
        response.data.opened = true;
        self.departmentTree = response.data;
      });
    },
    get_team_members: function() {
      let self = this;
      http.get(self.urls.team_member_list.format(self.team)).then(function (response) {
        self.members = response.data;
      });
    },
    setValue: function (item) {
      let self = this;
      self.modifyMember = item;
    }
  }
};
</script>
<template>
  <div class="teamDepartmentTree">
    <div class="left-team-tree">
      <div style="font-size: 18px;margin-bottom: 20px;flex: 0 0 auto;padding: 20px 0 0 20px;">组织架构</div>
      <div style="padding-right: 10px;">
        <DepartmentTree :tree="departmentTree" :selected="selected" :team="team"/>
      </div>
    </div>
    <div class="right-member-list">
      <div style="flex: 0 0 auto;">
        <div style="font-size: 18px;margin-bottom: 20px;">成员列表</div>
      </div>
      <div style="flex: 0 0 auto;margin-bottom: 20px;" class="flex-row">
        <div style="flex: 0 0 auto;">
          <Search placeholder="输入用户名，邮箱查找成员" />
        </div>
        <InviterUser></InviterUser>
      </div>
      <div class="member-left">
        <div class="memberList">
          <div class="ui-table">
            <b-table :fields="fields" :items="items" striped>
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
                <div style="cursor: pointer;" @click="onOpen(data.item)">
                  <b-icon icon="pencil"/>
                </div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>

    <b-modal size="lg" id="modal-prevent-closing" ref="modal" title="添加新部门" :no-close-on-backdrop="true" cancel-title="取消" ok-title="确定" :centered="true" @show="resetModal" @hidden="resetModal" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div style="height: 40px;margin-bottom: 10px;border-top: 1px solid #e8e8e8;border-bottom: 1px solid #e8e8e8;border-left: 3px solid #f0ad4e;border-right: 1px solid #e8e8e8;">
          <div style="flex: 1;align-items: center;height: 100%;display: flex;margin-left: 20px;" >
            <div style="flex: 0 0 auto;">
              可以将新的部门添加到任何的一个部门下面作为子部门，或者添加到团队下面作为一级部门。
            </div>
          </div>
        </div>
        <div style="flex: 1;" class="flex-row">
          <div style="flex: 1;">
            <b-form-group label="部门名称" label-for="name-input">
              <b-form-input id="name-input" v-model="name" required></b-form-input>
            </b-form-group>
          </div>
          <div style="flex: 0 0 50px;"></div>
          <div style="flex: 1;">
            <b-form-group label="选择所属部门" label-for="dep-select">
              <b-form-select id="dep-select" v-model="departmentOption">
                <b-form-select-option value="">Soul</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </div>
        </div>
      </form>
    </b-modal>

    <b-sidebar v-model="show_sidebar" header-class="modify" id="sidebar" :title="modify_title" width="600px" backdrop right shadow>
      <div class="px-3 py-2">
        <b-input v-model="modifyMember.name"/>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import http from '@/scripts/http';
import Search from '../../common/form/search';
import InviterUser from './inviter_user';
import User from '@/views/component/common/block/user';
import DepartmentTree from "@/views/component/setting/team/department_tree";

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
      name: '',
      nameState: null,
      selectedDepartment: '',
      email: '',
      show_sidebar: false,
      modifyMember: {},
      modify_title: '',
      selected: ''
    };
  },
  components: {
    Search,
    InviterUser,
    User,
    DepartmentTree
  },
  watch: {
    '$route' () {
      let self = this;
      if (self.selected !== self.$route.params.department) {
        self.selected = self.$route.params.department;
        self.get_department_tree();
      }
    }
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.selected = self.$route.params.department;
    self.get_department_tree();
    self.get_team_members();
  },
  methods: {
    get_department_tree: function () {
      let self = this;
      http.get(self.urls.department_tree.format(self.team)).then(function (response) {
        self.set_opened_attr(response.data);
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
    get_team_members: function() {
      let self = this;
      http.get(self.urls.team_member_list.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      this.add_department();
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    add_department: function () {
      let self = this;
      self.team = self.$route.params.team;
      let parentUUID = self.$route.params.department;
      let data = { name: self.name, parent_uuid: parentUUID }
      http.post(self.urls.department_add.format(self.team), data).then(function (response) {
        self.items = response.data;
        self.get_department_tree();
      });
    },
    onOpen: function (item) {
      let self = this;
      self.show_sidebar = true;
      self.modifyMember = item;
      self.modify_title = '{0} | 编辑状态'.format(item.name)
    }
  }
};
</script>

<style scoped>
.tree-item { cursor: pointer;line-height: 30px; }
.left-team-tree .active { background-color: #f3f3f3; }
.tree-item:hover { background-color: #F0FFFF; }
</style>
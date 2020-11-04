<template>
  <div class="teamDepartmentTree">
    <div class="left-team-tree">
      <div style="font-size: 18px;margin-bottom: 20px;flex: 0 0 auto;padding: 20px 0 0 20px;">组织架构</div>
      <div style="flex: 1;padding: 0 0 0 5px;">
        <div class="tree-item flex-row" :class="{active: (selectedDepartment === '')}" @click="select_department('')" style="padding-left: 15px;">
          <div style="flex: 0 0 auto;">
            <svg t="1602608704285" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44493" width="8" height="8"><path d="M219.904 895.552l419.136-383.232L214.4 124.096a70.144 70.144 0 0 1-22.4-50.816c0-40.384 35.84-73.152 80.064-73.152 21.568 0 41.088 7.808 55.488 20.48l480.064 438.848h-0.064c15.104 13.312 24.448 32.064 24.448 52.672v0.256c0 20.8-9.344 39.424-24.448 52.608h0.064l-480.064 438.976-0.192-0.192a83.648 83.648 0 0 1-55.296 20.352c-44.224 0-80.064-32.704-80.064-73.152 0-22.144 10.88-41.984 27.904-55.424z" p-id="44494" fill="#8a8a8a"></path></svg>
          </div>
          <div style="flex: 0 0 auto;margin-left: 5px;">
            <svg t="1602580577253" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37322" width="20" height="20"><path d="M455.224889 171.406222c12.572444 33.223111 48.014222 56.092444 84.935111 57.571556H910.222222c31.004444 0 56.888889 26.567111 56.888889 57.628444v515.470222a58.026667 58.026667 0 0 1-56.888889 57.628445H114.062222c-31.061333 0-56.888889-26.624-56.888889-57.628445V171.406222a58.026667 58.026667 0 0 1 56.888889-57.628444h284.330667m0 0.739555c27.306667 1.479111 49.493333 34.702222 56.888889 57.628445" fill="#cdcdcd" p-id="37323"></path></svg>
          </div>
          <div style="flex: 1;margin-left: 5px;">{{departmentTree.name}}</div>
        </div>
        <div v-for="c in departmentTree.children" v-bind:key="c.id">
          <div class="tree-item flex-row" @click="select_department(c.uuid)" :class="{active: (selectedDepartment === c.uuid)}" style="padding-left: 30px;">
            <div style="flex: 0 0 auto;">
              <svg t="1602608704285" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44493" width="8" height="8"><path d="M219.904 895.552l419.136-383.232L214.4 124.096a70.144 70.144 0 0 1-22.4-50.816c0-40.384 35.84-73.152 80.064-73.152 21.568 0 41.088 7.808 55.488 20.48l480.064 438.848h-0.064c15.104 13.312 24.448 32.064 24.448 52.672v0.256c0 20.8-9.344 39.424-24.448 52.608h0.064l-480.064 438.976-0.192-0.192a83.648 83.648 0 0 1-55.296 20.352c-44.224 0-80.064-32.704-80.064-73.152 0-22.144 10.88-41.984 27.904-55.424z" p-id="44494" fill="#8a8a8a"></path></svg>
            </div>
            <div style="flex: 0 0 auto;margin-left: 5px;">
              <svg t="1602580577253" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37322" width="20" height="20"><path d="M455.224889 171.406222c12.572444 33.223111 48.014222 56.092444 84.935111 57.571556H910.222222c31.004444 0 56.888889 26.567111 56.888889 57.628444v515.470222a58.026667 58.026667 0 0 1-56.888889 57.628445H114.062222c-31.061333 0-56.888889-26.624-56.888889-57.628445V171.406222a58.026667 58.026667 0 0 1 56.888889-57.628444h284.330667m0 0.739555c27.306667 1.479111 49.493333 34.702222 56.888889 57.628445" fill="#cdcdcd" p-id="37323"></path></svg>
            </div>
            <div style="flex: 1;margin-left: 5px;">{{c.name}}</div>
          </div>
        </div>
      </div>
      <div style="flex: 0 0 30px;border-top: 1px solid #dee2e6;justify-content: center;" title="添加部门" class="flex-column align-items-center">
        <div style="display: flex;flex: 0 0 auto;outline: none;" v-b-modal.modal-prevent-closing>
          <svg t="1602509602356" class="icon" viewBox="0 0 1027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34147" width="20" height="20"><path d="M984.191664 461.608438h-428.184484v-415.402859c0-19.17244-19.17244-44.735692-44.735693-44.735692-25.563253 0-44.735692 25.563253-44.735692 51.126506v415.402858H51.132936c-25.563253-6.390813-51.126506 19.17244-51.126505 44.735693s25.563253 44.735692 44.735692 44.735692h415.402859v415.402858c6.390813 25.563253 25.563253 51.126506 51.126505 51.126506s44.735692-25.563253 44.735693-44.735692v-421.793672h421.793671c25.563253 0 44.735692-25.563253 44.735693-44.735692s-12.781626-51.126506-38.34488-51.126506z" fill="#515151" p-id="34148"></path></svg>
        </div>
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
                <b-form-select-option value="">爱斯园</b-form-select-option>
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
      modify_title: ''
    };
  },
  components: {
    Search,
    InviterUser,
    User
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
      http.get(self.urls.department_tree.format(self.team)).then(function (response) {
        self.departmentTree = response.data;
      });
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
      let data = { name: self.name, parent_uuid: self.departmentOption }
      http.post(self.urls.department_add.format(self.team), data).then(function (response) {
        self.items = response.data;
        self.get_department_tree();
      });
    },
    select_department: function (uuid) {
      this.selectedDepartment = uuid;
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
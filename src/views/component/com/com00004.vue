<template>
  <div class="app-main-content flex-column">
    <div style="flex: 0 0 auto;font-size: 18px;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;">成员</div>
    <div class="flex-row align-items-center" style="flex: 0 0 auto;margin: 10px;">
      <div style="flex: 0 0 300px;">
        <Search placeholder="搜索成员" />
      </div>
      <div style="flex: 1;text-align: right;">
        <InviterUser></InviterUser>
      </div>
    </div>
    <div class="flex-row members" style="flex:1;border-top: 1px solid #e8e8e8;">
      <div style="flex: 0 0 200px;border-right: 1px solid #e8e8e8;">
        <div class="role active">
          项目成员
        </div>
      </div>
      <div style="flex: 1;margin: -1px -1px 0 -1px;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">用户名</div>
            <div class="th">邮箱</div>
            <div class="th">角色</div>
            <div class="th" style="flex: 0 0 80px;">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td">
              <div class="flex-row">
                <div style="flex: 0 0 auto;display: flex;align-items: center;">
                  <b-img left src="https://picsum.photos/25/25/?image=25" rounded="circle" alt="Left image"></b-img>
                </div>
                <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;">
                  <b-link href="#foo">{{ item.name }}</b-link>
                </div>
              </div>
            </div>
            <div class="td">{{ item.email }}</div>
            <div class="td">无</div>
            <div class="td" style="flex: 0 0 80px;">
              <b-icon icon="x" scale="2"></b-icon>
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
            </div>
          </div>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/util/date';
import http from '@/util/http';
import Search from '@/views/component/common/form/search';
import InviterUser from '@/views/component/setting/team/inviter_user';

export default {
  data: function () {
    return {
      team: '',
      project: '',
      items: [],
      name: '',
      nameState: null,
      selectedDepartment: '',
      email: ''
    };
  },
  components: {
    Search,
    InviterUser
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.get_role_members();
  },
  filters: {
    formatDate(time) {
      return formatDate(time);
    }
  },
  methods: {
    get_department_tree: function () {
      let self = this;
      http.get(self.urls.department_tree.format(self.team, self.project)).then(function (response) {
        self.departmentTree = response.data;
      });
    },
    get_role_members: function() {
      let self = this;
      http.post(self.urls.project_role_members.format(self.team, self.project)).then(function (response) {
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
    // add_department: function () {
    //   let self = this;
    //   self.team = self.$route.params.team;
    //   let data = { name: self.name, parent_uuid: self.departmentOption }
    //   http.post(self.urls.department_add.format(self.team), data).then(function (response) {
    //     self.items = response.data;
    //     self.get_department_tree();
    //   });
    // },
    // select_department: function (uuid) {
    //   this.selectedDepartment = uuid;
    // }
  }
};
</script>

<style scoped>
.members .role { border-bottom: 1px solid #e8e8e8;line-height: 48px;padding-left: 20px; }
.members .active { border-left: 3px solid #17C4BB;padding-left: 17px; }
</style>
<template>
  <div>
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
        </div>
      </form>
    </b-modal>
    <b-sidebar v-model="member_sidebar_show" header-class="modify" id="member-sidebar" title="编辑状态" width="500px" backdrop right shadow>
      <div class="px-3 py-2" style="border-top: 1px solid #e8e8e8;">
        <div style="margin-top: 20px;">
          <b-form-group label-cols="4" label-cols-lg="2" label="名字" label-for="input-sm">
            <b-form-input id="input-sm" v-model="memberName"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label-cols-lg="2" label="E-mail:" label-for="input-default">
            <b-form-input id="input-default" v-model="memberEmail"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label-cols-lg="2" label="状态">
            <b-form-select :options="options" v-model="verify_status"></b-form-select>
          </b-form-group>

          <b-form-group label-cols="4" label-cols-lg="2">
            <UpdateButton title="更新信息" @submit="save"></UpdateButton>
          </b-form-group>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import http from "@/scripts/http";
import UpdateButton from '../../button/common';

export default {
  data() {
    return {
      name: '',
      member_show: false,
      memberUUID: '',
      memberName: '',
      memberEmail: '',
      verify_status: '',
      member_sidebar_show: false,
      options: [
        { value: 1, text: '通过' },
        { value: 2, text: '待通过' }
      ]
    }
  },
  props: {
    modifyMember: Object
  },
  watch: {
    modifyMember(newValue) {
      let self = this;
      self.memberUUID = newValue.uuid;
      self.memberName = newValue.name;
      self.memberEmail = newValue.email;
      self.verify_status = newValue.verify_status;
    }
  },
  methods: {
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
      if (parentUUID === 'all') {
        parentUUID = '';
      }
      let data = { name: self.name, parent_uuid: parentUUID }
      http.post(self.urls.department_add.format(self.team), data).then(function (response) {
        self.items = response.data;
        self.$parent.get_department_tree();
      });
    },
    save: function () {
      let self = this;
      self.member_sidebar_show = false;
      let departmentUUID = self.$route.params.department;
      if (departmentUUID === 'all') {
        self.$parent.get_team_members();
      } else {
        self.$parent.get_depart_members();
      }
    }
  },
  components: {
    UpdateButton
  }
}
</script>

<style scoped>

</style>
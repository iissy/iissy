<template>
  <div>
    <b-sidebar v-model="member_sidebar_show" header-class="modify" id="member-sidebar" title="编辑状态" width="500px" backdrop right shadow>
      <div class="px-3 py-2 flex-column" style="border-top: 1px solid #e8e8e8;height: 100%;">
        <div style="margin-top: 20px;flex: 1;">
          <b-form-group label-cols="4" label-cols-lg="2" label="名字" label-for="input-sm">
            <b-form-input id="input-sm" v-model="memberName"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label-cols-lg="2" label="E-mail" label-for="input-default">
            <b-form-input id="input-default" v-model="memberEmail"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label-cols-lg="2" label="状态">
            <b-form-select :options="options" v-model="verify_status"></b-form-select>
          </b-form-group>
        </div>
        <div style="flex: 0 0 auto;border-top: 1px solid #e8e8e8;padding: 10px 0 0 0;" class="flex-row">
          <div style="flex: 1;">
            <b-button @click="save" variant="success">更新信息</b-button>
          </div>
          <div style="flex: 0 0 auto;">
            <b-button @click="del" variant="danger">删除成员</b-button>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import http from "../../../utils/http";

export default {
  data() {
    return {
      name: '',
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
    // checkFormValidity() {
    //   const valid = this.$refs.form.checkValidity()
    //   this.nameState = valid
    //   return valid
    // },
    // resetModal() {
    //   this.name = ''
    //   this.nameState = null
    // },
    // handleOk(bvModalEvt) {
    //   // Prevent modal from closing
    //   bvModalEvt.preventDefault()
    //   // Trigger submit handler
    //   this.handleSubmit()
    // },
    // handleSubmit() {
    //   // Exit when the form isn't valid
    //   if (!this.checkFormValidity()) {
    //     return
    //   }
    //   this.add_department();
    //   this.$nextTick(() => {
    //     this.$bvModal.hide('modal-prevent-closing')
    //   })
    // },
    // add_department: function () {
    //   let self = this;
    //   self.team = self.$route.params.team;
    //   let parentUUID = self.$route.params.department;
    //   if (parentUUID === 'all') {
    //     parentUUID = '';
    //   }
    //   let data = { name: self.name, parent_uuid: parentUUID }
    //   http.post(self.urls.department_add.format(self.team), data).then(function (response) {
    //     self.items = response.data;
    //     self.$parent.get_department_tree();
    //   });
    // },
    save: function () {
      let self = this;
      self.member_sidebar_show = false;
      let departmentUUID = self.$route.params.department;
      if (departmentUUID === 'all') {
        self.$parent.get_team_members();
      } else {
        self.$parent.get_depart_members();
      }
    },
    del: function () {
      let self = this;
      this.$bvModal.msgBoxConfirm('仅仅将成员从部门删除，是否确定？', {
        title: '删除成员',
        okVariant: 'danger',
        okTitle: '确定',
        cancelTitle: '取消',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          http.post(self.urls.team_member_delete.format(self.team), { uuid: self.selected }).then(function (response) {
            if (response.data.code === 200) {
              self.member_sidebar_show = false;
              self.$parent.get_department_tree();
              self.$parent.get_team_members();
            }
          }).catch(function (err) {
            self.bus.$emit("alertDanger", err.response.data.errcode);
          });
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>
<template>
  <div style="margin-left: 10px;flex: 0 0 auto;text-align: right;">
    <AddProjectButton title="邀请新成员" v-b-modal.modal-inviter-user></AddProjectButton>
    <b-modal size="lg" id="modal-inviter-user" ref="modalUser" title="邀请新用户" no-close-on-backdrop cancel-title="取消" ok-title="确定" :centered="true" @show="resetModal" @hidden="resetModal" @ok="inviterUser">
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
            <b-form-group label="邮箱" label-for="email">
              <b-form-input id="email" v-model="email" required></b-form-input>
            </b-form-group>
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import AddProjectButton from '../../button/common';
import http from "../../../../utils/http";

export default {
  data: function () {
    return {
      email: '',
      emailState: null
    };
  },
  components: {
    AddProjectButton
  },
  created: function () {
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.email = ''
      this.emailState = null
    },
    inviterUser(bvModalEvt) {
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
      this.add_user();
      this.$nextTick(() => {
        this.$bvModal.hide('modal-inviter-user')
      })
    },
    add_user: function () {
      let self = this;
      self.team = self.$route.params.team;
      let data = { email: self.email }
      http.post(self.urls.team_member_add.format(self.team), data).then(function (response) {
        if(response.data.status) {
          self.$parent.get_team_members();
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
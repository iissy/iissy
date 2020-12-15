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

    <b-sidebar header-class="modify" id="member-sidebar" :title="title" width="600px" backdrop right shadow>
      <div class="px-3 py-2">
        <b-input v-model="memberName"/>
      </div>
    </b-sidebar>


  </div>
</template>

<script>
import http from "@/scripts/http";

export default {
  data() {
    return {
      name: '',
      member_show: false,
      memberName: ''
    }
  },
  props: {
    title: String,
    modifyMember: Object
  },
  mounted() {
    let self = this;
    self.memberName = self.modifyMember.name;
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
    }
  }
}
</script>

<style scoped>

</style>
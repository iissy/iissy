<template>
  <b-modal size="lg" title="新建页面组" id="modal-wiki-add" no-close-on-backdrop cancel-title="取消" ok-title="确定" :centered="true" @show="resetModal" @hidden="resetModal" @ok="add">
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <div style="margin-top: 6px;">
        <b-form-group
            class="required"
            label="页面组名称"
            label-for="input-title">
          <b-form-input id="input-title" v-model="title" :state="titleState" required/>
        </b-form-group>
      </div>
      <div style="margin-top: 20px;">
        <b-form-group
            label="页面组描述"
            label-for="textarea-description">
          <b-form-textarea id="textarea-description" v-model="description"/>
        </b-form-group>
      </div>
    </form>
  </b-modal>
</template>

<script>
import http from "@/scripts/http";

export default {
  data() {
    return {
      title: '',
      description: '',
      titleState: null
    }
  },
  created () {
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.titleState = valid
      console.log(valid);
      return valid
    },
    resetModal() {
      this.title = '';
      this.description = '';
      this.titleState = null
    },
    add(bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return
      }
      this.submit();
      this.$nextTick(() => {
        this.$bvModal.hide('modal-wiki-add')
      })
    },
    submit: function () {
      let self = this;
      self.team = self.$route.params.team;
      let data = { title: self.title, description: self.description }
      http.post(self.urls.space_add.format(self.team), data).then(function (response) {
        if(response.data.status) {
          self.$parent.space_list();
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
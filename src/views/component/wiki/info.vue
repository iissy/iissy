<template>
  <div style="width: 960px;flex: 1;margin: 20px 0;" class="ibox">
    <div style="flex: 0 0 auto;font-size: 18px;" class="b-line padding20">页面组管理</div>
    <div style="padding: 20px 30px 0 30px;">
      <div style="margin-top: 6px;width: 300px;">
        <b-form-group
            class="required"
            label="页面组名称"
            label-for="input-title">
          <b-form-input id="input-title" v-model="title" required @change="change" @keydown="change"/>
        </b-form-group>
      </div>
      <div style="margin-top: 20px;">
        <b-form-group
            label="页面组描述"
            label-for="textarea-description">
          <b-form-textarea id="textarea-description" v-model="description" @change="change" @keydown="change"/>
        </b-form-group>
      </div>
      <div class="flex-row" style="margin-top: 20px;">
        <div style="flex: 0 0 auto;">
          <SaveButton :disabled="disabled" title="更新信息" @submit="update"></SaveButton>
        </div>
        <div style="flex: 1;"></div>
        <div style="flex: 0 0 auto;">
          <b-button variant="danger">删除页面组</b-button>
        </div>
      </div>
    </div>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import Alert from '../common/block/alert';
import SaveButton from '../../../components/button/common';
import http from "../../../utils/http";

export default {
  data() {
    return {
      team: '',
      space: '',
      title: '',
      description: '',
      disabled: true
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.space_get();
  },
  methods: {
    space_get: function () {
      let self = this;
      http.get(self.urls.space_get.format(self.team, self.space)).then(function (response) {
        self.title = response.data.title;
        self.description = response.data.description;
      });
    },
    change: function () {
      let self = this;
      self.disabled = false;
    },
    update: function () {
      let self = this;
      http.post(self.urls.space_update.format(self.team, self.space), {title: self.title, description: self.description}).then(function (response) {
        if (response.data.status === true) {
          self.$refs.alert.success('更新成功');
          self.disabled = true;
        } else {
          self.$refs.alert.danger('更新失败');
        }
      });
    }
  },
  components: {
    SaveButton,
    Alert
  }
}
</script>

<style scoped>

</style>
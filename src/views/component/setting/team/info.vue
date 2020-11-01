<template>
  <div style="max-width:1200px;flex: 1 1 auto;padding: 20px;height: 100%;" class="g-container flex-column">
    <div style="font-size: 18px;">团队信息</div>
    <b-container style="margin-top: 40px;" fluid>
      <b-row>
        <b-col sm="1">
          <label>名字</label>
        </b-col>
        <b-col sm="5">
          <b-form-input @change="name_change" @keydown="name_change" v-model="name"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid style="margin-top: 20px;">
      <b-row>
        <b-col sm="1">
          <label>头像</label>
        </b-col>
        <b-col sm="6">
          <div>
            <div class="avatar-upload">
              <img src="/images/logo.png" style="max-height: 100px;border: 1px solid #e7ecf1;">
              <input type="file">
            </div>
            <input type="hidden" v-model="avatar" name="avatar" class="form-control" placeholder="头像">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="1"></b-col>
        <b-col style="color: #909090;">*建议上传长度为 200px，高度为 52px，背景透明的 PNG 格式图片。</b-col>
      </b-row>
    </b-container>
    <b-container fluid style="margin-top: 20px;">
      <b-row>
        <b-col sm="1"></b-col>
        <b-col>
          <AddProjectButton :disabled="disabled" title="更新信息" @submit="update"></AddProjectButton>
        </b-col>
      </b-row>
    </b-container>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import AddProjectButton from '../../button/common';
import Alert from '@/views/component/common/block/alert';

export default {
  data: function () {
    return {
      name: '',
      avatar: '',
      disabled: true
    };
  },
  methods: {
    name_change: function () {
      let self = this;
      self.disabled = false;
    },
    update: function () {
      let self = this;
      self.$refs.alert.success();
    }
  },
  components: {
    AddProjectButton,
    Alert
  }
}
</script>

<style scoped>
.avatar-upload {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.avatar-upload input {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  -ms-filter: 'alpha(opacity=0)';
  height: 100%;
  width: 100%;
}
.avatar-upload img {
  height: 100%;
  cursor: pointer;
}
</style>
<template>
  <div style="max-width:1200px;background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
    <div style="font-size: 18px;">团队信息</div>
    <b-container style="margin-top: 40px;" fluid>
      <b-row>
        <b-col sm="1">
          <label>名字</label>
        </b-col>
        <b-col sm="6">
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
              <img src="/logo.png" style="max-height: 100px;border: 1px solid #e7ecf1;">
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
          <b-button :disabled="disabled" variant="success">更新信息</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
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
    }
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
<template>
  <div class="form-horizontal mg0 ibox" style="max-width:1200px;background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;">
    <div class="form-body" style="padding:20px;">
      <div class="form-group">
        <label class="col-md-1 control-label">头像</label>
        <div class="col-md-2">
          <div>
            <div class="avatar-upload">
              <img src="/favicon.ico" style="max-height: 100px;">
              <input type="file">
            </div>
            <input type="hidden" v-model="avatar" name="avatar" class="form-control" placeholder="头像">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-1 control-label">名字</label>
        <div class="col-md-5">
          <input type="text" v-model="user.name" name="name" class="form-control" placeholder="名字">
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-1 control-label">邮箱</label>
        <div class="col-md-5">
          <input type="text" v-model="user.email" name="email" class="form-control" placeholder="邮箱">
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-1 control-label">电话</label>
        <div class="col-md-5">
          <input type="text" v-model="user.phone" name="phone" class="form-control" placeholder="电话">
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-1 control-label"></label>
        <div class="col-md-5">
          <UpdateButton title="更新信息" @submit="update" :disabled="disabled"></UpdateButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateButton from '../../components/common/button/universal';
import {getUser} from "@/filters";
import http from "@/utils/http";

export default {
  data: function () {
    return {
      avatar: '',
      name: '',
      email: '',
      phone: '',
      disabled: false,
      user: {}
    };
  },
  components: {
    UpdateButton
  },
  created: function () {
    let self = this;
    self.get_user();
  },
  methods: {
    update: function () {
      let self = this;
      let data = { user_name: self.user.name, email: self.user.email, phone: self.user.phone };
      http.post(self.urls.user_update.format(getUser()), data).then(function (response) {
        if (response.data.code === 200) {
          self.disabled = true;
        }
      }).catch(function (err) {
        self.bus.$emit("alertDanger", err.response.data.errcode);
      });
    },
    get_user: function() {
      let self = this;
      let url = self.urls.user_get.format(getUser());
      http.get(url).then(function (response) {
        self.user = response.data;
      });
    }
  }
};
</script>

<style scoped>
.form-horizontal .control-label { text-align: left; }
.avatar-upload {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%!important;
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
}
</style>
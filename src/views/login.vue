<template>
  <div class="hello">
    <div>
      <div style="font-size: 18px;text-align: center;font-weight: bolder;">第一步：在钉钉开放平台-创建扫码登录应用授权</div>
      <div>
        授权页面LOGO地址：http://www.iissy.com/favicon.ico
      </div>
      <div>
        回调域名: http://www.iissy.com/
      </div>
      <div>
        <img src="/add.jpg" width="500">
      </div>
    </div>
    <div style="font-size: 18px;margin-top: 50px;text-align: center;font-weight: bolder;">第二步：提交扫码登录应用授权到平台</div>
    <div>
      <div class="form-horizontal mg0" role="form">
        <div class="form-body" style="padding:0 0 0 0;">
          <div class="form-group">
            <label class="col-md-4 control-label">name</label>
            <div class="col-md-4">
              <input type="text" v-model="name" name="name" class="form-control" placeholder="name">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">appId</label>
            <div class="col-md-4">
              <input type="text" v-model="app_id" name="app_id" class="form-control" placeholder="appId">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">appSecret</label>
            <div class="col-md-4">
              <input type="text" v-model="app_secret" name="app_secret" class="form-control" placeholder="appSecret">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label"></label>
            <div class="col-md-4">
              <button style="color:#ffffff;padding:5px 30px 5px 30px;background-color: #36c6d3;font-size:16px;border-radius:10px;border: 1px solid #2bb8c4;" class="right" v-on:click="add">添  加</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="font-size: 18px;margin-top: 50px;text-align: center;font-weight: bolder;">第三步：进入扫码登录界面</div>
    <div style="margin: 0;">
      <div class="form-horizontal mg0" role="form">
        <div class="form-body" style="padding:0 0 0 0;">
          <div class="form-group">
            <label class="col-md-4 control-label">appId</label>
            <div class="col-md-3">
              <input type="text" v-model="app_id" name="app_id_login" class="form-control" placeholder="appId">
            </div>
            <div class="col-md-2">
              <a :href="url" target="_blank" style="color:#ffffff;padding:5px 30px 5px 30px;background-color: #36c6d3;font-size:16px;border-radius:10px;border: 1px solid #2bb8c4;" class="right">生成连接并打开登陆页面</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/httper";

export default {
  data: function () {
    return {
      name: '',
      app_id: '',
      app_secret: '',
      app_id_login: ''
    };
  },
  methods: {
    add: function() {
      let self = this;
      http.post('/api/ding/login_certificate/add', {
        app_id: self.app_id,
        app_secret: self.app_secret,
        name: self.name,
        url: self.Url
      }).then(function (response) {
        if (response.data.status == true) {
          alert("成功")
        }
      });
    }
  },
  computed: {
    url: {
      get: function() {
        return 'https://oapi.dingtalk.com/connect/qrconnect?appid=' + this.app_id + '&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=http://www.iissy.com/api/ding/get_user_info/' + this.app_id
      }
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

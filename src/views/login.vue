<template>
  <div style="flex: 1 1 auto;flex-direction: row;margin: 0 auto 0 auto;width: 100%;max-width: 1200px;">
    <div id="change" class="hello">
      <div class="tab-tilte">
        <div style="flex:1;text-align: center;cursor: pointer;font-weight: 600;padding: 10px;" v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</div>
      </div>
      <div class="tab-content">
        <div v-show="cur==0" style="display: flex;flex-direction: column;height: 100%;flex: 1 0 auto;-webkit-flex-direction: column;">
          <div style="color:#666666;font-weight: 300;padding: 20px;width: 100%;margin-top: 20px;background-color: #ffffff;flex: 0 0 auto;">
            <div>在钉钉开放平台 -> 创建扫码登录应用授权</div>
            <div style="font-style: italic;">
              授权页面LOGO地址：https://www.iissy.com/favicon.ico
            </div>
            <div style="font-style: italic;">
              回调域名: https://www.iissy.com/
            </div>
            <div style="font-style: italic;color: #d71b29;">
              如果以前已经完成了第一步，第二步，可以直接到第三步生成扫码连接登陆
            </div>
          </div>
          <div style="flex: 0;background-color: #ffffff;margin-top: 20px;">
            <img style="flex: 1 0 auto;" src="/add.jpg" width="90%">
          </div>
        </div>
        <div v-show="cur==1" style="display: flex;flex-direction: column;height: 100%;">
          <div style="color:#666666;font-weight: 300;margin-top: 20px;width: 100%;background-color: #ffffff;padding: 20px;flex: 0 1 auto;">
            <div>提交扫码登录应用授权到平台</div>
            <div style="font-style: italic;">
              将第一步创建的登陆凭证提交到平台
            </div>
            <div style="font-style: italic;color: #d71b29;">
              如果以前已经完成了第一步，第二步，可以直接到第三步生成扫码连接登陆
            </div>
          </div>
          <div class="form-horizontal mg0" role="form" style="margin-top: 20px;background-color: #ffffff;flex: 1 1 auto;">
            <div class="form-body" style="padding:20px;">
              <div class="form-group">
                <label class="col-md-4 control-label">name</label>
                <div class="col-md-6">
                  <input type="text" v-model="name" name="name" class="form-control" placeholder="name">
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-4 control-label">appId</label>
                <div class="col-md-6">
                  <input type="text" v-model="app_id" name="app_id" class="form-control" placeholder="appId">
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-4 control-label">appSecret</label>
                <div class="col-md-6">
                  <input type="text" v-model="app_secret" name="app_secret" class="form-control" placeholder="appSecret">
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-6">
                  <button style="color:#ffffff;padding:5px 30px 5px 30px;background-color: #36c6d3;font-size:16px;width: 100%;border: 1px solid #2bb8c4;" v-on:click="add">添  加</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="cur==2" style="display: flex;flex-direction: column;height: 100%;">
          <div style="color:#666666;font-weight: 300;margin-top: 20px;width: 100%;background-color: #ffffff;padding: 20px;">
            <div>进入扫码登录界面</div>
          </div>
          <div class="form-horizontal mg0" role="form" style="margin-top: 20px;background-color: #ffffff;flex: 1 1 auto;">
            <div class="form-body" style="padding:20px;text-align: center;">
              <div class="form-group">
                <label class="col-md-4 control-label">appId</label>
                <div class="col-md-6">
                  <input type="text" v-model="app_id" name="app_id_login" class="form-control" placeholder="appId" v-on:change="change" @paste="change">
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-6">
                  <button style="color:#ffffff;padding:5px 30px 5px 30px;background-color: #36c6d3;font-size:16px;width: 100%;border: 1px solid #2bb8c4;" v-on:click="generate">生成连接</button>
                </div>
              </div>
              <div v-show="generated" style="margin: 50px 150px 0 150px;border: 1px solid #dddddd;padding: 20px;text-align: center;">
                <a :href="url" target="_blank">点击打开二维码扫码登陆</a>
              </div>
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
      app_id_login: '',
      tabTitle: ['第一步', '第二步', '第三步'],
      cur: 0,
      generated: false,
      rollback: 'https://www.iissy.com/api/ding/get_user_info/',
      dingUrl: 'https://oapi.dingtalk.com/connect/qrconnect?appid='
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
        } else {
          alert(response.data.msg)
        }
      });
    },
    generate: function () {
      this.generated = true;
    },
    change: function () {
      this.generated = false;
    }
  },
  computed: {
    url: {
      get: function() {
        return this.dingUrl + this.app_id + '&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=' + this.rollback + this.app_id;
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
/*h3 {*/
/*  margin: 40px 0 0;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
/*ul li {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  list-style: none;*/
/*}*/
#change {
  /*height: 100%;*/
  display: flex;
  flex-direction: column;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  /*display: -webkit-flex;*/
  -webkit-flex-direction: column;
  padding: 0 10px 10px 10px;
}
#change div {
  text-align: left;
}
.tab-tilte{
  width: 100%;
  border-bottom: 1px solid #ccc;display: flex;
  background-color: #ffffff;padding: 0 50px 0 50px;
  flex: 0 0 auto;
  flex-direction: row;
}

.tab-tilte .active{
  border-bottom: 2px solid #1890ff;
  /*background-color: #09f;*/
  color: #1890ff;
}
.tab-content {
  /*background-color: #ffffff;*/
  /*height: 100%;*/
  flex: 1 0 auto;
  flex-direction: column;
  display: flex;
}
.tab-content div{
  /*float: left;*/
  line-height: 30px;
  text-align: center;
}
</style>

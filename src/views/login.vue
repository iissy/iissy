<template>
  <div style="width: 100%;height: 100%;" class="flex-row align-items-center justify-content-center">
    <div style="position: absolute;width: 800px;height: 600px;background-color: #f0f0f0;overflow: hidden;" class="flex-row align-items-center justify-content-center">
      <div style="position: absolute;color: rgba(255, 206, 86, 0.3);margin:-420px 0 0 -200px;">
        <b-icon icon="circle-fill" scale="10"/>
      </div>
      <div style="position: absolute;color: rgba(75, 192, 192, 0.3);margin:-230px 0 0 -460px;">
        <b-icon icon="circle-fill" scale="20"/>
      </div>
      <div style="position: absolute;color: rgba(255, 99, 132, 0.3);margin:300px 0 0 500px;">
        <b-icon icon="circle-fill" scale="32"/>
      </div>
      <div style="position: absolute;color: rgba(153, 102, 255, 0.3);margin:260px 0 0 -50px;">
        <b-icon icon="circle-fill" scale="18"/>
      </div>
      <div style="position: absolute;width: 600px;height: 400px;background-color: #ffffff;border-radius: 5px;" class="enter flex-column justify-content-center">
        <div style="flex: 1;padding: 60px 60px;" class="flex-column">
          <div style="" class="flex-row align-items-center">登录 Soul 项目管理系统</div>
          <div class="flex-row align-items-center" style="padding: 30px 0;">
            <input type="text" v-model="s_email" class="login-name" placeholder="Email" autocomplete="off"/>
          </div>
          <div class="flex-row align-items-center">
            <input type="password" v-model="s_password" class="login-name" placeholder="Password" autocomplete="off"/>
          </div>
        </div>
        <div style="flex: 0 0 48px;background-color: #f0f0f0;" class="flex-row align-items-center">
          <div style="flex: 1;background-color: #e0e0e0;height: 100%;padding-left: 20px;border-radius: 0 0 0 5px;" class="flex-row align-items-center">
            注册
          </div>
          <div style="flex: 1;background-color: #364150;height: 100%;padding-right: 20px;border-radius: 0 0 5px 0;" class="justify-content-flex-end flex-row align-items-center">
            <router-link :to="{ name: 'MainRedirect' }">登录</router-link>
          </div>
        </div>
      </div>
      <div style="position: absolute;bottom: 10px;">
        <div style="flex: 0 0 60px;" class="flex-row align-items-center justify-content-center copyright">
          <div>
            Copyright ©2020 <a href="/">爱斯园</a>
          </div>
          <div style="margin-left: 5px;">
            <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备2020117325号</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      s_email: '',
      s_password: ''
    };
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
.enter a { color: #cccccc;letter-spacing: 2px; }
.copyright div,.copyright a { color: #909090;font-size: 12px;opacity: 0.6; }
.login-name { border: none;border-bottom: 1px solid #e8e8e8;width: 100%;box-shadow: none;outline: none;line-height: 30px; }
</style>
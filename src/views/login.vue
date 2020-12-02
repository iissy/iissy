<template>
  <div style="width: 100%;height: 100%;" class="flex-row align-items-center justify-content-center">
    <div style="position: relative;width: 800px;height: 600px;background-color: #f0f0f0;overflow: hidden;" class="flex-row align-items-center justify-content-center">
      <div style="position: absolute;width: 800px;height: 600px;">
        <div style="position: absolute;color: rgba(255, 206, 86, 0.3);top: 80px;left: 280px;">
          <b-icon icon="circle-fill" scale="12"/>
        </div>
        <div style="position: absolute;color: rgba(75, 192, 192, 0.3);top: 155px;left: 140px;">
          <b-icon icon="circle-fill" scale="20"/>
        </div>
        <div style="position: absolute;color: rgba(255, 99, 132, 0.3);top: 480px;left: 650px;">
          <b-icon icon="circle-fill" scale="32"/>
        </div>
        <div style="position: absolute;color: rgba(153, 102, 255, 0.3);top: 450px;left: 430px;">
          <b-icon icon="circle-fill" scale="18"/>
        </div>
      </div>
      <div style="position: absolute;width: 600px;height: 400px;background-color: #ffffff;border-radius: 5px;" class="enter flex-column justify-content-center">
        <div style="flex: 1;padding: 60px 60px;" class="flex-column">
          <div style="font-size: 18px;" class="flex-row align-items-center">登录 Soul 项目管理系统</div>
          <div class="flex-row align-items-center" style="padding: 30px 0;">
            <input type="text" v-model="s_email" class="login-name" placeholder="Email" autocomplete="off"/>
          </div>
          <div class="flex-row align-items-center">
            <input type="password" v-model="s_password" class="login-name" placeholder="Password" autocomplete="off"/>
          </div>
          <div style="margin-top: 30px;color: #909090;" class="flex-row align-items-center justify-content-center">
            演示版本，点击登录进入系统，只可浏览无法操作
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
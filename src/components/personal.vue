<template>
  <div id="personal">
    <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;font-size: 18px;margin-bottom: 20px;">账号管理</div>

    <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;color:#aaaaaa;">个人信息</div>
    <div :class="{active: (currentIndex == 1)}"><router-link to="/main/center/account">账号信息</router-link></div>
    <div :class="{active: (currentIndex == 2)}"><router-link to="/main/center/safe">安全设置</router-link></div>

    <div style="flex: 0;padding: 20px 0 5px 30px;width: 100%;color:#aaaaaa;">钉钉账号</div>
    <div :class="{active: (currentIndex == 10)}"><router-link to="/main/center/certificate">登陆凭证</router-link></div>
    <div :class="{active: (currentIndex == 11)}"><router-link to="/main/center/robot">群机器人配置</router-link></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentIndex: parseInt(this.tagIndex)
    };
  },
  props: ['tagIndex']
};
</script>

<style scoped>
#personal { flex: 0 0 auto;width: 218px;height: 100%;padding: 0 20px 0 0;flex-direction: column; }
#personal > div { flex: 0;padding: 5px 0 5px 40px;width: 100%; }
#personal > div.active { border-left: 5px solid #ff0000;background-color: #e8e8e8;padding: 5px 0 5px 35px; }
#personal > div.active a { color: #338fe5; }
</style>
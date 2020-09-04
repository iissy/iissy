<template>
  <div id="master">
    <img alt="Vue logo" src="/public/favicon.ico">
    <Login msg="欢迎使用飞猫任务管理系统"/>
  </div>
</template>

<script>
import Login from './login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#master {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div id="master">
    <Login msg="欢迎使用 Jitask 管理系统"/>
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

<style scoped>
#master { background-color: #e8e8e8; }
</style>
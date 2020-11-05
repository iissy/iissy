<template>
  <div id="master">
    <Login msg="欢迎使用 Soul 管理系统"/>
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
#app > #master {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  overflow: auto;
  flex: 1 1 auto;
  flex-direction: column;
}
</style>
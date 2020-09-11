<template>
  <div id="master">
    <Login msg="欢迎使用爱斯园管理系统"/>
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
#app > #master {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
  height: 100%;
  overflow: auto;
}

#master div {
  text-align: left;
}
</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a style="font-size: 18px;" href="https://oapi.dingtalk.com/connect/qrconnect?appid=dingoahn9mncsgwihecc9k&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=http://www.iissy.com/api/ding/get_user_info/dingoahn9mncsgwihecc9k" target="_blank" rel="noopener">登录</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

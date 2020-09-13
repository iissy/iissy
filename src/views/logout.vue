<template>
  <div id="logout">
    再见！
  </div>
</template>

<script>
import http from '@/util/httper';

export default {
  data: function () {
    return {
    };
  },
  created: function () {
    let url = '/api/logout';
    http.get(url).then(function (response) {
      if(response.data.status) {
        window.location.href="/"
      }
    });
  }
};
</script>

<style scoped>
#logout{ margin: 100px auto 0 auto;font-size: 38px;text-align: center;color: #ff0000; }
</style>
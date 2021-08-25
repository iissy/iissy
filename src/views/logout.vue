<template>
  <div id="logout">
    Bye-Bye, Baby!
  </div>
</template>

<script>
import http from '../utils/http';

export default {
  data: function () {
    return {
    };
  },
  created: function () {
    http.get(this.urls.logout).then(function (response) {
      if(response.data.status) {
        window.location.href="/"
      }
    });
  }
};
</script>

<style scoped>
#logout{ margin: 100px auto 0 auto;font-size: 38px;text-align: center;color: #333333;opacity: 0.3;font-style: italic; }
</style>
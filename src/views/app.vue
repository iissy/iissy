<template>
  <div id="app">
    <router-view/>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import Alert from '../components/common/control/alert';
import http from "@/utils/http";

export default {
  name: 'App',
  data: function(){
    return {
      team: ''
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    if (self.team) {
      self.checkLoginStatus();
    }
  },
  mounted() {
    let self = this;
    self.bus.$on('alertSuccess', function(code) {
      self.$refs.alert.success(code);
    });
    self.bus.$on('alertDanger', function(code) {
      self.$refs.alert.danger(code);
    });
  },
  watch: {
    '$route' () {
      let self = this;
      self.team = self.$route.params.team;
      if (self.team) {
        self.checkLoginStatus();
      }
    }
  },
  methods: {
    checkLoginStatus: function () {
      let self = this;
      const timeout = 1000;
      setTimeout(() => {
        http.get(self.urls.check_login_status).then(function () {}).catch(function (err) {
          if (err.response.data.code === 401) {
            window.location.href="/";
          }
        });
      }, timeout);
    }
  },
  components: {
    Alert
  }
}
</script>
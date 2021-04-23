<template>
  <div class="app-row">
    <Menu tagIndex="1" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="我的工作台" ref="Header" workbench="true"></Header>
      <div class="app-main-container">
        <component v-bind:is="currentTabComponent"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './component/common/header';
import Menu from './component/common/menu';
import overview from './workbench/overview';
import dashboard from './workbench/dashboard';
import filters from './workbench/filters';
// import http from "@/scripts/http";

export default {
  data: function () {
    return {
      currentTabComponent: 'overview'
    };
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  created: function () {
    let self = this;
    self.shift();
  },
  // mounted: function () {
  //   let self = this;
  //   let data = { name: 'soul', logo: '/images/touxiang.jpg', team_name: '卓灵科技', email: 'hemin@iissy.com', password: 'S0se4r5t2', phone: '+18576769700', phone_code: '123456', team_role: 'admin' };
  //   http.post(self.urls.team_create, data).then(function (response) {
  //     console.log(response.data.status)
  //   });
  // },
  methods: {
    shift: function () {
      let self = this;
      self.currentTabComponent = self.$route.params.type || self.currentTabComponent;
    }
  },
  components: {
    Header,
    Menu,
    overview,
    dashboard,
    filters
  }
};
</script>
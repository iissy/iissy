<template>
  <div class="app-row">
    <Menu tagIndex="1" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="我的工作台" ref="Header"></Header>
      <div class="app-main-container">
        <div class="app-main-content">
          <div>
            <p>asdf</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './component/common/header';
import Menu from './component/common/menu';
// import http from "@/util/http";

export default {
  data: function () {
    return {
    };
  },
  components: {
    Header,
    Menu
  },
  created: function () {
    // let self = this;
    // let data = { name: '卓灵科技', logo: '' };
    // http.post(self.urls.team_create, data).then(function (response) {
    //   console.log(response.data.status)
    // });
  },
  methods: {
  }
};
</script>
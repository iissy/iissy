<template>
  <div class="app-column">
    <Header ref="Header"/>
    <div class="rightMain flex-row">
    </div>
  </div>
</template>

<script>
import Header from '../component/wiki/header';
import http from "../../utils/http";
import router from "../../router";

export default {
  data: function () {
    return {
      team: '',
      space: ''
    };
  },
  components: {
    Header
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.page_get();
  },
  methods: {
    page_get: function () {
      let self = this;
      http.get(self.urls.default_main_page.format(self.team, self.space)).then(function (response) {
        router.push({ name:'Page', params: { team: self.team, space: self.space, page: response.data.uuid } });
      });
    }
  }
};
</script>
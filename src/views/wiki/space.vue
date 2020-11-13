<template>
  <div class="app-column">
    <Header ref="Header"/>
    <div class="rightMain flex-row">
    </div>
  </div>
</template>

<script>
import Header from '@/views/component/wiki/header';
import http from "@/scripts/http";
import router from "@/router";

export default {
  data: function () {
    return {
      team: '',
      space: '',
      pages: []
    };
  },
  components: {
    Header
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.page_list();
  },
  methods: {
    page_list: function () {
      let self = this;
      http.get(self.urls.pages.format(self.team, self.space)).then(function (response) {
        self.pages = response.data.pages;
        if (self.pages && self.pages.length > 0) {
          router.push({ name:'Page', params: { team: self.team, space: self.space, page: self.pages[0].uuid } });
        }
      });
    }
  }
};
</script>
<template>
  <div/>
</template>

<script>
import http from "../../utils/http";
import router from "../../router";

export default {
  data: function () {
    return {
      team: '',
      space: ''
    };
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.get_default_main_page();
  },
  methods: {
    get_default_main_page: function () {
      let self = this;
      http.get(self.urls.default_main_page.format(self.team, self.space)).then(function (response) {
        router.push({ name:'Page', params: { team: self.team, space: self.space, page: response.data.uuid } });
      });
    }
  }
};
</script>
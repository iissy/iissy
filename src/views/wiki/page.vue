<template>
  <div class="flex-row" style="flex: 1;">
    <Catalog ref="Catalog" :selected="page"/>
    <div class="app-main-container" style="flex: 1;">
      <Article v-if="loaded" ref="Article" :item="item"/>
    </div>
    <Dynamic ref="dynamic"/>
  </div>
</template>

<script>
import Catalog from '../component/wiki/catalog';
import Dynamic from '../component/wiki/dynamic';
import Article from "../component/wiki/module/article";
import http from "../../utils/http";

export default {
  data: function () {
    return {
      team: '',
      space: '',
      page: '',
      item: {},
      loaded: false
    };
  },
  components: {
    Article,
    Catalog,
    Dynamic
  },
  watch: {
    '$route' () {
      let self = this;
      if (self.page !== self.$route.params.page) {
        self.page = self.$route.params.page
        self.page_get();
      }
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.page = self.$route.params.page;
    self.page_get();
  },
  created: function () {
  },
  methods: {
    page_get: function () {
      let self = this;
      http.get(self.urls.page_get.format(self.team, self.space, self.page)).then(function (response) {
        self.item = response.data;
        self.loaded = true;
      });
    }
  }
};
</script>
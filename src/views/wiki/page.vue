<template>
  <div class="app-column">
    <Header ref="Header" :page="page"/>
    <div class="rightMain flex-row" style="height: 0;">
      <Catalog ref="Catalog" :selected="page"/>
      <div class="app-main-container" style="flex: 1;">
        <Article v-if="loaded" ref="Article" :item="item"/>
      </div>
      <Dynamic ref="dynamic"/>
    </div>
  </div>
</template>

<script>
import Header from '@/views/component/wiki/header';
import Catalog from '@/views/component/wiki/catalog';
import Dynamic from '@/views/component/wiki/dynamic';
import Article from "@/views/component/wiki/module/article";
import http from "@/scripts/http";

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
    Header,
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
      http.get(self.urls.page_get.format(self.team, self.page)).then(function (response) {
        self.item = response.data;
        self.loaded = true;
      });
    }
  }
};
</script>
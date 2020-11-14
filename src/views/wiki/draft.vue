<template>
  <div class="app-column">
    <Header ref="Header"/>
    <div class="rightMain flex-row" style="height: 0;">
      <Catalog ref="Catalog" :selected="draft"/>
      <div class="app-main-container" style="flex: 1;">
        <Article v-if="loaded" ref="Article" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/component/wiki/header';
import Catalog from '@/views/component/wiki/catalog';
import Article from "@/views/component/wiki/module/article_draft";
import http from "@/scripts/http";

export default {
  data: function () {
    return {
      team: '',
      space: '',
      page: '',
      draft: '',
      item: {},
      loaded: false
    };
  },
  components: {
    Article,
    Header,
    Catalog
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.page = self.$route.params.page;
    self.draft = self.$route.params.draft;
    self.page_get();
  },
  created: function () {
  },
  methods: {
    page_get: function () {
      let self = this;
      http.get(self.urls.draft_get.format(self.team, self.space, self.draft)).then(function (response) {
        self.item = response.data;
        self.loaded = true;
      });
    }
  }
};
</script>
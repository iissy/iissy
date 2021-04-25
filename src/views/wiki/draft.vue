<template>
  <div class="flex-row" style="flex: 1;">
    <Catalog ref="Catalog" :selected="draft"/>
    <div class="app-main-container" style="flex: 1;">
      <Article v-if="loaded" ref="Article" :item="item"/>
    </div>
  </div>
</template>

<script>
import Catalog from '../../components/wiki/catalog';
import Article from "../../components/wiki/module/article_draft";
import http from "../../utils/http";

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
  watch: {
    '$route' () {
      let self = this;
      if (self.draft !== self.$route.params.draft) {
        self.draft = self.$route.params.draft
        self.draft_get();
      }
    }
  },
  components: {
    Article,
    Catalog
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.page = self.$route.params.page;
    self.draft = self.$route.params.draft;
    self.draft_get();
  },
  created: function () {
  },
  methods: {
    draft_get: function () {
      let self = this;
      http.get(self.urls.draft_get.format(self.team, self.space, self.draft)).then(function (response) {
        self.item = response.data;
        self.page = response.data.page_uuid;
        self.loaded = true;
      });
    }
  }
};
</script>
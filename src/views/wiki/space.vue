<template>
  <div class="app-column">
    <Header ref="Header"/>
    <div class="rightMain flex-row">
      <Catalog ref="Catalog"/>
      <div class="app-main-container" style="flex: 1;">
        <Article ref="Article"/>
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

export default {
  data: function () {
    return {
    };
  },
  components: {
    Article,
    Header,
    Catalog,
    Dynamic
  },
  created: function () {
  },
  methods: {
  }
};
</script>
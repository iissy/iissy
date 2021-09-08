<template>
  <div class="flex-row" style="flex: 1;">
    <Catalog ref="Catalog" :selected="selected"/>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Catalog from '../../components/wiki/catalog';

export default {
  data: function () {
    return {
      team: '',
      space: '',
      selected: '',
      item: {},
      loaded: false
    };
  },
  watch: {
    '$route' () {
      let self = this;
      self.selectItem();
    }
  },
  created() {
    let self = this;
    self.selectItem();
  },
  methods: {
    selectItem: function () {
      let self = this;
      if (self.$route.name === 'Draft') {
        if (self.selected !== self.$route.params.draft) {
          self.selected = self.$route.params.draft;
        }
      } else if (self.$route.name === 'Page') {
        if (self.selected !== self.$route.params.page) {
          self.selected = self.$route.params.page;
        }
      }
    }
  },
  components: {
    Catalog
  }
};
</script>
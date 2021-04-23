<template>
  <div class="app-main-no-border flex-column">
    <div style="height: 100%;flex: 1;" class="flex-row">
      <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
      <component v-bind:is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import Control from '../component/setting/wiki/wiki_control';
import List from "../component/setting/wiki/list";
import Permission from "../component/setting/wiki/permission";

export default {
  data: function () {
    return {
      currentTabComponent: List,
      tagIndex: 1
    };
  },
  components: {
    Control,
    List
  },
  created: function () {
    let self = this;
    let type = self.$route.params.type;
    self.tag_switch(type);
  },
  watch: {
    '$route' () {
      let type = this.$route.params.type;
      this.tag_switch(type);
    }
  },
  methods: {
    tag_switch: function (type) {
      let self = this;
      switch (type) {
        case "list":
          self.tagIndex = 1;
          self.currentTabComponent = List;
          break;
        case "permission":
          self.tagIndex = 11;
          self.currentTabComponent = Permission;
          break;
      }
    }
  }
};
</script>

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
</style>
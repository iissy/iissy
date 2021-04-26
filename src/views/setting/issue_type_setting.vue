<template>
  <div class="app-main-no-border">
    <div style="display: flex;flex-direction: row;height: 100%;">
      <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
      <component v-bind:is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import Control from '../../components/setting/project/project_control';

import config from "../../components/setting/issue_type/config/config";
import field from "../../components/setting/issue_type/config/field";
import flow from "../../components/setting/issue_type/config/flow";
import permission from "../../components/setting/issue_type/config/permission";

export default {
  data: function () {
    return {
      currentTabComponent: config,
      tagIndex: 11
    };
  },
  components: {
    Control,
    config,
    field,
    flow,
    permission
  },
  watch: {
    '$route' () {
      let type = this.$route.params.type;
      this.tag_switch(type);
    }
  },
  created: function () {
    let self = this;
    let type = self.$route.params.type;
    self.tag_switch(type);
  },
  methods: {
    tag_switch: function (type) {
      let self = this;
      self.currentTabComponent = type;
    }
  }
};
</script>
<template>
  <div style="display: flex;flex-direction: row;height: 100%;">
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
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
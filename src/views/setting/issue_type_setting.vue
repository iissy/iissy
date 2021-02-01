<template>
  <div class="app-row">
    <Menu tagIndex="82" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="项目配置中心" ref="Header"></Header>
      <div class="project-main-container">
        <div class="app-main-no-border">
          <div style="display: flex;flex-direction: row;height: 100%;">
            <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
            <component v-bind:is="currentTabComponent"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import Control from '../component/setting/project/project_control';

import config from "../component/setting/issue_type/config/config";
import field from "../component/setting/issue_type/config/field";
import flow from "../component/setting/issue_type/config/flow";
import permission from "../component/setting/issue_type/config/permission";

export default {
  data: function () {
    return {
      currentTabComponent: config,
      tagIndex: 11
    };
  },
  components: {
    Header,
    Menu,
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

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
</style>
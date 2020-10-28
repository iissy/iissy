<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="83" ref="Menu"></Menu>
      <div class="rightMain">
        <Header title="文档配置中心" ref="Header"></Header>
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
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import Control from '../component/setting/doc/doc_control';
import { formatDate } from '@/util/date';
import Manager from "@/views/component/setting/doc/manager";
import Permission from "@/views/component/setting/doc/permission";

export default {
  data: function () {
    return {
      currentTabComponent: Manager,
      tagIndex: 1
    };
  },
  components: {
    Header,
    Menu,
    Control,
    Manager
  },
  created: function () {
    let self = this;
    let type = self.$route.params.type;
    self.tag_switch(type);
  },
  filters: {
    formatDate(time) {
      return formatDate(time);
    }
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
        case "manager":
          self.tagIndex = 1;
          self.currentTabComponent = Manager;
          break;
        case "permission":
          self.tagIndex = 21;
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
<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="82"></Menu>
      <div class="rightMain">
        <Header title="项目配置中心"></Header>
        <div class="app-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
              <div style="background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
                <component v-bind:is="currentTabComponent"></component>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header';
import Menu from '../../components/menu';
import Control from './control';
import ProjectManager from "@/views/component/project/manager";
import ProjectField from "@/views/component/project/field";
import ProjectStatus from "@/views/component/project/status";

export default {
  data: function () {
    return {
      currentTabComponent: ProjectManager,
      tagIndex: 1
    };
  },
  components: {
    Header,
    Menu,
    Control,
    ProjectManager,
    ProjectField,
    ProjectStatus
  },
  created: function () {
    let self = this;
    let id = self.$route.params.com;
    self.tag_switch(id);
  },
  watch: {
    '$route' () {
      let id = this.$route.params.com;
      this.tag_switch(id);
    }
  },
  methods: {
    tag_switch: function (com) {
      let self = this;
      switch (com) {
        case "manager":
          self.tagIndex = 1;
          self.currentTabComponent = ProjectManager;
          break;
        case "field":
          self.tagIndex = 2;
          self.currentTabComponent = ProjectField;
          break;
        case "status":
          self.tagIndex = 3;
          self.currentTabComponent = ProjectStatus;
          break;
      }
    }
  }
};
</script>
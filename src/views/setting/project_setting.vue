<template>
  <div class="app-row">
    <Menu tagIndex="82" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="项目配置中心" ref="Header"></Header>
      <div class="project-main-container flex-column">
        <div class="app-main-no-border flex-column">
          <div style="height: 100%;" class="flex-row">
            <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
            <div style="max-width:1200px;flex: 1 1 auto;padding: 20px;min-height: 100%;" class="g-container">
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
import Control from '../component/setting/project/project_control';
import ProjectManager from "@/views/component/setting/project/manager";
import ProjectField from "@/views/component/setting/project/field";
import ProjectStatus from "@/views/component/setting/project/status";

import IssueTypeManager from "@/views/component/setting/issue_type/manager";
import IssueTypeField from "@/views/component/setting/issue_type/field";
import IssueTypeStatus from "@/views/component/setting/issue_type/status";
import IssueTypePriority from "@/views/component/setting/issue_type/priority";

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
    ProjectStatus,
    IssueTypeManager,
    IssueTypeField,
    IssueTypeStatus,
    IssueTypePriority
  },
  created: function () {
    let self = this;
    let id = self.$route.name;
    let type = self.$route.params.type;
    self.tag_switch("{0}_{1}".format(id, type));
  },
  watch: {
    '$route' () {
      let id = this.$route.name;
      let type = this.$route.params.type;
      this.tag_switch("{0}_{1}".format(id, type));
    }
  },
  methods: {
    tag_switch: function (com) {
      let self = this;
      switch (com) {
        case "ProjectSetting_manager":
          self.tagIndex = 1;
          self.currentTabComponent = ProjectManager;
          break;
        case "ProjectSetting_field":
          self.tagIndex = 2;
          self.currentTabComponent = ProjectField;
          break;
        case "ProjectSetting_status":
          self.tagIndex = 3;
          self.currentTabComponent = ProjectStatus;
          break;
        case "TeamIssueTypeSetting_manager":
          self.tagIndex = 11;
          self.currentTabComponent = IssueTypeManager;
          break;
        case "TeamIssueTypeSetting_field":
          self.tagIndex = 12;
          self.currentTabComponent = IssueTypeField;
          break;
        case "TeamIssueTypeSetting_status":
          self.tagIndex = 13;
          self.currentTabComponent = IssueTypeStatus;
          break;
        case "TeamIssueTypeSetting_priority":
          self.tagIndex = 14;
          self.currentTabComponent = IssueTypePriority;
          break;
      }
    }
  }
};
</script>

<style scoped>
</style>
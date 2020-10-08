<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="82" ref="Menu"></Menu>
      <div class="rightMain">
        <Header title="项目配置中心" ref="Header"></Header>
        <div class="project-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
              <div style="max-width:1200px;background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
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
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import Control from '../component/setting/control';
import ProjectManager from "@/views/component/project/manager";
import ProjectField from "@/views/component/project/field";
import ProjectStatus from "@/views/component/project/status";

import IssueTypeManager from "@/views/component/issue_type/manager";
import IssueTypeField from "@/views/component/issue_type/field";
import IssueTypeStatus from "@/views/component/issue_type/status";
import IssueTypePriority from "@/views/component/issue_type/priority";

import IssueTypeConfig from "@/views/component/issue_type/config";
import IssueTypeRename from "@/views/component/issue_type/rename";

export default {
  data: function () {
    return {
      currentTabComponent: IssueTypeConfig,
      tagIndex: 11
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
    IssueTypePriority,
    IssueTypeConfig,
    IssueTypeRename
  },
  created: function () {
    let self = this;
    let path = self.$route.params.path;
    self.tag_switch(path);
  },
  methods: {
    tag_switch: function (path) {
      let self = this;
      switch (path) {
        case "config":
          self.currentTabComponent = IssueTypeConfig;
          break;
        case "rename":
          self.currentTabComponent = IssueTypeRename;
          break;
      }
    }
  }
};
</script>

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
</style>
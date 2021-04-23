<template>
  <div class="app-main-no-border flex-column">
    <div style="height: 100%;flex: 1;" class="flex-row">
      <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
      <div style="max-width:1200px;flex: 1 1 auto;min-height: 100%;" class="ibox">
        <component v-bind:is="currentTabComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Control from '../component/setting/project/project_control';
import ProjectList from "../component/setting/project/list";
import ProjectField from "../component/setting/project/field";
import ProjectStatus from "../component/setting/project/status";

import IssueTypeList from "../component/setting/issue_type/list";
import IssueTypeField from "../component/setting/issue_type/field";
import IssueTypeStatus from "../component/setting/issue_type/status";
import IssueTypePriority from "../component/setting/issue_type/priority";

export default {
  data: function () {
    return {
      currentTabComponent: ProjectList,
      tagIndex: 1
    };
  },
  components: {
    Control,
    ProjectList,
    ProjectField,
    ProjectStatus,
    IssueTypeList,
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
        case "ProjectSetting_list":
          self.tagIndex = 1;
          self.currentTabComponent = ProjectList;
          break;
        case "ProjectSetting_field":
          self.tagIndex = 2;
          self.currentTabComponent = ProjectField;
          break;
        case "ProjectSetting_status":
          self.tagIndex = 3;
          self.currentTabComponent = ProjectStatus;
          break;
        case "TeamIssueTypeSetting_list":
          self.tagIndex = 11;
          self.currentTabComponent = IssueTypeList;
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
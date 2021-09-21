<template>
  <div class="app-main-no-border flex-column">
    <div style="height: 100%;flex: 1;" class="flex-row">
      <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
      <div style="max-width:1200px;flex: 1 1 auto;min-height: 100%;" class="ibox">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Control from '../../components/setting/project/project_control';
//
// import IssueTypeList from "../../components/setting/issue_type/list";
// import IssueTypeField from "../../components/setting/issue_type/field";
// import IssueTypeStatus from "../../components/setting/issue_type/status";
// import IssueTypePriority from "../../components/setting/issue_type/priority";

export default {
  data: function () {
    return {
      // currentTabComponent: ProjectList,
      tagIndex: 1
    };
  },
  components: {
    Control,
    // ProjectList,
    // ProjectField,
    // ProjectStatus,
    // IssueTypeList,
    // IssueTypeField,
    // IssueTypeStatus,
    // IssueTypePriority
  },
  created: function () {
    let self = this;
    let id = self.$route.name;
    self.tag_switch("{0}".format(id));
  },
  watch: {
    '$route' () {
      let self = this;
      let id = self.$route.name;
      self.tag_switch("{0}".format(id));
    }
  },
  methods: {
    tag_switch: function (com) {
      let self = this;
      switch (com) {
        case "ProjectSettingManager":
          self.tagIndex = 1;
          break;
        case "ProjectSettingField":
          self.tagIndex = 2;
          break;
        case "ProjectSettingStatus":
          self.tagIndex = 3;
          break;
        case "TeamIssueTypeSettingManager":
          self.tagIndex = 11;
          break;
        case "TeamIssueTypeSetting_field":
          self.tagIndex = 12;
          break;
        case "TeamIssueTypeSetting_status":
          self.tagIndex = 13;
          break;
        case "TeamIssueTypeSetting_priority":
          self.tagIndex = 14;
          break;
      }
    }
  }
};
</script>

<style scoped>
</style>
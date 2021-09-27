<template>
  <div class="flex-column ibox">
    <div class="app-header flex-row align-items-center">
      <Toggle/>
      <div class="task-flex-auto">
        <WorkbenchHeader v-if="isWorkbench"/>
      </div>
      <UserCenterAvatar/>
    </div>
  </div>
</template>

<script>
import WorkbenchHeader from "../../components/workbench/header";
import UserCenterAvatar from "./avatar";
import Toggle from "../sidebar/toggle";

export default {
  data() {
    return {
      hidden: false,
      attrs: [
        { uuid: 'com', name: '项目组建' },
        { uuid: 'issue_type', name:'工作项类型', items: [{ uuid: 'field' }, { uuid: 'issue_type_permission' }, { uuid: 'issue_type_flow' }] },
        { uuid: 'project_permission', name:'项目权限' },
        { uuid: 'project_field', name:'项目属性' },
        { uuid: 'project_status', name:'项目状态' },
        { uuid: 'project_info', name:'项目信息' },
        { uuid: 'more', name:'更多' }
      ],
      team: '',
      project: '',
      currentTabComponent: WorkbenchHeader,
      title: ''
    }
  },
  props: {
    isWorkbench: {
      default: false
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.title = self.$route.meta.title;
  },
  methods: {
    shift: function () {
      let self = this;
      if (self.isWorkbench) {
        self.currentTabComponent = WorkbenchHeader;
      }
    }
  },
  computed: {
    attr: function () {
      let self = this;
      return self.$route.params.attr || 'com';
    }
  },
  components: {
    WorkbenchHeader,
    UserCenterAvatar,
    Toggle
  }
}
</script>
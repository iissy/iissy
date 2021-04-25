<template>
  <div class="app-main-no-border">
    <div style="display: flex;flex-direction: row;height: 100%;">
      <Control :tagIndex="tagIndex"></Control>
      <ProjectPermission/>
    </div>
  </div>
</template>

<script>
import Control from '../../components/setting/project/project_control';
import ProjectPermission from "../../components/setting/project/permission";

export default {
  data: function () {
    return {
      tagIndex: 1
    };
  },
  components: {
    Control,
    ProjectPermission
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
</style>
<template>
  <div class="app-row">
    <Menu tagIndex="82" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="项目配置中心" ref="Header"></Header>
      <div class="project-main-container">
        <div class="app-main-no-border">
          <div style="display: flex;flex-direction: row;height: 100%;">
            <Control :tagIndex="tagIndex"></Control>
            <ProjectPermission/>
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
import ProjectPermission from "../component/setting/project/permission";

export default {
  data: function () {
    return {
      tagIndex: 1
    };
  },
  components: {
    Header,
    Menu,
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
<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="82"></Menu>
      <div class="rightMain">
        <Header title="项目配置中心"></Header>
        <div class="project-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <Control :tagIndex="tagIndex"></Control>
              <div style="background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
                <ProjectPermission></ProjectPermission>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/header';
import Menu from '../component/menu';
import Control from '../component/project/control';
import ProjectPermission from "@/views/component/project/permission";

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
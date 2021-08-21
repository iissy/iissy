<template>
  <div class="app-row">
    <Sidebar ref="Sidebar"/>
    <div class="rightMain">
      <ProjectHeader v-if="isProject"/>
      <Header v-else ref="Header" :isWorkbench="isWorkbench"/>
      <Main/>
    </div>
  </div>
</template>

<script>
import Header from './components/header/header';
import ProjectHeader from "./components/project/header";
import Main from './components/main';
import Sidebar from "./components/sidebar/sidebar";

export default {
  data: function () {
    return {
      isWorkbench: false,
      isProject: false
    };
  },
  created() {
    let self = this;
    self.isWorkbench = self.$route.name === "Workbench";
    self.isProject = self.$route.meta.tab === "project";
  },
  watch: {
    '$route' () {
      let self = this;
      self.isWorkbench = self.$route.name === "Workbench";
      self.isProject = self.$route.meta.tab === "project";
    }
  },
  components: {
    Sidebar,
    Header,
    ProjectHeader,
    Main
  }
};
</script>
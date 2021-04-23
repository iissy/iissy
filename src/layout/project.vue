<template>
  <div class="app-row">
    <Sidebar ref="Sidebar"/>
    <div class="rightMain">
      <Header/>
      <Main/>
    </div>
  </div>
</template>

<script>
import Header from "./components/project/header";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/project/main";

export default {
  data: function () {
    return {
      name: '',
      team: '',
      project: '',
      projectName: '',
      com: '',
      comName: '',
      items: [
      ],
      issue_type: ''
    };
  },
  components: {
    Header,
    Sidebar,
    Main
  }
};
</script>
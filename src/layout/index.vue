<template>
  <div class="app-row">
    <Sidebar tagIndex="1" ref="Sidebar"/>
    <div class="rightMain">
      <Header title="我的工作台" ref="Header" isWorkbench="true" isProject="false"/>
      <div class="app-main-container">
        <Main/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header/header';
import Main from './components/main';
import Sidebar from "./components/sidebar/sidebar";

export default {
  data: function () {
    return {};
  },
  components: {
    Sidebar,
    Header,
    Main
  }
};
</script>
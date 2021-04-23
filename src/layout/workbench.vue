<template>
  <div class="app-row">
    <Sidebar ref="Sidebar"/>
    <div class="rightMain">
      <Header ref="Header" isWorkbench="true"/>
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
<template>
  <div class="app-row">
    <Menu tagIndex="1" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="我的工作台" ref="Header" workbench="true"></Header>
      <div class="app-main-container">
        <component v-bind:is="currentTabComponent"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './component/common/header';
import Menu from './component/common/menu';
import overview from '@/views/component/workbench/overview';
import dashboard from '@/views/component/workbench/dashboard';

export default {
  data: function () {
    return {
      currentTabComponent: 'overview'
    };
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  mounted: function () {
    let self = this;
    self.shift();
  },
  methods: {
    shift: function () {
      let self = this;
      self.currentTabComponent = self.$route.params.type || self.currentTabComponent;
    }
  },
  components: {
    Header,
    Menu,
    overview,
    dashboard
  }
};
</script>
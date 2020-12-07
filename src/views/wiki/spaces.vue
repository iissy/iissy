<template>
  <div class="app-row">
    <Menu tagIndex="23" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="文档中心" ref="Header"></Header>
      <Spaces/>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import Spaces from '../component/wiki/space/spaces';

export default {
  data: function () {
    return {
    };
  },
  components: {
    Header,
    Menu,
    Spaces
  },
  created: function () {
  },
  methods: {
  }
};
</script>
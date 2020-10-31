<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="1" ref="Menu"></Menu>
      <div class="rightMain">
        <Header title="项目管理" ref="Header" workbench="true"></Header>
        <div class="app-main-container">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import Header from "@/views/component/common/header";
import Menu from "@/views/component/common/menu";

export default {
  data() {
    return {
    }
  },
  components: {
    Header,
    Menu
  },
  mounted() {
    let self = this;
    router.push({ name:'Workbench', params: { team: self.$refs.Menu.team, type: 'overview' } });
  }
}
</script>
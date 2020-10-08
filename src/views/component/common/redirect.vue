<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21" ref="Menu"></Menu>
      <div class="rightMain">
        <Header title="项目管理" ref="Header"></Header>
        <div class="app-main-container">
          <div class="app-main-content">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import http from "@/util/http";
import router from '../../../router';
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
    let team = self.$route.params.team;
    let project = self.$route.params.project;
    http.get(self.urls.project_first_component.format(team, project)).then(function (response) {
      router.push({ name:'Component', params: { team: team, project: project, com: response.data.uuid } });
    });
  }
}
</script>

<style scoped>
.app-header .wrapper { display: flex; justify-content: center; flex: 0;height: 100%;margin-right: 10px; }
</style>
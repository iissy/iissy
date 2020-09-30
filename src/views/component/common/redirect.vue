<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <Header title="项目管理"></Header>
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
    let url = '/api/team/' + team + '/project/' + project + '/component/first';
    http.get(url).then(function (response) {
      router.push({ name:'Component', params: { team: team, project: project, com: response.data.uuid } });
    });
  }
}
</script>

<style scoped>
.app-header .wrapper { display: flex; justify-content: center; flex: 0;height: 100%;margin-right: 10px; }
/*!*.wrapper>div { flex: 1; text-align: center; }*!*/
/*ul.dropdownWrapper { padding: 5px 0 5px 0;margin: 0;list-style-type: none; }*/
/*.dropdownWrapper { border: 1px solid #eeeeee; font-size: 14px;background-color: #ffffff;display: flex;flex-direction: column;}*/
/*.dropdownWrapper li { width: 100%;text-align: center;padding: 5px 0 5px 0; }*/
/*.dropdownWrapper li:hover{ background-color: #eee; }*/
/*.nav-item { display: flex;display: flex;display: -webkit-flex;flex-direction: column;flex: 1;align-items:center;justify-content:center; }*/
/*.nav-item .active { font-size: 14px;text-align: center; }*/
/*.dropdownBtn { display: inline-block; flex: 0 0 auto;border-radius: 30px;overflow: hidden;cursor: pointer; }*/
</style>
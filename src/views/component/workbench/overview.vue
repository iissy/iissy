<template>
  <div>
    <div class="flex-row" style="border-bottom: 1px solid #dedede;padding: 0 20px 5px 0;margin: 20px 10px 10px 10px;">
      <div style="flex: 1;font-size: 18px;">常用仪表盘</div>
      <div style="flex: 0 0 auto;font-size: 15px;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;" class="flex-row">
          <svg t="1604117248774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23838" width="14" height="14"><path d="M902.947 571.027h-332.293v332.346c0 32.387-26.267 58.628-58.655 58.628-32.387 0-58.654-26.241-58.654-58.628v-332.346h-332.295c-32.414 0-58.654-26.241-58.654-58.628 0-32.375 26.243-58.628 58.654-58.628h332.293v-332.346c0-32.375 26.267-58.628 58.654-58.628 32.388 0 58.655 26.254 58.655 58.628v332.347h332.293c32.414 0 58.655 26.252 58.655 58.626-0.001 32.387-26.241 58.626-58.655 58.626z" p-id="23839" fill="#000000"></path></svg>
        </div>
        <div style="margin-left: 5px;" class="flex-row">
          新建仪表盘
        </div>
      </div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-left: 10px;position: relative;" class="flex-row">
      <Dashboard/>
    </div>

    <div class="flex-row" style="border-bottom: 1px solid #dedede;padding: 0 20px 5px 0;margin: 20px 10px 10px 10px;">
      <div style="flex: 1;font-size: 18px;">项目 / 最近浏览</div>
      <div style="flex: 0 0 auto;font-size: 15px;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;" class="flex-row">
          <svg t="1604117248774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23838" width="14" height="14"><path d="M902.947 571.027h-332.293v332.346c0 32.387-26.267 58.628-58.655 58.628-32.387 0-58.654-26.241-58.654-58.628v-332.346h-332.295c-32.414 0-58.654-26.241-58.654-58.628 0-32.375 26.243-58.628 58.654-58.628h332.293v-332.346c0-32.375 26.267-58.628 58.654-58.628 32.388 0 58.655 26.254 58.655 58.628v332.347h332.293c32.414 0 58.655 26.252 58.655 58.626-0.001 32.387-26.241 58.626-58.655 58.626z" p-id="23839" fill="#000000"></path></svg>
        </div>
        <div style="margin-left: 5px;" class="flex-row">
          新建项目
        </div>
      </div>
      <div style="flex: 0 0 auto;font-size: 15px;margin-left: 20px;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;" class="flex-row">
          <svg t="1604118071914" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44524" width="14" height="14"><path d="M906.043077 80.817231 118.035692 80.817231C52.814769 80.817231 0 133.710769 0 198.301538l0 627.396923c0 64.630154 52.814769 117.444923 118.035692 117.444923l788.007385 0c65.102769 0 117.956923-52.854154 117.956923-117.444923L1024 198.301538C1024 133.710769 971.145846 80.817231 906.043077 80.817231zM194.048 223.704615c0-15.714462 12.366769-28.593231 28.041846-28.593231l28.553846 0c15.596308 0 28.041846 12.878769 28.041846 28.593231l0 27.963077c0 15.596308-12.406154 27.963077-28.041846 27.963077L222.089846 279.630769c-15.635692 0-28.041846-12.366769-28.041846-27.963077L194.048 223.704615zM75.460923 223.704615c0-15.714462 12.918154-28.593231 28.593231-28.593231l28.041846 0c16.147692 0 28.553846 12.878769 28.553846 28.593231l0 27.963077c0 15.596308-12.366769 27.963077-28.553846 27.963077L104.054154 279.630769c-15.635692 0-28.593231-12.366769-28.593231-27.963077L75.460923 223.704615zM945.348923 825.698462c0 21.543385-17.723077 39.305846-39.305846 39.305846L118.035692 865.004308c-21.543385 0-39.345231-17.762462-39.345231-39.305846L78.690462 355.131077l866.658462 0L945.348923 825.698462zM945.348923 277.031385 315.313231 277.031385 315.313231 198.301538l630.035692 0L945.348923 277.031385z" p-id="44525"></path></svg>
        </div>
        <div style="margin-left: 5px;" class="flex-row">
          所有项目
        </div>
      </div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-left: 10px;position: relative;" class="flex-row">
      <Project v-for="p in projects" :project="p" :key="p.uuid"/>
    </div>

    <div class="flex-row" style="border-bottom: 1px solid #dedede;padding: 0 20px 5px 0;margin: 20px 10px 10px 10px;">
      <div style="flex: 1;font-size: 18px;">文档 / 最近浏览</div>
      <div style="flex: 0 0 auto;font-size: 15px;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;" class="flex-row">
          <svg t="1604117248774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23838" width="14" height="14"><path d="M902.947 571.027h-332.293v332.346c0 32.387-26.267 58.628-58.655 58.628-32.387 0-58.654-26.241-58.654-58.628v-332.346h-332.295c-32.414 0-58.654-26.241-58.654-58.628 0-32.375 26.243-58.628 58.654-58.628h332.293v-332.346c0-32.375 26.267-58.628 58.654-58.628 32.388 0 58.655 26.254 58.655 58.628v332.347h332.293c32.414 0 58.655 26.252 58.655 58.626-0.001 32.387-26.241 58.626-58.655 58.626z" p-id="23839" fill="#000000"></path></svg>
        </div>
        <div style="margin-left: 5px;" class="flex-row">
          新建文档组
        </div>
      </div>
      <div style="flex: 0 0 auto;font-size: 15px;margin-left: 20px;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;" class="flex-row">
          <svg t="1604118071914" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44524" width="14" height="14"><path d="M906.043077 80.817231 118.035692 80.817231C52.814769 80.817231 0 133.710769 0 198.301538l0 627.396923c0 64.630154 52.814769 117.444923 118.035692 117.444923l788.007385 0c65.102769 0 117.956923-52.854154 117.956923-117.444923L1024 198.301538C1024 133.710769 971.145846 80.817231 906.043077 80.817231zM194.048 223.704615c0-15.714462 12.366769-28.593231 28.041846-28.593231l28.553846 0c15.596308 0 28.041846 12.878769 28.041846 28.593231l0 27.963077c0 15.596308-12.406154 27.963077-28.041846 27.963077L222.089846 279.630769c-15.635692 0-28.041846-12.366769-28.041846-27.963077L194.048 223.704615zM75.460923 223.704615c0-15.714462 12.918154-28.593231 28.593231-28.593231l28.041846 0c16.147692 0 28.553846 12.878769 28.553846 28.593231l0 27.963077c0 15.596308-12.366769 27.963077-28.553846 27.963077L104.054154 279.630769c-15.635692 0-28.593231-12.366769-28.593231-27.963077L75.460923 223.704615zM945.348923 825.698462c0 21.543385-17.723077 39.305846-39.305846 39.305846L118.035692 865.004308c-21.543385 0-39.345231-17.762462-39.345231-39.305846L78.690462 355.131077l866.658462 0L945.348923 825.698462zM945.348923 277.031385 315.313231 277.031385 315.313231 198.301538l630.035692 0L945.348923 277.031385z" p-id="44525"></path></svg>
        </div>
        <div style="margin-left: 5px;" class="flex-row">
          所有文档组
        </div>
      </div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-left: 10px;position: relative;" class="flex-row">
      <Space v-for="space in spaces" :key="space.uuid" :space="space" desc="最近页面更新于 8 小时前"/>
    </div>
  </div>
</template>

<script>
import Dashboard from '../workbench/dashboard_item';
import Project from '../project/module/project';
import Space from '../wiki/module/space';
import http from "../../../scripts/http";

export default {
  data() {
    return {
      projects: [],
      spaces: []
    }
  },
  created () {
    let self = this;
    self.team = self.$route.params.team;
    self.project_list();
    self.space_list();
  },
  methods: {
    space_list: function () {
      let self = this;
      http.get(self.urls.spaces.format(self.team)).then(function (response) {
        self.spaces = response.data.spaces;
      });
    },
    project_list: function() {
      let self = this;
      http.post(self.urls.team_project_list.format(self.team)).then(function (response) {
        self.projects = response.data;
      });
    }
  },
  components: {
    Dashboard,
    Project,
    Space
  }
}
</script>

<style scoped>

</style>
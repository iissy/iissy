<template>
  <div style="margin: 20px;">
    <div class="flex-row b-line" style="padding: 0 20px 5px 0;margin: 0;">
      <div style="flex: 1;font-size: 18px;">常用仪表盘</div>
    </div>
    <div style="flex: 1;flex-direction: row;position: relative;" class="flex-row">
      <Dashboard name="我的仪表盘"/>
      <Dashboard name="项目仪表盘"/>
    </div>

    <div class="flex-row b-line" style="padding: 0 20px 5px 0;margin: 20px 0 0 0;">
      <div style="flex: 1;font-size: 18px;">项目 / 最近浏览</div>
    </div>
    <div style="flex: 1;flex-direction: row;position: relative;" class="flex-row flex-wrap">
      <Project v-for="p in projects" :project="p" :key="p.uuid"/>
    </div>

    <div class="flex-row b-line" style="padding: 0 20px 5px 0;margin: 20px 0 0 0;">
      <div style="flex: 1;font-size: 18px;">文档 / 最近浏览</div>
    </div>
    <div style="flex: 1;flex-direction: row;position: relative;" class="flex-row flex-wrap">
      <Space v-for="space in spaces" :key="space.uuid" :space="space" desc="最近页面更新于 8 小时前"/>
    </div>
  </div>
</template>

<script>
import Dashboard from '../../components/workbench/dashboard_item';
import Project from '../../components/workbench/project';
import Space from '../../components/wiki/module/space';
import http from "../../utils/http";

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
      let url = self.urls.team_project_list.format(self.team);
      let params = { category: 2, name: "" }
      http.post(url, params).then(function (response) {
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
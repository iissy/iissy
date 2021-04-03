<template>
  <div>
    <div class="flex-row i_line" style="padding: 0 20px 5px 0;margin: 20px;">
      <div style="flex: 1;font-size: 18px;">常用仪表盘</div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-left: 20px;position: relative;" class="flex-row">
      <Dashboard/>
    </div>

    <div class="flex-row i_line" style="padding: 0 20px 5px 0;margin: 20px;">
      <div style="flex: 1;font-size: 18px;">项目 / 最近浏览</div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-left: 20px;position: relative;" class="flex-row">
      <Project v-for="p in projects" :project="p" :key="p.uuid"/>
    </div>

    <div class="flex-row i_line" style="padding: 0 20px 5px 0;margin: 20px;">
      <div style="flex: 1;font-size: 18px;">文档 / 最近浏览</div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-left: 20px;position: relative;" class="flex-row">
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
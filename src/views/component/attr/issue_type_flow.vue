<template>
  <div class="app-main-content" style="padding: 20px;">
    <div style="font-size: 18px;margin-bottom: 20px;">项目状态</div>
    <Summary :desc="desc"/>
    <div style="margin: 20px 0 0 0;">
      <Search placeholder="搜索项目状态" />
    </div>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
        asdfasdfasdfasdf
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/util/http';
import Search from '@/views/component/common/form/search';
import Summary from "@/views/component/common/block/summary";

export default {
  data: function () {
    return {
      team: '',
      items: [],
      desc: '项目状态用于定制项目所处的不同状态，支持不同状态间的切换。'
    };
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project_list();
  },
  methods: {
    project_list: function() {
      let self = this;
      http.post(this.urls.project_status.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    Search,
    Summary
  }
};
</script>

<style scoped>
</style>
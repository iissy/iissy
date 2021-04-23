<template>
  <div class="rightMain">
    <Header :items="items" title="项目管理" :projectName="projectName" :designer="designer" ref="Header"></Header>
    <Designer :items="items"></Designer>
  </div>
</template>

<script>
import http from "../../utils/http";
import Designer from '../component/com/designer';

export default {
  data: function () {
    return {
      team: '',
      project: '',
      projectName: '',
      items: [
      ],
      designer: true
    };
  },
  components: {
    Designer,
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    http.get(self.urls.components.format(self.team, self.project)).then(function (response) {
      self.items = response.data;
    });

    http.get(self.urls.project_get.format(self.team, self.project)).then(function (response) {
      self.projectName = response.data.name;
    });
  },
  created: function () {
  },
  watch: {
    '$route' () {
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
</style>
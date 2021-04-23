<template>
<!--  <div class="rightMain">-->
<!--    <Header :items="items" title="项目管理" :projectName="projectName" :designer="currentTabComponent==='designer'" ref="Header"></Header>-->
<!--    -->
<!--  </div>-->
  <div class="project-main-container">
    <component v-bind:is="currentTabComponent" :comName="comName" :items="items" :issue_type="issue_type"></component>
  </div>
</template>

<script>
// import Header from '../component/common/header';
import http from "../../utils/http";
import com00001 from '../component/com/com00001';
import com00002 from '../component/com/com00001';
import com00003 from '../component/com/com00001';
import com00004 from '../component/com/com00004';
import com00005 from '../component/com/com00005';
import com00008 from '../component/com/com00008';
import com00009 from '../component/com/com00009';
import designer from '../component/com/designer';

export default {
  data: function () {
    return {
      name: '',
      team: '',
      project: '',
      projectName: '',
      com: '',
      comName: '',
      items: [
      ],
      currentTabComponent: '',
      issue_type: ''
    };
  },
  components: {
    // Header,
    com00001,
    com00002,
    com00003,
    com00004,
    com00005,
    com00008,
    com00009,
    designer
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    self.components_get();
    self.project_get();
  },
  created: function () {
    let self = this;
    self.shift();
  },
  watch: {
    '$route' () {
      let self = this;
      if (self.com !== self.$route.params.com) {
        self.shift();
      }
    }
  },
  methods: {
    components_get: function () {
      let self = this;
      http.get(self.urls.components.format(self.team, self.project)).then(function (response) {
        self.items = response.data;
        self.$store.state.items = self.items;
      });
    },
    project_get: function () {
      let self = this;
      http.get(self.urls.project_get.format(self.team, self.project)).then(function (response) {
        self.projectName = response.data.name;
      });
    },
    shift: function () {
      let self = this;
      self.team = self.$route.params.team;
      self.project = self.$route.params.project;
      self.com = self.$route.params.com;

      if (self.com === 'designer') {
        self.currentTabComponent = 'designer'
        return;
      }

      http.get(self.urls.component_get.format(self.team, self.project, self.com)).then(function (response) {
        self.currentTabComponent = response.data.template_uuid;
        self.comName = response.data.name;

        if(response.data.objects.length > 0) {
          self.issue_type = response.data.objects[0].uuid;
        }
      });
    }
  }
};
</script>

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
</style>
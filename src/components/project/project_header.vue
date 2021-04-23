<template>
  <div style="flex: 1;">
    <div id="com" class="com-outline" v-if="items && items.length > 0">
      <div style="flex: 0 0 auto;margin-right: 10px;display: flex;">
        <DropDown :team="team" :name="projectName"/>
      </div>
      <div v-for="item in items" :key="item.com">
        <router-link :class="{active: (item.uuid === selectedCom)}" class="com align-items-center justify-content-center" :to="{ name:'Component', params: { team: team, project: project, com: item.uuid } }">
          <div style="font-size: 16px;font-weight: 500;flex: 0 0 auto;">
            <b-icon v-if="item.uuid === 'designer'" scale="0.9" icon="gear"></b-icon>
            {{ item.name }}
          </div>
        </router-link>
      </div>
      <div>
        <router-link :class="{active: ('designer' === selectedCom)}" class="com align-items-center justify-content-center" :to="{ name:'ComponentDesigner', params: { team: team, project: project, com: 'designer', attr: 'com' } }">
          <div style="font-size: 16px;font-weight: 500;flex: 0 0 auto;">
            <b-icon scale="0.9" icon="gear"></b-icon>
            项目设置
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="com-outline">&nbsp;</div>
  </div>
</template>

<script>
import DropDown from "../../views/component/project/project_dropdown";
import http from "../../utils/http";

export default {
  data() {
    return {
      dropdownActive: false,
      dropParams: ['个人中心', '退出登录'],
      team: '',
      project: '',
      selectedCom: '',
      projects: [],
      currentTabComponent: '',
      items: [],
      projectName: ''
    }
  },
  props: {
    title: String,
    designer: Boolean
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    self.selectedCom = self.$route.params.com;
    self.components_get();
    self.project_get();
  },
  created: function () {
    let self = this;
    self.shift();
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

        if (response.data.objects.length > 0) {
          self.issue_type = response.data.objects[0].uuid;
        }
      });
    }
  },
  watch: {
    '$route'() {
      let self = this;
      self.selectedCom = self.$route.params.com;
      console.log(self.selectedCom);
      if (self.com !== self.$route.params.com) {
        self.shift();
      }
    }
  },
  components: {
    DropDown
  }
}
</script>

<style scoped>
.com-outline { background-color: #ffffff;height:48px;display: flex;flex-direction: row;width: 100%;flex: 1; }
.com-outline a.com { flex:1;vertical-align: middle;height: 100%;display: flex;padding: 0 20px 0 20px;cursor: pointer;text-decoration: none; }
.com-outline a.active { border-top: 3px solid #17C4BB;background-color: #fafbfe; }
.com-outline a.active  div { color: #17C4BB!important; }

.nav-pills .nav-link { display: inline;padding:0; }
</style>
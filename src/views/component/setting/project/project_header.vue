<template>
  <div style="flex: 1;">
    <div id="com" class="com-outline" v-if="items && items.length > 0">
      <div style="flex: 0 0 auto;margin-right: 10px;display: flex;">
        <b-dropdown @toggle="project_list" :text="projectName" variant="outline" toggle-class="text-decoration-none">
          <b-dropdown-item disabled>进行中的项目</b-dropdown-item>
          <b-dropdown-item v-for="p in projects" :key="p.uuid" :to="{ name:'Redirect', params: { team: team, project: p.uuid } }">
            {{p.name}}
          </b-dropdown-item>
        </b-dropdown>
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
        <router-link :class="{active: ('designer' === selectedCom)}" class="com align-items-center justify-content-center" :to="{ name:'Component', params: { team: team, project: project, com: 'designer' } }">
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
import http from "@/util/http";

export default {
  data() {
    return {
      dropdownActive: false,
      dropParams: ['个人中心', '退出登录'],
      team: '',
      project: '',
      selectedCom: '',
      projects: []
    }
  },
  props: {
    title: String,
    items: Array,
    projectName: String,
    designer: Boolean
  },
  mounted() {
  },
  watch: {
    '$route' () {
      let self = this;
      self.selectedCom = self.$route.params.com;
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.selectedCom = self.$route.params.com;
  },
  methods: {
    project_list: function() {
      let self = this;
      let url = self.urls.list_project.format(self.team);
      http.post(url).then(function (response) {
        self.projects = response.data;
      });
    }
  }
}
</script>

<style scoped>
.com-outline { background-color: #ffffff;height:48px;display: flex;flex-direction: row;width: 100%;flex: 1; }
.com-outline a.com { flex:1;vertical-align: middle;height: 100%;display: flex;padding: 0 20px 0 20px;cursor: pointer;text-decoration: none; }
.com-outline a.active { border-top: 3px solid #17C4BB;background-color: #f8f8f8;border-bottom: 3px solid #f8f8f8; }
.com-outline a.active  div { color: #17C4BB!important; }

.nav-pills .nav-link { display: inline;padding:0; }
</style>
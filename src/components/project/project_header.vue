<template>
  <div style="flex: 1;">
    <div id="com" class="com-outline" v-if="items && items.length > 0">
      <div style="flex: 0 0 auto;margin-right: 10px;display: flex;">
        <ProjectDropdown :team="team" :name="projectName"/>
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
import ProjectDropdown from "../../views/component/project/project_dropdown";

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
  },
  components: {
    ProjectDropdown
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
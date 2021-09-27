<template>
  <div class="flex-column ibox">
    <div class="app-header flex-row align-items-center">
      <Toggle/>
      <div class="task-flex-auto">
        <div id="com" class="com-outline" v-if="items && items.length > 0">
          <div class="project-header-dropdown">
            <DropDown :team="team" :name="projectName"/>
          </div>
          <div v-for="item in items" :key="item.com">
            <router-link :class="{active: (item.uuid === selectedCom)}" class="com align-items-center justify-content-center" :to="{ name:'Component', params: { team: team, project: project, com: item.uuid } }">
              <div class="project-header-com">
                <b-icon v-if="item.uuid === 'designer'" scale="0.9" icon="gear"></b-icon>
                {{ item.name }}
              </div>
            </router-link>
          </div>
          <div>
            <router-link :class="{active: ('designer' === selectedCom)}" class="com align-items-center justify-content-center" :to="{ name:'ComponentDesigner', params: { team: team, project: project, com: 'designer', attr: 'com' } }">
              <div class="project-header-designer">
                <b-icon scale="0.9" icon="gear"></b-icon>
                项目设置
              </div>
            </router-link>
          </div>
        </div>
        <div v-else class="com-outline">&nbsp;</div>
      </div>
      <UserCenterAvatar/>
    </div>
    <div v-if="designer" class="flex-row justify-content-center project-header-designer-attr">
      <div class="attr" v-for="a in attrs" :key="a.uuid">
        <router-link :class="{active: isActive(a, attr)}" :to="{ name: 'ComponentDesigner', params: { team: team, project: project, com:'designer', attr: a.uuid } }">{{ a.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../../components/project/project_dropdown";
import UserCenterAvatar from '../header/avatar';
import Toggle from "../sidebar/toggle";
import http from "../../utils/http";

export default {
  data() {
    return {
      attrs: [
        { uuid: 'com', name: '项目组建' },
        { uuid: 'issue_type', name:'工作项类型', items: [{ uuid: 'field' }, { uuid: 'issue_type_permission' }, { uuid: 'issue_type_flow' }] },
        { uuid: 'project_permission', name:'项目权限' },
        { uuid: 'project_field', name:'项目属性' },
        { uuid: 'project_status', name:'项目状态' },
        { uuid: 'project_info', name:'项目信息' },
        { uuid: 'more', name:'更多' }
      ],
      team: '',
      project: '',
      designer: false,
      dropdownActive: false,
      dropParams: ['个人中心', '退出登录'],
      selectedCom: '',
      projects: [],
      currentTabComponent: '',
      items: [],
      projectName: '',
      title: ''
    }
  },
  mounted() {
    let self = this;
    self.bus.$on('updateProjectInfo', function() {
      self.project_get();
    });
    self.bus.$on('updateComponents', function() {
      self.components_get();
    });
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    self.selectedCom = self.$route.params.com;
    self.title = self.$route.meta.title;
    self.project_get();
    self.components_get();
    self.shift();
  },
  methods: {
    components_get: function () {
      let self = this;
      http.get(self.urls.components.format(self.team, self.project)).then(function (response) {
        self.items = response.data;
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
      self.designer = false;

      if (self.com === 'designer') {
        self.currentTabComponent = 'designer';
        self.designer = true;
        return;
      }

      http.get(self.urls.component_get.format(self.team, self.project, self.com)).then(function (response) {
        self.currentTabComponent = response.data.template_uuid;
        self.comName = response.data.name;

        if (response.data.objects.length > 0) {
          self.issue_type = response.data.objects[0].uuid;
        }
      });
    },
    isActive: function (o, i) {
      if (o.uuid === i) {
        return true;
      } else {
        if (o.items && o.items.length > 0) {
          for(let x=0;x<o.items.length;x++) {
            if (o.items[x].uuid === i) {
              return true;
            }
          }
        }
      }

      return false;
    }
  },
  computed: {
    attr: function () {
      let self = this;
      return self.$route.params.attr || 'com';
    }
  },
  watch: {
    '$route'() {
      let self = this;
      self.selectedCom = self.$route.params.com;
      if (self.com !== self.$route.params.com) {
        self.shift();
      }
    }
  },
  components: {
    DropDown,
    UserCenterAvatar,
    Toggle
  }
}
</script>

<style scoped>
.project-header-dropdown { flex: 0 0 auto;margin-right: 10px;display: flex; }
.project-header-com { font-size: 16px;font-weight: 500;flex: 0 0 auto; }
.project-header-designer { font-size: 16px;font-weight: 500;flex: 0 0 auto; }
.project-header-designer-attr { flex: 1;line-height: 40px;height: 40px;background-color: #fafbfe;box-shadow: rgb(211 211 211) 0px 2px 4px 0px; }
.attr { flex: 0 0 auto;padding: 0 10px;display: flex;align-items: center;margin: 5px 0; }
.attr a { padding: 0 5px;font-size: 15px;text-decoration: none;display: flex;align-items: center;border-radius: 3px;height: 30px;line-height: 30px; }
.attr a.active { color: #17C4BB!important;background-color: #E0EEEE; }

.com-outline { background-color: #ffffff;height:48px;display: flex;flex-direction: row;width: 100%;flex: 1; }
.com-outline a.com { flex:1;vertical-align: middle;height: 100%;display: flex;padding: 0 20px 0 20px;cursor: pointer;text-decoration: none; }
.com-outline a.active { border-top: 3px solid #17C4BB;background-color: #fafbfe; }
.com-outline a.active  div { color: #17C4BB!important; }

.nav-pills .nav-link { display: inline;padding:0; }
</style>
<template>
  <div style="flex: 1;box-shadow: 0 2px 4px 0 #d3d3d3;" class="flex-column">
    <div class="app-header">
      <div class="flex-row" style="width: 100%;">
        <div style="background-color: #ffffff;height:48px;padding:10px;display: flex;flex-direction: row;flex: 0 0 auto;">
          <div style="flex: 1;" class="flex-row">
            <div v-if="hidden" style="flex:1;align-items: center;height: 22px;display: flex;cursor: pointer;padding-right: 10px;border-right: 1px solid #cccccc;" @click="open">
              <svg t="1602142142391" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24788" width="20" height="20"><path d="M744.32 684.32L987.68 510.55999999l-243.36-173.75999999zM949.28 829.76l-881.28 0c-21.12 0-38.4 17.28-38.4 38.4s17.28 38.4 38.4 38.4L949.28 906.56c21.12 0 38.4-17.28 38.4-38.4s-17.28-38.4-38.4-38.4zM67.52 190.88L949.28 190.88c21.12 0 38.4-17.28 38.4-38.39999999s-17.28-38.4-38.4-38.40000001l-881.28 0c-21.12 0-38.4 17.28-38.4 38.4s16.8 38.4 37.92 38.4zM67.52 429.44L640.64 429.44c21.12 0 38.4-17.28 38.4-38.4s-17.28-38.4-38.4-38.4l-572.64 0c-21.12 0-38.4 17.28-38.4 38.4s16.8 38.4 37.92 38.4zM67.52 668L640.64 668c21.12 0 38.4-17.28 38.4-38.4s-17.28-38.4-38.4-38.4l-572.64-1e-8c-21.12 0-38.4 17.28-38.4 38.40000001s16.8 38.4 37.92 38.4z" p-id="24789"></path></svg>
            </div>
            <div style="color: #666666;font-weight: bolder;flex: 0 0 auto;font-size: 19px;margin: 0 10px 0 10px;letter-spacing: 3px;font-family: 'museo-1', 'museo-2', Verdana;text-shadow: #EEE 1px 1px 1px;">
              {{title}}
            </div>
          </div>
        </div>
        <ProjectHeader :items="items" :designer="designer" :projectName="projectName"></ProjectHeader>
        <div style="flex: 0;">
          <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" offset="-10" no-caret>
            <template v-slot:button-content>
              <img src="/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
            </template>
            <b-dropdown-item href="/main/center/account">个人中心</b-dropdown-item>
            <b-dropdown-item href="/main/logout">退出登录</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <div v-if="designer" style="flex: 1;line-height: 40px;height: 40px;" class="flex-row">
      <div class="attr" v-for="a in attrs" :key="a.uuid">
        <router-link :class="{active: a.uuid === attr}" :to="{ name: 'ComponentDesigner', params: { team: team, project: project, attr: a.uuid } }">{{ a.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHeader from '../project/project_header';

export default {
  data() {
    return {
      dropdownActive: false,
      dropParams: ['个人中心', '退出登录'],
      hidden: false,
      attrs: [
        { uuid: 'com', name: '项目组建' },
        { uuid: 'issue_type', name:'工作项类型' },
        { uuid: 'project_permission', name:'项目权限' },
        { uuid: 'project_setting', name:'项目配置' },
        { uuid: 'project_info', name:'项目信息' },
        { uuid: 'more', name:'更多' }
      ],
      team: '',
      project: '',
      attr: 'com'
    }
  },
  props: {
    title: String,
    items: Array,
    projectName: String,
    designer: Boolean
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.$refs.mbMenu) {
        if (!this.$refs.mbMenu.contains(e.target)) {
          this.dropdownActive = false
        }
      }
    })
  },
  watch: {
    '$route' () {
      let self = this;
      if(self.designer) {
        self.attr = self.$route.params.attr;
      }
    }
  },
  created() {
    let self = this;
    if(self.designer) {
      self.team = self.$route.params.team;
      self.project = self.$route.params.project;
      self.attr = self.$route.params.attr;
    }
  },
  methods: {
    dropdown: function()
    {
      // console.log(event.target.getAttribute('class'));
      // if(event.target.getAttribute('class') === 'dropdownBtn')
      this.dropdownActive = !this.dropdownActive;
    },
    tabToggle: function() {
      this.dropdownActive = false;
    },
    open: function () {
      let self = this;
      self.$parent.$refs.Menu.isOpen = true;
      self.hidden = false;
    },
  },
  computed: {
    hasTitle: function () {
      let self = this;
      let hasItems = self.items && self.items.length > 0;
      return !hasItems;
    }
  },
  components: {
    ProjectHeader
  }
}
</script>

<style scoped>
.app-header .wrapper { display: flex; justify-content: center; flex: 0;height: 100%;margin-right: 10px; }
.attr { flex: 0 0 auto;padding: 0 10px;display: flex;height: 100%;align-items: center; }
.attr a { padding: 0 5px;font-size: 15px;text-decoration: none;height: 30px;display: flex;align-items: center;border-radius: 3px; }
.attr a.active { color: #17C4BB!important;background-color: #E0EEEE; }
</style>
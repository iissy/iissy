<template>
  <div style="flex: 0 0 auto;box-shadow: 0 2px 4px 0 #d3d3d3;" class="flex-column">
    <div class="app-header">
      <div class="flex-row align-items-center" style="width: 100%;">
        <div style="background-color: #ffffff;height:48px;padding:10px;display: flex;flex-direction: row;flex: 0 0 auto;">
          <div style="flex: 1;" class="flex-row align-items-center">
            <div v-if="hidden" style="flex:1;align-items: center;height: 22px;display: flex;cursor: pointer;padding-right: 10px;border-right: 1px solid #cccccc;" @click="open">
              <svg t="1603696402499" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31622" width="20" height="20"><path d="M41.59999967 784.99999967l483.00000033 0c16.80000033 0 33.59999967 20.99999967 33.59999967 42.00000033 0 25.20000001-12.6 42.00000033-33.59999967 42.00000033l-483.00000033 0c-16.80000033 0-33.59999967-16.80000033-33.59999967-42.00000033 0-20.99999967 12.6-42.00000033 33.59999967-42.00000033z m466.2-125.99999999l-457.79999934 0c-25.20000001 0-46.19999967-20.99999967-46.20000066-41.99999935 0-25.20000001 20.99999967-42.00000033 46.20000066-42.00000033L507.79999967 575c25.20000001 0 46.19999967 16.80000033 46.20000066 42.00000033s-20.99999967 42.00000033-46.20000066 41.99999935z m0-293.99999936c25.20000001 0 46.19999967 20.99999967 46.20000066 41.99999935 0 25.20000001-20.99999967 42.00000033-46.20000066 42.00000033l-457.79999934 0c-25.20000001 0-46.19999967-16.80000033-46.20000066-42.00000033s20.99999967-42.00000033 46.20000066-41.99999935L507.79999967 365.00000032z m-4.19999934-125.99999999l-445.20000034 0c-29.40000033 0-50.4-16.80000033-50.39999999-42.00000033s20.99999967-42.00000033 50.4-42.00000033l445.20000033 0c29.40000033 0 50.4 16.80000033 50.4 42.00000033s-20.99999967 42.00000033-50.4 42.00000033z m189-25.2c16.80000033-16.80000033 46.19999967-16.80000033 63 0l247.79999967 268.79999933c16.80000033 16.80000033 16.80000033 50.4 0 67.20000033l-247.79999966 268.80000034c-16.80000033 16.80000033-46.19999967 16.80000033-63.00000001 0s-16.80000033-50.4 0-67.20000033l218.39999934-235.19999968-218.39999934-235.20000065c-16.80000033-20.99999967-16.80000033-50.4 0-67.19999934z" p-id="31623" fill="#515151"></path></svg>
            </div>
            <div style="color: #666666;font-weight: bolder;flex: 0 0 auto;font-size: 19px;margin: 0 0 0 10px;letter-spacing: 3px;font-family: 'museo-1', 'museo-2', Verdana;text-shadow: #EEE 1px 1px 1px;">
              {{title}}
            </div>
          </div>
        </div>
        <Workbench v-if="workbench"/>
        <ProjectHeader :items="items" :designer="designer" :projectName="projectName"></ProjectHeader>
        <UserCenterAvatar/>
      </div>
    </div>
    <div v-if="designer" style="flex: 1;line-height: 40px;height: 40px;" class="flex-row justify-content-center">
      <div class="attr" v-for="a in attrs" :key="a.uuid">
        <router-link :class="{active: isActive(a, attr)}" :to="{ name: 'ComponentDesigner', params: { team: team, project: project, com:'designer', attr: a.uuid } }">{{ a.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHeader from '../project/project_header';
import UserCenterAvatar from '../common/block/avatar';
import Workbench from '../workbench/control';

export default {
  data() {
    return {
      hidden: false,
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
      project: ''
    }
  },
  props: {
    title: String,
    items: Array,
    projectName: String,
    designer: Boolean,
    workbench: {
      default: false
    }
  },
  created() {
    let self = this;
    self.initData();
  },
  methods: {
    open: function () {
      let self = this;
      self.$parent.$refs.Menu.isOpen = true;
      self.hidden = false;
    },
    initData: function () {
      let self = this;
      self.team = self.$route.params.team;
      self.project = self.$route.params.project;
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
  components: {
    ProjectHeader,
    UserCenterAvatar,
    Workbench
  }
}
</script>

<style scoped>
.app-header .wrapper { display: flex; justify-content: center; flex: 0;height: 100%;margin-right: 10px; }
.attr { flex: 0 0 auto;padding: 0 10px;display: flex;height: 100%;align-items: center; }
.attr a { padding: 0 5px;font-size: 15px;text-decoration: none;height: 30px;display: flex;align-items: center;border-radius: 3px; }
.attr a.active { color: #17C4BB!important;background-color: #E0EEEE; }
</style>
<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <div class="layout-container-column">
          <Header title="项目管理"></Header>
          <div class="app-main-container">
            <div class="right-container">
              <div class="right-container-inner">
                <div id="project-top-row">
                  <div style="flex: 0 1 auto;">
                    <div class="tab-title">
                      <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</div>
                    </div>
                  </div>
                  <div style="flex: 1;">
                    <div style="text-align: right;padding-right: 20px;">项目配置中心</div>
                  </div>
                </div>
                <div id="project-new-row">
                  <div style="flex: 0 0 auto;flex-direction: row;margin-left: 20px;text-align: left;">
                    <AddProjectButton title="新增项目" @submit="add">新增项目</AddProjectButton>
                  </div>
                  <div style="flex: 1;flex-direction: row;">
                    <div style="width: 100%;text-align: right;flex: 1;flex-direction: row;">
                      <div style="flex: 1;display: inline-block;padding-right: 20px;">asdf</div>
                      <div style="flex: 1;display: inline-block;padding-right: 20px;">asdf</div>
                    </div>
                  </div>
                </div>
                <div id="project-main">
                  <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;padding: 10px;">
                    <b-table :fields="fields" :items="items" bordered striped>
                      <template v-slot:cell(name)="data">
                        <router-link to="/main/team/:team/project/:project/overview">{{ data.value }}</router-link>
                      </template>
                      <template v-slot:cell(create_time)="data">
                        {{ data.value | formatDate }}
                      </template>
                    </b-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import AddProjectButton from '../component/common/form/button';
import router from '../../router';
import http from "@/util/http";
import {formatDate} from "@/util/date";

export default {
  data: function () {
    return {
      cur: 0,
      tabTitle: ['进行中', '未开始', '已完成', '全部项目'],
      fields: [
        { key: 'name', label: '项目名称', formatter: '项目名称' },
        { key: 'status_uuid', label: '项目状态', formatter: '项目状态' },
        { key: 'assign', label: '项目负责人', formatter: '项目负责人' },
        { key: 'plan_start_time', label: '计划开始时间', formatter: '计划开始时间' },
        { key: 'plan_end_time', label: '计划完成时间', formatter: '计划完成时间' },
        { key: 'owner', label: '工作项目完成度', formatter: '工作项目完成度' },
        { key: 'team_uuid', label: '工作项数量', formatter: '工作项数量' },
        { key: 'create_time', label: '进行中工作项', formatter: '进行中工作项' }
      ],
      items: []
    };
  },
  components: {
    Header,
    Menu,
    AddProjectButton
  },
  created: function () {
    let self = this;
    self.project_list();
  },
  filters: {
    formatDate(time) {
      return formatDate(time);
    }
  },
  methods: {
    add: function () {
      let team = "HacWichD";
      console.log(team)
      router.push({ name: 'AddProject', params: { team: team } });
    },
    project_list: function() {
      let self = this;
      let url = '/api/team/Sxv5vAgD/list/project';
      http.post(url).then(function (response) {
        self.items = response.data;
      });
    }
  }
};
</script>

<style scoped>
#project-top-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;border-bottom: 1px solid #e8e8e8;margin-top: 10px;width: 100%; }
#project-top-row div { text-align: left; }
.tab-title{ width: 100%;background-color: #ffffff;padding: 0 0 0 20px;flex: 0 0 auto;flex-direction: row;display: flex; }
.tab-title .active{ border-bottom: 2px solid #1890ff;color: #1890ff; }

#project-new-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;margin-top: 10px;width: 100%; }
#project-main { flex: 1;display: flex; }
</style>
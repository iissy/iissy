<template>
  <div class="app-row">
    <Menu tagIndex="21" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="项目管理" ref="Header"></Header>
      <div class="app-main-container">
        <div class="app-main-content ibox flex-column">
          <div class="project-top-row">
            <div style="flex: 0 1 auto;">
              <div class="tab-title">
                <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</div>
              </div>
            </div>
            <div style="flex: 1;">&nbsp;</div>
          </div>
          <div class="project-new-row flex-row">
            <div style="flex: 0 0 auto;flex-direction: row;text-align: left;">
              <AddProjectButton title="新增项目" @submit="add"></AddProjectButton>
            </div>
            <div style="flex: 1;display: inline-block;"></div>
            <div style="flex: 0 0 auto;flex-direction: column;align-items: center;display: flex;">
              <div style="width: 100%;text-align: right;flex: 1;align-items: center;display: flex;">
                <div style="flex: 1;display: inline-block;">
                  <Search placeholder="项目名字" />
                </div>
              </div>
            </div>
          </div>
          <div class="h-flex">
            <div v-if="tasks_completed && has" style="-webkit-flex: 1;flex: 1;overflow-x: auto;padding: 0 20px" class="i-table">
              <b-table :fields="fields" :items="items" outlined table-class="bbox">
                <template v-slot:cell(nameuuid)="data">
                  <router-link :to="{ name:'Project', params: { team: team, project: data.item.uuid } }">{{ data.item.name }}</router-link>
                </template>
                <template v-slot:cell(status)="data">
                  <Status :name="data.item.status_category" :color="data.item.status_uuid" />
                </template>
                <template v-slot:cell(progress_rate)="data">
                  <b-progress :value="(data.item.done_count * 100/(data.item.to_do_count + data.item.in_progress_count + data.item.done_count)).toFixed(0)" variant="success" striped animate></b-progress>
                </template>
                <template v-slot:cell(assign)="data">
                  <User :user="data.item.assign" :hasEmail="hasEmail"/>
                </template>
                <template v-slot:cell(plan_start_time)="data">
                  {{ data.value | formatDate }}
                </template>
                <template v-slot:cell(plan_end_time)="data">
                  {{ data.value | formatDate }}
                </template>
                <template v-slot:cell(issue_type_count)="data">
                  {{ data.item.to_do_count + data.item.in_progress_count + data.item.done_count }}
                </template>
              </b-table>
            </div>
            <div v-if="tasks_completed && !has" style="display: flex;flex: 1;" class="align-items-center justify-content-center t-line">
              暂无项目
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
import Status from '../component/common/block/status';
import Search from '../component/common/form/search';
import User from '../component/common/block/user';

import router from '../../router';
import http from "../../scripts/http";

export default {
  data: function () {
    return {
      hasEmail: false,
      cur: 0,
      team: '',
      com: '',
      tabTitle: ['进行中', '未开始', '已完成', '全部项目'],
      fields: [
        { key: 'nameuuid', label: '项目名称', formatter: '项目名称' },
        { key: 'status', label: '项目状态', formatter: '项目状态' },
        { key: 'assign', label: '项目负责人', formatter: '项目负责人' },
        { key: 'progress_rate', label: '工作项目完成度', formatter: '工作项目完成度' },
        { key: 'plan_start_time', label: '计划开始时间', formatter: '计划开始时间' },
        { key: 'plan_end_time', label: '计划完成时间', formatter: '计划完成时间' },
        { key: 'issue_type_count', label: '工作项数量', formatter: '工作项数量' },
        { key: 'in_progress_count', label: '进行中工作项', formatter: '进行中工作项' }
      ],
      items: [],
      tasks_completed: false
    };
  },
  components: {
    Header,
    Menu,
    AddProjectButton,
    Status,
    Search,
    User
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project_list();
  },
  methods: {
    add: function () {
      let self = this;
      router.push({ name: 'AddProject', params: { team: self.team } });
    },
    project_list: function() {
      let self = this;
      let url = self.urls.team_project_list.format(self.team);
      http.post(url).then(function (response) {
        self.items = response.data;
        self.tasks_completed = true;
      });
    }
  },
  computed: {
    has: function () {
      let self = this;
      return self.tasks_completed && self.items && self.items.length > 0;
    }
  }
};
</script>

<style scoped>
.tab-title{ width: 100%;background-color: #ffffff;padding: 0 0 0 20px;flex: 0 0 auto;flex-direction: row;display: flex; }
.tab-title .active{ border-bottom: 2px solid #1890ff;color: #1890ff; }
</style>
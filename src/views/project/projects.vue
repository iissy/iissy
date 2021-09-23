<template>
  <div class="app-main-content ibox flex-column">
    <div class="project-top-row">
      <div style="flex: 0 1 auto;">
        <div class="tab-title">
          <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="selectTab(index)" :class="{active:cur===index}" :key="index">{{title}}</div>
        </div>
      </div>
      <div style="flex: 1;">&nbsp;</div>
    </div>
    <div class="project-new-row flex-row">
      <div style="flex: 0 0 auto;flex-direction: row;text-align: left;">
        <AddProjectButton title="新增项目" :plus="true" @submit="add"></AddProjectButton>
      </div>
      <div style="flex: 1;display: inline-block;"></div>
      <div style="flex: 0 0 auto;flex-direction: column;align-items: center;display: flex;">
        <div style="width: 100%;text-align: right;flex: 1;align-items: center;display: flex;">
          <div style="flex: 1;display: inline-block;">
            <Search @search="search" placeholder="项目名称"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tasks_completed" class="h-flex flex-row">
      <div v-if="has" style="flex: auto;overflow-x: auto;padding: 0 20px" class="i-table">
        <b-table :fields="fields" :items="items">
          <template v-slot:cell(nameuuid)="data">
            <router-link :to="{ name:'Project', params: { team: team, project: data.item.uuid } }">{{ data.item.name }}</router-link>
          </template>
          <template v-slot:cell(status)="data">
            <Status :name="data.item.status_category" :color="data.item.status_uuid" />
          </template>
          <template v-slot:cell(assign)="data">
            <User :user="data.item.assign"/>
          </template>
          <template v-slot:cell(progress_rate)="data">
            <b-progress :value="(data.item.done_count * 100/(data.item.to_do_count + data.item.in_progress_count + data.item.done_count)).toFixed(0)" variant="success" striped animate></b-progress>
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
      <div v-else style="flex: auto;" class="flex t-line">
        <div class="flex-row align-items-center justify-content-center" style="flex: 1 1 0%;">暂无项目</div>
      </div>
    </div>
  </div>
</template>

<script>
import AddProjectButton from '../../components/common/button/common';
import Status from '../../components/common/control/status';
import Search from '../../components/common/form/search';
import User from '../../components/common/control/user';

import router from '../../router';
import http from "../../utils/http";

export default {
  data: function () {
    return {
      cur: 2,
      team: '',
      com: '',
      tabTitle: ['全部项目', '未开始', '进行中', '已完成'],
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
      tasks_completed: false,
      name: ''
    };
  },
  components: {
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
      let params = { category: self.cur, name: self.name }
      http.post(url, params).then(function (response) {
        self.items = response.data;
        self.tasks_completed = true;
      });
    },
    search(value) {
      let self = this;
      self.name = value;
      self.project_list();
    },
    selectTab: function (index) {
      let self = this;
      self.cur = index;
      self.project_list();
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
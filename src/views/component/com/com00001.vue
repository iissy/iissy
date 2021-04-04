<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <div style="overflow:hidden;flex: 1;padding: 20px;flex-direction: row;height: 100%;display: flex;width: 100%;">
      <div class="right-container-inner ibox">
        <div class="project-top-row">
          <div style="flex: 0 1 auto;">
            <div class="tab-title">
              <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</div>
            </div>
          </div>
          <div style="flex: 1;">&nbsp;</div>
        </div>
        <div class="project-new-row flex-row">
          <AddTask :title="add_label" :issue_type="issue_type"/>
          <div style="flex: 1;display: inline-block;"></div>
          <div style="flex: 0 0 auto;flex-direction: column;align-items: center;display: flex;">
            <div style="width: 100%;text-align: right;flex: 1;align-items: center;display: flex;">
              <div style="flex: 1;display: inline-block;">
                <Search :placeholder="search_label" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex1" style="overflow:hidden;">
          <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;" class="t-line">
            <div v-if="tasks && tasks.length > 0" class="flex-row" style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;width: 0;">
              <div style="overflow: auto;flex: 1;display: flex;height: 100%;">
                <div id="task-list" style="flex-direction: column;flex: 1;display: flex;overflow: auto;">
                  <div v-for="t in tasks" v-bind:key="t.uuid" class="flex-row task-item" :class="{active: (selectedUUID === t.uuid)}" @click="select_task(t.uuid)">
                    <div class="flex-row" style="border-bottom: 1px solid #f8f8f8;flex: 1;padding: 10px 10px 10px 7px;">
                      <div style="flex: 0 0 auto;margin-left: 10px;" class="flex-row">
                        <Priority :color="t.priority.color" :name="t.priority.value" :bgColor="t.priority.background_color"></Priority>
                        <div style="flex: 0 0 auto;margin-left: 5px;background-color: #efefef;border-radius: 4px!important;padding: 0 6px 0 6px;height: 20px;">{{t.assign.name}}</div>
                      </div>
                      <div style="flex: 1;margin-left: 10px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;width: 0;">{{t.summary}}</div>
                      <div style="flex: 0 0 auto;">
                        <Status :name="t.task_status.name" :color="t.task_status.category.toString()"></Status>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Fields :task="task" v-if="task_completed"/>
            </div>
            <div v-else style="flex: 1;display: flex;padding: 10px;">
              <div v-if="tasks_completed && !has" style="display: flex;flex: 1;" class="align-items-center justify-content-center">
                暂无{{ comName }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../common/form/search";
import Priority from "../common/block/priority";
import Status from '../common/block/status';
import Fields from '../task/fields';
import AddTask from '../task/add';

import http from "../../../scripts/http";
import router from "../../../router";

export default {
  data: function () {
    return {
      cur: 0,
      team: '',
      project: '',
      com: '',
      tabTitle: ['进行中', '未开始', '已完成', '全部需求'],
      items: [],
      task: {},
      tasks: [],
      selectedUUID: '',
      task_completed: false,
      tasks_completed: false
    };
  },
  props: {
    comName: String,
    issue_type: String
  },
  mounted() {
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    self.task_list();
  },
  methods: {
    task_list: function(taskUUID) {
      let self = this;
      let url = self.urls.task_list.format(self.team, self.project, self.issue_type);
      http.post(url).then(function (response) {
        self.tasks = response.data;
        self.tasks_completed = true;
        if(self.tasks && self.tasks.length > 0) {
          if (self.$route.name === 'Task') {
            self.selectedUUID = taskUUID || self.$route.params.task;
            self.task_get(self.selectedUUID);
          } else {
            self.selectedUUID = taskUUID || self.tasks[0].uuid;
            router.push({ name: 'Task', params: { team: self.team, project: self.project, com: self.com, task: self.selectedUUID } });
            self.task_get(self.selectedUUID);
          }
        }
      });
    },
    select_task: function (uuid) {
      let self = this;
      if (uuid !== self.selectedUUID) {
        self.selectedUUID = uuid;
        router.push({name: 'Task', params: {team: self.team, project: self.project, com: self.com, task: uuid}});
        self.task_get(uuid);
      }
    },
    task_get: function (uuid) {
      let self = this;
      let url = self.urls.task_get.format(self.team, uuid);
      http.get(url).then(function (response) {
        self.task = response.data;
        self.task_completed = true;
      });
    }
  },
  computed: {
    add_label: function () {
      let self = this;
      return "新增{0}".format(self.comName);
    },
    search_label: function () {
      let self = this;
      return "搜索{0}".format(self.comName);
    },
    has: function () {
      let self = this;
      return self.task_completed && self.tasks && self.tasks.length > 0;
    }
  },
  components: {
    Search,
    Priority,
    Status,
    Fields,
    AddTask
  }
}
</script>

<style scoped>
.tab-title{ width: 100%;background-color: #ffffff;padding: 0 0 0 20px;flex: 0 0 auto;flex-direction: row;display: flex; }
.tab-title .active{ border-bottom: 2px solid #1890ff;color: #1890ff; }

#task-list .task-item { cursor: pointer;padding-left: 3px; }
#task-list .active { background-color: #f9f9f9;border-left: 3px solid #17C4BB;padding-left: 0; }
</style>
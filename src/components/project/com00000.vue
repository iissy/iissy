<template>
  <div style="overflow:hidden;flex: 1;padding: 20px;flex-direction: row;height: 100%;display: flex;width: 100%;">
    <div class="right-container-inner ibox">
      <div class="project-top-row">
        <div style="flex: 0 1 auto;">
          <div class="tab-title">
            <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="selectTab(index)" :class="{active:cur==index}" :key="index">{{title.format(comName)}}</div>
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
      <div class="h-flex">
        <div style="position: relative;z-index: 0;-webkit-flex: 1;flex: 1;" class="t-line flex">
          <div v-if="tasks && tasks.length > 0" class="flex-row" style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;width: 0;">
            <div style="overflow: auto;-webkit-flex: 1;flex: 1;display: flex;height: 100%;">
              <div id="task-list" style="flex-direction: column;flex: 1;display: flex;overflow: auto;">
                <div v-for="t in tasks" v-bind:key="t.uuid" class="flex-row task-item" :class="{active: (selectedUUID === t.uuid)}" @click="select_task(t.uuid)">
                  <div class="flex-row" style="border-bottom: 1px solid #f8f8f8;flex: 1;padding: 10px 10px 10px 7px;">
                    <div style="flex: 0 0 auto;margin-left: 10px;" class="flex-row">
                      <Priority :color="t.priority.color" :name="t.priority.value" :bgColor="t.priority.background_color"></Priority>
                      <div style="flex: 0 0 auto;margin-left: 5px;background-color: #efefef;border-radius: 4px!important;padding: 0 6px 0 6px;height: 20px;">{{t.assign.name}}</div>
                    </div>
                    <div style="flex: 1;margin-left: 10px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;width: 0;">{{t.summary}}</div>
                    <div style="flex: 0 0 auto;margin-right: 10px;margin-left: 5px; background-color: rgb(239, 239, 239); border-radius: 4px !important; padding: 0px 6px; height: 20px;" class="flex-row align-items-center">
                      <div style="flex: 0 0 auto;">
                        <svg t="1623897554814" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4488" width="12" height="12"><path d="M64 128a128 128 0 0 1 128-128h64a128 128 0 0 1 128 128v64a128 128 0 0 1-121.6 127.872V425.6h409.6a166.4 166.4 0 0 1 166.4 166.4v112.128A128 128 0 0 1 960 832v64a128 128 0 0 1-128 128h-64a128 128 0 0 1-128-128v-64a128 128 0 0 1 121.6-127.872V592a89.6 89.6 0 0 0-89.6-89.6H262.4v201.728A128 128 0 0 1 384 832v64a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128v-64a128 128 0 0 1 121.6-127.872V319.872A128 128 0 0 1 64 192V128z m128-51.2a51.2 51.2 0 0 0-51.2 51.2v64a51.2 51.2 0 0 0 51.2 51.2h64a51.2 51.2 0 0 0 51.2-51.2V128a51.2 51.2 0 0 0-51.2-51.2H192z m0 704a51.2 51.2 0 0 0-51.2 51.2v64a51.2 51.2 0 0 0 51.2 51.2h64a51.2 51.2 0 0 0 51.2-51.2v-64a51.2 51.2 0 0 0-51.2-51.2H192z m576 0a51.2 51.2 0 0 0-51.2 51.2v64a51.2 51.2 0 0 0 51.2 51.2h64a51.2 51.2 0 0 0 51.2-51.2v-64a51.2 51.2 0 0 0-51.2-51.2h-64z" p-id="4489" fill="#515151"></path></svg>
                      </div>
                      <div style="flex: 0 0 auto;margin-left: 5px;font-size: 12px;">
                        {{t.related_task_count[0]}}/{{t.related_task_count[1]}}
                      </div>
                    </div>
                    <div style="flex: 0 0 auto;">
                      <Status :name="t.task_status.name" :color="t.task_status.category.toString()"></Status>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Fields :task="task" :issue_type="issue_type" v-if="task_completed">
              <template v-slot:workField><slot name="workField"></slot></template>
            </Fields>
          </div>
          <div v-else style="-webkit-flex: 1;flex: 1;" class="flex">
            <div v-if="tasks_completed && !has" style="-webkit-flex: 1;flex: 1;" class="flex-row align-items-center justify-content-center">
              暂无{{ comName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../common/form/search";
import Priority from "../common/control/priority";
import Status from '../common/control/status';
import Fields from '../task/fields';
import AddTask from '../task/add';

import http from "../../utils/http";
import router from "../../router";

export default {
  data: function () {
    return {
      cur: 0,
      team: '',
      project: '',
      com: '',
      tabTitle: ['全部{0}', '未开始', '进行中', '已完成'],
      task: {},
      tasks: [],
      selectedUUID: '',
      task_completed: false,
      tasks_completed: false,
      owner: '',
      assign: ''
    };
  },
  props: {
    comName: String,
    issue_type: String
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    self.task_list();
  },
  methods: {
    task_list: function(taskUUID, first) {
      let self = this;
      let url = self.urls.task_list.format(self.team, self.project, self.issue_type);
      let params = { category: self.cur, owner: self.owner, assign: self.assign }
      http.post(url, params).then(function (response) {
        self.tasks = response.data;
        self.tasks_completed = true;
        if(self.tasks && self.tasks.length > 0) {
          if (!taskUUID) {
            if (first) {
              taskUUID = self.tasks[0].uuid;
            } else if (self.$route.name === 'Task') {
              taskUUID = self.$route.params.task;
            } else {
              taskUUID = self.tasks[0].uuid;
            }
          }

          self.select_task(taskUUID);
        }
      });
    },
    select_task: function (uuid) {
      let self = this;
      if (uuid !== self.selectedUUID) {
        self.selectedUUID = uuid;
      }
      if (self.$route.name !== "Task" || self.$route.params.task !== uuid) {
        router.push({name: 'Task', params: {team: self.team, project: self.project, com: self.com, task: uuid}});
      }

      self.task_get(uuid);
    },
    task_get: function (uuid) {
      let self = this;
      let url = self.urls.task_get.format(self.team, uuid);
      http.get(url).then(function (response) {
        self.task = response.data;
        self.task_completed = true;
      });
    },
    selectTab: function (index) {
      let self = this;
      self.cur = index;
      self.task_list(null, true);
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
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
          <AddTask title="工作项"/>
          <div style="flex: 1;display: inline-block;"></div>
          <div style="flex: 0 0 auto;flex-direction: column;align-items: center;display: flex;">
            <div style="width: 100%;text-align: right;flex: 1;align-items: center;display: flex;">
              <div class="flex-row align-items-center">
                <div class="flex-row align-items-center filter">
                  <div style="flex: 0 0 auto;">筛选</div>
                  <div style="flex: 0 0 auto;margin-left: 5px;">
                    <svg t="1604286797396" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="66147" width="14" height="14"><path d="M509.8 407.625l-0.102 0.307-0.102-0.307-280.687-268.203c-42.979-44.82-132.72 40.522-91.073 88.616l341.777 336.149c16.782 16.987 45.945 15.759 60.169 0l341.777-336.149c41.648-48.094-48.094-133.436-91.073-88.616l-280.687 268.203z" p-id="66148" fill="#515151"></path><path d="M515.837 726.89l-0.102 0.307-0.102-0.307-280.687-268.203c-42.979-44.82-132.72 40.522-91.073 88.616l341.777 336.149c16.782 16.987 45.945 15.759 60.169 0l341.777-336.149c41.648-48.094-48.094-133.436-91.073-88.616l-280.687 268.203z" p-id="66149" fill="#515151"></path></svg>
                  </div>
                </div>
                <div class="align-items-center flex-row filter">
                  <svg t="1604287297770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="73754" width="14" height="14"><path d="M320 128v192H128V128h192m128-128H0v448h448V0zM896 128v192h-192V128h192m128-128H576v448h448V0zM320 704v192H128v-192h192m128-128H0v448h448V576zM896 704v192h-192v-192h192m128-128H576v448h448V576z" fill="#5E5E5E" p-id="73755"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-flex">
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
                暂无工作项
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Priority from "../common/block/priority";
import Status from '../common/block/status';
import Fields from '../task/fields';
import AddTask from '../task/add';

import http from "../../../utils/http";
import router from "../../../router";

export default {
  data: function () {
    return {
      cur: 0,
      team: '',
      project: '',
      com: '',
      tabTitle: ['全部工作项', '我负责的', '我关注的'],
      items: [],
      task: {},
      tasks: [],
      selectedUUID: '',
      task_completed: false,
      tasks_completed: false
    };
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
      let url = self.urls.project_task_list.format(self.team, self.project);
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
      self.selectedUUID = uuid;
      router.push({ name: 'Task', params: { team: self.team, project: self.project, com: self.com, task: uuid } });
      self.task_get(uuid);
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
    has: function () {
      let self = this;
      return self.task_completed && self.tasks && self.tasks.length > 0;
    }
  },
  components: {
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

.filter { margin-left: 10px;flex: 0 0 auto;background-color: #f0f0f0;border-radius: 3px;padding: 0 5px;height: 26px; }
</style>
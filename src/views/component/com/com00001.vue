<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <div style="overflow:hidden;flex: 1;padding: 10px;flex-direction: row;height: 100%;display: flex;width: 100%;">
      <div class="right-container-inner">
        <div id="project-top-row">
          <div style="flex: 0 1 auto;">
            <div class="tab-title">
              <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</div>
            </div>
          </div>
          <div style="flex: 1;">&nbsp;</div>
          <div style="flex: 0 0 auto;align-items: normal;" class="flex-row">
            <div style="flex: 0 0 auto;">
              <svg t="1601475264212" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30270" width="14" height="14"><path d="M958.464 385.024 819.2 385.024 917.504 286.72c24.576-24.576 24.576-65.536 0-90.112l-90.112-90.112c-24.576-24.576-65.536-24.576-90.112 0L638.976 204.8 638.976 65.536c0-36.864-28.672-65.536-65.536-65.536l-126.976 0c-36.864 0-65.536 28.672-65.536 65.536L380.928 204.8 286.72 106.496c-24.576-24.576-65.536-24.576-90.112 0L106.496 196.608C77.824 221.184 77.824 262.144 106.496 286.72L204.8 385.024 65.536 385.024C28.672 385.024 0 413.696 0 446.464l0 126.976c0 36.864 28.672 65.536 65.536 65.536L204.8 638.976 106.496 737.28c-24.576 24.576-24.576 65.536 0 90.112l90.112 90.112c24.576 24.576 65.536 24.576 90.112 0L385.024 819.2l0 139.264c0 36.864 28.672 65.536 65.536 65.536l126.976 0c36.864 0 65.536-28.672 65.536-65.536L643.072 819.2l98.304 98.304c24.576 24.576 65.536 24.576 90.112 0l90.112-90.112c24.576-24.576 24.576-65.536 0-90.112L819.2 638.976l139.264 0c36.864 0 65.536-28.672 65.536-65.536l0-126.976C1024 413.696 995.328 385.024 958.464 385.024zM512 704.512c-106.496 0-192.512-86.016-192.512-192.512 0-106.496 86.016-192.512 192.512-192.512 106.496 0 192.512 86.016 192.512 192.512C704.512 618.496 618.496 704.512 512 704.512z" p-id="30271" fill="#707070"></path></svg>
            </div>
            <div style="margin-right: 20px;margin-left: 5px;">项目配置中心</div>
          </div>
        </div>
        <div id="project-new-row">
          <AddTask :title="add_label" :issue_type="issue_type"/>
          <div style="flex: 1;display: inline-block;padding-right: 20px;"></div>
          <div style="flex: 0 0 auto;flex-direction: column;align-items: center;display: flex;">
            <div style="width: 100%;text-align: right;flex: 1;align-items: center;display: flex;">
              <div style="flex: 1;display: inline-block;padding-right: 20px;">
                <Search :placeholder="search_label" />
              </div>
            </div>
          </div>
        </div>
        <div id="project-main" style="overflow:hidden;">
          <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;border-top: 1px solid #e8e8e8;">
            <div v-if="tasks && tasks.length > 0" class="flex-row" style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;">
              <div style="overflow: auto;flex: 1;display: flex;height: 100%;">
                <div id="task-list" style="flex-direction: column;flex: 1;display: flex;overflow: auto;">
                  <div v-for="t in tasks" v-bind:key="t.uuid" class="flex-row task-item" :class="{active: (selectedUUID === t.uuid)}" @click="select_task(t.uuid)">
                    <div class="flex-row" style="border-bottom: 1px solid #f8f8f8;flex: 1;padding: 10px 10px 10px 7px;">
                      <div style="flex: 0 0 auto;margin-left: 10px;" class="flex-row">
                        <Priority :color="t.priority.color" :name="t.priority.value" :bgColor="t.priority.background_color"></Priority>
                        <div style="flex: 0 0 auto;margin-left: 5px;background-color: #efefef;border-radius: 4px!important;padding: 0 6px 0 6px;height: 20px;">{{t.owner.name}}</div>
                      </div>
                      <div style="flex: 1;margin-left: 10px;">{{t.summary}}</div>
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
              <div v-if="!tasks_completed" class="flex-row" style="flex: 1;">
                <b-skeleton-table
                    :rows="3"
                    :columns="6"
                    :table-props="{ bordered: true, striped: true }"></b-skeleton-table>
              </div>
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
import Search from "@/views/component/common/form/search";
import Priority from "@/views/component/common/block/priority";
import Status from '@/views/component/common/block/status';
import Fields from '@/views/component/task/fields';
import AddTask from '@/views/component/task/add';

import http from "@/util/http";

export default {
  data: function () {
    return {
      cur: 0,
      team: '',
      project: '',
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
    self.task_list();
  },
  methods: {
    task_list: function() {
      let self = this;
      let url = self.urls.task_list.format(self.team, self.project, self.issue_type);
      http.post(url).then(function (response) {
        self.tasks = response.data;
        self.tasks_completed = true;
        if(self.tasks && self.tasks.length > 0) {
          self.selectedUUID = self.tasks[0].uuid;
          self.task_get(self.tasks[0].uuid);
        }
      });
    },
    select_task: function (uuid) {
      let self = this;
      self.selectedUUID = uuid;
      self.task_get(uuid)
    },
    task_get: function (uuid) {
      let self = this;
      let url = self.urls.task_get.format(self.team, self.project, self.issue_type, uuid);
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
#project-top-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;border-bottom: 1px solid #e8e8e8;margin-top: 10px;width: 100%; }
#project-top-row div { text-align: left; }
.tab-title{ width: 100%;background-color: #ffffff;padding: 0 0 0 20px;flex: 0 0 auto;flex-direction: row;display: flex; }
.tab-title .active{ border-bottom: 2px solid #1890ff;color: #1890ff; }

#project-new-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;margin: 10px 0 10px 0;width: 100%;align-items: center; }
#project-main { flex: 1;display: flex; }

#task-list .task-item { cursor: pointer;padding-left: 3px; }
#task-list .active { background-color: #f9f9f9;border-left: 3px solid #17C4BB;padding-left: 0; }
</style>
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
          <div style="flex: 0 0 auto;flex-direction: row;margin-left: 20px;text-align: left;">
            <AddTaskButton :title="add_label" v-b-modal.modal-prevent-closing></AddTaskButton>
          </div>
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
            <div style="overflow: auto;flex: 0 0 500px;display: flex;height: 100%;border-left: 5px solid #e8e8e8;flex-direction: column;">
              <div style="flex-direction: column;flex: 1;display: flex;overflow: auto;padding: 20px;">
                <div class="flex-row" style="width: 100%;padding-bottom: 10px;">
                  <div style="flex: 1;">#{{ task.number }}</div>
                  <div style="flex: 0 0 auto;">
                    <svg t="1601948666806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10407" width="20" height="20"><path d="M509.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10408"></path><path d="M849.1 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10409"></path><path d="M174.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10410"></path></svg>
                  </div>
                </div>
                <div class="flex-row" style="width: 100%;padding-bottom: 10px;">
                  <div style="flex: 1;font-size: 18px;text-shadow: #EEE 1px 1px 1px;color: #4F4F4F;letter-spacing: 1px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">
                    {{ task.summary }}
                  </div>
                </div>
                <div class="flex-row" style="width: 100%;padding: 0 10px 10px 10px;justify-content: space-between;">
                  <div style="flex: 1;text-align: center;">
                    <Assign :user="task.assign" :task="task.uuid"/>
                  </div>
                  <div style="flex: 1;text-align: center;">
                    <TaskStatus :status="task.task_status"/>
                  </div>
                  <div style="flex: 1;text-align: center;">
                    <TaskPriority :option="task.priority"/>
                  </div>
                </div>
                <div style="margin-top: 10px;">
                  描述
                </div>
                <div style="min-height: 100px;border: 1px solid #e8e8e8;flex: 0 0 auto;padding: 10px;margin-top: 5px;">
                  {{ task.desc }}
                </div>
                <div style="padding: 5px 5px 0 5px;">
                  <router-link target="_blank" style="color: #36c6d3;" :to="{ name: 'Task', params: { team: team, project: project, issue_type: issue_type, task: task.uuid } }">全屏查看</router-link>
                </div>
                <Fields :task="task" v-if="loading"/>
              </div>
              <div style="flex: 0 0 auto;border-top: 1px solid #e8e8e8;padding: 10px;">关注我</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal size="lg" id="modal-prevent-closing" ref="modal" :title="add_label" :no-close-on-backdrop="true" cancel-title="取消" ok-title="确定" :centered="true" @show="resetModal" @hidden="resetModal" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div style="padding: 0 10px 0 10px;">
          <b-form-group label="标题" label-for="name-input">
            <b-form-input id="name-input" v-model="name" required></b-form-input>
          </b-form-group>
        </div>
        <div style="" class="flex-row">
          <div style="flex: 1;padding: 0 10px 0 10px;">
            <b-form-group label="所在项目" label-for="project-select">
              <b-form-select id="project-select" v-model="projectSelect" :options="projects" required></b-form-select>
            </b-form-group>
          </div>
          <div style="flex: 1;padding: 0 10px 0 10px;">
            <b-form-group label="工作项类型" label-for="issue-type-select">
              <b-form-select id="issue-type-select" v-model="issueTypeSelect" :options="issue_types" required></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div style="" class="flex-row">
          <div style="flex: 1;padding: 0 10px 0 10px;">
            <b-form-group label="负责人" label-for="assign-select">
              <b-form-select id="assign-select" v-model="assignSelect" :options="projects" required></b-form-select>
            </b-form-group>
          </div>
          <div style="flex: 1;padding: 0 10px 0 10px;">
            <b-form-group label="优先级" label-for="priority-select">
              <b-form-select id="priority-select" v-model="prioritySelect" :options="issue_types" required></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div style="padding: 0 10px 0 10px;">
          <b-form-group label="描述" label-for="desc-input">
            <b-form-textarea id="desc-input" v-model="desc" rows="5" required></b-form-textarea>
          </b-form-group>
        </div>
      </form>
    </b-modal>

  </div>
</template>

<script>
import AddTaskButton from '../common/form/button';
import Search from "@/views/component/common/form/search";
import Priority from "@/views/component/common/block/priority";
import Status from '@/views/component/common/block/status';
import Assign from '@/views/component/task/assign';
import TaskStatus from '@/views/component/task/status';
import TaskPriority from '@/views/component/task/priority';
import Fields from '@/views/component/task/fields';
import http from "@/util/http";

export default {
  data: function () {
    return {
      cur: 0,
      team: '',
      project: '',
      issue_type: '',
      com: '',
      tabTitle: ['进行中', '未开始', '已完成', '全部需求'],
      items: [],
      name: '',
      desc: '',
      projects: ['你好爱上对方', '阿斯顿发送'],
      issue_types: ['你按时发', '摸弄激活接口'],
      projectSelect: '',
      issueTypeSelect: '',
      assignSelect: '',
      prioritySelect: '',
      task: {assign:{}, task_status: {}, priority: {}, project: {}, issue_type: {}, uuid: '-'},
      tasks: [],
      selectedUUID: '',
      loading: false
    };
  },
  props: {
    comName: String
  },
  mounted() {
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    self.issue_type = self.$parent.issue_type_uuid;
    self.task_list();
  },
  methods: {
    checkFormValidity() {
      let valid = this.$refs.form.checkValidity()
      return valid
    },
    resetModal() {
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return
      }
      this.add();
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    add: function () {
      let self = this;
      let data = {
        summary: self.name,
        desc: self.desc,
        priority: {uuid: 'Mkt3j1DC'}
      }
      http.post(self.urls.task_add.format(self.team, self.project, self.$parent.issue_type_uuid), data).then(function (response) {
        if (response.data.status === true) {
          self.task_list();
        } else {
          alert(response.data.msg)
        }
      });
    },
    task_list: function() {
      let self = this;
      let url = self.urls.task_list.format(self.team, self.project, self.$parent.issue_type_uuid);
      http.post(url).then(function (response) {
        self.tasks = response.data;
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
      let url = self.urls.task_get.format(self.team, self.project, self.$parent.issue_type_uuid, uuid);
      http.get(url).then(function (response) {
        self.task = response.data;
        self.loading = true;
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
    }
  },
  components: {
    AddTaskButton,
    Search,
    Priority,
    Status,
    Assign,
    TaskStatus,
    TaskPriority,
    Fields
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
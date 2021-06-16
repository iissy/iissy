<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <Com00000 :comName="comName" :issue_type="issue_type">
      <template v-slot:workField>
        <div class="field-type-group-last option">
          <div class="flex-row field-row">
            <div class="field-cell">关联任务</div>
            <div class="field-cell-value header">
              <div class="flex-row">
                <div style="flex: 1;"></div>
                <div style="flex: 0 0 auto;color: #303030;cursor: pointer;" v-b-modal.modal-related-task>
                  <b-icon class="link" icon="link" scale="1.8"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-row field-row">
            <div style="padding: 3px 0;">暂无关联</div>
          </div>
        </div>
      </template>
    </Com00000>
    <b-modal size="lg" title="关联任务" id="modal-related-task" no-close-on-backdrop>
      <div style="flex: 1;overflow-y: auto;background-color: #ffffff;min-height: 500px;" class="flex-column ck-content">
        <div style="flex: 0 0 auto;padding: 0 10px;">
          <b-form-group
              id="fieldset-1"
              description="输入任务标题包含的关键字"
              label="任务标题"
              label-for="input-1">
            <b-form-input autofocus v-model="summary"/>
          </b-form-group>
        </div>
        <div style="flex: 1;">
          <div v-if="tasks && tasks.length > 0" class="flex-row" style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;">
            <div style="overflow: auto;flex: 1;display: flex;height: 100%;">
              <div id="task-list" style="flex-direction: column;flex: 1;display: flex;overflow: auto;">
                <div v-for="t in tasks" v-bind:key="t.uuid" class="flex-row task-item">
                  <div class="flex-row" style="border-bottom: 1px solid #f8f8f8;flex: 1;padding: 10px 10px 10px 7px;">
                    <div style="flex: 0 0 auto;" class="flex-row align-items-center justify-content-center">
                      <input v-if="exist(t.uuid)" type="checkbox" style="width: 14px;height: 14px;" disabled checked>
                      <input v-else type="checkbox" v-model="t.sel" style="width: 14px;height: 14px;">
                    </div>
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
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Com00000 from "./com00000";
import Priority from "../common/block/priority";
import Status from '../common/block/status';
import http from "@/utils/http";

export default {
  data: function () {
    return {
      team: '',
      project: '',
      summary: '',
      tasks: [],
      linkedTasks: []
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
  },
  mounted() {
    let self = this;
    self.$root.$on('bv::modal::show', (bvEvent, modalId) => {
      if (modalId === "modal-related-task") {
        self.link_task_list("任务");
      }
    });
  },
  methods: {
    link_task_list: function(issue_type_name) {
      let self = this;
      let url = self.urls.link_tasks.format(self.team, self.project);
      http.post(url, { name: issue_type_name, summary: self.summary }).then(function (response) {
        self.tasks = response.data;
      });
    },
    exist: function (uuid) {
      let self = this;
      if(self.linkedTasks) {
        for(let i=0;i<self.linkedTasks.length;i++) {
          if(self.linkedTasks[i].uuid === uuid) {
            return true;
          }
        }
      }

      return false;
    }
  },
  components: {
    Com00000,
    Priority,
    Status
  }
}
</script>

<style scoped>
.field-type-group-last { margin-top: 20px;padding-bottom: 0; }
</style>
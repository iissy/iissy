<template>
  <div style="overflow: auto;flex: 0 0 500px;display: flex;height: 100%;border-left: 5px solid #e8e8e8;flex-direction: column;min-width: 500px;">
    <div style="flex-direction: column;flex: 1;display: flex;overflow: auto;padding: 20px;">
      <div class="field-block">
        <div class="flex-row" style="width: 100%;">
          <div style="flex: 1;">#{{ task.number }}</div>
          <div class="three-dots-class flex-column align-items-center justify-content-center">
            <b-icon icon="three-dots" scale="1.7"/>
          </div>
        </div>
      </div>

      <div class="field-block">
        <div class="flex-row" style="width: 100%;">
          <div v-if="summaryEditing" style="flex: 1;height: 30px;">
            <b-form-input autofocus v-model="task.summary" @blur="updateSummary"/>
          </div>
          <div v-else class="summary" @click="editSummary" style="height: 30px;">
            {{ task.summary }}
          </div>
        </div>
      </div>
      <div class="field-block">
        <div class="flex-row" style="width: 100%;padding: 0 10px 10px 10px;justify-content: space-between;">
          <div style="flex: 1;text-align: center;">
            <Assign :user="task.assign" :project="task.project.uuid" :task="task.uuid"/>
          </div>
          <div style="flex: 1;text-align: center;">
            <TaskStatus :status="task.task_status" :project="task.project.uuid" :issue_type="task.issue_type.uuid" :task_uuid="task.uuid"/>
          </div>
          <div style="flex: 1;text-align: center;">
            <TaskPriority :project="task.project.uuid" :priority="task.priority" :task_uuid="task.uuid"/>
          </div>
        </div>
      </div>
      <div class="field-block">
        <div class="flex-row">
          <div style="flex: 1;padding: 0 5px 0 0;">
            描述（富文本编辑）
          </div>
          <div style="padding: 0 5px 0 0;flex: 0 0 auto;cursor: pointer;color: #17C4BB;" v-b-modal.modal-issue-content>
            放大浏览
          </div>
        </div>
      </div>

      <b-modal size="xl" scrollable :title="task.summary" id="modal-issue-content" no-close-on-backdrop hide-footer>
        <div style="flex: 1;overflow-y: auto;background-color: #ffffff;min-height: 500px;" class="flex-row ck-content">
          <div style="padding: 10px;flex: 1;" v-html="task.desc"></div>
        </div>
      </b-modal>

      <div id="desc_scrollable_container" style="border: 1px solid #e8e8e8;flex: 0 0 auto;margin-top: 5px;border-radius: 5px;overflow: hidden;">
        <div id="taskToolBar"></div>
        <div id="taskDescContainer" style="flex: 1;min-height: 138px;" class="flex-column">
          <ckeditor :editor="editor" @ready="onReady" v-model="task.desc" @input="onChangedDesc" @blur="updateDesc" :config="editorConfig"/>
        </div>
      </div>

      <slot name="workField"></slot>

      <div class="field-type-group option">
        <div class="flex-row field-row" v-for="c in task.field_values" :key="c.uuid">
          <div class="field-cell">{{c.name}}</div>
          <div :ref="'permBody' + c.uuid" class="field-cell-value header edit" :class="{active: visible && selectField === c.uuid}">
            <div @click="dropOptionValues(c.uuid)" class="flex-row align-items-center" style="flex: 1;">
              <div v-if="c.value">{{c.value}}</div>
              <div v-else-if="c.number_value">{{c.number_value}}</div>
              <div class="none" v-else>未设置</div>
            </div>
            <div style="position: absolute;" class="edit ibox" :class="{open: visible && selectField === c.uuid}">
              <div v-for="option in options" class="option-item" :key="option.uuid" @click="updateOption(c.uuid, option.uuid)">
                <div style="color: #909090;">
                  {{ option.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row field-row">
          <div class="field-cell">截止日期</div>
          <div class="field-cell-time header edit" :class="{none: hasNotTimer}">
            <b-form-datepicker
                size="sm"
                v-model="deadline"
                v-bind="zh"
                :date-format-options="{ 'year': 'numeric', 'month': 'numeric', 'day': 'numeric' }"
                :no-flip="noFlip"
                :hide-header="true"
                @shown="onShown"
                @context="onContext"
                placeholder="未设置">
            </b-form-datepicker>
          </div>
        </div>
      </div>

      <div class="field-type-group-last option">
        <div class="flex-row field-row">
          <div class="field-cell">所属项目</div>
          <div class="field-cell-value header">{{ task.project.name }}</div>
        </div>
        <div class="flex-row field-row">
          <div class="field-cell">工作项类型</div>
          <div class="field-cell-value header">{{ task.issue_type.name }}</div>
        </div>
        <div class="flex-row field-row">
          <div class="field-cell">创建者</div>
          <div class="field-cell-value header">
            <User :user="task.owner"/>
          </div>
        </div>
        <div class="flex-row field-row">
          <div class="field-cell">创建时间</div>
          <div class="field-cell-value header">{{ task.create_time | formatDate }}</div>
        </div>
        <div class="flex-row field-row">
          <div class="field-cell">更新时间</div>
          <div class="field-cell-value header">{{ task.server_update_stamp / 1000 | formatDate }}</div>
        </div>
      </div>
    </div>
    <div style="flex: 0 0 auto;border-top: 1px solid #e8e8e8;padding: 10px;" class="flex-row align-items-center">
      <div class="watchers flex-row" style="flex: 1;">
        <User v-for="u in task.watchers" :user="u" :key="u.uuid" :includeName="false"/>
      </div>
      <div style="flex: 0 0 auto;cursor: pointer;" class="flex-row align-items-center watch" @click="watchers_add">
        <div style="flex: 0 0 auto;color: inherit;">
          <b-icon icon="binoculars-fill"/>
        </div>
        <div style="flex: 0 0 auto;margin-left: 5px;color: inherit;">
          关注
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../common/block/suser';
import Assign from './assign';
import TaskStatus from './status';
import TaskPriority from './priority';
import http from "../../utils/http";
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

export default {
  data() {
    return {
      team: '',
      project: '',
      visible: false,
      optionValue: '',
      options: [],
      selectField: '',
      hasEmail: false,
      hasNotTimer: true,
      deadline: '',
      noFlip: true,
      zh: {
        weekdayHeaderFormat: 'narrow',
        labelPrevDecade: '过去十年',
        labelPrevYear: '上一年',
        labelPrevMonth: '上个月',
        labelCurrentMonth: '当前月份',
        labelNextMonth: '下个月',
        labelNextYear: '明年',
        labelNextDecade: '下一个十年',
        labelToday: '今天',
        labelSelected: '选定日期',
        labelNoDateSelected: '未选择日期',
        labelCalendar: '日历',
        labelNav: '日历导航',
        labelHelp: '使用光标键浏览日期'
      },
      deadlineChanged: false,
      summaryEditing: false,
      descChanged: false,
      editor: DecoupledEditor,
      editorConfig: {
        toolbar: {
          items: [
            'fontColor', 'fontBackgroundColor', 'bold', 'italic',
            'underline', 'strikethrough', 'numberedList', 'bulletedList', 'alignment', 'link', 'blockquote', 'imageUpload'
          ]
        },
        ckfinder: {
          uploadUrl: "",
          options: {
            resourceType: 'Images'
          }
        }
      }
    }
  },
  props: {
    task: Object,
    issue_type: String
  },
  components: {
    User,
    Assign,
    TaskStatus,
    TaskPriority
  },
  created() {
    let self = this;
    self.deadlineChanged = false;
    self.descChanged = false;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.editorConfig.ckfinder.uploadUrl = self.urls.upload.format(self.team);
    self.formatDeadline();
  },
  watch: {
    task() {
      let self = this;
      self.summaryEditing = false;
      self.descChanged = false;
      self.formatDeadline();
    }
  },
  computed: {
    permBody: function () {
      let self = this;
      return "permBody" + self.selectField;
    }
  },
  methods: {
    onReady(editor) {
      document.querySelector( '#taskToolBar' ).appendChild( editor.ui.view.toolbar.element );
      document.querySelector( '#taskDescContainer' ).appendChild( editor.ui.getEditableElement() );
    },
    formatDeadline: function () {
      let self = this;
      if (self.task.deadline) {
        self.hasNotTimer = false;
        self.deadline = new Date(self.task.deadline);
      } else {
        self.hasNotTimer = true;
        self.deadline = null;
        return null;
      }
    },
    watchers_add: function () {
      let self = this;
      self.team = self.$route.params.team;
      http.post(self.urls.watchers_add.format(self.team, self.task.uuid), {}).then(function (response) {
        if (response.data.status) {
          self.$parent.task_get(self.task.uuid);
        }
      });
    },
    dropOptionValues: function (fieldUUID) {
      let self = this;
      self.options = [];
      self.selectField = fieldUUID;
      self.visible = true;
      document.addEventListener('click', self.hidePanel, false)

      http.get(self.urls.field_option_value_list.format(self.team, self.project, self.issue_type, fieldUUID), {}).then(function (response) {
        self.options = response.data;
      });
    },
    hide () {
      let self = this;
      self.visible = false
      document.removeEventListener('click', self.hidePanel, false)
    },
    hidePanel (e) {
      let self = this;
      if(self.$refs[self.permBody]) {
        if (!self.$refs[self.permBody][0].contains(e.target)) {
          self.hide();
        }
      } else {
        self.hide();
      }
    },
    updateOption: function (field, option) {
      let self = this;
      self.visible = false;
      let data = { task: self.task.uuid, field: field, option: option };
      http.post(self.urls.field_option_update.format(self.team, self.project, self.issue_type), data).then(function (response) {
        if (response.status) {
          self.$parent.task_get(self.task.uuid);
        }
      });
    },
    onChangedDesc: function () {
      let self = this;
      self.descChanged = true;
    },
    onShown: function () {
      let self = this;
      self.deadlineChanged = true;
    },
    onContext: function (ctx) {
      let self = this;
      if (self.deadlineChanged && ctx.selectedYMD) {
        self.hasNotTimer = false;
        self.descChanged = false;
        let dt = new Date(ctx.selectedYMD);
        let data = { deadline: dt.getTime(), which_field: 'deadline' };
        http.post(self.urls.task_update.format(self.team, self.project, self.issue_type, self.task.uuid), data).then(function (response) {
          if (response.status) {
            self.$parent.task_get(self.task.uuid);
          }
        });
      }
    },
    editSummary: function () {
      let self = this;
      self.summaryEditing = true;
    },
    updateSummary: function () {
      let self = this;
      if (self.task.summary) {
        self.summaryEditing = false;
        let data = { summary: self.task.summary, which_field: 'summary' };
        http.post(self.urls.task_update.format(self.team, self.project, self.issue_type, self.task.uuid), data).then(function (response) {
          if (response.status) {
            self.$parent.task_list(self.task.uuid);
          }
        });
      }
    },
    updateDesc: function () {
      let self = this;
      if (self.descChanged && self.task.desc) {
        self.descChanged = false;
        let data = { desc: self.task.desc, which_field: 'desc' };
        http.post(self.urls.task_update.format(self.team, self.project, self.issue_type, self.task.uuid), data).then(function (response) {
          if (response.status) {
            self.$parent.task_get(self.task.uuid);
          }
        });
      }
    }
  }
}
</script>

<style scoped>
.summary { flex: 1;width: 0;height: 30px;line-height: 30px;flex: 1;font-size: 18px;text-shadow: #EEE 1px 1px 1px;color: #4F4F4F;letter-spacing: 1px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap; }
.field-block { margin-top: 10px; }
.field-type-group { margin-top: 20px;border-bottom: 1px solid #e8e8e8;padding-bottom: 10px; }
.field-type-group-last { margin-top: 20px;padding-bottom: 0; }
.watch:hover { color: #17C4BB; }
.option .header {
  position: relative;
}
.option .header.active { border: 1px solid #17C4BB; }
.option .header .edit {
  overflow-y: auto;
  width: 100%;
  top: 30px;
  left: 0;
  max-height: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  /*transition: max-height .3s ease-out;*/
}
.option .open.edit {
  max-height: 170px;
  /*-webkit-animation: slide-down .3s ease-in;*/
  /*transition: max-height .3s ease-in;*/
  transform-origin: 50% 0;
  box-shadow: 0 1px 6px rgba(0,0,0,0.2);
  z-index: 9999;
}
.option-item { padding: 5px; }
.option-item:hover { background-color: #eff6fd; }

.three-dots-class { color: #666666;flex: 0 0 30px;cursor: pointer; }
.three-dots-class:hover { color: #17C4BB; }

.link:hover { color: #17C4BB; }
</style>
<template>
  <div style="overflow: auto;flex: 0 0 500px;display: flex;height: 100%;border-left: 5px solid #e8e8e8;flex-direction: column;min-width: 500px;">
    <div style="flex-direction: column;flex: 1;display: flex;overflow: auto;padding: 20px;">
      <div class="field-block">
        <div class="flex-row" style="width: 100%;">
          <div style="flex: 1;">#{{ task.number }}</div>
          <div style="flex: 0 0 auto;">
            <svg t="1601948666806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10407" width="20" height="20"><path d="M509.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10408"></path><path d="M849.1 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10409"></path><path d="M174.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10410"></path></svg>
          </div>
        </div>
      </div>
      <div class="field-block">
        <div class="flex-row" style="width: 100%;">
          <div v-if="summaryEditing" style="flex: 1;">
            <b-form-input v-model="task.summary" @blur="updateSummary"/>
          </div>
          <div v-else class="summary" @click="editSummary">
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
            描述
          </div>
          <div style="padding: 0 5px 0 0;flex: 0 0 auto;cursor: pointer;color: #17C4BB;" v-b-modal.modal-issue-content>
            放大浏览
          </div>
        </div>
      </div>

      <b-modal size="xl" scrollable :title="task.summary" id="modal-issue-content" no-close-on-backdrop hide-footer>
        <div style="flex: 1;overflow-y: auto;background-color: #ffffff;" class="flex-row">
          <div style="padding: 10px;" v-html="task.desc"></div>
        </div>
      </b-modal>

      <div style="border: 1px solid #e8e8e8;flex: 0 0 auto;margin-top: 5px;border-radius: 5px;padding: 10px;overflow: hidden;" id="desc_scrollable_container">
        <froala :config="config" v-model="task.desc"/>
      </div>

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
                @context="onContext"
                placeholder="未设置">
            </b-form-datepicker>
          </div>
        </div>
      </div>

      <div class="field-type-group option">
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

      <div style="margin-top: 30px;">评论</div>
      <div style="color: #999999;margin-top: 10px;margin-bottom: 20px;">暂无评论</div>
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

export default {
  data() {
    let that = this;
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
      summaryEditing: false,
      config: {
        placeholderText: '',
        toolbarButtons: {
          'moreText': {
            'buttons': ['undo', 'redo', 'paragraphFormat', 'fontSize', 'bold', 'italic', 'underline', 'strikeThrough',
              'subscript', 'superscript', 'textColor', 'backgroundColor',
              'align', 'formatOL', 'formatUL', 'quote',
              'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable'],
            'align': 'left',
            'buttonsVisible': 1000
          }
        },
        imageCORSProxy: null,
        fontFamilySelection: true,
        fontSizeSelection: true,
        paragraphFormatSelection: true,
        tabSpaces: 8,
        colorsHEXInput: true,
        fileUploadURL: '/upload_file',
        colorsStep: 14,
        toolbarInline: true,
        charCounterCount: false,
        toolbarVisibleWithoutSelection: false,
        toolbarSticky: true,
        heightMin: 100,
        events : {
          'contentChanged' : function() {
            that.updateDesc();
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
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.formatDeadline();
  },
  watch: {
    task() {
      let self = this;
      self.summaryEditing = false;
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
    onContext: function (ctx) {
      let self = this;
      if (ctx.selectedYMD) {
        self.hasNotTimer = false;
        let dt = new Date(ctx.selectedYMD);
        let data = { uuid: self.task.uuid, deadline: dt.getTime(), which_field: 'deadline' };
        http.post(self.urls.task_update.format(self.team, self.project, self.issue_type), data).then(function (response) {
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
        let data = { uuid: self.task.uuid, summary: self.task.summary, which_field: 'summary' };
        http.post(self.urls.task_update.format(self.team, self.project, self.issue_type), data).then(function (response) {
          if (response.status) {
            self.$parent.task_list(self.task.uuid);
          }
        });
      }
    },
    updateDesc: function () {
      let self = this;
      if (self.task.desc) {
        let data = { uuid: self.task.uuid, desc: self.task.desc, which_field: 'desc' };
        http.post(self.urls.task_update.format(self.team, self.project, self.issue_type), data).then(function (response) {
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
</style>
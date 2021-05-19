<template>
  <div id="AddTask">
    <div style="flex: 0 0 auto;flex-direction: row;text-align: left;">
      <AddTaskButton :title="title" v-b-modal.modal-add-task></AddTaskButton>
    </div>
    <b-modal size="lg" id="modal-add-task" ref="modal" :title="title" :no-close-on-backdrop="true" cancel-title="取消" ok-title="确定" :centered="true" @show="resetModal" @hidden="resetModal" @ok="handleOk">
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
              <b-form-select id="assign-select" v-model="assignSelect" required>
                <b-form-select-option v-for="assign in assigns" :value="assign.uuid" :key="assign.uuid">
                  <User :user="assign" :hasEmail="hasEmail"/>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </div>
          <div style="flex: 1;padding: 0 10px 0 10px;">
            <b-form-group label="优先级" label-for="priority-select">
              <b-form-select id="priority-select" v-model="prioritySelect" :options="priorities" required></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div style="padding: 0 10px 0 10px;">
          <b-form-group label="描述（富文本编辑）" label-for="desc-input">
            <div style="border: 1px solid #e8e8e8;flex: 0 0 auto;margin-top: 5px;border-radius: 5px;padding: 10px;overflow: hidden;" id="desc_scrollable_container">
              <froala :config="config" v-model="desc"/>
            </div>
          </b-form-group>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import AddTaskButton from '../common/form/button';
import User from '../common/block/user';
import http from "../../utils/http";

export default {
  data: function () {
    return {
      name: '',
      desc: '',
      team: '',
      project: '',
      com: '',
      projectSelect: '',
      issueTypeSelect: '',
      assignSelect: '',
      prioritySelect: '',
      projects: [],
      issue_types: [],
      assigns: [],
      priorities: [],
      hasEmail: true,
      config: {
        placeholderText: '',
        toolbarButtons: {
          'moreText': {
            'buttons': ['undo', 'redo', 'paragraphFormat', 'fontSize', 'bold', 'italic', 'underline', 'strikeThrough',
              'subscript', 'superscript',
              'align', 'formatOL', 'formatUL', 'quote'],
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
        height: 300
      }
    }
  },
  props: {
    title: String,
    issue_type: String
  },
  watch: {
    projectSelect(n) {
      let self = this;
      self.users_list(n);
      self.issue_type_list(n);
      self.priority_list();
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    self.$root.$on('bv::modal::show', () => {
      self.project_list();
    });
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
        this.$bvModal.hide('modal-add-task')
      })
    },
    add: function () {
      let self = this;
      let data = {
        summary: self.name,
        desc: self.desc,
        priority: self.prioritySelect,
        assign: self.assignSelect,
        project: self.projectSelect,
        issue_type: self.issueTypeSelect
      }
      http.post(self.urls.task_add.format(self.team, self.project, self.issueTypeSelect), data).then(function (response) {
        if (response.data.status) {
          self.$parent.task_list(response.data.payload.uuid);
        }
      });
    },
    users_list: function (p) {
      let self = this;
      http.post(self.urls.project_role_members.format(self.team, p)).then(function (response) {
        self.assigns = response.data;
        self.assignSelect = self.assigns[0].uuid;
      });
    },
    project_list: function() {
      let self = this;
      let url = self.urls.team_project_list.format(self.team);
      http.post(url).then(function (response) {
        let dataset = response.data;
        if (dataset && dataset.length > 0) {
          for (let i=0;i<dataset.length;i++) {
            if (dataset[i].uuid === self.project) {
              self.projectSelect = self.project;
            }
            self.projects.push({ value: dataset[i].uuid, text: dataset[i].name });
          }

          if (!self.projectSelect) {
            self.projectSelect = self.projects[0].value;
          }
        }
      });
    },
    issue_type_list: function(p) {
      let self = this;
      http.get(this.urls.project_template.format(self.team, p)).then(function (response) {
        let dataset = response.data;
        if (dataset && dataset.length > 0) {
          for (let i=0;i<dataset.length;i++) {
            if (dataset[i].uuid === self.issue_type) {
              self.issueTypeSelect = self.issue_type;
            }
            self.issue_types.push({ value: dataset[i].uuid, text: dataset[i].name });
          }

          if (!self.issueTypeSelect) {
            self.issueTypeSelect = self.issue_types[0].value;
          }
        }
      });
    },
    priority_list: function() {
      let self = this;
      http.post(this.urls.issue_type_priority.format(self.team)).then(function (response) {
        let dataset = response.data.options;
        if (dataset && dataset.length > 0) {
          for (let i=0;i<dataset.length;i++) {
            if (dataset[i].default_selected) {
              self.prioritySelect = dataset[i].uuid;
            }
            self.priorities.push({ value: dataset[i].uuid, text: dataset[i].value });
          }
        }
      });
    }
  },
  components: {
    AddTaskButton,
    User
  }
}
</script>

<style scoped>

</style>
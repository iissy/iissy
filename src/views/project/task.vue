<template>
  <div class="app-row">
    <Menu tagIndex="21" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="项目管理" :items="items" :projectName="projectName" :designer="false" ref="Header"></Header>
      <div class="project-main-container">
        <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
          <div style="overflow:hidden;flex: 1;padding: 10px;flex-direction: row;height: 100%;display: flex;width: 100%;">
            <div class="right-container-inner">
              <div id="project-main" style="overflow:hidden;">
                <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
                  <div class="flex-row" style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;">
                    <div style="overflow: auto;flex: 1;display: flex;height: 100%;padding: 20px;" class="flex-column">
                      <div style="font-size: 18px;border-bottom: 1px solid #e0e0e0;flex: 0 0 auto;padding-bottom: 5px;">描述</div>
                      <div style="flex: 1;padding-top: 5px;">{{ task.desc }}</div>
                    </div>
                    <Fields :task="task" v-if="task_completed"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/component/common/header";
import Menu from "@/views/component/common/menu";
import Fields from '@/views/component/task/fields';
import http from "@/util/http";

export default {
  data() {
    return {
      team: '',
      project: '',
      issue_type: '',
      task: {},
      task_uuid: '',
      task_completed: false,
      show_desc: false,
      items: [
      ],
      projectName: ''
    }
  },
  components: {
    Fields,
    Header,
    Menu
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$route.params.issue_type;
    self.task_uuid = self.$route.params.task;

    http.get(self.urls.components.format(self.team, self.project)).then(function (response) {
      self.items = response.data;
    });

    http.get(self.urls.project_get.format(self.team, self.project)).then(function (response) {
      self.projectName = response.data.name;
    });

    self.task_get(self.task_uuid);
  },
  methods: {
    task_get: function (uuid) {
      let self = this;
      let url = self.urls.task_get.format(self.team, self.project, self.issue_type, uuid);
      http.get(url).then(function (response) {
        self.task = response.data;
        self.task_completed = true;
      });
    }
  }
}
</script>

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
#project-main { flex: 1;display: flex; }
</style>
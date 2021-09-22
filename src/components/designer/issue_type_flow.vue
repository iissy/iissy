<template>
  <div class="app-main-content ibox">
    <div style="flex: 0 0 auto;padding: 20px;" class="flex-row b-line align-items-center">
      <div style="flex: 0 0 auto;display: flex;">
        <router-link :to="{ name: 'ComponentDesigner', params: { team: team, project: project, com:'designer', attr: 'issue_type' } }">
          <span style="font-size: 18px;">工作项类型</span>
        </router-link>
      </div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="color:#909090;font-size: 18px;display: flex;">{{ title }}</div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="flex: 0 0 auto;display: flex;">
        <span style="font-size: 18px;color: #909090;">工作项工作流</span>
      </div>
      <div style="flex: auto;align-items: center;justify-content: end;" class="flex-row">
        <Summary :desc="desc"/>
      </div>
    </div>
    <div id="project-main" style="margin: 20px;">
      <div class="flex-column workFlowTable" style="border-left: 1px solid #dedede;border-top: 1px solid #dedede;">
        <div style="flex: 1;">
          <div class="flex-row" style="flex: 1;background-color: #f8f8f8;border-bottom: 1px solid #dedede;height: 60px;">
            <div style="flex: 0 0 auto;display: flex;width: 200px;height: 60px;position: relative;">
              <div style="flex: 0 0 auto;border-right: 1px solid #dedede;position: absolute;height: 60px;width: 200px;">
                <div style="" class="table-head-title">
                  <div>
                    <div class="start-status-title" style="height: initial;">开始状态</div>
                  </div>
                  <div>
                    <div class="end-status-title" style="height: initial;">目标状态</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-row align-items-center justify-content-center" style="flex: 1;padding: 0 10px;border-right: 1px solid #dedede;" v-for="h in headers" :key="h.uuid">
              <div>
                <ColorStatus :color="h.category.toString()" :name="h.name"/>
              </div>
            </div>
          </div>
        </div>
        <div style="flex: 1;" class="flex-column">
          <div class="flex-row align-items-center" style="flex: 1;border-bottom: 1px solid #dedede;" v-for="row in flows" :key="row.uuid">
            <div style="flex: 0 0 200px;padding: 0 10px;border-right: 1px solid #dedede;line-height: 48px;height: 48px;width: 200px;">
              <div class="flex-row">
                <div style="flex: 0 0 auto;">
                  <ColorStatus :color="row.category.toString()" :name="row.name"/>
                </div>
                <div v-if="row.default" style="margin-left: 5px;">
                  <div style="font-size: 12px;color: #909090;display: inline-block;height: 20px;line-height: 18px;border: 1px solid rgba(134,147,160,0.5);border-radius: 20px;padding: 0px 8px;">初始状态</div>
                </div>
              </div>
            </div>
            <div class="align-items-center flex-row justify-content-center" style="flex: 1;padding: 0 10px;border-right: 1px solid #dedede;line-height: 48px;height: 48px;" v-for="f in row.items" :key="f.uuid">
              <input style="height: 16px;width: 16px;" type="checkbox" v-model="f.sel" @change="change_task_status(f.uuid, f.name, f.start_uuid, f.end_uuid, f.sel)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../../utils/http';
import Summary from "../common/block/summary";
import ColorStatus from "../common/block/color-status";

export default {
  data: function () {
    return {
      title: '',
      team: '',
      desc: '工作流可以用于定制对应工作项的在不同状态阶段的流转。你可以在表格视图中，通过勾选复选框的方式新建工作流步骤。你也可以切换到详情视图中新建工作流步骤。',
      flows: [],
      headers: [],
      lock: true
    };
  },
  created: function () {
    let self = this;
    self.title = self.$route.params.title;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$route.params.issue_type;
    self.issue_type_get();
    self.project_issue_type_flow();
  },
  methods: {
    change_task_status: function(uuid, name, start, end, state) {
      let self = this;
      if (self.lock) {
        self.lock = false;
        let param = { uuid: uuid, name: name, start_status: start, end_status: end, state: state }
        http.post(this.urls.project_issue_type_flow_submit.format(self.team, self.project, self.issue_type), param).then(function () {
          self.project_issue_type_flow();
          self.lock = true;
        });
      }
    },
    issue_type_get: function() {
      let self = this;
      if (!self.title) {
        http.get(this.urls.issue_type_get.format(self.team, self.issue_type)).then(function (response) {
          self.title = response.data.name;
        });
      }
    },
    project_issue_type_flow: function() {
      let self = this;
      http.get(this.urls.project_issue_type_flow.format(self.team, self.project, self.issue_type)).then(function (response) {
        self.headers = response.data.headers;
        self.flows = response.data.flows;
      });
    },
  },
  components: {
    Summary,
    ColorStatus
  }
};
</script>

<style scoped>
.workFlowTable .table-head-title {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  position: relative;
  height: inherit;
  background: #f8f8f8;
  border-bottom: 1px solid #dedede;
}
.workFlowTable .table-head-title:before {
  content: "";
  width: 100%;
  height: 50px;
  position: absolute;
  box-sizing: border-box;
  border-bottom: 1px solid #dedede;
  left: 0;
  top: -19px;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
  -webkit-transform: rotateZ(16deg) scale(1.04);
  transform: rotateZ(16deg) scale(1.04);
}

.workFlowTable .start-status-title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 15px;
  font-weight: 500;
}
.workFlowTable .end-status-title {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 15px;
  font-weight: 500;
}
</style>
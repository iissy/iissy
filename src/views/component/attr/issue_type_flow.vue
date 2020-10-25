<template>
  <div class="app-main-content" style="padding: 20px;">
    <div style="margin-bottom: 20px;background-color: #f0f0f0;padding: 10px;border-radius: 3px;" class="flex-row align-items-center">
      <div style="flex: 0 0 auto;display: flex;">
        <router-link :to="{ name: 'ComponentDesigner', params: { team: team, project: project, com:'designer', attr: 'issue_type' } }">
          <span style="font-size: 16px;">工作项类型</span>
        </router-link>
      </div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="color:#909090;font-size: 16px;display: flex;">{{ title }}</div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="flex: 0 0 auto;display: flex;">
        <span style="font-size: 16px;color: #909090;">工作项工作流</span>
      </div>
    </div>
    <Summary :desc="desc"/>
    <div id="project-main">
      <div class="flex-column workFlowTable" style="border-left: 1px solid #dedede;border-top: 1px solid #dedede;">
        <div style="flex: 1;">
          <div class="flex-row" style="flex: 1;background-color: #f8f8f8;border-bottom: 1px solid #dedede;height: 60px;">
            <div style="flex: 0 0 auto;display: flex;width: 200px;height: 60px;">
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
                {{ h.name }}
              </div>
            </div>
          </div>
        </div>
        <div style="flex: 1;" class="flex-column">
          <div class="flex-row align-items-center" style="flex: 1;border-bottom: 1px solid #dedede;" v-for="row in flows" :key="row.uuid">
            <div style="flex: 0 0 200px;padding: 0 10px;border-right: 1px solid #dedede;line-height: 48px;height: 48px;width: 200px;">{{ row.name }}</div>
            <div class="align-items-center flex-row justify-content-center" style="flex: 1;padding: 0 10px;border-right: 1px solid #dedede;line-height: 48px;height: 48px;" v-for="f in row.items" :key="f.uuid">
              <input style="height: 16px;width: 16px;" type="checkbox" v-model="f.sel"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/util/http';
import Summary from "@/views/component/common/block/summary";

export default {
  data: function () {
    return {
      title: '',
      team: '',
      items: [],
      desc: '工作流可以用于定制对应工作项的在不同状态阶段的流转。你可以在表格视图中，通过勾选复选框的方式新建工作流步骤。你也可以切换到详情视图中新建工作流步骤。',
      flows: [
        {uuid: 'a', name: 'a', items: [{ uuid: 'a-a', sel: false }, { uuid: 'a-b', sel: false }, { uuid: 'a-c', sel: true }]},
        {uuid: 'b', name: 'b', items: [{ uuid: 'b-a', sel: false }, { uuid: 'b-b', sel: false }, { uuid: 'b-c', sel: true }]},
        {uuid: 'c', name: 'c', items: [{ uuid: 'c-a', sel: false }, { uuid: 'c-b', sel: false }, { uuid: 'c-c', sel: false }]}
      ],
      headers: [{ uuid: 'a', name: 'a' }, { uuid: 'b', name: 'b' }, { uuid: 'c', name: 'c' }]
    };
  },
  created: function () {
    let self = this;
    self.title = self.$route.params.title;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$route.params.issue_type;
    self.project_status();
    self.issue_type_get();
    self.project_issue_type_status();
  },
  methods: {
    project_status: function() {
      let self = this;
      http.post(this.urls.project_status.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    },
    issue_type_get: function() {
      let self = this;
      if (!self.title) {
        http.get(this.urls.issue_type_get.format(self.team, self.issue_type)).then(function (response) {
          self.title = response.data.name;
        });
      }
    },
    project_issue_type_status: function() {
      let self = this;
      http.get(this.urls.project_issue_type_status.format(self.team, self.project, self.issue_type)).then(function (response) {
        self.headers = response.data.headers;
        self.flows = response.data.flows;
      });
    },
  },
  components: {
    Summary
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
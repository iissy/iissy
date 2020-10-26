<template>
  <div style="width: 800px;display: flex;height: 100%;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8;flex-direction: column;">
    <div style="flex-direction: column;flex: 1;display: flex;overflow: auto;padding: 20px;">
      <div class="flex-row" style="width: 100%;padding-bottom: 10px;">
        <div style="flex: 1;">#{{ task.number }}</div>
        <div style="flex: 0 0 auto;">
          <svg t="1601948666806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10407" width="20" height="20"><path d="M509.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10408"></path><path d="M849.1 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10409"></path><path d="M174.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10410"></path></svg>
        </div>
      </div>
      <div class="flex-row" style="width: 100%;padding-bottom: 20px;">
        <div style="flex: 1;font-size: 18px;text-shadow: #EEE 1px 1px 1px;color: #4F4F4F;letter-spacing: 1px;">
          {{ task.summary }}
        </div>
      </div>
      <div class="flex-row" style="width: 100%;padding: 0 10px 10px 10px;justify-content: space-between;">
        <div style="flex: 0 0 auto;text-align: center;">
          <Assign :user="task.assign"></Assign>
        </div>
        <div style="flex: 0 0 auto;text-align: center;">
          <TaskStatus :status="task.task_status"></TaskStatus>
        </div>
        <div style="flex: 0 0 auto;text-align: center;">
          <TaskPriority :option="task.priority"></TaskPriority>
        </div>
      </div>
      <div style="margin-top: 10px;">
        描述
      </div>
      <div style="min-height: 100px;border: 1px solid #e8e8e8;flex: 0 0 auto;padding: 10px;margin-top: 5px;">
        {{ task.desc }}
      </div>
      <div>
        <Link name="全屏查看" icon="MemberSetting" :to="{ name: 'MemberSetting', params: { team: team } }" />
      </div>
      <Fields/>
    </div>
    <div style="flex: 0 0 auto;border-top: 1px solid #e8e8e8;padding: 10px;">关注我</div>
  </div>
</template>

<script>
import Assign from '@/views/component/task/assign';
import TaskStatus from '@/views/component/task/status';
import TaskPriority from '@/views/component/task/priority';
import Fields from '@/views/component/task/fields';
import http from "@/util/http";

export default {
  data() {
    return {
      team: '',
      project: '',
      issue_type: '',
      task: '',
      task_uuid: ''
    }
  },
  components: {
    Assign,
    TaskStatus,
    TaskPriority,
    Fields
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$route.params.issue_type;
    self.task_uuid = self.$route.params.task;
    self.task_get(self.task_uuid);
  },
  methods: {
    task_get: function (uuid) {
      let self = this;
      let url = self.urls.task_get.format(self.team, self.project, self.issue_type, uuid);
      http.get(url).then(function (response) {
        self.task = response.data;
      });
    }
  }
}
</script>

<style scoped>

</style>
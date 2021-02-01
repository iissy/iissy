<template>
  <div>
    <div class="flex-row header-container-inner" style="border-radius: 3px;flex: 1;padding: 15px;margin: 10px;">
      <div style="flex: 1;" class="flex-row align-items-center">
        <div style="font-size: 18px;">仪表盘</div>
      </div>
      <div style="flex: 0 0 auto;" class="flex-row">
        <div style="flex: 1;"></div>
        <div style="flex: 0 0 auto;border: 1px solid #d9d9d9;padding: 3px 10px;border-radius: 3px;cursor: pointer;" class="flex-row">
          <div><b-icon icon="arrows-fullscreen"/></div>
          <div style="margin-left: 5px;">全屏模式</div>
        </div>
      </div>
    </div>
    <div class="flex-row" style="padding: 0 10px;">
      <Tasks :tasks="tasks_assign" title="我负责的工作项"/>
      <Tasks style="margin-left: 10px;" :tasks="tasks_owner" title="我提交的工作项"/>
      <Tasks style="margin-left: 10px;" :tasks="tasks_watcher" title="我关注的工作项"/>
    </div>
  </div>
</template>

<script>
import http from "../../../scripts/http";
import Tasks from "./tasks";

export default {
  data() {
    return {
      tasks_assign: [],
      tasks_owner: [],
      tasks_watcher: []
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.task_list();
  },
  created() {
  },
  methods: {
    task_list: function () {
      let self = this;
      http.post(self.urls.task_list_by_assign.format(self.team)).then(function (response) {
        self.tasks_assign = response.data;
      });

      http.post(self.urls.task_list_by_owner.format(self.team)).then(function (response) {
        self.tasks_owner = response.data;
      });

      http.post(self.urls.task_list_by_watcher.format(self.team)).then(function (response) {
        self.tasks_watcher = response.data;
      });
    }
  },
  components: {
    Tasks
  }
}
</script>

<style scoped>

</style>
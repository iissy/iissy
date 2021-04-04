<template>
  <div class="flex-column" style="margin: 20px;flex: 1;">
    <div class="flex-row" style="flex: 0 0 auto;padding: 0;">
      <div style="flex: 1;" class="flex-row align-items-center">
        <div style="font-size: 18px;">仪表盘</div>
      </div>
    </div>
    <div class="flex-row" style="padding: 20px 0 0 0;flex: 1;">
      <Tasks :tasks="tasks_assign" :count="tasks_assign_size" v-if="tasks_assign_size > 0" title="我负责的工作项"/>
      <Tasks style="margin-left: 20px;" :tasks="tasks_owner" :count="tasks_owner_size" v-if="tasks_owner_size > 0" title="我提交的工作项"/>
      <Tasks style="margin-left: 20px;" :tasks="tasks_watcher" :count="tasks_watcher_size" v-if="tasks_watcher_size > 0" title="我关注的工作项"/>
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
      tasks_watcher: [],
      tasks_assign_size: 0,
      tasks_owner_size: 0,
      tasks_watcher_size: 0
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
        if (self.tasks_assign && self.tasks_assign.length > 0) {
          self.tasks_assign_size = self.tasks_assign.length
        }
      });

      http.post(self.urls.task_list_by_owner.format(self.team)).then(function (response) {
        self.tasks_owner = response.data;
        if (self.tasks_owner && self.tasks_owner.length > 0) {
          self.tasks_owner_size = self.tasks_owner.length
        }
      });

      http.post(self.urls.task_list_by_watcher.format(self.team)).then(function (response) {
        self.tasks_watcher = response.data;
        if (self.tasks_watcher && self.tasks_watcher.length > 0) {
          self.tasks_watcher_size = self.tasks_watcher.length
        }
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
<template>
  <div class="flex-row" style="padding: 20px 10px;">
    <Tasks :tasks="tasks_assign" title="我负责的工作项"/>
    <Tasks style="margin-left: 10px;" :tasks="tasks_owner" title="我提交的工作项"/>
    <Tasks style="margin-left: 10px;" :tasks="tasks_watcher" title="我关注的工作项"/>
  </div>
</template>

<script>
import http from "@/util/http";
import Tasks from "@/views/component/workbench/tasks";

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
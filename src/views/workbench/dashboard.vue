<template>
  <div class="flex-column" style="margin: 20px;flex: 1;">
    <div class="flex-row" style="flex: 0 0 auto;padding: 0;">
      <div style="flex: 1;" class="flex-row align-items-center">
        <div style="font-size: 18px;">仪表盘</div>
      </div>
    </div>
    <div class="flex-row" style="padding: 20px 0 0 0;flex: 1;">
      <Tasks :tasks="tasks_assign" :count="tasks_assign.length" v-if="tasks_assign.length > 0" title="我负责的工作项"/>
      <Tasks style="margin-left: 20px;" :tasks="tasks_owner" :count="tasks_owner.length" v-if="tasks_owner.length > 0" title="我提交的工作项"/>
      <Tasks style="margin-left: 20px;" :tasks="tasks_watcher" :count="tasks_watcher.length" v-if="tasks_watcher.length > 0" title="我关注的工作项"/>
      <Tasks style="margin-left: 20px;" :tasks="tasks_done" :count="tasks_done.length" v-if="tasks_done.length > 0" title="完成的工作项"/>
    </div>
  </div>
</template>

<script>
import http from "../../utils/http";
import Tasks from "../../components/workbench/tasks";

export default {
  data() {
    return {
      tasks_assign: [],
      tasks_owner: [],
      tasks_watcher: [],
      tasks_done: []
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
        if (response.data && response.data.length > 0) {
          for (let i=0;i<response.data.length;i++) {
            if (response.data[i].category === 3) {
              let none = true;
              for (let j=0;j<self.tasks_done.length;j++) {
                if (self.tasks_done[j].uuid === response.data[i].uuid) {
                  none = false;
                  break;
                }
              }
              if (none) {
                self.tasks_done.push(response.data[i]);
              }
            } else {
              self.tasks_assign.push(response.data[i]);
            }
          }
        }
      });

      http.post(self.urls.task_list_by_owner.format(self.team)).then(function (response) {
        if (response.data && response.data.length > 0) {
          for (let i=0;i<response.data.length;i++) {
            if (response.data[i].category === 3) {
              let none = true;
              for (let j=0;j<self.tasks_done.length;j++) {
                if (self.tasks_done[j].uuid === response.data[i].uuid) {
                  none = false;
                  break;
                }
              }
              if (none) {
                self.tasks_done.push(response.data[i]);
              }
            } else {
              self.tasks_owner.push(response.data[i]);
            }
          }
        }
      });

      http.post(self.urls.task_list_by_watcher.format(self.team)).then(function (response) {
        if (response.data && response.data.length > 0) {
          for (let i=0;i<response.data.length;i++) {
            if (response.data[i].category === 3) {
              let none = true;
              for (let j=0;j<self.tasks_done.length;j++) {
                if (self.tasks_done[j].uuid === response.data[i].uuid) {
                  none = false;
                  break;
                }
              }
              if (none) {
                self.tasks_done.push(response.data[i]);
              }
            } else {
              self.tasks_watcher.push(response.data[i]);
            }
          }
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
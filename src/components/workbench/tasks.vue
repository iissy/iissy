<template>
  <div style="flex: 1;overflow:hidden;max-width: 360px;" class="flex-row">
    <div class="flex-column" style="border: 1px solid #eef2f7;border-radius: 3px;flex: 1;overflow:hidden;">
      <div style="flex: 0 0 auto;padding: 15px 20px;font-weight: 700;background-color: #f1f3fa;border-radius: 3px 3px 0 0;">{{ title }} ({{ count }})</div>
      <div style="flex: 1;overflow-y: auto;" class="flex-column">
        <div id="task-list" style="padding: 0 15px 15px 15px;background-color: #fafbfe;height: 0;" class="flex-column">
          <div v-for="t in tasks" v-bind:key="t.uuid" class="task-item" style="flex: 0 0 auto;">
            <div :title="t.summary" style="border: none;background-color: #ffffff;flex: 1;padding: 20px;margin-top: 15px;border-radius: 5px;box-shadow: 0 0 35px 0 rgba(154,161,171, 0.15);">
              <div class="flex-row">
                <div style="flex: 0 0 auto;">
                  <Priority :color="t.priority.color" :name="t.priority.value" :bgColor="t.priority.background_color"/>
                </div>
                <div style="flex: 1;" class="flex-row">
                  <div style="flex: 1;">
                    &nbsp;
                  </div>
                  <div style="flex: 0 0 auto;">
                    <div style="color: #98a6ad;font-size: 12px;">{{t.create_time | formatDay}}</div>
                  </div>
                </div>
              </div>
              <div style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;font-weight: 600;margin: 15px 0;cursor: pointer;max-width: 288px;">{{t.summary}}</div>
              <div class="flex-row">
                <div style="flex: 0 0 30px;">
                  <b-icon icon="diagram3-fill" scale="1.2"/>
                </div>
                <div style="flex: 1;">
                  <router-link :to="{ name:'Project', params: { team: team, project: t.project.uuid } }">{{t.project.name}}</router-link>
                </div>
              </div>
              <div class="flex-row" style="margin-top: 15px;">
                <div style="flex: 1;">
                  <User :user="t.owner"/>
                </div>
                <div style="flex: 0 0 auto;">
                  <Status :name="t.task_status.name" :color="t.task_status.category.toString()"/>
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
import Priority from "../common/block/priority";
import Status from '../common/block/status';
// import router from "../../router";
import User from "../common/block/suser";

export default {
  data() {
    return {
      team: ''
    }
  },
  props: {
    title: String,
    tasks: Array,
    hasEmail: Boolean,
    count: Number
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
  },
  // methods: {
  //   task_get: function (taskUUID) {
  //     let self = this;
  //     let path = { name: 'TaskInTeam', params: { team: self.team, type: 'filters', task: taskUUID } };
  //     router.push(path);
  //   }
  // },
  components: {
    Priority,
    Status,
    User
  }
}
</script>

<style scoped>

</style>
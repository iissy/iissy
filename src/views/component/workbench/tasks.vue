<template>
  <div style="flex: 0 0 400px;">
    <div class="flex-column" style="border: 1px solid #eef2f7;border-radius: 3px;">
      <div style="flex: 0 0 auto;padding: 15px 20px;font-weight: 700;background-color: #f1f3fa;border-radius: 3px 3px 0 0;">{{ title }} ({{ count }})</div>
      <div id="task-list" style="flex: 0 0 auto;padding: 0 15px 20px 15px;overflow: auto;background-color: #fafbfe;" class="flex-column">
        <div v-for="t in tasks" v-bind:key="t.uuid" class="flex-row task-item">
          <div style="border: 1px solid #f8f8f8;background-color: #ffffff;flex: 1;padding: 20px;margin-top: 20px;border-radius: 5px;">
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
            <div style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;font-weight: 600;margin: 15px 0;cursor: pointer;max-width: 328px;" @click="task_get(t.uuid)">{{t.summary}}</div>
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
</template>

<script>
import Priority from "../common/block/priority";
import Status from '../common/block/status';
import router from "../../../router";
import User from "../common/block/suser";

export default {
  data() {
    return {
    }
  },
  props: {
    title: String,
    tasks: Array,
    hasEmail: Boolean,
    count: Number
  },
  methods: {
    task_get: function (taskUUID) {
      let self = this;
      self.team = self.$route.params.team;
      let path = { name: 'TaskInTeam', params: { team: self.team, type: 'filters', task: taskUUID } };
      router.push(path);
    }
  },
  components: {
    Priority,
    Status,
    User
  }
}
</script>

<style scoped>

</style>
<template>
  <div style="flex: 1;padding: 20px;" class="g-container">
    <div>{{ title }}</div>
    <div style="font-size: 12px;color: #909090;">共 29 个工作项</div>
    <div id="task-list" style="overflow: auto;margin-top: 10px;flex: 0 0 auto;" class="flex-column">
      <div v-for="t in tasks" v-bind:key="t.uuid" class="flex-row task-item">
        <div class="flex-row" style="border-bottom: 1px solid #f8f8f8;flex: 1;padding: 10px 0;cursor: pointer;" @click="task_get(t.uuid)">
          <div style="flex: 0 0 auto;" class="flex-row">
            <Priority :color="t.priority.color" :name="t.priority.value" :bgColor="t.priority.background_color"/>
            <div style="flex: 0 0 auto;margin-left: 5px;background-color: #efefef;border-radius: 4px!important;padding: 0 6px 0 6px;height: 20px;">{{t.owner.name}}</div>
          </div>
          <div style="flex: 1;margin-left: 10px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;width: 0px;">{{t.summary}}</div>
          <div style="flex: 0 0 auto;">
            <Status :name="t.task_status.name" :color="t.task_status.category.toString()"/>
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

export default {
  data() {
    return {
    }
  },
  props: {
    title: String,
    tasks: Array
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
    Status
  }
}
</script>

<style scoped>

</style>
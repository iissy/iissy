<template>
  <div id="popover-priority" class="flex-row assign align-items-center" hidefocus="true" tabindex="0">
    <div style="flex: 0 0 28px;color: #DAA520;">
      <b-icon icon="star-fill" scale="2"/>
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ priority.value }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">优先级</div>
    </div>
    <b-popover ref="popover" target="popover-priority" triggers="focus" placement="bottom">
      <div style="max-height: 234px;overflow-y:auto;overflow-x: hidden;">
        <div style="padding: 5px 10px;font-size: 15px;" class="b-line">更改优先级</div>
        <div v-for="op in options" :key="op.uuid">
          <div @click="change_priority(op.uuid)" :class="{selected: priority.uuid === op.uuid}" class="status-item flex-row align-items-center">
            <div style="flex: 0 0 auto;">{{ op.value }}</div>
            <div v-if="priority.uuid === op.uuid"  style="flex: 1;" class="flex-row align-items-center">
              <div style="flex: 1;min-width:50px;"></div>
              <div style="flex: 0 0 auto;display: flex;align-items: center;text-align: right;">
                <b-icon icon="check" scale="1.5"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-popover>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import http from "../../utils/http";
import Alert from '../common/block/alert';

export default {
  data() {
    return {
      team: '',
      options: []
    }
  },
  props: {
    project: String,
    priority: Object,
    task_uuid: String
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.priority_options_get();
  },
  methods: {
    priority_options_get: function() {
      let self = this;
      http.get(self.urls.priority_options_get.format(self.team)).then(function (response) {
            self.options = response.data;
      });
    },
    change_priority: function (priorityUUID) {
      let self = this;
      let param = { priority: priorityUUID }
      http.post(self.urls.task_change_priority.format(self.team, self.task_uuid), param).then(function (response) {
        if (response.data.code === 200) {
          self.$refs.popover.$emit('close');
          self.$refs.alert.success('更新成功');
          self.$parent.$parent.task_list();
        }
      }).catch(function (err) {
        self.$refs.popover.$emit('close');
        self.$refs.alert.danger(err.response.data.errcode);
      });
    }
  },
  components: {
    Alert
  }
}
</script>

<style scoped>
.assign { border-radius: 30px;cursor: pointer;padding: 5px 20px 5px 5px;box-shadow: none;outline: none; }
.status-item { padding: 5px 10px 5px 10px;border-radius: 0.3rem;cursor: pointer; }
.status-item:hover { background-color: #F0F8FF; }
.selected div { color: #17C4BB; }
.assign:hover { background-color: #F0F8FF; }
</style>
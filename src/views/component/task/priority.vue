<template>
  <div id="popover-priority" class="flex-row assign align-items-center" hidefocus="true" tabindex="0">
    <div style="flex: 0 0 auto;">
      <svg t="1601947067356" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9171" width="30" height="30"><path d="M967.111111 477.297778a63.146667 63.146667 0 0 0-36.693333-113.777778l-256-9.671111a6.542222 6.542222 0 0 1-5.688889-4.266667l-88.462222-238.933333a63.146667 63.146667 0 0 0-118.613334 0l-88.177777 239.786667a6.542222 6.542222 0 0 1-5.688889 4.266666l-256 9.671111a63.146667 63.146667 0 0 0-36.693334 113.777778l200.817778 157.866667a6.542222 6.542222 0 0 1 2.275556 6.826666l-69.12 244.906667a63.146667 63.146667 0 0 0 96.142222 69.688889l212.195555-142.222222a6.257778 6.257778 0 0 1 7.111112 0l212.195555 142.222222a62.577778 62.577778 0 0 0 72.533333 0 62.577778 62.577778 0 0 0 23.608889-68.266667l-69.688889-245.76a6.229333 6.229333 0 0 1 2.275556-6.826666l201.671111-159.288889z" p-id="9172" fill="#DAA520"></path></svg>
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ priority.value }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">优先级</div>
    </div>
    <b-popover ref="popover" target="popover-priority" triggers="focus" placement="bottom">
      <div style="max-height: 234px;overflow-y:auto;overflow-x: hidden;">
        <div style="padding: 5px 10px;font-size: 15px;border-bottom: 1px solid #e8e8e8;">更改优先级</div>
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
import http from "@/scripts/http";
import Alert from '@/views/component/common/block/alert';

export default {
  data() {
    return {
      team: '',
      project: '',
      options: []
    }
  },
  props: {
    priority: Object,
    task_uuid: String
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
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
      http.post(self.urls.task_change_priority.format(self.team, self.project, self.task_uuid), param).then(function (response) {
        if (response.data.status) {
          self.$refs.popover.$emit('close')
          self.$refs.alert.success('更新成功');
          self.$parent.$parent.task_list();
        } else {
          self.$refs.alert.danger('更新失败');
        }
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
</style>
<template>
  <div id="popover-status" class="flex-row assign align-items-center" hidefocus="true" tabindex="0">
    <div style="flex: 0 0 28px;color: #17C4BB;">
      <b-icon icon="arrow-right-circle-fill" scale="2"/>
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ status.name }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">当前状态</div>
    </div>
    <b-popover ref="popover" target="popover-status" triggers="focus" placement="bottom">
      <div style="max-height: 234px;overflow-y:auto;overflow-x: hidden;">
        <div style="padding: 5px 10px;font-size: 15px;" class="b-line">选择步骤更改状态</div>
        <div v-for="s in statuses" :key="s.uuid">
          <div @click="change_status(s.uuid)" class="status-item">{{ s.name }}</div>
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
      statuses: []
    }
  },
  props: {
    status: Object,
    project: String,
    issue_type: String,
    task_uuid: String
  },
  watch: {
    status(n, o) {
      if (n.uuid !== o.uuid) {
        this.next_status_list();
      }
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.next_status_list();
  },
  methods: {
    next_status_list: function () {
      let self = this;
      http.post(self.urls.next_status_list.format(self.team, self.project, self.issue_type, self.status.uuid)).then(function (response) {
        self.statuses = response.data;
      });
    },
    change_status: function (statusUUID) {
      let self = this;
      let param = { status: statusUUID }
      http.post(self.urls.task_change_status.format(self.team, self.task_uuid), param).then(function (response) {
        if (response.data.code === 200) {
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
.assign:hover { background-color: #F0F8FF; }
</style>
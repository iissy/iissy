<template>
  <div id="popover-status" class="flex-row assign align-items-center" hidefocus="true" tabindex="0">
    <div style="flex: 0 0 auto;">
      <svg t="1601946544912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7757" width="30" height="30"><path d="M530.070588 48.188235C295.152941 48.188235 102.4 246.964706 102.4 481.882353s192.752941 433.694118 433.694118 433.694118S963.764706 716.8 963.764706 481.882353 771.011765 48.188235 530.070588 48.188235zM530.070588 855.341176c-204.8 0-373.458824-168.658824-373.458824-373.458824s168.658824-373.458824 373.458824-373.458824S903.529412 277.082353 903.529412 481.882353 734.870588 855.341176 530.070588 855.341176z" fill="#228B22" p-id="7758"></path><path d="M530.070588 337.317647 638.494118 445.741176 313.223529 445.741176 313.223529 505.976471 650.541176 505.976471 530.070588 626.447059 572.235294 668.611765 758.964706 481.882353 572.235294 295.152941Z" fill="#228B22" p-id="7759"></path></svg>
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ status.name }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">当前状态</div>
    </div>
    <b-popover ref="popover" target="popover-status" triggers="focus" placement="bottom">
      <div style="max-height: 234px;overflow-y:auto;overflow-x: hidden;">
        <div style="padding: 5px 10px;font-size: 15px;border-bottom: 1px solid #e8e8e8;">选择步骤更改状态</div>
        <div v-for="s in statuses" :key="s.uuid">
          <div @click="change_status(s.uuid)" class="status-item">{{ s.name }}</div>
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
      statuses: []
    }
  },
  props: {
    status: Object,
    issue_type: String,
    task_uuid: String
  },
  watch: {
    status() {
      this.next_status_list();
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
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
      http.post(self.urls.task_change_status.format(self.team, self.project, self.task_uuid), param).then(function (response) {
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
</style>
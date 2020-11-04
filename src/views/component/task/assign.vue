<template>
  <div id="popover-assign" class="flex-row assign align-items-center" hidefocus="true" tabindex="0">
    <div style="flex: 0 0 auto;">
      <img src="/images/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ user.name }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">负责人</div>
    </div>
    <b-popover ref="popover" target="popover-assign" triggers="focus" placement="bottom">
      <div style="padding: 5px;">
        <Search placeholder="搜索工作项负责人"/>
      </div>
      <div style="max-height: 180px;overflow-y:auto;overflow-x: hidden;">
        <div v-for="u in users" :key="u.uuid">
          <User @submit="change_assign" style="padding: 5px 10px;border-radius: 0.3rem;" :user="u" :hasEmail="hasEmail"/>
        </div>
      </div>
    </b-popover>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import http from "@/scripts/http";
import User from '@/views/component/common/block/user';
import Search from '@/views/component/common/form/search';
import Alert from '@/views/component/common/block/alert';

export default {
  data() {
    return {
      users: [],
      hasEmail: true
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.users_list();
  },
  methods: {
    users_list: function () {
      let self = this;
      http.post(self.urls.project_role_members.format(self.team, self.project)).then(function (response) {
        self.users = response.data;
      });
    },
    change_assign: function (uuid) {
      let self = this;
      let param = { uuid: uuid }
      http.post(self.urls.task_change_assign.format(self.team, self.project, self.task), param).then(function (response) {
        if (response.data.status) {
          self.$refs.popover.$emit('close')
          self.$refs.alert.success('更新成功');
          self.$parent.$parent.task_get(self.task);
        } else {
          self.$refs.alert.danger('更新失败');
        }
      });
    }
  },
  props: {
    user: Object,
    task: String
  },
  components: {
    User,
    Search,
    Alert
  }
}
</script>

<style scoped>
#popover-assign { box-shadow: none;outline: none; }
#popover-assign.assign { border-radius: 30px;cursor: pointer;padding: 5px 20px 5px 5px; }
#popover-assign.assign:hover { background-color: #F0F8FF; }
</style>
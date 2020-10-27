<template>
  <div id="popover-assign" class="flex-row assign align-items-center" tabindex="0">
    <div style="flex: 0 0 auto;">
      <img src="/images/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ user.name }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">负责人</div>
    </div>
    <b-popover target="popover-assign" triggers="focus" placement="bottom">
      <div v-for="u in users" :key="u.uuid">
        <User style="padding: 5px 10px;border-radius: 0.3rem;" :user="u" :hasEmail="hasEmail"/>
      </div>
    </b-popover>
  </div>
</template>

<script>
import http from "@/util/http";
import User from '@/views/component/common/block/user';

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
    }
  },
  props: {
    user: Object
  },
  components: {
    User
  }
}
</script>

<style scoped>
#popover-assign { box-shadow: none;outline: none; }
#popover-assign.assign { border-radius: 30px;cursor: pointer;padding: 5px 20px 5px 5px; }
#popover-assign.assign:hover { background-color: #F0F8FF; }
</style>
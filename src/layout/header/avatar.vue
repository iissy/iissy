<template>
  <div class="flex-row avatar-container">
    <div class="flex-row align-items-center avatar-header-person-plus">
      <router-link :to="{ name: 'TeamSetting', params: { team: team, type: 'member', title: '组织架构' } }"><b-icon icon="person-plus" scale="1.5"/></router-link>
    </div>
    <div id="popover-user-center" class="avatar-center" hidefocus="true" tabindex="0">
      <div class="align-items-center flex-row avatar-center-icon">
        <img :src="user.avatar"/>
      </div>
    </div>

    <b-popover
        target="popover-user-center"
        placement="bottom"
        triggers="focus"
        :boundary-padding="10"
        :show.sync="show">
      <div class="flex-column avatar-dropdown">
        <div class="avatar-dropdown-header">
          <div>{{user.name}}</div>
          <div class="dropdown-email">{{user.email}}</div>
        </div>
        <div class="avatar-dropdown-line"></div>
        <div class="avatar-dropdown-item">
          <div @click="goto('account')">账号设置</div>
        </div>
        <div class="avatar-dropdown-item">
          <div @click="goto('safe')">安全设置</div>
        </div>
        <div class="avatar-dropdown-item">
          <div @click="goto('certificate')">登录凭证</div>
        </div>
        <div class="avatar-dropdown-line"></div>
        <div class="avatar-dropdown-item">
          <div @click="logout('Logout')">注销</div>
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
import router from "@/router";
import http from "@/utils/http";
import { getUser } from "@/filters";

export default {
  data() {
    return {
      show: false,
      user: {},
      team: ''
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.get_user();
  },
  methods: {
    goto: function (name) {
      let self = this;
      self.show = false;
      if (self.$route.params.type !== name) {
        router.push({ name: 'Center', params: {type: name}});
      }
    },
    get_user: function() {
      let self = this;
      let url = self.urls.team_user_get.format(self.team, getUser());
      http.get(url).then(function (response) {
        self.user = response.data;
      });
    },
    logout: function (name) {
      router.push({ name: name });
    }
  }
}
</script>

<style scoped>
.avatar-container { height: var(--task-line-height);width: 80px; }
.avatar-center { flex: 1;align-items: center;display: flex;padding-left: 20px;overflow: hidden;box-shadow: none;outline: none;cursor: pointer; }
.avatar-center-icon { flex: 0 0 auto;border-radius: 30px; }
.avatar-center-icon img { height: 30px;width: 30px;border-radius: 30px; }
.avatar-dropdown { min-width: 188px; }
.avatar-dropdown-item, .avatar-dropdown-header { flex: 1;padding: 0 20px 0 20px;letter-spacing: 1px;line-height: 30px; }
.avatar-dropdown-header div { text-align: left;color: #98a6ad;font-weight: bolder;line-height: initial; }
.avatar-dropdown-header div.dropdown-email { font-size: 12px;font-weight: initial; }
.avatar-dropdown-item div { display: block;text-decoration: none;cursor: pointer; }
.avatar-dropdown-item:hover { background-color: #eff6fd;border-radius: 0.3rem; }
.avatar-dropdown-line { border-bottom: 1px solid #e0e0e0;height: 1px;margin: 3px 0; }
</style>
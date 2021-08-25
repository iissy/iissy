<template>
  <div style="flex: 0 0 auto;height: 48px;" class="flex-row">
    <div style="flex: 0 0 auto;" class="flex-row align-items-center">
      <div style="flex: 1;color: #98a6ad;">
        <b-icon icon="person-plus" scale="1.5"/>
      </div>
    </div>

    <b-popover
        target="popover-user-center"
        placement="bottom"
        triggers="focus"
        :boundary-padding="10"
        :show.sync="show">
      <div class="flex-column" id="center">
        <div class="menu-header">
          <div style="text-align: left;color: #98a6ad;font-weight: bolder;line-height: initial;">{{user.name}}</div>
          <div style="text-align: left;color: #98a6ad;font-size: 12px;line-height: initial;">{{user.email}}</div>
        </div>
        <div class="menu-line"></div>
        <div class="menu-item">
          <div @click="goto('account')">账号设置</div>
        </div>
        <div class="menu-item">
          <div @click="goto('safe')">安全设置</div>
        </div>
        <div class="menu-item">
          <div @click="goto('certificate')">登录凭证</div>
        </div>
        <div class="menu-line"></div>
        <div class="menu-item">
          <div @click="logout('Logout')">注销</div>
        </div>
      </div>
    </b-popover>

    <div id="popover-user-center" style="flex: 1;align-items: center;display: flex;padding-left: 20px;overflow: hidden;margin-right: 20px;box-shadow: none;outline: none;cursor: pointer;" hidefocus="true" tabindex="0">
      <div class="flex-row">
        <div style="flex: 0 0 40px;" class="align-items-center flex-row">
          <img src="/images/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
        </div>
      </div>
    </div>
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
      user: {}
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
      let url = self.urls.user_get.format(self.team, getUser());
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
#center { min-width: 188px; }
.menu-item, .menu-header { flex: 1;padding: 0 20px 0 20px;letter-spacing: 1px;line-height: 30px; }
.menu-item div { display: block;text-decoration: none;cursor: pointer; }
.menu-item:hover { background-color: #eff6fd;border-radius: 0.3rem; }
.menu-item:hover div { color: inherit; }
.menu-line { border-bottom: 1px solid #e0e0e0;height: 1px;margin: 3px 0; }
</style>
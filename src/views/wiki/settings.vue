<template>
  <div class="app-column">
    <Header ref="Header" :page="page"/>
    <div class="flex-row rightMain" style="overflow: hidden;">
      <div class="space-group-setting" style="flex: 0 0 300px;padding: 20px 0 0 20px;">
        <div class="flex-row align-items-center" style="flex: 0;width: 100%;margin-bottom: 10px;cursor: pointer;" @click="toSpace">
          <div style="color: #444444;">
            <b-icon icon="arrow-left-circle-fill" scale="1.5"/>
          </div>
          <div style="margin-left: 10px;font-size: 18px;">
            文档配置中心
          </div>
        </div>
        <div :class="{active: (tagIndex === 1)}"><router-link :to="{name:'SpaceSettings', params: { team: team, space: space, type: 'info' }}">页面组信息</router-link></div>
        <div :class="{active: (tagIndex === 2)}"><router-link :to="{name:'SpaceSettings', params: { team: team, space: space, type: 'permissions' }}">页面组权限</router-link></div>
        <div :class="{active: (tagIndex === 3)}"><router-link :to="{name:'SpaceSettings', params: { team: team, space: space, type: 'recycle' }}">回收站</router-link></div>
      </div>
      <div class="flex-column" style="overflow-y: auto;min-height: 100%;flex: 1;padding-left: 2px;">
        <component v-bind:is="currentTabComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/wiki/header';
import http from "../../scripts/http";
import router from "../../router";

import info from "../component/wiki/info";
import permissions from "../component/wiki/permissions";
import recycle from "../component/wiki/recycle";

export default {
  data: function () {
    return {
      team: '',
      space: '',
      page: '',
      currentTabComponent: info,
      tagIndex: 1
    };
  },
  watch: {
    '$route' () {
      let type = this.$route.params.type;
      this.tag_switch(type);
    }
  },
  components: {
    Header,
    info,
    permissions,
    recycle
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    let type = this.$route.params.type;
    self.tag_switch(type);
    self.page_get();
  },
  methods: {
    tag_switch: function (type) {
      let self = this;
      switch (type) {
        case "info":
          self.tagIndex = 1;
          self.currentTabComponent = info;
          break;
        case "permissions":
          self.tagIndex = 2;
          self.currentTabComponent = permissions;
          break;
        case "recycle":
          self.tagIndex = 3;
          self.currentTabComponent = recycle;
          break;
      }
    },
    page_get: function () {
      let self = this;
      http.get(self.urls.default_main_page.format(self.team, self.space)).then(function (response) {
        self.page = response.data.uuid;
      });
    },
    toSpace: function () {
      let self = this;
      router.push({ name:'Space', params: { team: self.team, space: self.space } });
    }
  },
};
</script>

<style scoped>
.space-group-setting {  }
.space-group-setting > div { padding: 5px 0 5px 10px; }
.space-group-setting > div.active { flex: 0;width: 100%;background-color: #e8e8e8;color: #338fe5;border-radius: 3px; }
.space-group-setting div a { display: block; }
.space-group-setting > div.active a { color: #338fe5; }
</style>

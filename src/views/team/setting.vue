<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="81" ref="Menu"></Menu>
      <div class="rightMain">
        <Header title="团队配置中心" ref="Header"></Header>
        <div class="project-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
              <div style="max-width:1200px;background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
                <component v-bind:is="currentTabComponent"></component>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
// import http from '../../util/http';
import Control from '../component/setting/team_control';
import { formatDate } from '@/util/date';
import Info from "@/views/component/team/info";
import Member from "@/views/component/team/member";
import Permission from "@/views/component/team/permission";

export default {
  data: function () {
    return {
      currentTabComponent: Info,
      tagIndex: 1
    };
  },
  components: {
    Header,
    Menu,
    Control,
    Info,
    Member,
    Permission
  },
  created: function () {
    let self = this;
    let type = self.$route.params.type;
    self.tag_switch(type);
  },
  filters: {
    formatDate(time) {
      return formatDate(time);
    }
  },
  watch: {
    '$route' () {
      let type = this.$route.params.type;
      this.tag_switch(type);
    }
  },
  methods: {
    tag_switch: function (type) {
      let self = this;
      switch (type) {
        case "info":
          self.tagIndex = 1;
          self.currentTabComponent = Info;
          break;
        case "member":
          self.tagIndex = 11;
          self.currentTabComponent = Member;
          break;
        case "permission":
          self.tagIndex = 21;
          self.currentTabComponent = Permission;
          break;
      }
    }
    // member_list: function() {
    //   let self = this;
    //   let url = '/api/ding/get_user_list';
    //   http.get(url).then(function (response) {
    //     self.users = response.data;
    //   });
    // }
  }
};
</script>

<style scoped>
.project-main-container { height: 100%;overflow: auto;-webkit-flex: 1 1 auto;flex: 1 1 auto;width: auto;min-width: 0;display: -webkit-flex;display: flex;-webkit-flex-direction: column;flex-direction: column; }
</style>
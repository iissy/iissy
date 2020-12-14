<template>
  <div class="app-row">
    <Menu tagIndex="81" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="团队配置中心" ref="Header"></Header>
      <div class="app-main-container">
        <div class="app-main-no-border flex-column">
          <div style="height: 100%;flex: 1;" class="flex-row">
            <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
            <component v-bind:is="currentTabComponent"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import Control from '../component/setting/team/team_control';
import Info from "@/views/component/setting/team/info";
import Member from "@/views/component/setting/team/member";
import Permission from "@/views/component/setting/team/permission";

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
        case "permission":
          self.tagIndex = 21;
          self.currentTabComponent = Permission;
          break;
      }
    }
  }
};
</script>

<style scoped>

</style>
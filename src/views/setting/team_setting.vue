<template>
  <div class="app-main-no-border flex-column">
    <div style="height: 100%;flex: 1;" class="flex-row">
      <Control :tagIndex="tagIndex" @tag_switch="tag_switch"></Control>
      <component v-bind:is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import Control from '../../components/setting/team/team_control';
import Info from "../../components/setting/team/info";
import Member from "../../components/setting/team/member";
import Permission from "../../components/setting/team/permission";

export default {
  data: function () {
    return {
      currentTabComponent: Info,
      tagIndex: 1
    };
  },
  components: {
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
        case "department":
          self.tagIndex = 11;
          self.currentTabComponent = Member;
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
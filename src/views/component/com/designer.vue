<template>
  <div style="padding: 10px;">
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
import com from '../attr/com';
import issue_type from '../attr/issue_type';
import more from '../attr/more';
import project_info from '../attr/project_info';
import project_permission from '../attr/project_permission';
import project_setting from '../attr/project_setting';
export default {
  data() {
    return {
      currentTabComponent: 'com',
      attr: ''
    }
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  methods: {
    shift: function () {
      let self = this;
      self.attr = self.$route.params.attr;
      self.currentTabComponent = self.attr;
    }
  },
  components: {
    com,
    issue_type,
    more,
    project_info,
    project_permission,
    project_setting
  }
}
</script>

<style scoped>

</style>
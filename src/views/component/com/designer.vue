<template>
  <div class="project-main-container">
    <component v-bind:is="currentTabComponent" :items="items" v-if="items.length> 0"></component>
  </div>
</template>

<script>
import com from '../attr/com';
import issue_type from '../attr/issue_type';
import more from '../attr/more';
import project_info from '../attr/project_info';
import project_permission from '../attr/project_permission';
import project_field from '../attr/project_field';
import project_status from '../attr/project_status';
export default {
  data() {
    return {
      currentTabComponent: 'com'
    }
  },
  props: {
    items: Array
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  mounted() {
    this.shift();
  },
  methods: {
    shift: function () {
      let self = this;
      self.currentTabComponent = self.attr;
    }
  },
  computed: {
    attr: function () {
      let self = this;
      return self.$route.params.attr || 'com';
    }
  },
  components: {
    com,
    issue_type,
    more,
    project_info,
    project_permission,
    project_field,
    project_status
  }
}
</script>

<style scoped>

</style>
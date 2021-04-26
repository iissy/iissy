<template>
  <div class="project-main-container">
    <component v-bind:is="currentTabComponent" :items="items" v-if="items && items.length> 0"></component>
  </div>
</template>

<script>
import http from "../../utils/http";
import com from '../attr/com';
import issue_type from '../attr/issue_type';
import more from '../attr/more';
import project_info from '../attr/project_info';
import project_permission from '../attr/project_permission';
import project_field from '../attr/project_field';
import project_status from '../attr/project_status';
import field from '../attr/field';
import issue_type_permission from '../attr/issue_type_permission';
import issue_type_flow from '../attr/issue_type_flow';

export default {
  data() {
    return {
      currentTabComponent: 'com',
      items: []
    }
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.shift();
    self.components_get();
  },
  methods: {
    components_get: function () {
      let self = this;
      http.get(self.urls.components.format(self.team, self.project)).then(function (response) {
        self.items = response.data;
      });
    },
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
    project_status,
    field,
    issue_type_permission,
    issue_type_flow
  }
}
</script>
<template>
  <component v-bind:is="currentTabComponent"/>
</template>

<script>
import Overview from './overview';
import Dashboard from './dashboard';


export default {
  data() {
    return {
      currentTabComponent: Overview
    }
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  created: function () {
    let self = this;
    self.shift();
  },
  methods: {
    shift: function () {
      let self = this;
      self.currentTabComponent = self.$route.params.type || self.currentTabComponent;
    }
  },
  components: {
    Overview,
    Dashboard
  }
}
</script>
<template>
  <div class="app-main-no-border">
    <div style="display: flex;flex-direction: row;height: 100%;">
      <personal/>
      <component v-bind:is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import Personal from '../../components/center/personal';
import Account from './account';
import Certificate from './certificate';
import Safe from './safe';

export default {
  data: function () {
    return {
      currentTabComponent: Account
    };
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
    Personal,
    Account,
    Certificate,
    Safe
  }
};
</script>
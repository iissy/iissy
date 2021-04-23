<template>
  <div class="app-main-container">
    <div class="app-main-no-border">
      <div style="display: flex;flex-direction: row;height: 100%;">
        <personal tagIndex="10"></personal>
        <div style="max-width:1200px;background-color: #ffffff;flex: 1 1 auto;height: 100%;" class="ibox padding20">
          asdfsaf
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Personal from '../component/center/personal';

export default {
  data: function () {
    return {
    };
  },
  components: {
    Personal
  },
  created: function () {
  },
  methods: {
    add: function () {
    }
  }
};
</script>
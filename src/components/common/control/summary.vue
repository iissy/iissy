<template>
  <div v-if="desc" style="flex: 0 0 auto;align-items: center;" v-b-tooltip.hover :title="desc" tabindex="0">
    <b-icon icon="question-octagon" scale="1.2"></b-icon>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  props: {
    desc: String
  }
};
</script>
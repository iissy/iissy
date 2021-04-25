<template>
  <div :class="curColor">{{ name }}</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    name: String,
    color: String
  },
  computed: {
    curColor: function () {
      let self = this;
      let resultColor = self.color;
      switch (self.color) {
        case "1":
          resultColor = 'to_do'
          break;
        case "2":
          resultColor = 'in_progress'
          break;
        case "3":
          resultColor = 'done'
          break;
      }

      return resultColor;
    }
  }
}
</script>

<style scoped>
.to_do { color: #f0a100;border: none; }
.in_progress { color: #338fe5;border: none; }
.done { color: #24b47e;border: none; }
</style>
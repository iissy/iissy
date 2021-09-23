<template>
  <div class="status" :style="'background-color: '+bgColor+';color:'+color+';'">{{ name }}</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    bgColor: String,
    color: String,
    name: String
  }
}
</script>

<style scoped>
.status { border-radius: 4px!important;padding: 0 6px 0 6px;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex; }
</style>
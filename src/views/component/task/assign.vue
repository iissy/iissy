<template>
  <div class="flex-row">
    <div style="flex: 0 0 auto;">
      <img src="/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;">{{ user.name }}</div>
      <div style="text-align: left;color: #999999;">负责人</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    user: Object
  }
}
</script>

<style scoped>

</style>
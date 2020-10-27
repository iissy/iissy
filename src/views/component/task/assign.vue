<template>
  <div class="flex-row assign align-items-center">
    <div style="flex: 0 0 auto;">
      <img src="/images/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ user.name }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">负责人</div>
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
.assign { border-radius: 30px;cursor: pointer;padding: 5px 20px 5px 5px; }
.assign:hover { background-color: #F0F8FF; }
</style>
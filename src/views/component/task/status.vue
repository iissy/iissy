<template>
  <div class="flex-row">
    <div style="flex: 0 0 auto;">
      <svg t="1601946544912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7757" width="30" height="30"><path d="M530.070588 48.188235C295.152941 48.188235 102.4 246.964706 102.4 481.882353s192.752941 433.694118 433.694118 433.694118S963.764706 716.8 963.764706 481.882353 771.011765 48.188235 530.070588 48.188235zM530.070588 855.341176c-204.8 0-373.458824-168.658824-373.458824-373.458824s168.658824-373.458824 373.458824-373.458824S903.529412 277.082353 903.529412 481.882353 734.870588 855.341176 530.070588 855.341176z" fill="#228B22" p-id="7758"></path><path d="M530.070588 337.317647 638.494118 445.741176 313.223529 445.741176 313.223529 505.976471 650.541176 505.976471 530.070588 626.447059 572.235294 668.611765 758.964706 481.882353 572.235294 295.152941Z" fill="#228B22" p-id="7759"></path></svg>
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ status.name }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">当前状态</div>
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
    status: Object
  }
}
</script>

<style scoped>

</style>
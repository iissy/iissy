<template>
  <div class="flex-row">
    <div style="flex: 0 0 auto;">
      <img :src="user.avatar" style="height: 20px;width: 20px;border-radius: 20px;">
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;">
      <div style="text-align: left;color: #363636;">{{ user.name }} ({{ user.email }})</div>
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
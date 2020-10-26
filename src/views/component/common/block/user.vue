<template>
  <div class="flex-row">
    <div style="flex: 0 0 auto;display: flex;align-items: center;">
      <b-img left src="/images/touxiang.jpg" style="height: 16px;" rounded="circle"></b-img>
    </div>
    <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 10px;">
      <b-link href="#foo">{{ user.name }}</b-link>
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
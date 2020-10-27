<template>
  <div class="flex-row user">
    <div style="flex: 0 0 auto;display: flex;align-items: center;">
      <b-img left src="/images/touxiang.jpg" style="height: 16px;" rounded="circle"></b-img>
    </div>
    <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 10px;">
      {{ user.name }}
    </div>
    <div v-if="hasEmail" style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;font-size: 12px;">
      ({{ user.email }})
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
    user: Object,
    hasEmail: Boolean
  }
}
</script>

<style scoped>
.user { cursor: pointer; }
.user:hover { background-color: #F0F8FF; }
</style>
<template>
  <div class="flex-row align-items-center">
    <div style="flex: 0 0 auto;display: flex;align-items: center;">
      <b-img left :src="user.avatar" style="height: 20px;" rounded="circle" :title="user.name"/>
    </div>
    <div v-if="includeName" style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;">
      {{ user.name }}
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
    includeName: {
      default: true
    }
  }
}
</script>
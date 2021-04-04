<template>
  <div class="flex-row align-items-center">
    <div style="flex: 0 0 auto;display: flex;align-items: center;">
      <b-img left src="/images/touxiang.jpg" style="height: 20px;" rounded="circle"></b-img>
    </div>
    <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;">
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
    user: Object
  }
}
</script>
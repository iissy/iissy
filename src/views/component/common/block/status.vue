<template>
  <div>
    <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
      <div class="status" :class="color">{{ name }}</div>
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
    name: String,
    color: String
  }
}
</script>
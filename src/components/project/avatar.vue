<template>
  <div style="margin-right: 5px;">
    <div style="flex: 0 0 40px;border: 1px solid #e8e8e8;border-radius: 40px;height: 40px;width: 40px;" class="flex-row align-items-center justify-content-center">
      <img :src="pic" style="height: 30px;width: 30px;border-radius: 30px;">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ["pic"]
}
</script>
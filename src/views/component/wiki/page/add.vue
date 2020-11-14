<template>
  <div class="flex-column justify-content-center" style="flex: 1;">
    <div style="flex: 0 0 40px;padding-left: 20px;background-color: #f8f8f8;border-bottom: 1px solid #dedede;" class="flex-row align-items-center">
      <div style="flex: 1;">
        asdf
      </div>
      <div style="flex: 0 0 auto;margin-right: 20px;">
        <AddAndBackButton title="返回" :fill="fill"/>
        <AddAndBackButton style="margin-left: 10px;" title="发布"/>
      </div>
    </div>
    <div style="flex: 1;">
      asdf
    </div>
  </div>
</template>

<script>
import AddAndBackButton from '@/views/component/button/custom';

export default {
  data() {
    return {
      fill: false
    }
  },
  components: {
    AddAndBackButton
  }
}
</script>

<style scoped>

</style>
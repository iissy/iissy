<template>
  <div style="flex: 0 0 auto;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;" class="flex-row align-items-center">
    <div style="font-size: 18px;flex: 1;white-space: nowrap;">{{title}}</div>
    <div v-if="desc" style="flex: 0 0 auto;margin-right: 10px;color: #909090;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
      <b-icon icon="exclamation-diamond"/>
      {{desc}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc']
}
</script>

<style scoped>

</style>
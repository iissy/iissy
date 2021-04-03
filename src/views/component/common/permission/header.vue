<template>
  <div style="flex: 0 0 auto;" class="flex-row b-line align-items-center padding20">
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
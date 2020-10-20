<template>
  <div style="flex: 0 0 auto;" class="align-items-center">
    <div v-if="icon==='1'" style="display: flex;">
      <div class="flex-column align-items-center">
        <div style="flex: 1;color: #1677FF;"><b-icon icon="briefcase-fill"/></div>
        <div style="flex: 1;">&nbsp;</div>
      </div>
    </div>
    <div v-if="icon==='2'" style="display: flex;">
      <div class="flex-column align-items-center">
        <div style="flex: 1;color: #F7B621;"><b-icon icon="bug-fill"/></div>
        <div style="flex: 1;">&nbsp;</div>
      </div>
    </div>
    <div v-if="icon==='7'" style="display: flex;">
      <div class="flex-column align-items-center">
        <div style="flex: 1;color: #3FD698;"><b-icon icon="receipt"/></div>
        <div style="flex: 1;">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  props: ['to', 'name', 'icon']
};
</script>

<style scoped>

</style>
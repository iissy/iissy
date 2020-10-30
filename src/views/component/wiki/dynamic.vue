<template>
  <div id="dynamic" class="flex-column">
    <div style="flex: 0 0 40px;border-bottom: 1px solid #dedede;" class="flex-row align-items-center">
      <div style="flex: 0 0 auto;margin-left: 20px;cursor: pointer;">动态</div>
      <div style="flex: 1;">&nbsp;</div>
      <div style="flex: 0 0 auto;margin-right: 20px;">
        <b-icon icon="gear-fill" scale="1.2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "dynamic"
}
</script>

<style scoped>
#dynamic { flex: 0 0 300px;border-left: 1px solid #dedede; }
</style>
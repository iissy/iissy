<template>
  <div style="margin-top: 20px;" class="summary flex-row align-items-center">
    <div style="flex: 0 0 auto;display: flex;opacity: 0.8;margin-left: 5px;">
      <b-icon icon="info-circle" scale="1.2"></b-icon>
    </div>
    <div style="flex: 1;align-items: center;height: 100%;display: flex;margin-left: 10px;" >
      <div style="flex: 0 1 auto;font-style: italic;">
        {{ desc }}
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
  props: {
    desc: String
  }
};
</script>

<style scoped>
.summary { flex: 1;border: 1px solid #eef2f7;border-radius: 3px;padding: 10px;min-height: 40px; }
</style>
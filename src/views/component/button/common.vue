<template>
  <div style="display: inline-block;">
    <div class="button" v-on:click="onsubmit">{{title}}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  props: ['title'],
  methods: {
    onsubmit: function () {
      this.$emit('submit');
    }
  }
};
</script>

<style scoped>
.button { background-color: #36c6d3;color:#ffffff;padding: 5px 10px 5px 10px;font-size:14px;border-radius:10px;cursor: pointer; }
</style>
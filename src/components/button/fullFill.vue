<template>
  <div style="display: inline-block;box-shadow: none;outline: none;flex: 1;width: 100%;height: 100%;" class="flex-column align-items-center justify-content-center">
    <div style="box-shadow: none;outline: none;flex: 1;width: 100%;height: 100%;" class="button align-items-center flex-column justify-content-center" :class="{disabled: disabled}" v-on:click="onsubmit">{{title}}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  props: ['title','disabled'],
  methods: {
    onsubmit: function () {
      let self = this;
      if (!self.disabled) {
        this.$emit('submit');
      }
    }
  }
};
</script>

<style scoped>
.button { background-color: #36c6d3;color:#ffffff;font-size:14px;border-radius:3px;cursor: pointer; }
.disabled { opacity: .65; }
</style>
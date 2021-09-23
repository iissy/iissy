<template>
  <div style="box-shadow: none;outline: none;">
    <div class="button" :class="{disabled: disabled, fill: fill}" v-on:click="onsubmit">{{title}}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  props: {
    title: String,
    disabled: {
      default: false
    },
    fill: {
      default: true
    }
  },
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
.button { padding: 0 15px;font-size:14px;border-radius:3px;cursor: pointer;border: 1px solid #dedede;line-height: 24px;color: #666666; }
.button:hover { color: #333333;background-color: #ffffff; }
.disabled { opacity: .5; }
.fill { color: #f8f8f8;background-color: #2DCCD3;border-color: #2DCCD3; }
.fill:hover { color: #ffffff;background-color: #2ABDC7;border-color: #2ABDC7; }
</style>
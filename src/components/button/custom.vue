<template>
  <div style="box-shadow: none;outline: none;">
    <div style="box-shadow: none;outline: none;" class="button" :class="{disabled: disabled, fill: fill}" v-on:click="onsubmit">{{title}}</div>
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
.button { padding: 0 15px;font-size:14px;border-radius:3px;cursor: pointer;border: 1px solid #dedede;line-height: 24px; }
.disabled { opacity: .5; }
.fill { background-color: #36c6d3;color:#ffffff;border: 1px solid #36c6d3; }
</style>
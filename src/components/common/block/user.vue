<template>
  <div class="flex-row user align-items-center" :class="{selected: selected}" @click="onsubmit">
    <div style="flex: 0 0 auto;display: flex;align-items: center;">
      <b-img left src="/images/touxiang.jpg" style="height: 16px;" rounded="circle"></b-img>
    </div>
    <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 10px;">
      {{ user.name }}
    </div>
    <div v-if="hasEmail" style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;font-size: 12px;">
      ({{ user.email }})
    </div>
    <div v-if="selected"  style="flex: 1;" class="flex-row align-items-center">
      <div style="flex: 1;min-width:50px;"></div>
      <div style="flex: 0 0 auto;display: flex;align-items: center;text-align: right;">
        <b-icon icon="check" scale="1.5"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    user: Object,
    hasEmail: {
      default: false
    },
    selected: {
      default: false
    }
  },
  methods: {
    onsubmit: function () {
      let self = this;
      this.$emit('submit', self.user.uuid);
    }
  }
}
</script>

<style scoped>
.user { cursor: pointer; }
.user:hover { background-color: #F0F8FF; }
.selected div { color: #17C4BB; }
</style>
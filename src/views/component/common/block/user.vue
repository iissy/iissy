<template>
  <div class="flex-row user" @click="onsubmit">
    <div style="flex: 0 0 auto;display: flex;align-items: center;">
      <b-img left src="/images/touxiang.jpg" style="height: 16px;" rounded="circle"></b-img>
    </div>
    <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 10px;">
      {{ user.name }}
    </div>
    <div v-if="hasEmail" style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;font-size: 12px;">
      ({{ user.email }})
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
    hasEmail: Boolean
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
</style>
<template>
  <div style="margin: 0 auto 0 auto;width: 100%;height: 100%;" class="flex-column">
    <div style="height: 50px;"></div>
    <div style="padding-top: 10px;background-color: #ffffff;flex: 1;">
      <router-link :to="{ name: 'MainRedirect' }">进入 soul 任务管理系统</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      name: ''
    };
  },
  methods: {
  },
  computed: {
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
div a { font-size: 18px; }
</style>

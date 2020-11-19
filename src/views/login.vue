<template>
  <div style="margin: 0 auto 0 auto;width: 100%;height: 100%;" class="flex-column justify-content-center">
    <div style="flex: 0 0 48px;"></div>
    <div class="enter" style="padding-top: 10px;background-color: #ffffff;flex: 1;">
      <router-link :to="{ name: 'MainRedirect' }">进入 soul 项目管理系统</router-link>
    </div>
    <div style="flex: 0 0 60px;" class="flex-row align-items-center justify-content-center copyright">
      <div>
        Copyright ©2020 <a href="/">爱斯园</a>
      </div>
      <div style="margin-left: 5px;">
        <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备2020117325号</a>
      </div>
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
.enter a { font-size: 22px;font-weight: 500; }
.copyright div,.copyright a { color: #909090; }
</style>

<template>
  <div class="app-main-content">
    <div class="flex-row align-items-center" style="margin: 0 20px;border-bottom: 1px solid #e8e8e8;padding: 10px 0;">
      <div style="flex: 1;">
        <div style="font-size: 18px;">项目信息</div>
        <div style="color: #999999;">删除项目下所有资源</div>
      </div>
      <div style="flex: 0 0 100px;text-align: right;">
        <b-button variant="danger">删除项目</b-button>
      </div>
    </div>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import Alert from '../common/block/alert';

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Alert
  }
}
</script>

<style scoped>

</style>
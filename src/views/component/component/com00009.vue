<template>
  <div style="overflow:auto;flex: 1 0 auto;">
    <div style="overflow:visible;flex: 1;padding: 10px;flex-direction: row;height: 100%;">
      <div style="flex: 1;" class="flex-row">
        <div style="flex: 0 0 auto;width: 25%;max-width: 300px;border-radius: 3px;height: 330px;" class="header-container-inner">
          <div>
            <div>项目信息</div>
          </div>
        </div>
        <div style="margin-left: 10px;flex: 1;border-radius: 3px;height: 330px;" class="header-container-inner">
          <div>
            <div>工作项趋势</div>
          </div>
        </div>
      </div>
      <div style="flex: 1;margin-top: 10px;" class="flex-row">
        <div style="flex: 0 0 auto;width: 25%;max-width: 300px;border-radius: 3px;height: 330px;" class="header-container-inner">
          <div>
            <div>项目属性</div>
          </div>
        </div>
        <div style="margin-left: 10px;flex: 1;border-radius: 3px;height: 330px;" class="header-container-inner">
          <div>
            <div>公告</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
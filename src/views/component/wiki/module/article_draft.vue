<template>
  <div id="article" class="flex-column">
    <div style="flex: 0 0 40px;border-bottom: 1px solid #dedede;padding: 0 20px;" class="flex-row align-items-center">
      <div style="flex: 1;" class="flex-row">
        <div style="flex: 0 0 auto;"><b-icon icon="house-door-fill" scale="1"/></div>
        <div style="flex: 0 0 auto;margin-left: 5px;">主页</div>
      </div>
      <div style="flex: 0 0 auto;" class="flex-row">
        <div style="flex: 0 0 auto;"><b-icon icon="pencil-square"/></div>
        <div style="flex: 0 0 auto;margin-left: 5px;">编辑</div></div>
    </div>
    <div style="flex: 1;background-color: #ffffff;padding: 30px;" class="flex-column">
      <div style="font-size: 28px;font-weight: 800;">{{ item.title }}</div>
      <div style="color: #909090;margin-top: 5px;">最后编辑于 {{ item.updated_time | formatTime }}</div>
      <div style="margin-top: 20px;" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      team: ''
    }
  },
  props: {
    item: Object
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
  },
  methods: {
  }
}
</script>

<style scoped>
#article { height: 100%; }
</style>
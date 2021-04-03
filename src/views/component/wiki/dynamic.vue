<template>
  <div id="dynamic" class="flex-column l-line">
    <div style="flex: 0 0 40px;" class="flex-row align-items-center b-line">
      <div style="flex: 0 0 auto;margin-left: 20px;cursor: pointer;">动态</div>
      <div style="flex: 1;">&nbsp;</div>
      <div style="flex: 0 0 auto;margin-right: 20px;">
        <b-icon icon="x" scale="1.6"/>
      </div>
    </div>
    <div class="tab-title flex-row align-items-center b-line" style="margin-top: 10px;justify-content: space-between;">
      <div style="flex: 1;"></div>
      <div v-for="(title,index) in tabs" @click="cur=index" :class="{active:cur===index}" :key="index">{{title}}</div>
      <div style="flex: 1;"></div>
    </div>
    <div style="padding: 20px;" class="flex-row">
      <div style="flex: 0 0 auto;"><b-icon icon="pencil-square"/></div>
      <div style="flex: 1;margin-left: 10px;">
        <div><span style="color: #000000;font-weight: bold;">何敏</span>发布了页面</div>
        <div style="color: #909090;font-size: 12px;">9月14日 早上06:42</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      tabs: ['全部', '评论', '文件', '变更记录'],
    }
  }
}
</script>

<style scoped>
#dynamic { flex: 0 0 300px; }
.tab-title { flex: 0 0 auto;margin: 0 10px; }
.tab-title > div { flex: 0 0 auto;text-align: center;cursor: pointer;padding: 10px; }
.tab-title .active{ border-bottom: 3px solid #17C4BB;color: #17C4BB;padding: 10px 10px 7px 10px; }
</style>
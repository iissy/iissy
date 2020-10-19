<template>
  <div class="app-main-content" style="padding: 20px;">
    <div style="display: flex;flex-direction: row;align-items: center;">
      <div style="flex: 0 0 auto;font-size: 18px;">项目权限</div>
    </div>
    <Summary :desc="desc"/>
    <PermissionItem title="查看项目" desc="允许成员浏览当前项目，包括工作项，迭代，筛选器等信息"/>
  </div>
</template>

<script>
import Summary from '@/views/component/common/block/summary';
import PermissionItem from '@/views/component/common/block/permission_item';

export default {
  data() {
    return {
      desc: '项目权限可以用于定制项目的操作权限控制。'
    }
  },
  methods: {
  },
  components: {
    Summary,
    PermissionItem
  }
}
</script>

<style scoped>

</style>
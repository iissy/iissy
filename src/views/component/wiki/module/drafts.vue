<template>
  <div v-if="drafts && drafts.length > 0">
    <div style="flex: 0 0 auto;padding: 0 20px 10px 20px;" class="flex-row">
      <div style="flex: 1;color: #909090;">草稿箱</div>
    </div>
    <div style="padding: 0 20px;">
      <div class="page-item" v-for="d in drafts" :key="d.uuid" :class="{active: d.uuid === selected }">
        <router-link :class="{unnamed: !d.title}" :to="{ name: 'Draft', params: { team: team, space: space, draft: d.uuid } }" :title="d.status === 1 ? '未发布':''">
          <div style="flex: 1;" class="flex-row align-items-center">
            <div style="flex: 1;overflow: hidden;white-space: nowrap;min-width: 0;text-overflow: ellipsis;">
              {{ d.title || '未命名' }}
            </div>
            <div style="flex: 0 0 auto;color: #909090;" v-if="d.status === 1">
              <b-icon icon="cursor-fill"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    team: String,
    space: String,
    drafts: Array,
    selected: {
      default: false
    }
  }
}
</script>

<style scoped>

</style>
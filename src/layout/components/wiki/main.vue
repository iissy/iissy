<template>
  <div class="rightMain flex-row" style="height: 0;">
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  name: 'wiki_main',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
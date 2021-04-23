<template>
  <section class="app-main">
    <router-view :key="key" />
  </section>
</template>

<script>
export default {
  name: 'app_main',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
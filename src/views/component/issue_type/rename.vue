<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
import http from "@/util/http";

export default {
  data: function () {
    return {
      name: '',
      items: []
    };
  },
  created: function () {
    let self = this;
    self.title = self.$route.params.title;
  },
  methods: {
  }
};
</script>

<style scoped>

</style>
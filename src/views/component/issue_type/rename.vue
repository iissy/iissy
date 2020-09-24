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
    self.project_list();
  },
  methods: {
    project_list: function() {
      let self = this;
      let url = '/api/team/Sxv5vAgD/setting/project/field';
      http.get(url).then(function (response) {
        self.items = response.data;
      });
    }
  }
};
</script>

<style scoped>

</style>
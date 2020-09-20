<template>
  <div>
    <div style="display: flex;flex-direction: row;align-items: center;">
      <div style="font-size: 18px;flex: 0 0 auto;">项目管理</div>
      <div style="margin-left: 10px;flex: 0 0 auto;">
        <div style="flex:0 0 auto;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="16" height="16"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273"></path></svg>
        </div>
      </div>
      <div style="margin-left: 10px;flex: 0 0 auto;font-size: 18px;">{{ ProjectName }}</div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http";

export default {
  data: function () {
    return {
      ProjectName: ''
    };
  },
  created: function () {
    this.ProjectList();
  },
  methods: {
    ProjectList: function() {
      let self = this;
      let id = this.$route.params.project;
      let url = '/api/team/Sxv5vAgD/project/get/' + id;
      http.post(url).then(function (response) {
        self.ProjectName = response.data.name;
      });
    }
  }
};
</script>

<style scoped>

</style>
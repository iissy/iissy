<template>
  <div class="app-main-content ibox">
    <div class="flex-row align-items-center b-line" style="margin: 0 20px;padding: 10px 0;">
      <div style="flex: 1;">
        <div style="font-size: 18px;">项目信息</div>
        <div style="color: #999999;">删除项目下所有资源</div>
      </div>
      <div style="flex: 0 0 100px;text-align: right;">
        <b-button variant="danger" @click="del">删除项目</b-button>
      </div>
    </div>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import Alert from '../common/block/alert';
import http from "@/utils/http";
import router from "@/router";

export default {
  data() {
    return {
      team: '',
      project: ''
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
  },
  methods: {
    del: function () {
      let self = this;
      this.$bvModal.msgBoxConfirm('此操作不可撤销，是否确定？', {
        title: '删除项目',
        okVariant: 'danger',
        okTitle: '确定',
        cancelTitle: '取消',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          http.post(self.urls.project_delete.format(self.team, self.project)).then(function (response) {
            if (response.data.status === true) {
              router.push({ name: 'Projects', params: { team: self.team } });
            }
          });
        }
      }).catch(err => {console.log(err);})
    }
  },
  components: {
    Alert
  }
}
</script>

<style scoped>

</style>
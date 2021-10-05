<template>
  <div id="article" class="flex-column">
    <div style="flex: 0 0 40px;padding: 0 20px;" class="flex-row align-items-center b-line">
      <div style="flex: 1;" class="flex-row">
        <div style="flex: 0 0 auto;"><b-icon icon="house-door-fill" scale="1"/></div>
        <div style="flex: 0 0 auto;margin-left: 5px;">主页</div>
      </div>
      <div style="flex: 0 0 auto;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;margin-left: 10px;" class="flex-row align-items-center op-article" @click="edit">
          <div style="flex: 0 0 auto;color:inherit;">
            <b-icon icon="pencil-square"/></div>
          <div style="flex: 0 0 auto;margin-left: 5px;color:inherit;">
            编辑
          </div>
        </div>
        <div style="flex: 0 0 auto;margin-left: 10px;" class="flex-row align-items-center op-article" @click="del">
          <div style="flex: 0 0 auto;color:inherit;">
            <b-icon icon="x" scale="1.5"/>
          </div>
          <div style="flex: 0 0 auto;margin-left: 5px;color:inherit;">
            删除草稿
          </div>
        </div>
        <PublishButton v-if="item.status === 1" style="margin-left: 10px;" title="发布" @submit="update"/>
        <PublishButton v-if="item.status === 2" style="margin-left: 10px;" title="更新" @submit="update"/>
      </div>
    </div>
    <div style="flex: 1;background-color: #ffffff;padding: 30px;overflow-y: auto;" class="flex-column">
      <div :class="{unnamed: !item.title}" style="font-size: 28px;font-weight: 800;">{{ item.title || '未命名' }}</div>
      <div style="color: #909090;margin-top: 5px;">最后编辑于 {{ item.updated_time | formatTime }}</div>
      <div class="ck-content" style="margin-top: 20px;" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import PublishButton from '../../common/button/custom';
import router from "../../../router";
import http from "../../../utils/http";

export default {
  data() {
    return {
      team: '-',
      space: '-'
    }
  },
  props: {
    item: Object
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
  },
  methods: {
    edit: function () {
      let self = this;
      let params = { team: self.team, space: self.space, draft: self.item.uuid }
      router.push({ name:'EditDraft', params: params });
    },
    del() {
      let self = this;
      this.$bvModal.msgBoxConfirm('此操作不可撤销，是否确定？', {
        title: '删除草稿',
        okVariant: 'danger',
        okTitle: '确定',
        cancelTitle: '取消',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          http.post(self.urls.draft_delete.format(self.team, self.space, self.item.uuid)).then(function (response) {
            if (response.data.code === 200) {
              router.push({ name:'Space', params: { team: self.team, space: self.space } });
            }
          }).catch(function (err) {
            self.bus.$emit("alertDanger", err.response.data.errcode);
          });
        }
      }).catch(err => {
        console.log(err);
      });
    },
    update: function () {
      let self = this;
      let data = { title: self.item.title, content: self.item.content, page_uuid: self.item.page_uuid, status: self.item.status, is_published: true, space_uuid: self.space, from_version: self.item.from_version };
      http.post(self.urls.page_draft_update.format(self.team, self.space, self.item.uuid), data).then(function (response) {
        let params = { team: self.team, space: self.space, page: response.data.page_uuid };
        router.push({ name:'Page', params: params });
      });
    }
  },
  components: {
    PublishButton
  }
}
</script>

<style scoped>
#article { height: 100%; }
.op-article { cursor: pointer; }
.op-article:hover { color: #000000; }
.unnamed { color: #dedede; }
</style>
<template>
  <div id="article" class="flex-column">
    <div style="flex: 0 0 40px;padding: 0 20px;" class="flex-row align-items-center b-line">
      <div style="flex: 1;" class="flex-row">
        <div style="flex: 0 0 auto;"><b-icon icon="house-door-fill" scale="1"/></div>
        <div style="flex: 0 0 auto;margin-left: 5px;">主页</div>
      </div>
      <div style="flex: 0 0 auto;" class="flex-row">
        <div style="flex: 0 0 auto;"><b-icon icon="pencil-square"/></div>
        <div style="flex: 0 0 auto;margin-left: 5px;">
          <router-link :to="{ name: 'EditPage', params: { team: team, space: space, page: item.uuid } }">编辑</router-link>
        </div>
      </div>
    </div>
    <div style="flex: 1;background-color: #ffffff;padding: 30px;overflow-y: auto;" class="flex-column">
      <div style="font-size: 28px;font-weight: 800;">{{ item.title }}</div>
      <div style="color: #909090;margin-top: 5px;">{{ user.name }}于 {{ item.updated_time | formatTime }} 修改</div>
      <div style="margin-top: 20px;" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import http from "../../../../utils/http";

export default {
  data() {
    return {
      team: '-',
      space: '-',
      user: {}
    }
  },
  props: {
    item: Object
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.user_get();
  },
  methods: {
    user_get: function () {
      let self = this;
      http.get(self.urls.user_get.format(self.team, self.item.owner_uuid)).then(function (response) {
        self.user = response.data;
      });
    }
  }
}
</script>

<style scoped>
#article { height: 100%; }
</style>
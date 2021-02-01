<template>
  <div class="wiki g-container">
    <div style="flex: 0 0 auto;font-size: 18px;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;font-weight: 600;">页面组管理</div>
    <div style="padding: 20px;width: 100%;" class="flex-column">
      <div style="padding: 20px 0;width: 100%;border-bottom: 1px solid #e8e8e8;" class="flex-row pages" v-for="item in items" v-bind:key="item.uuid">
        <div style="flex: 1;">
          <div class="page-title">
            <router-link :to="{name:'Space', params: { team: team, space: item.uuid }}">
              {{ item.title }}
            </router-link>
          </div>
          <div class="flex-row" style="margin-top: 10px;">
            <div style="flex: 0 0 auto;color: #909090;">
              <b-icon icon="file-earmark-medical"/> 15
            </div>
            <div style="flex: 0 0 auto;color: #909090;margin-left: 20px;">
              <b-icon icon="clock"/> 12 天前更新
            </div>
          </div>
        </div>
        <div style="flex: 0 0 auto;">
          <b-button variant="outline-secondary" :to="{name:'Space', params: { team: team, space: item.uuid }}">查看页面组</b-button>
        </div>
        <div style="flex: 0 0 auto;margin-left: 20px;">
          <b-button :active-class="style" variant="outline-secondary" :to="{name:'SpaceSettings', params: { team: team, space: item.uuid, type: 'info' }}">配置页面组权限</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../../../scripts/http";

export default {
  data() {
    return {
      style: 'active',
      items: [],
      tasks_completed: false
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space_list();
  },
  methods: {
    space_list: function() {
      let self = this;
      http.get(self.urls.spaces.format(self.team)).then(function (response) {
        self.items = response.data.spaces;
      });
    }
  }
}
</script>

<style scoped>
.wiki { max-width:1200px;flex: 1 1 auto;min-height: 100%; }
.pages .page-title a { color: #338fe5;font-size: 16px; }
</style>
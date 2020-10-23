<template>
  <div>
    <div style="font-size: 18px;margin-bottom: 20px;">项目管理</div>
    <Summary :desc="desc"/>
    <Search style="margin-top: 20px;" placeholder="搜索项目" />
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">项目名称</div>
            <div class="th" style="flex: 0 0 80px;">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td">{{ item.name }}</div>
            <div class="td" style="flex: 0 0 80px;">
              <router-link :to="{name:'ProjectPermissionSetting', params: { team: team, project: item.uuid, title: item.name }}">
                <b-icon icon="pencil-fill"></b-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http";
import Summary from '@/views/component/common/block/summary';
import Search from "@/views/component/common/form/search";

export default {
  data: function () {
    return {
      name: '',
      team: '',
      desc: '项目管理页展示当前所有项目，可对项目进行权限编辑和删除操作。',
      items: []
    };
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project_list();
  },
  methods: {
    project_list: function() {
      let self = this;
      http.post(self.urls.project_manager.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    Summary,
    Search
  }
};
</script>

<style scoped>
</style>
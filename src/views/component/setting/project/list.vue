<template>
  <div style="flex: 1;min-height: 100%;">
    <ProjectMangeHeader title="项目管理" desc="项目管理页展示当前所有项目，可对项目进行权限编辑和删除操作。"/>
    <div style="padding: 0 20px 20px 20px;">
      <Search style="margin: 20px 0;" placeholder="搜索项目" />
      <div id="project-main">
        <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
          <div class="table">
            <div class="table-row-header">
              <div class="th">项目名称</div>
              <div class="th" style="flex: 0 0 80px;">操作</div>
            </div>
            <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
              <div class="td anchor">
                <router-link :to="{name:'Project', params: { team: team, project: item.uuid }}">
                  {{ item.name }}
                </router-link>
              </div>
              <div class="td" style="flex: 0 0 80px;">
                <router-link :to="{name:'ProjectPermissionSetting', params: { team: team, project: item.uuid, title: item.name }}">
                  <b-icon icon="pencil-square"/>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectMangeHeader from '../../common/permission/header';
import Search from "../../common/form/search";
import http from "../../../../scripts/http";

export default {
  data: function () {
    return {
      name: '',
      team: '',
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
      http.post(self.urls.project_list.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    ProjectMangeHeader,
    Search
  }
};
</script>

<style scoped>
</style>
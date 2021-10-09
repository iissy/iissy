<template>
  <div style="flex: 1;min-height: 100%;">
    <ProjectMangeHeader title="工作项类型" desc="配置中心下，工作项类型配置项的修改，不会同步到已经应用的项目中。"/>
    <div style="padding: 0 20px 20px 20px;">
      <Search style="margin: 20px 0;" placeholder="搜索工作项类型"/>
      <div id="project-main">
        <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
          <div class="table">
            <div class="table-row-header">
              <div style="flex: 1 1 260px;" class="th">工作项类型</div>
              <div class="th">类型</div>
              <div class="th">使用到的项目</div>
              <div class="th op-big">操作</div>
            </div>
            <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
              <div style="flex: 1 1 260px;" class="td flex-row align-items-center">
                <IBIcon :icon="item.icon.toString()" scale="2"/>
                <div class="flex-column" style="margin-left: 20px;">
                  <div class="flex-row">
                    <div style="color:#17C4BB;">{{ item.name }}</div>
                    <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                      <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
                    </div>
                  </div>
                  <div style="color: #999999;">{{ item.field_count }} 工作项属性<span style="margin: 0 10px;color: #999999;"> | </span>{{ item.status_count }} 工作项状态</div>
                </div>
              </div>
              <div class="td flex-row align-items-center">
                <div v-if="item.detail_type == 0">自定义类型</div>
                <div v-else>标准类型</div>
              </div>
              <div class="td flex-row align-items-center">3个项目</div>
              <div class="td flex-row align-items-center op-big">
                <router-link :to="{name:'IssueTypeSetting', params: { team: team, issue_type: item.uuid, title: item.name, type: 'config' }}">
                  编辑
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
import http from "../../../utils/http";
import ProjectMangeHeader from '../../common/permission/header';
import Search from "../../common/form/search";
import IBIcon from '../../common/control/i_b_icon';

export default {
  data: function () {
    return {
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
      http.post(this.urls.issue_type_list.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    ProjectMangeHeader,
    Search,
    IBIcon
  }
};
</script>

<style scoped>
</style>
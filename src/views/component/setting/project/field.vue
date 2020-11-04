<template>
  <div style="flex: 1;height: 100%;">
    <div style="font-size: 18px;margin-bottom: 20px;">项目属性</div>
    <Summary :desc="desc"/>
    <Search style="margin: 20px 0;" placeholder="搜索项目属性" />
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">属性名称</div>
            <div class="th">属性类型</div>
            <div class="th">使用到的项目</div>
            <div class="th" style="flex: 0 0 80px;">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.alias">
            <div class="td flex-row">
              <div style="flex: 0 0 auto;">{{ item.name }}</div>
              <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
              </div>
            </div>
            <div class="td">{{ item.field_type | projectFieldType }}</div>
            <div class="td">所有项目</div>
            <div class="td" style="display: flex;align-items: center;flex: 0 0 80px;">
              <div style="width: 30px;height: 2px;" v-if="item.built_in">
                <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
              </div>
              <div v-else>
                x
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/scripts/http";
import Search from '../../common/form/search';
import Summary from "@/views/component/common/block/summary";

export default {
  data: function () {
    return {
      team: '',
      items: [],
      desc: '项目属性设置可以设置项目概览页面需要显示的项目自定义属性。'
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
      let project = self.$route.params.project;
      http.post(self.urls.project_field.format(self.team), { project: project }).then(function (response) {
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
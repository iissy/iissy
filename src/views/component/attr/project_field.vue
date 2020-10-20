<template>
  <div class="app-main-content" style="padding: 20px;">
    <div style="font-size: 18px;margin-bottom: 20px;">项目属性</div>
    <Summary :desc="desc"/>
    <div style="margin: 20px 0 0 0;">
      <Search placeholder="项目属性" />
    </div>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">属性名称</div>
            <div class="th" style="flex: 0 0 150px;">属性类型</div>
            <div class="th" style="flex: 0 0 100px;">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.alias">
            <div class="td flex-row">
              <div style="flex: 0 0 auto;">{{ item.name }}</div>
              <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
              </div>
            </div>
            <div style="flex: 0 0 150px;" class="td">{{ item.field_type }}</div>
            <div style="flex: 0 0 100px;" class="td align-items-center flex-row">
              <div  class="align-items-center flex-row" style="width: 30px;height: 2px;" v-if="item.built_in">
                <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
              </div>
              <div class="align-items-center" v-else>
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
import http from "@/util/http";
import Search from '@/views/component/common/form/search';
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
}
</script>

<style scoped>
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0;font-weight: bolder; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table-row:hover { background-color: #f8f8f8; }
.table .th { width: 100px;padding: 10px 0 10px 20px;font-size: 12px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
</style>
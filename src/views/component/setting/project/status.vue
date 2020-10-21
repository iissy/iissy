<template>
  <div>
    <div style="font-size: 18px;margin-bottom: 20px;">项目状态</div>
    <Summary :desc="desc"/>
    <Search style="margin-top: 20px;" placeholder="搜索项目状态" />
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">状态名称</div>
            <div class="th">状态类型</div>
            <div class="th">使用到的项目</div>
            <div class="th op">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td flex-row">
              <div style="flex: 0 0 auto;">{{ item.name }}</div>
              <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;">系统</div>
              </div>
            </div>
            <div class="td" style="display: flex;align-items: center;">
              <Status :name="item.name" :color="item.uuid"></Status>
            </div>
            <div class="td">所有项目</div>
            <div class="td op" style="display: flex;align-items: center;">
              <div style="width: 30px;height: 2px;">
                <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/util/http';
import Status from '@/views/component/common/block/status';
import Search from '@/views/component/common/form/search';
import Summary from "@/views/component/common/block/summary";

export default {
  data: function () {
    return {
      team: '',
      items: [],
      desc: '项目状态用于标示项目所处状态，不同状态类型下可以有多种状态，当前为系统项目状态列表，不同项目可以共用同一个状态。'
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
      http.post(this.urls.project_status.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    Status,
    Search,
    Summary
  }
};
</script>

<style scoped>
</style>
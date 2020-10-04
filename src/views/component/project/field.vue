<template>
  <div>
    <div style="font-size: 18px;margin-bottom: 20px;">项目属性</div>
    <div style="margin-top: 20px;" class="flex-row">
      <div style="height: 40px;flex: 1;margin-right: -22px;border-top: 1px solid #e8e8e8;border-bottom: 1px solid #e8e8e8;border-left: 1px solid #e8e8e8;">
        <div style="flex: 1;align-items: center;height: 100%;display: flex;margin-left: 20px;" >
          <div style="flex: 0 0 auto;">
            项目属性设置可以设置项目概览页面需要显示的项目自定义属性。
          </div>
        </div>
      </div>
      <div style="flex: 0 0 auto;" class="flex-column">
        <div style="flex: 1;display: flex;">
          <svg t="1600683890454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9204" width="44" height="44"><path d="M924.8 337.6c-22.6-53.3-54.9-101.3-96-142.4-41.1-41.1-89-73.4-142.4-96C631.1 75.8 572.5 64 512 64S392.9 75.8 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96-41.1 41.1-73.4 89-96 142.4C75.8 392.9 64 451.5 64 512s11.8 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.2 451.5 960 512 960s119.1-11.8 174.4-35.2c53.3-22.6 101.3-54.9 142.4-96 41.1-41.1 73.4-89 96-142.4C948.2 631.1 960 572.5 960 512s-11.8-119.1-35.2-174.4zM512 904.6c-216.5 0-392.6-176.1-392.6-392.6S295.5 119.4 512 119.4c216.5 0 392.6 176.1 392.6 392.6S728.5 904.6 512 904.6z" p-id="9205" fill="#8a8a8a"></path><path d="M562 665.8c-10.4 0-17.8-1.7-22-5-4.2-3.3-6.4-9.6-6.4-18.8 0-3.7 0.6-9 2-16.2 1.3-7.1 2.8-13.5 4.4-19l20.1-69.2c2-6.3 3.3-13.3 4-20.9 0.7-7.6 1.1-12.9 1.1-16 0-14.6-5.3-26.4-15.8-35.6-10.6-9.1-25.5-13.7-45-13.7-10.8 0-22.2 1.9-34.3 5.6-12.1 3.7-24.8 8.2-38 13.4l-5.4 21.4c3.9-1.4 8.6-2.9 14.1-4.5s10.8-2.4 16.1-2.4c10.7 0 17.8 1.8 21.6 5.2 3.8 3.5 5.7 9.7 5.7 18.6 0 4.9-0.6 10.3-1.8 16.3-1.2 5.9-2.7 12.3-4.5 18.9l-20.2 69.5c-1.8 7.3-3.1 13.9-3.9 19.6-0.8 5.8-1.2 11.5-1.2 17 0 14.3 5.4 26.1 16.3 35.3 10.9 9.3 26.1 13.9 45.7 13.9 12.7 0 23.9-1.6 33.5-4.9 9.6-3.2 22.5-8 38.7-14.2l5.4-21.4c-2.8 1.3-7.3 2.7-13.4 4.4-6.4 1.9-11.9 2.7-16.8 2.7zM583.1 337.5c-9.4-8.6-20.7-12.8-33.9-12.8s-24.6 4.3-34 12.8c-9.5 8.6-14.2 18.9-14.2 30.9 0 12.1 4.7 22.3 14.2 30.8s20.8 12.7 34 12.7 24.5-4.2 33.9-12.7c9.4-8.5 14.1-18.7 14.1-30.8 0-12.1-4.7-22.4-14.1-30.9z" p-id="9206" fill="#8a8a8a"></path></svg>
        </div>
      </div>
    </div>
    <div style="margin: 20px 0 0 0;">
      <Search placeholder="项目属性" />
    </div>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">属性名称</div>
            <div class="th">属性类型</div>
            <div class="th">使用到的项目</div>
            <div class="th last">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td flex-row">
              <div style="flex: 0 0 auto;">{{ item.name }}</div>
              <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
              </div>
            </div>
            <div class="td">{{ item.field_type }}</div>
            <div class="td">所有项目</div>
            <div class="td last" style="display: flex;align-items: center;">
              <div style="width: 30px;height: 2px;" v-if="item.built_in">
                <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
              </div>
              <div v-else>
                <router-link :to="{name:'ProjectPermissionSetting', params: { team: item.team_uuid, project: item.uuid, title: item.name }}">
                  <svg t="1600587759121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5114" width="16" height="16"><path d="M867.858 286.276c0 0 29.859-23.187-1.104-54.1l-91.687-95.672c0 0-27.363-37.252-59.429-5.235l-61.013 65.621 153.853 149.917 59.38-60.532zM773.818 387.109l-162.877-154.069-369.823 372.031 166.765 143.317 365.934-361.278zM221.15 845.308l-62.309-57.579-15.595 68.835h-0.054v49.156h737.34v-49.156h-735.708l76.327-11.256zM360.073 788.686l-164.126-137.483-20.834 92.334 95.287 80.528 89.672-35.378z" p-id="5115" fill="#2c2c2c"></path></svg>
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
import http from "@/util/http";
import Search from '../common/form/search';

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
      http.post(self.urls.project_field.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped>
#project-main { flex: 1;display: flex; }
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0;font-weight: bolder; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table-row:hover { background-color: #f8f8f8; }
.table .th { width: 100px;padding: 10px 0 10px 20px;font-size: 12px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .last { flex: 0 0 auto; }
</style>
<template>
  <div>
    <div style="font-size: 18px;margin-bottom: 20px;">项目管理</div>
    <Summary :desc="desc"/>
    <div style="margin: 20px 0 0 0;">
      <Search placeholder="项目名字" />
    </div>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">项目名称</div>
            <div class="th last">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td">{{ item.name }}</div>
            <div class="td last">
              <router-link :to="{name:'ProjectPermissionSetting', params: { team: team, project: item.uuid, title: item.name }}">
                <svg t="1600587759121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5114" width="16" height="16"><path d="M867.858 286.276c0 0 29.859-23.187-1.104-54.1l-91.687-95.672c0 0-27.363-37.252-59.429-5.235l-61.013 65.621 153.853 149.917 59.38-60.532zM773.818 387.109l-162.877-154.069-369.823 372.031 166.765 143.317 365.934-361.278zM221.15 845.308l-62.309-57.579-15.595 68.835h-0.054v49.156h737.34v-49.156h-735.708l76.327-11.256zM360.073 788.686l-164.126-137.483-20.834 92.334 95.287 80.528 89.672-35.378z" p-id="5115" fill="#2c2c2c"></path></svg>
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
#project-main { flex: 1;display: flex; }
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0;font-weight: bolder; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table-row:hover { background-color: #f8f8f8; }
.table .th { width: 100px;padding: 10px 0 10px 20px;font-size: 12px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .last { flex: 0 0 auto; }
</style>
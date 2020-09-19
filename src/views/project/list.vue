<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <div class="layout-container-column">
          <Header title="项目管理"></Header>
          <div class="app-main-container">
            <div class="project-container">
              <div class="project-container-inner">
                <div id="project-top-row">
                  <div style="flex: 0 1 auto;">
                    <div class="tab-title">
                      <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</div>
                    </div>
                  </div>
                  <div style="flex: 1;">
                    <div style="text-align: right;padding-right: 20px;">项目配置中心</div>
                  </div>
                </div>
                <div id="project-new-row">
                  <div style="flex: 0 0 auto;flex-direction: row;margin-left: 20px;text-align: left;">
                    <AddProjectButton title="新增项目" @submit="add">新增项目</AddProjectButton>
                  </div>
                  <div style="flex: 1;flex-direction: row;">
                    <div style="width: 100%;text-align: right;flex: 1;flex-direction: row;">
                      <div style="flex: 1;display: inline-block;padding-right: 20px;">asdf</div>
                      <div style="flex: 1;display: inline-block;padding-right: 20px;">asdf</div>
                    </div>
                  </div>
                </div>
                <div id="project-main">
                  <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
                    <div class="table">
                      <div class="table-row-header">
                        <div class="th big">项目名称</div>
                        <div class="th other">项目状态</div>
                        <div class="th other">项目负责人</div>
                        <div class="th other">计划开始时间</div>
                        <div class="th other">计划完成时间</div>
                        <div class="th other">工作项目完成度</div>
                        <div class="th other">工作项数量</div>
                        <div class="th other">进行中工作项</div>
                      </div>

                      <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
                        <div class="td big">{{ item.name }}</div>
                        <div class="td other">{{ item.status_uuid }}</div>
                        <div class="td other">{{ item.assign }}</div>
                        <div class="td other">{{ item.plan_start_time }}</div>
                        <div class="td other">{{ item.plan_start_time }}</div>
                        <div class="td other">80%</div>
                        <div class="td other">{{ item.status }}</div>
                        <div class="td other">{{ item.status }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/header';
import Menu from '../component/menu';
import AddProjectButton from '../component/button';
import router from '../../router';
import http from "@/util/http";

export default {
  data: function () {
    return {
      cur: 0,
      tabTitle: ['进行中', '未开始', '已完成', '全部项目'],
      items: []
    };
  },
  components: {
    Header,
    Menu,
    AddProjectButton
  },
  created: function () {
    let self = this;
    self.project_list();
  },
  methods: {
    add: function () {
      let team = "HacWichD";
      console.log(team)
      router.push({ name: 'AddProject', params: { team: team } });
    },
    project_list: function() {
      let self = this;
      let url = '/api/team/Sxv5vAgD/project/list';
      http.post(url).then(function (response) {
        self.items = response.data;
      });
    }
  }
};
</script>

<style scoped>
.project-container { padding: 10px;-webkit-flex: 0 0 auto;flex: 0 0 auto;min-width: 666px;width: 100%;border-radius: 3px;flex-direction: column;display: flex;min-height: 100%; }
.project-container-inner { background-color: #fff;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);flex-direction: column;display: flex;min-height: 100%; }
#project-top-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;border-bottom: 1px solid #e8e8e8;margin-top: 10px;width: 100%; }
#project-top-row div { text-align: left; }
.tab-title{ width: 100%;background-color: #ffffff;padding: 0 0 0 20px;flex: 0 0 auto;flex-direction: row;display: flex; }
.tab-title .active{ border-bottom: 2px solid #1890ff;color: #1890ff; }

#project-new-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;margin-top: 10px;width: 100%; }
#project-main { flex: 1;display: flex; }
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0;font-weight: bolder; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table .th { flex: 1 1 auto;width: 300px;padding: 5px 0 5px 20px;font-size: 12px; }
.table .other { border-left: 1px solid #e8e8e8; }
.table .td { flex: 1 1 auto;width: 300px;padding: 5px 0 5px 20px; }
.table .big { width: 555px; }
.table-row:nth-child(odd){ background:#f8f8f8; }
.table-row:nth-child(even){ background:#ffffff; }
</style>
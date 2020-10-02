<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <div class="layout-container-column">
          <Header title="项目管理"></Header>
          <div class="app-main-container">
            <div class="right-container">
              <div class="right-container-inner">
                <div id="project-top-row">
                  <div style="flex: 0 1 auto;">
                    <div class="tab-title">
                      <div style="flex:0 0 auto;text-align: center;cursor: pointer;padding: 0 10px 10px 10px;" v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</div>
                    </div>
                  </div>
                  <div style="flex: 1;">&nbsp;</div>
                  <div style="flex: 0 0 auto;align-items: normal;" class="flex-row">
                    <div style="flex: 0 0 auto;">
                      <svg t="1601475264212" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30270" width="14" height="14"><path d="M958.464 385.024 819.2 385.024 917.504 286.72c24.576-24.576 24.576-65.536 0-90.112l-90.112-90.112c-24.576-24.576-65.536-24.576-90.112 0L638.976 204.8 638.976 65.536c0-36.864-28.672-65.536-65.536-65.536l-126.976 0c-36.864 0-65.536 28.672-65.536 65.536L380.928 204.8 286.72 106.496c-24.576-24.576-65.536-24.576-90.112 0L106.496 196.608C77.824 221.184 77.824 262.144 106.496 286.72L204.8 385.024 65.536 385.024C28.672 385.024 0 413.696 0 446.464l0 126.976c0 36.864 28.672 65.536 65.536 65.536L204.8 638.976 106.496 737.28c-24.576 24.576-24.576 65.536 0 90.112l90.112 90.112c24.576 24.576 65.536 24.576 90.112 0L385.024 819.2l0 139.264c0 36.864 28.672 65.536 65.536 65.536l126.976 0c36.864 0 65.536-28.672 65.536-65.536L643.072 819.2l98.304 98.304c24.576 24.576 65.536 24.576 90.112 0l90.112-90.112c24.576-24.576 24.576-65.536 0-90.112L819.2 638.976l139.264 0c36.864 0 65.536-28.672 65.536-65.536l0-126.976C1024 413.696 995.328 385.024 958.464 385.024zM512 704.512c-106.496 0-192.512-86.016-192.512-192.512 0-106.496 86.016-192.512 192.512-192.512 106.496 0 192.512 86.016 192.512 192.512C704.512 618.496 618.496 704.512 512 704.512z" p-id="30271" fill="#707070"></path></svg>
                    </div>
                    <div style="margin-right: 20px;margin-left: 5px;">项目配置中心</div>
                  </div>
                </div>
                <div id="project-new-row">
                  <div style="flex: 0 0 auto;flex-direction: row;margin-left: 20px;text-align: left;">
                    <AddProjectButton title="新增项目" @submit="add">新增项目</AddProjectButton>
                  </div>
                  <div style="flex: 1;display: inline-block;padding-right: 20px;"></div>
                  <div style="flex: 0 0 auto;flex-direction: column;align-items: center;display: flex;">
                    <div style="width: 100%;text-align: right;flex: 1;align-items: center;display: flex;">
                      <div style="flex: 1;display: inline-block;padding-right: 20px;">
                        <Search placeholder="项目名字" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="project-main">
                  <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;padding: 10px;">
                    <b-table :fields="fields" :items="items" bordered striped>
                      <template v-slot:cell(nameuuid)="data">
                        <router-link :to="{ name:'Redirect', params: { team: team, project: data.item.uuid } }">{{ data.item.name }}</router-link>
                      </template>
                      <template v-slot:cell(status)="data">
                        <Status :name="data.item.status_category" :color="data.item.status_uuid" />
                      </template>
                      <template v-slot:cell(owner)>
                        <b-progress :value="25" variant="success" striped :animated="animate"></b-progress>
                      </template>
                      <template v-slot:cell(assign)>
                        <div class="flex-row">
                          <div style="flex: 0 0 auto;display: flex;align-items: center;">
                            <b-img left src="https://picsum.photos/25/25/?image=25" rounded="circle" alt="Left image"></b-img>
                          </div>
                          <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;">
                            <b-link href="#foo">何敏</b-link>
                          </div>
                        </div>
                      </template>
                      <template v-slot:cell(create_time)="data">
                        {{ data.value | formatDate }}
                      </template>
                    </b-table>
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
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import AddProjectButton from '../component/common/form/button';
import Status from '../component/common/block/status';
import Search from '../component/common/form/search';

import router from '../../router';
import http from "@/util/http";
import {formatDate} from "@/util/date";

export default {
  data: function () {
    return {
      cur: 0,
      team: '',
      com: '',
      tabTitle: ['进行中', '未开始', '已完成', '全部项目'],
      fields: [
        { key: 'nameuuid', label: '项目名称', formatter: '项目名称' },
        { key: 'status', label: '项目状态', formatter: '项目状态' },
        { key: 'assign', label: '项目负责人', formatter: '项目负责人' },
        { key: 'owner', label: '工作项目完成度', formatter: '工作项目完成度' },
        { key: 'plan_start_time', label: '计划开始时间', formatter: '计划开始时间' },
        { key: 'plan_end_time', label: '计划完成时间', formatter: '计划完成时间' },
        { key: 'issue_type_count', label: '工作项数量', formatter: '工作项数量' },
        { key: 'on_issue_type_count', label: '进行中工作项', formatter: '进行中工作项' }
      ],
      items: []
    };
  },
  components: {
    Header,
    Menu,
    AddProjectButton,
    Status,
    Search
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project_list();
  },
  filters: {
    formatDate(time) {
      return formatDate(time);
    }
  },
  methods: {
    add: function () {
      let self = this;
      router.push({ name: 'AddProject', params: { team: self.team } });
    },
    project_list: function() {
      let self = this;
      let url = self.urls.list_project.format(self.team);
      http.post(url).then(function (response) {
        self.items = response.data;
      });
    }
  }
};
</script>

<style scoped>
#project-top-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;border-bottom: 1px solid #e8e8e8;margin-top: 10px;width: 100%; }
#project-top-row div { text-align: left; }
.tab-title{ width: 100%;background-color: #ffffff;padding: 0 0 0 20px;flex: 0 0 auto;flex-direction: row;display: flex; }
.tab-title .active{ border-bottom: 2px solid #1890ff;color: #1890ff; }

#project-new-row { display: flex;flex-direction: row;-webkit-flex: 0 1 auto;flex: 0 1 auto;-webkit-flex-direction: row;margin-top: 10px;width: 100%;align-items: center; }
#project-main { flex: 1;display: flex; }
</style>
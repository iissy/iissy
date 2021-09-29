<template>
  <div class="overview" style="overflow:auto;flex: 1 0 auto;padding: 20px;width: 100%;position: relative;">
    <div class="flex-row" style="border-radius: 3px;flex: 1;">
      <div class="left flex-row align-items-center">
        <div style="flex: 1;" class="flex-row align-items-center">
          <div style="font-size: 18px;">项目概览</div>
          <div class="project-overview-progress align-items-center justify-content-center task-flex-auto">
            <b-progress :value="progressRate" variant="warning" height="2rem" striped animate>
              <b-progress-bar :value="progressRate" :label="`${((progressRate / 100) * 100).toFixed(0)}%`"></b-progress-bar>
            </b-progress>
          </div>
          <div style="flex: 0 0 auto;">
            <ChangeStatus :name="item.status_uuid" style="margin-left: 5px;" :color="item.status_uuid" :team="team" :project="project"/>
          </div>
        </div>
      </div>
    </div>
    <div class="task-stat ibox flex-row">
      <div class="task-stat-item">
        <div class="flex-column">
          <div class="task-stat-icon">
            <svg t="1602158573955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27927" width="30" height="30"><path d="M512.718 1.549C230.377 1.549 1.494 230.432 1.494 512.774S230.377 1024 512.718 1024s511.224-228.884 511.224-511.226S795.06 1.55 512.718 1.55z m0 971.325c-254.108 0-460.102-205.996-460.102-460.102S258.61 52.67 512.718 52.67 972.82 258.665 972.82 512.772 766.826 972.874 512.718 972.874z m232.06-496.332c-79.556-54.133-223.815-135.157-305.959-185.36-33.678-21.239-61.996-12.71-64.717 24.8-1.971 100.468 0 294.317 0 396.523 1.711 38.08 35.282 43.102 64.419 27.812 82.05-49.71 223.071-135.147 305.536-185.11-0.54-0.327 62.614-35.06 0.72-78.665z" p-id="27928" fill="#1296db"></path></svg>
          </div>
          <div class="task-stat-body flex-column align-items-center">
            <div class="task-stat-count">{{ item.to_do_count }}</div>
            <div class="task-stat-text">未开始</div>
          </div>
        </div>
      </div>
      <div class="task-stat-item">
        <div class="flex-column">
          <div class="task-stat-icon">
            <svg t="1602158832799" class="icon" viewBox="0 0 1098 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29074" width="30" height="30"><path d="M549.47 851.316c-38.634 0-69.82-31.185-69.82-69.818V184.32c0-38.633 31.186-69.818 69.82-69.818s69.817 31.185 69.817 69.818v596.945c0 38.633-31.185 70.051-69.818 70.051z m239.708-186.181c-38.633 0-69.818-31.186-69.818-69.819V370.27c0-38.633 31.185-69.818 69.818-69.818s69.818 31.185 69.818 69.818v225.047c0 38.633-31.185 69.819-69.818 69.819z m239.942-31.884c-38.633 0-69.818-31.186-69.818-69.818V402.385c0-38.632 31.185-69.818 69.818-69.818s69.818 31.186 69.818 69.818v161.048c0 38.632-31.185 69.818-69.818 69.818z m-719.36 31.884c-38.633 0-69.818-31.186-69.818-69.819V370.27c0-38.633 31.185-69.818 69.818-69.818s69.818 31.185 69.818 69.818v225.047c0 38.633-31.418 69.819-69.818 69.819zM69.818 633.25C31.185 633.25 0 602.065 0 563.433V402.385c0-38.632 31.185-69.818 69.818-69.818s69.818 31.186 69.818 69.818v161.048c0 38.632-31.185 69.818-69.818 69.818z" p-id="29075" fill="#d4237a"></path></svg>
          </div>
          <div class="task-stat-body flex-column align-items-center">
            <div class="task-stat-count">{{ item.in_progress_count }}</div>
            <div class="task-stat-text">进行中</div>
          </div>
        </div>
      </div>
      <div class="task-stat-item">
        <div class="flex-column">
          <div class="task-stat-icon">
            <svg t="1602158959005" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30986" width="30" height="30"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m273.066667 388.266667l-298.666667 298.666666c-21.333333 21.333333-59.733333 21.333333-81.066667 0l-170.666666-166.4c-21.333333-21.333333-21.333333-59.733333 0-81.066666s59.733333-21.333333 81.066666 0l123.733334 123.733333 260.266666-256c21.333333-21.333333 59.733333-21.333333 81.066667 0 29.866667 21.333333 29.866667 64 4.266667 81.066667z" fill="#3FC591" p-id="30987"></path></svg>
          </div>
          <div class="task-stat-body flex-column align-items-center">
            <div class="task-stat-count">{{ item.done_count }}</div>
            <div class="task-stat-text">已完成</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row project-overview">
      <div class="project-overview-info ibox">
        <div style="font-size: 16px;">
          项目简介：
        </div>
        <div style="color: #98a6ad;padding-top: 10px;">
          Jitask 是一款精简、多租户的项目管理软件，提供任务管理、文档管理两大板块，内置权限管理，各类报表，项目配置，需求任务关联等功能，目前仅支持saas部署。我们的追求：小而精，不做多余功能的。使命：用好系统，少用系统，不粘滞用户。
          <br/>
          <br/>
          系统使用 Golang + Vue 2.x + bootstrap-vue 开发，由 Jimmy 一人独自开发，用时近两年，大多为脱产期间开发，数据库使用 Mysql 8.x，Redis 5.x。使用阿里云 docker-compose 公有部署。
          <br/>
          <br/>
          欢迎你们体验，您的宝贵意见是我成长的指南。
        </div>
        <div class="project-overview-time flex-row">
          <div style="flex: 1;">
            <ProjectAssign :user="item.assign"></ProjectAssign>
          </div>
          <div style="flex: 1;padding: 5px;">
            <div style="padding-left: 7px;">开始时间</div>
            <div class="field-cell-time header edit">
              <b-form-datepicker
                  size="sm"
                  v-model="planStartTime"
                  v-bind="zh"
                  :date-format-options="{ 'year': 'numeric', 'month': 'numeric', 'day': 'numeric' }"
                  :no-flip="true"
                  :hide-header="true"
                  @shown="onShownStart"
                  @context="onContextStart"
                  placeholder="未设置">
              </b-form-datepicker>
            </div>
          </div>
          <div style="flex: 1;padding: 5px;">
            <div style="padding-left: 7px;">结束时间</div>
            <div class="field-cell-time header edit">
              <b-form-datepicker
                  size="sm"
                  v-model="planEndTime"
                  v-bind="zh"
                  :date-format-options="{ 'year': 'numeric', 'month': 'numeric', 'day': 'numeric' }"
                  :no-flip="true"
                  :hide-header="true"
                  @shown="onShownEnd"
                  @context="onContextEnd"
                  placeholder="未设置">
              </b-form-datepicker>
            </div>
          </div>
        </div>

        <div class="project-overview-member">
          <div style="font-size: 16px;">项目成员：</div>
          <div class="flex-row" style="padding: 5px 0 0 0;">
            <Avatar v-for="a in pics" :pic="a.path" :key="a.uuid"/>
          </div>
        </div>

      </div>
      <div class="project-overview-issue-stat ibox">
        <div style="font-size: 16px;">工作项类型统计</div>
        <div style="flex: 1;margin-top: 30px;">
          <bar :chartData="chartData" :options="options" :height="canvasHeight" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectAssign from "./assign";
import Bar from '../../chart/bar';
import http from "../../utils/http";
import ChangeStatus from "./change_status";
import Avatar from "./avatar";

export default {
  data() {
    return {
      team: '',
      project: '',
      projectName: '',
      item: { assign: {} },
      pics: [{uuid: 1, path:"/images/avatar-0.jpg"},
        {uuid: 2, path: "/images/avatar-1.jpg"},
        {uuid: 3, path: "/images/avatar-2.jpg"},
        {uuid: 4, path: "/images/avatar-3.jpg"},
        {uuid: 5, path: "/images/avatar-4.jpg"},
        {uuid: 6, path: "/images/avatar-5.jpg"}],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            stacked: true
          }],
          xAxes: [{
            stacked: true
          }]
        }
      },
      chartData: {},
      chartData2: {
        // labels: ['需求', '任务', '缺陷'],
        datasets: [{
          label: '未开始',
          // data: [11, 10, 3],
          barPercentage: 0.6,
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },{
          label: '进行中',
          // data: [8, 5, 1],
          barPercentage: 0.6,
          backgroundColor: 'rgba(54, 162, 235, 0.5)'
        },{
          label: '已完成',
          // data: [5, 2, 3],
          barPercentage: 0.6,
          backgroundColor: 'rgba(255, 206, 86, 0.5)'
        }]
      },
      canvasHeight: 400,
      zh: {
        weekdayHeaderFormat: 'narrow',
        labelPrevDecade: '过去十年',
        labelPrevYear: '上一年',
        labelPrevMonth: '上个月',
        labelCurrentMonth: '当前月份',
        labelNextMonth: '下个月',
        labelNextYear: '明年',
        labelNextDecade: '下一个十年',
        labelToday: '今天',
        labelSelected: '选定日期',
        labelNoDateSelected: '未选择日期',
        labelCalendar: '日历',
        labelNav: '日历导航',
        labelHelp: '使用光标键浏览日期'
      },
      planChanged: false,
      planStartTime: '',
      planEndTime: ''
    }
  },
  watch: {
    item(v) {
      let self = this;
      self.planStartTime = v.plan_start_time ? new Date(v.plan_start_time) : "";
      self.planEndTime = v.plan_end_time ? new Date(v.plan_end_time) : "";
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.project_get();
    self.status_data_list();
  },
  methods: {
    project_get: function () {
      let self = this;
      let url = self.urls.project_get.format(self.team, self.project);
      http.get(url).then(function (response) {
        self.item = response.data;
      });
    },
    status_data_list: function () {
      let self = this;
      let url = self.urls.status_data_list.format(self.team, self.project);
      http.get(url).then(function (response) {
        self.chartData2.labels = response.data.labels;
        self.chartData2.datasets[0].data = response.data.datas[0];
        self.chartData2.datasets[1].data = response.data.datas[1];
        self.chartData2.datasets[2].data = response.data.datas[2];
        self.chartData = self.chartData2;
      });
    },
    onShownStart: function () {
      let self = this;
      self.planChanged = true;
    },
    onShownEnd: function () {
      let self = this;
      self.planChanged = true;
    },
    onContextStart: function (ctx) {
      let self = this;
      if (self.planChanged && ctx.selectedYMD) {
        self.planChanged = false;
        let dt = new Date(ctx.selectedYMD);
        let data = { plan_start_time: dt.getTime() };
        http.post(self.urls.project_plan_update.format(self.team, self.project), data).then(function (response) {
          if (response.data.code === 200) {
            self.bus.$emit("alertSuccess", '更新成功');
            self.project_get();
          }
        }).catch(function (err) {
          self.bus.$emit("alertDanger", err.response.data.errcode);
        });
      }
    },
    onContextEnd: function (ctx) {
      let self = this;
      if (self.planChanged && ctx.selectedYMD) {
        self.planChanged = false;
        let dt = new Date(ctx.selectedYMD);
        let data = { plan_end_time: dt.getTime() };
        http.post(self.urls.project_plan_update.format(self.team, self.project), data).then(function (response) {
          if (response.data.code === 200) {
            self.bus.$emit("alertSuccess", '更新成功');
            self.project_get();
          }
        }).catch(function (err) {
          self.bus.$emit("alertDanger", err.response.data.errcode);
        });
      }
    }
  },
  components: {
    ProjectAssign,
    Bar,
    ChangeStatus,
    Avatar
  },
  computed: {
    progressRate() {
      let self = this;
      if (self.item.to_do_count + self.item.in_progress_count + self.item.done_count === 0) {
        return 0;
      }

      let rate = self.item.done_count * 100/(self.item.to_do_count + self.item.in_progress_count + self.item.done_count)
      return rate.toFixed(0);
    }
  }
}
</script>

<style scoped>
.overview .right { flex: 0 0 44%;width: 44%;max-width: 800px;min-width: 300px; }
.overview .middle { flex: 0 0 2%;max-width: 20px;width: 2%; }
.overview .left { flex: 1 1 55%;width: 55%;min-width: 55%; }
.task-stat { width: 100%;justify-content: space-between;margin-top: 20px; }
.task-stat-item { flex: 1;text-align: center;padding: 15px; }
.task-stat-item .task-stat-icon { flex: 0 0 auto;margin-top: 5px; }
.task-stat-item .task-stat-body { flex: 0 0 auto;align-items: normal; }
.task-stat-item .task-stat-count { color: #363636;font-weight: 700;font-size: 2.5rem;padding: 5px 0;}
.task-stat-item .task-stat-text { color: #999999; }
.task-stat > div + div { border-left: 1px solid #eef2f7; }
.project-overview { flex: 1;margin-top: 20px; }
.project-overview-info { flex: 1 1 50%;margin-right: 10px;padding: 20px;max-width: 50%; }
.project-overview-issue-stat { flex: 1 1 50%;margin-left: 10px;padding: 20px;max-width: 50%; }
.project-overview-progress { padding: 0 20px; }
.project-overview-time { flex: 1;justify-content: space-between;margin-top: 50px; }
.project-overview-member { flex: 1;margin-top: 50px; }
</style>
<template>
  <div class="overview" style="overflow:auto;flex: 1 0 auto;padding: 10px;width: 100%;position: relative;">
    <div class="flex-row header-container-inner" style="border-radius: 3px;flex: 1;padding: 15px;">
      <div class="left flex-row align-items-center">
        <div style="font-size: 18px;">项目概览</div>
        <ChangeStatus style="margin-left: 5px;" :name="item.status_uuid" :color="item.status_uuid" :team="team" :project="project"/>
      </div>
      <div class="middle"></div>
      <div class="right flex-row">
        <div style="flex: 1;"></div>
        <div style="flex: 0 0 auto;border: 1px solid #d9d9d9;padding: 3px 10px;border-radius: 3px;cursor: pointer;" class="flex-row">
          <div><b-icon icon="pencil-square"/></div>
          <div style="margin-left: 5px;">编辑预览</div>
        </div>
      </div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-top: 10px;position: relative;">
      <div style="flex: 1;position: relative;" class="flex-row">
        <div style="border-radius: 3px;height: 330px;" class="header-container-inner left">
          <div style="padding: 20px 20px 0 20px;">
            <div style="margin-bottom: 20px;font-size: 15px;">项目信息</div>
            <div style="margin-left: -5px;">
              <ProjectAssign :user="item.assign"></ProjectAssign>
            </div>
            <div class="flex-row" style="width: 100%;justify-content: space-between;margin: 20px 0 30px 0;">
              <div style="flex: 0 0 auto;text-align: center;">
                <div class="flex-row">
                  <div style="flex: 0 0 auto;margin-top: 5px;">
                    <svg t="1602158573955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27927" width="30" height="30"><path d="M512.718 1.549C230.377 1.549 1.494 230.432 1.494 512.774S230.377 1024 512.718 1024s511.224-228.884 511.224-511.226S795.06 1.55 512.718 1.55z m0 971.325c-254.108 0-460.102-205.996-460.102-460.102S258.61 52.67 512.718 52.67 972.82 258.665 972.82 512.772 766.826 972.874 512.718 972.874z m232.06-496.332c-79.556-54.133-223.815-135.157-305.959-185.36-33.678-21.239-61.996-12.71-64.717 24.8-1.971 100.468 0 294.317 0 396.523 1.711 38.08 35.282 43.102 64.419 27.812 82.05-49.71 223.071-135.147 305.536-185.11-0.54-0.327 62.614-35.06 0.72-78.665z" p-id="27928" fill="#1296db"></path></svg>
                  </div>
                  <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
                    <div style="text-align: left;color: #363636;">{{ item.to_do_count }}</div>
                    <div style="text-align: left;color: #999999;font-size: 12px;">未开始</div>
                  </div>
                </div>
              </div>
              <div style="flex: 0 0 auto;text-align: center;">
                <div class="flex-row">
                  <div style="flex: 0 0 auto;margin-top: 5px;">
                    <svg t="1602158832799" class="icon" viewBox="0 0 1098 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29074" width="30" height="30"><path d="M549.47 851.316c-38.634 0-69.82-31.185-69.82-69.818V184.32c0-38.633 31.186-69.818 69.82-69.818s69.817 31.185 69.817 69.818v596.945c0 38.633-31.185 70.051-69.818 70.051z m239.708-186.181c-38.633 0-69.818-31.186-69.818-69.819V370.27c0-38.633 31.185-69.818 69.818-69.818s69.818 31.185 69.818 69.818v225.047c0 38.633-31.185 69.819-69.818 69.819z m239.942-31.884c-38.633 0-69.818-31.186-69.818-69.818V402.385c0-38.632 31.185-69.818 69.818-69.818s69.818 31.186 69.818 69.818v161.048c0 38.632-31.185 69.818-69.818 69.818z m-719.36 31.884c-38.633 0-69.818-31.186-69.818-69.819V370.27c0-38.633 31.185-69.818 69.818-69.818s69.818 31.185 69.818 69.818v225.047c0 38.633-31.418 69.819-69.818 69.819zM69.818 633.25C31.185 633.25 0 602.065 0 563.433V402.385c0-38.632 31.185-69.818 69.818-69.818s69.818 31.186 69.818 69.818v161.048c0 38.632-31.185 69.818-69.818 69.818z" p-id="29075" fill="#d4237a"></path></svg>
                  </div>
                  <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
                    <div style="text-align: left;color: #363636;">{{ item.in_progress_count }}</div>
                    <div style="text-align: left;color: #999999;font-size: 12px;">进行中</div>
                  </div>
                </div>
              </div>
              <div style="flex: 0 0 auto;text-align: center;">
                <div class="flex-row">
                  <div style="flex: 0 0 auto;margin-top: 5px;">
                    <svg t="1602158959005" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30986" width="30" height="30"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m273.066667 388.266667l-298.666667 298.666666c-21.333333 21.333333-59.733333 21.333333-81.066667 0l-170.666666-166.4c-21.333333-21.333333-21.333333-59.733333 0-81.066666s59.733333-21.333333 81.066666 0l123.733334 123.733333 260.266666-256c21.333333-21.333333 59.733333-21.333333 81.066667 0 29.866667 21.333333 29.866667 64 4.266667 81.066667z" fill="#3FC591" p-id="30987"></path></svg>
                  </div>
                  <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
                    <div style="text-align: left;color: #363636;">{{ item.done_count }}</div>
                    <div style="text-align: left;color: #999999;font-size: 12px;">已完成</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-bottom: 30px;">
              <div class="flex-row">
                <div style="flex: 0 0 auto;">
                  <svg t="1602159041752" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32642" width="30" height="30"><path d="M507.056 833.35h-308.99c-27.191 0-49.439-7.416-66.742-24.72-7.416-7.415-9.888-17.303-9.888-27.19V311.774c0-27.191 29.663-49.438 64.27-51.91h64.27c9.888 0 14.832-2.472 14.832-9.888v-19.775c4.943-19.776 19.775-29.663 44.494-29.663 19.776 0 34.607 12.36 37.08 32.135v2.472c2.471 27.19 2.471 27.19 34.606 27.19h269.44c12.36 0 17.303-2.471 17.303-12.359v-17.303c2.472-19.776 19.776-29.663 42.023-29.663 22.247 0 37.079 12.36 39.55 29.663 0 9.887-4.943 22.247 2.473 27.19 9.887 4.945 24.719 2.473 37.078 2.473h37.08c37.078 2.472 66.741 24.719 66.741 54.382V781.44c0 32.135-32.135 54.382-76.63 56.854-98.876-4.944-205.169-4.944-308.99-4.944z m2.472-422.699h-308.99c-12.36 0-17.304 2.472-17.304 12.36v341.125c0 14.832 7.416 17.304 22.247 17.304h608.094c22.247 0 22.247 0 22.247-17.304V425.483c0-12.36-2.472-14.832-17.303-14.832h-308.99z" fill="#88D0EA" p-id="32643"></path><path d="M316.718 707.282h-39.55c-17.304 0-24.72-7.416-27.192-19.775v-42.023c0-12.36 9.888-19.776 24.72-19.776h84.045c17.303 0 24.719 7.416 24.719 22.248v39.55c0 12.36-7.416 19.776-24.72 19.776h-42.022z m192.81 0h-39.55c-17.304 0-27.192-7.416-27.192-19.775v-39.551c0-14.832 7.416-19.776 24.72-22.248h81.573c14.831 0 24.72 7.416 24.72 19.776v42.023c0 12.36-9.889 19.775-24.72 19.775h-39.55z m192.81-81.574h42.023c14.831 0 24.72 7.416 22.247 19.776v44.495c0 12.36-9.888 19.775-24.72 19.775h-84.044c-14.832 0-24.72-7.416-24.72-19.775v-42.023c0-12.36 9.888-19.776 24.72-19.776 14.831-4.943 29.663-2.472 44.494-2.472z m-192.81-59.326h-42.023c-17.303 0-24.719-4.944-24.719-19.775v-44.495c0-12.36 7.416-17.303 22.247-17.303h86.518c14.831 0 22.247 7.416 24.719 19.775v42.023c0 12.36-7.416 19.775-24.72 19.775h-42.022z m-192.81-81.573h42.023c14.831 0 24.719 7.416 24.719 17.303v44.495c0 12.36-7.416 17.303-22.247 17.303h-86.518c-14.831 0-22.247-4.943-22.247-17.303V499.64c0-12.36 9.888-17.303 24.72-17.303 12.359 2.472 24.718 2.472 39.55 2.472z m383.148 81.573h-42.022c-14.832 0-24.72-7.415-24.72-19.775v-44.495c0-12.36 7.416-17.303 22.248-17.303h86.517c14.831 0 22.247 7.416 22.247 17.303v44.495c0 9.888-7.416 17.303-22.247 17.303-12.36 2.472-27.191 2.472-42.023 2.472z" fill="#88D0EA" p-id="32644"></path></svg>
                </div>
                <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
                  <div style="text-align: left;color: #363636;" class="flex-row">
                    <div style="flex: 0 0 auto;">开始时间</div>
                    <div style="flex: 0 0 auto;margin: 0 10px 0 10px;">~</div>
                    <div style="flex: 0 0 auto;">结束时间</div>
                  </div>
                  <div style="text-align: left;color: #999999;font-size: 12px;">项目计划周期</div>
                </div>
              </div>
            </div>
            <div style="flex: 1;text-align: center;">
              <div style="flex: 1;height: 100%;display: flex;-ms-flex-direction: row;">
                <div style="flex: 0 0 auto;">
                  <svg t="1602158437574" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26855" width="20" height="20"><path d="M862.315789 916.210526h26.947369v80.842106H134.736842v-80.842106h26.947369c0-154.543158 99.705263-336.842105 239.831578-404.210526C261.389474 444.631579 161.684211 262.305684 161.684211 107.789474H134.736842V26.947368h754.526316v80.842106h-26.947369c0 154.516211-99.705263 336.842105-239.831578 404.210526 140.126316 67.368421 239.831579 249.667368 239.831578 404.210526zM808.421053 161.684211V107.789474H242.526316v53.894737h565.894737zM512 538.947368c-164.378947 0-296.421053 213.557895-296.421053 377.263158h592.842106c0-163.705263-132.042105-377.263158-296.421053-377.263158z" p-id="26856" fill="#515151"></path></svg>
                </div>
                <div style="flex: 1;margin-left: 10px;align-items: normal;" class="flex-column">
                  <div style="text-align: left;padding: 3px 0 3px 0;">
                    <b-progress :value="progressRate" variant="success" striped animate></b-progress>
                  </div>
                  <div style="text-align: left;color: #999999;font-size: 12px;">项目进度</div>
                </div>
                <div style="flex: 0 0 100px;margin-left: 10px;align-items: normal;justify-content: center;height: 100%;display: flex;" class="flex-column">
                  <div style="flex: 1;height: 100%;text-align: left;">{{ progressRate }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="middle"></div>
        <div style="border-radius: 3px;height: 330px;padding: 15px;position: relative;" class="header-container-inner right">
          <div style="position: relative;">
            <div style="font-size: 15px;">工作项趋势</div>
            <div  style="position: relative;display: block;" id="com00009Line">
              <line1 :chart-data="datacollection" :options="options" :height="280" />
            </div>
          </div>
        </div>
      </div>
      <div style="flex: 1;margin-top: 10px;position: relative;" class="flex-row">
        <div style="border-radius: 3px;height: 330px;padding: 15px;" class="header-container-inner left">
          <div>
            <div style="font-size: 15px;margin-bottom: 20px;">公告</div>
            <div style="line-height: 25px;">
              爱上对方爱上对方爱上对方阿斯顿发生的发生的发生的， 阿斯顿发生的发生的发送发送打赏，阿斯顿阿斯顿发生的发送大声道爱死大声道发达撒大声地，阿斯顿发生的阿斯顿爱上对方爱死范德萨。
            </div>
          </div>
        </div>
        <div class="middle"></div>
        <div style="border-radius: 3px;height: 330px;padding: 15px;position: relative;" class="header-container-inner right">
          <div style="position: relative;flex: 1;">
            <div style="font-size: 15px;">工作项类型统计</div>
            <div style="position: relative;flex: 1;">
              <bar :chartData="chartData" :options="options" :height="canvasHeight" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectAssign from "../project/assign";
import Line1 from '../../../chart/line'
import Bar from '../../../chart/bar';
import http from "../../../scripts/http";
import ChangeStatus from "../project/change_status";

export default {
  data() {
    return {
      headerHeight: 15,
      lineHeight: 45,
      count: 6,
      team: '',
      project: '',
      item: { assign: {} },
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
      datacollection: {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        datasets: [
          {
            label: '组一',
            borderColor: '#FF6A6A',
            borderWidth: 1,
            fill: false,
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }, {
            label: '组二',
            borderColor: '#FFD700',
            borderWidth: 1,
            fill: false,
            data: [60, 30, 22, 49, 50, 60, 49, 70, 60, 40, 32, 18]
          }
        ]
      }
    }
  },
  created () {
    //this.fillData();
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
    }
  },
  components: {
    ProjectAssign,
    Line1,
    Bar,
    ChangeStatus
  },
  computed: {
    canvasHeight() {
      return this.headerHeight + this.count * this.lineHeight;
    },
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
#com00009Line > div { position: relative;display: block; }
.overview .left { flex: 0 0 26%;width: 26%;max-width: 400px;min-width: 260px; }
.overview .middle { flex: 0 0 1%;max-width: 10px;width: 1%; }
.overview .right { flex: 1 1 73%;width: 73%;min-width: 73%; }
</style>
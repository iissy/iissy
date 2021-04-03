<template>
  <div class="overview" style="overflow:auto;flex: 1 0 auto;padding: 20px;width: 100%;position: relative;">
    <div class="flex-row" style="border-radius: 3px;flex: 1;">
      <div class="left flex-row align-items-center">
        <div style="flex: 1;" class="flex-row align-items-center">
          <div style="flex: 0 0 auto;font-size: 18px;">项目概览</div>
          <ChangeStatus :name="item.status_uuid" style="margin-left: 5px;" :color="item.status_uuid" :team="team" :project="project"/>
        </div>
      </div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-top: 20px;position: relative;" class="flex-row">
<!--      <div style="flex: 1;position: relative;" class="flex-row">-->
        <div class="ibox padding20 left">
          <div>
            <div style="line-height: 25px;">
              <div>
                项目简介：
              </div>
              <div style="color: #98a6ad;">
                在下面加上辅助文字可以很自然地引入其他主题，因此事前必做之事。 Voluptates，Illo，Ist itaque Voluptas腐败，按比例还原吗？ tempore，妖精的天体，volerotas quod perferendis！ 变质了，你好吧，鲁鲁姆？ Lorem ipsum dolor坐在amet。
                <br/>
                <br/>
                Voluptates，Illo，Ist itaque Voluptas腐败，按比例还原吗？ tempore，妖精的天体，volerotas quod perferendis！ 变质了，你好吧，鲁鲁姆？ Lorem ipsum dolor坐在amet。 在下面加上辅助文字可以很自然地引入其他主题，因此事前必做之事。
              </div>
            </div>
            <div style="margin-top: 50px;">
              <div class="flex-row">
                <div style="flex: 1;">
                  <div>开始时间</div>
                  <div>~</div>
                </div>
                <div style="flex: 1;">
                  <div>结束时间</div>
                  <div>~</div>
                </div>
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
            <div style="margin-top: 50px;">
              <div>项目成员：</div>
              <div class="flex-row" style="padding: 5px 0 0 0;">
                <Avatar v-for="a in pics" :pic="a.path" :key="a.uuid"/>
              </div>
            </div>
            <div style="margin-top: 50px;">
              <ProjectAssign :user="item.assign"></ProjectAssign>
            </div>
          </div>
        </div>
        <div class="middle"></div>
        <div style="position: relative;" class="right">
          <div class="ibox padding20">
            <div class="flex-row" style="width: 100%;justify-content: space-between;">
              <div style="flex: 0 0 auto;text-align: center;">
                <div class="flex-row">
                  <div style="flex: 0 0 auto;margin-top: 5px;">
                    <svg t="1602158573955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27927" width="30" height="30"><path d="M512.718 1.549C230.377 1.549 1.494 230.432 1.494 512.774S230.377 1024 512.718 1024s511.224-228.884 511.224-511.226S795.06 1.55 512.718 1.55z m0 971.325c-254.108 0-460.102-205.996-460.102-460.102S258.61 52.67 512.718 52.67 972.82 258.665 972.82 512.772 766.826 972.874 512.718 972.874z m232.06-496.332c-79.556-54.133-223.815-135.157-305.959-185.36-33.678-21.239-61.996-12.71-64.717 24.8-1.971 100.468 0 294.317 0 396.523 1.711 38.08 35.282 43.102 64.419 27.812 82.05-49.71 223.071-135.147 305.536-185.11-0.54-0.327 62.614-35.06 0.72-78.665z" p-id="27928" fill="#1296db"></path></svg>
                  </div>
                  <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
                    <div style="text-align: left;color: #363636;font-weight: 700;">{{ item.to_do_count }}</div>
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
                    <div style="text-align: left;color: #363636;font-weight: 700;">{{ item.in_progress_count }}</div>
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
                    <div style="text-align: left;color: #363636;font-weight: 700;">{{ item.done_count }}</div>
                    <div style="text-align: left;color: #999999;font-size: 12px;">已完成</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="position: relative;flex: 1;margin-top: 20px;padding: 15px;" class="ibox padding20">
            <div style="font-size: 15px;">工作项类型统计</div>
            <div style="position: relative;flex: 1;">
              <bar :chartData="chartData" :options="options" :height="canvasHeight" />
            </div>
          </div>
        </div>
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import ProjectAssign from "../project/assign";
import Bar from '../../../chart/bar';
import http from "../../../scripts/http";
import ChangeStatus from "../project/change_status";
import Avatar from "../project/avatar.vue";

export default {
  data() {
    return {
      headerHeight: 15,
      lineHeight: 45,
      count: 6,
      team: '',
      project: '',
      projectName: '',
      item: { assign: {} },
      pics: [{uuid: 1, path:"/images/avatar-3.jpg"}, {uuid: 2, path: "/images/avatar-4.jpg"}, {uuid: 3, path: "/images/avatar-5.jpg"}, {uuid: 4, path: "/images/avatar-7.jpg"}, {uuid: 5, path: "/images/avatar-8.jpg"}],
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
    Bar,
    ChangeStatus,
    Avatar
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
.overview .right { flex: 0 0 44%;width: 44%;max-width: 700px;min-width: 560px; }
.overview .middle { flex: 0 0 2%;max-width: 20px;width: 2%; }
.overview .left { flex: 1 1 55%;width: 55%;min-width: 55%; }
</style>
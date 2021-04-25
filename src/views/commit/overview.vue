<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="22" ref="Menu"></Menu>
      <div class="rightMain">
        <Header title="代码提交" ref="Header"></Header>
        <div class="app-main-container">
          <div class="app-main-content ibox flex-column" style="padding: 10px 20px;">
            <div style="flex: 0 0 auto;" class="flex-row">
              <div style="flex: 1;width: 80%">控制区</div>
              <div style="flex:0 0 auto;text-align: right;">团队配置</div>
            </div>
            <div style="flex: 1;position: relative;width: 99%;min-width: 777px;max-width: 100%;">
              <bar v-if="loaded" :chartData="chartData" :options="options" :height="canvasHeight"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/common/header';
import Menu from '../../components/common/menu';
import Bar from '../../chart/horizontalBar';
import http from "../../utils/http";

export default {
  data: function () {
    return {
      team: '',
      headerHeight: 33,
      lineHeight: 50,
      count: 0,
      loaded: false,
      chartData: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false, showTooltips: false, scaleGridLineWidth: 10, scaleFontColor: "#ff0000", bezierCurve: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          }
        },
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Horizontal Bar Chart'
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
  },
  created () {
    let self = this;
    self.chartData.datasets[0].label = '天才队提交代码';
    self.team = self.$route.params.team
    http.post(self.urls.commit_overview.format(self.team)).then(function (response) {
      self.count = response.data.length;
      for (let i = 0; i < self.count; i++) {
        self.chartData.labels.push(response.data[i].name)
        self.chartData.datasets[0].data.push(response.data[i].count)
      }

      self.loaded = true;
    });
  },
  computed: {
    canvasHeight() {
      return this.headerHeight + this.count * this.lineHeight;
    }
  },
  components: {
    Header,
    Menu,
    Bar
  }
};
</script>
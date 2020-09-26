<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="22"></Menu>
      <div class="rightMain">
        <Header title="代码提交"></Header>
        <div class="app-main-container">
          <div class="app-main-content">
            <div style="flex: 0;display: flex;flex-direction: row;padding: 10px 20px 0 20px;">
              <div style="flex: 1;">控制区</div>
              <div style="flex:0 0 auto;width: 100px;text-align: right;">团队配置</div>
            </div>
            <div style="padding: 0 20px 0 20px;">
              <bar v-if="loaded" :chartData="chartData" :options="options" :height="canvasHeight"/>
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
import Bar from '../../chart/bar';
import http from "../../util/http";

export default {
  data: function () {
    return {
      headerHeight: 33,
      lineHeight: 50,
      count: 0,
      loaded: false,
      chartData: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
    let url = '/api/team/00ff0000/commit/overview';
    http.post(url).then(function (response) {
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
<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="24"></Menu>
      <div class="rightMain">
        <Header title="代码提交"></Header>
        <div class="app-main-container">
          <div class="app-main-content">
            <div style="flex: 0;display: flex;flex-direction: row;">
              <div style="flex: 1;">控制区</div>
              <div style="flex:0 0 auto;width: 100px;text-align: right;">配置</div>
            </div>
            <div>
              <bar v-if="loaded" :chartdata="chartData" :options="options" :height="120"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header';
import Menu from '../../components/menu';
import Bar from '../../chart/bar';
import http from "../../util/httper";

export default {
  data: function () {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
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
          display: true,
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
    let url = '/api/commit/team/00ff0000/overview';
    http.post(url).then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        self.chartData.labels.push(response.data[i].name)
        self.chartData.datasets[0].data.push(response.data[i].count)
      }

      self.loaded = true;
    });
  },
  components: {
    Header,
    Menu,
    Bar
  }
};
</script>
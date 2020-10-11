<template>
  <div class="flex-row" style="position: relative;">
    <div style="flex: 0 0 20%;display: block;position: relative;width: 20%;min-width: 20%;max-width: 20%;">asdfasdf</div>
    <div style="background-color: #e0e0e0;justify-content: center;position: relative;align-items: center;flex: 1 1 70%;display: block;width: 70%;min-width: 70%;max-width: 70%;">
      <div style="background-color: #ffffff;display: block;position: relative;">
        <div style="display: block;">
          <line1 :chart-data="datacollection" :options="options" :height="280" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Line1 from '@/chart/line';

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
      chartData: {
        labels: ['需求', '任务', '缺陷'],
        datasets: [{
          label: '未开始',
          data: [11, 10, 3],
          barPercentage: 0.6,
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },{
          label: '进行中',
          data: [8, 5, 1],
          barPercentage: 0.6,
          backgroundColor: 'rgba(54, 162, 235, 0.5)'
        },{
          label: '已完成',
          data: [5, 2, 3],
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
  components: {
    Line1
  },
  computed: {
    canvasHeight() {
      return this.headerHeight + this.count * this.lineHeight;
    }
  }
}
</script>
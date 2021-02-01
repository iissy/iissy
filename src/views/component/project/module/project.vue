<template>
  <div @click="goto" style="width: 250px;height: 175px;padding: 15px 15px 10px 20px;cursor: pointer;margin-right: 10px;" class="g-container flex-column">
    <div style="flex: 0 0 auto;">
      <div style="flex: 0 0 auto;color: #333333;padding-right: 5px;" class="flex-row align-items-center">
        <div style="flex: 1;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 15px;">{{ project.name }}</div>
        <div style="flex: 0 0 auto;align-content: end;" class="pin-star">
          <b-icon @click="setPin" icon="star" scale="1.3"></b-icon>
        </div>
      </div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 14px;">{{ desc }}</div>
    </div>
    <div style="flex: 1;" class="flex-row align-items-center">
      <div style="flex: 1;">
        <Pie :chartData="chartData" :options="options" :width="180" :height="90"/>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../../../router";
import Pie from '../../../../chart/pie';

export default {
  data() {
    return {
      team: '',
      canvasHeight: 300,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: true,
          position: 'right'
        }
      },
      chartData: {
        datasets: [{
          data: [],
          backgroundColor: ['rgba(255, 99, 132, 0.3)','rgba(54, 162, 235, 0.3)','rgba(255, 206, 86, 0.3)']
        }],
        labels: [
          '未开始',
          '进行中',
          '已完成'
        ]
      }
    }
  },
  props: {
    project: Object
  },
  mounted() {
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.chartData.datasets[0].data.push(self.project.to_do_count);
    self.chartData.datasets[0].data.push(self.project.in_progress_count);
    self.chartData.datasets[0].data.push(self.project.done_count);
  },
  methods: {
    goto: function () {
      let self = this;
      router.push({ name: 'Project', params: { team: self.team, project: self.project.uuid } });
    },
    setPin: function (event) {
      event.stopPropagation();
    }
  },
  computed: {
    desc: function () {
      return "最近页面更新于 8 小时前"
    }
  },
  components: {
    Pie
  }
}
</script>

<style scoped>
.pin-star:hover { color: #f0a100; }
</style>
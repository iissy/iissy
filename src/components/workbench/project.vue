<template>
  <div style="width: 250px;height: 175px;padding: 15px 15px 10px 20px;margin-right: 20px;margin-top: 20px;" class="ibox flex-column">
    <div style="flex: 0 0 auto;">
      <div style="flex: 0 0 auto;color: #333333;padding-right: 5px;" class="flex-row align-items-center">
        <div style="flex: 1;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 15px;">{{ project.name }}</div>
        <div style="flex: 0 0 auto;align-content: end;" :class="{pined: project.is_pin}" class="pin-star">
          <b-icon v-if="project.is_pin" @click="unPin" icon="star-fill" scale="1.3"></b-icon>
          <b-icon v-else @click="pin" icon="star" scale="1.3"></b-icon>
        </div>
      </div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 14px;">更新于 {{ project.task_update_time/1000 | timeFormat }}</div>
    </div>
    <div @click="goto" style="flex: 1;cursor: pointer;" class="flex-row align-items-center">
      <div style="flex: 1;">
        <Pie :chartData="chartData" :options="options" :width="180" :height="90"/>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";
import Pie from '../../chart/pie';
import http from "@/utils/http";

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
    pin: function (event) {
      let self = this;
      event.stopPropagation();
      http.post(self.urls.project_pin.format(self.team, self.project.uuid)).then(function (response) {
        if(response.data.code === 200) {
          self.$parent.project_list();
        }
      }).catch(function (err) {
        self.bus.$emit('alertDanger', err.response.data.errcode);
      });
    },
    unPin: function (event) {
      let self = this;
      event.stopPropagation();
      http.post(self.urls.project_unpin.format(self.team, self.project.uuid)).then(function (response) {
        if(response.data.code === 200) {
          self.$parent.project_list();
        }
      }).catch(function (err) {
        self.bus.$emit('alertDanger', err.response.data.errcode);
      });
    }
  },
  components: {
    Pie
  }
}
</script>

<style scoped>
</style>
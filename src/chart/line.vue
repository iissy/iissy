<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false, showTooltips: false, scaleGridLineWidth: 10, scaleFontColor: "#000000", bezierCurve: false })
  }
}
</script>
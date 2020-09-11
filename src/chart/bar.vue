<script>
import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
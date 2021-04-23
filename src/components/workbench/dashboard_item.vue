<template>
  <div @click="goto" style="width: 250px;height: 175px;padding: 15px 15px 10px 20px;cursor: pointer;margin-right: 10px;border: none;" class="ibox flex-column">
    <div style="flex: 0 0 auto;">
      <div style="flex: 0 0 auto;color: #333333;padding-right: 5px;" class="flex-row align-items-center">
        <div style="flex: 1;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 15px;">仪表盘</div>
        <div style="flex: 0 0 auto;align-content: end;" class="pin-star">
          <b-icon @click="setPin" icon="star" scale="1.3"></b-icon>
        </div>
      </div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 14px;">3 张卡片</div>
    </div>
    <div style="flex: 1;" class="flex-row">
      <div style="flex: 1;opacity: 0.5;">
        <svg t="1607044799842" class="icon" viewBox="0 0 1058 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7685" width="90" height="90"><path d="M13.789867 0.034133h1024v1024h-1024z" fill="#011528" fill-opacity=".01" p-id="7686"></path><path d="M528.861867 244.5312c59.767467 0 115.780267 16.554667 163.703466 45.226667l75.332267-116.565334a455.850667 455.850667 0 0 0-239.035733-67.413333c-252.928 0-458.6496 205.755733-458.6496 458.683733 0 113.7664 41.710933 217.9072 110.557866 298.154667l110.148267-84.616533a318.600533 318.600533 0 0 1-81.954133-213.538134c0-176.401067 143.496533-319.931733 319.8976-319.931733" fill="#32CBFF" p-id="7687"></path><path d="M787.285333 185.787733l-75.332266 116.565334a319.6928 319.6928 0 0 1 136.8064 262.109866c0 81.988267-31.061333 156.8768-81.954134 213.538134l110.148267 84.5824a456.533333 456.533333 0 0 0 110.592-298.120534c0-157.115733-79.4624-296.004267-200.260267-378.6752" fill="#0448DD" p-id="7688"></path><path d="M626.176 431.069867l-143.121067 202.615466-0.034133 0.341334a47.2064 47.2064 0 1 0 81.885867 41.403733l70.417066-239.957333c1.672533-5.563733-5.802667-9.181867-9.147733-4.437334" fill="#32CBFF" p-id="7689"></path><path d="M13.7216 989.866667h1024v34.133333h-1024z" fill="#0448DD" p-id="7690"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";

export default {
  data() {
    return {
      team: ''
    }
  },
  props: {
    project: Object
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
  },
  created() {
  },
  methods: {
    goto: function () {
      let self = this;
      router.push({ name: 'Workbench', params: { team: self.team, type: 'dashboard' } });
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
  }
}
</script>

<style scoped>
.pin-star:hover { color: #f0a100; }
</style>
<template>
  <div style="flex: 1;">
    <div class="com-outline">
      <div v-for="item in items" :key="item.com">
        <router-link :class="{active: (item.uuid === selectedCom)}" class="com align-items-center justify-content-center" :to="{ name:'Workbench', params: { team: team, type: item.uuid } }">
          <div style="font-size: 16px;font-weight: 500;flex: 0 0 auto;">
            {{ item.name }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: '-',
      selectedCom: 'overview',
      items: [
        { uuid: 'overview', name: '概览' },
        { uuid: 'dashboard', name: '仪表盘' },
        { uuid: 'filters', name: '筛选器' }
      ]
    }
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.shift();
  },
  methods: {
    shift: function () {
      let self = this;
      self.selectedCom = self.$route.params.type || self.selectedCom;
    }
  }
}
</script>

<style scoped>
.com-outline { background-color: #ffffff;height:48px;display: flex;flex-direction: row;width: 100%;flex: 1; }
.com-outline a { flex:1;vertical-align: middle;height: 100%;display: flex;padding: 0 20px 0 20px;cursor: pointer;text-decoration: none; }
.com-outline a.active { border-top: 3px solid #17C4BB;background-color: #f8f8f8;border-bottom: 3px solid #f8f8f8; }
.com-outline a.active  div { color: #17C4BB!important; }
</style>
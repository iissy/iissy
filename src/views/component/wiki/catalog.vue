<template>
  <div id="catalog" class="flex-column">
    <div style="flex: 0 0 40px;border-bottom: 1px solid #dedede;" class="flex-row align-items-center">
      <div v-b-toggle.sidebar style="flex: 0 0 auto;margin-left: 20px;outline: none;cursor: pointer;">
        <b-icon icon="list" scale="1.5"/>
      </div>
      <div style="flex: 1;margin-left: 10px;font-weight: bold;">新员工培训文档</div>
      <div style="flex: 0 0 auto;margin-right: 20px;">
        <b-icon icon="gear-fill" scale="1.2"/>
      </div>
    </div>
    <div style="flex: 0 0 auto;padding: 10px 20px;" class="flex-row">
      <div style="flex: 1;color: #909090;">页面树</div>
      <div style="flex: 0 0 auto;">
        <svg t="1604069110603" class="icon" viewBox="0 0 1027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21470" width="16" height="16"><path d="M68.266667 0h896c34.133333 0 59.733333 25.6 59.733333 68.266667s-25.6 68.266667-68.266667 68.266666H68.266667C25.6 128 0 102.4 0 68.266667S25.6 0 68.266667 0z m0 443.733333h221.866666c34.133333 0 68.266667 25.6 68.266667 68.266667s-42.666667 68.266667-76.8 68.266667H68.266667C25.6 580.266667 0 546.133333 0 512s25.6-68.266667 68.266667-68.266667z m819.2 85.333334h102.4c17.066667 0 25.6-8.533333 34.133333-25.6s0-25.6-8.533333-42.666667L819.2 273.066667c-8.533333-8.533333-25.6-8.533333-42.666667-8.533334-8.533333 8.533333-17.066667 25.6-17.066666 34.133334v657.066666c0 34.133333 25.6 68.266667 68.266666 68.266667 34.133333 0 68.266667-25.6 68.266667-68.266667l-8.533333-426.666666zM529.066667 759.466667H426.666667c-17.066667 0-25.6 8.533333-34.133334 25.6s0 25.6 8.533334 42.666666l187.733333 187.733334c17.066667 8.533333 34.133333 8.533333 42.666667 8.533333 17.066667-8.533333 25.6-17.066667 25.6-34.133333V332.8c0-34.133333-25.6-68.266667-68.266667-68.266667s-59.733333 25.6-59.733333 68.266667v426.666667zM68.266667 896h221.866666c34.133333 0 68.266667 25.6 68.266667 68.266667s-42.666667 59.733333-76.8 59.733333H68.266667c-42.666667 0-68.266667-25.6-68.266667-68.266667s25.6-59.733333 68.266667-59.733333z" p-id="21471" fill="#515151"></path></svg>
      </div>
    </div>
    <div style="padding: 5px 20px;">
      <div class="page-item" v-for="p in pages" :key="p.uuid" :class="{active: p.uuid === selected }">
        <b-icon icon="journals"/>
        {{ p.title }}
      </div>
    </div>
    <b-sidebar id="sidebar" title="快速导航" width="300px" backdrop>
      <div style="border-top: 1px solid #dedede;padding: 0 20px;">
        <div class="tool">
          <div class="tool-header">工具</div>
          <div class="tool-item" v-for="t in tools" :key="t.uuid">
            <router-link :to="{ name: t.name, params: t.params }">{{ t.title }}</router-link>
          </div>
        </div>
        <div class="tool">
          <div class="tool-header">页面组</div>
          <div class="tool-item" v-for="s in spaces" :key="s.uuid" :class="{active: s.uuid === space }">
            <router-link :to="{ name: 'Space', params: { team: team, space: s.uuid } }">{{ s.title }}</router-link>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: '-',
      space: '-'
    }
  },
  props: {
    spaces: Array,
    pages: Array,
    selected: String
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
  },
  created() {
  },
  methods: {
  },
  components: {
  },
  computed: {
    tools: function () {
      let self = this;
      return [
        {uuid: 'wiki-setting', name: 'WikiSetting', params: { team: self.team, type: 'list' }, title: '文档配置中心'}
      ]
    }
  }
}
</script>

<style scoped>
#catalog { flex: 0 0 300px;border-right: 1px solid #dedede; }
.tool { margin-top: 20px; }
.tool .tool-header { color: #909090;margin-bottom: 5px; }
.tool .tool-item { padding: 5px 0 5px 10px;cursor: pointer;border-radius: 3px; }
.tool .tool-item a { display: block; }
.tool .tool-item:hover { background-color: #e9e9e9; }
.tool .tool-item.active { background-color: rgba(51,143,229,0.1); }
.page-item { flex: 0 0 auto;padding: 5px 10px;cursor: pointer; }
.page-item.active,.page-item:hover { background-color: #e8e8e8;border-radius: 3px; }
.page-item.active { font-weight: 600; }
</style>
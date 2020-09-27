<template>
  <div style="flex: 1;">
    <div id="com" class="com-outline" v-if="items && items.length > 0">
      <div style="flex: 0 0 auto;flex-direction: column;align-items: center;justify-content: center;">
        <div style="flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;">
          <div style="font-size: 18px;font-weight: 500;color:#303030;flex: 0 0 auto;" class="flex-row">
            <div style="flex: 0 0 auto;">
              <svg t="1601207608457" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3222" width="28" height="28"><path d="M512 0h32v160h-32zM512 256h32v160h-32zM512 512h32v160h-32zM512 768h32v160h-32z" p-id="3223" fill="#8a8a8a"></path></svg>
            </div>
            <div style="flex: 0 0 auto;font-size: 16px;margin: 0 10px 0 0;">
              国庆有奖活动
            </div>
          </div>
        </div>
      </div>
      <div v-for="item in items" :key="item.com">
        <div :class="{active: (item.com == selectedCom)}" class="com" @click="shift_tab({ name:'Component', params: { team: team, project: project, com: item.com } })">
          <div style="font-size: 16px;font-weight: 500;color:#303030;flex: 0 0 auto;">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="com-outline">&nbsp;</div>
  </div>
</template>

<script>
import router from '../../../router';

export default {
  data() {
    return {
      dropdownActive: false,
      dropParams: ['个人中心', '退出登录'],
      team: '',
      project: '',
      selectedCom: ''
    }
  },
  props: {
    title: String,
    items: Array
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.$refs.mbMenu) {
        if (!this.$refs.mbMenu.contains(e.target)) {
          this.dropdownActive = false
        }
      }
    })
  },
  watch: {
    '$route' () {
      let self = this;
      self.selectedCom = self.$route.params.com;
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.selectedCom = self.$route.params.com;
  },
  methods: {
    dropdown: function()
    {
      // console.log(event.target.getAttribute('class'));
      // if(event.target.getAttribute('class') === 'dropdownBtn')
      this.dropdownActive = !this.dropdownActive;
    },
    tabToggle: function() {
      this.dropdownActive = false;
    },
    shift_tab: function (to) {
      router.push(to)
    }
  }
}
</script>

<style scoped>
.com-outline { background-color: #ffffff;height:48px;display: flex;flex-direction: row;width: 100%;flex: 1; }
.com-outline .com { flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;padding: 0 20px 0 20px;cursor: pointer; }
.com-outline .active { border-top: 3px solid #17C4BB;background-color: #f8f8f8;border-bottom: 3px solid #f8f8f8; }
.com-outline div.active > div { color: #17C4BB!important; }

.nav-pills .nav-link { display: inline;padding:0; }
</style>
<template>
  <div style="flex: 1;">
    <div id="com" class="com-outline" v-if="items && items.length > 0">
      <div style="flex: 0 0 auto;flex-direction: column;align-items: center;justify-content: center;">
        <div style="flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;">
          <div style="font-weight: 500;flex: 0 0 auto;" class="flex-row">
            <div style="flex: 0 0 auto;font-size: 16px;margin: 0 0 0 5px;">
              {{ projectName }}
            </div>
            <div style="flex: 0 0 auto;">
              <svg t="1601464922880" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17317" width="20" height="20"><path d="M317.53565009 427.73164886c0-8.83499123 3.4992003-17.0635663 9.84922787-23.17024423 12.76215126-12.28887814 33.15932821-11.91070717 45.4649891 0.84584985l140.08325302 145.33624916L650.93195739 404.87020696c12.19321655-12.87571445 32.58927465-13.44520859 45.47561816-1.26877477 6.391425 6.06248338 10.0556555 14.58755344 10.05565551 23.38338494 0 8.2498332-3.11935105 16.09520249-8.78799959 22.09279262L536.65775399 619.31664082c-9.47609172 10.03607566-24.39258676 12.69949573-37.10830582 6.62470502-0.9538188-0.43691055-1.68666489-0.94710568-2.10399557-1.24807609a36.86048075 36.86048075 0 0 0-0.78263488-0.41844953c-1.533942-0.81116553-3.57192548-1.88693886-5.5131285-3.74087167l-0.12587051-0.12195455c-0.11691972-0.11356318-0.22209153-0.2260075-0.32055025-0.33006046a11.08835315 11.08835315 0 0 1-1.45953854-1.21674829L326.5390281 450.05380553c-5.80794523-6.03898755-9.00449686-13.96435453-9.00449685-22.32159726z" p-id="17318"></path></svg>
            </div>
          </div>
        </div>
      </div>
      <div v-for="item in items" :key="item.com">
<!--        <div :class="{active: (item.uuid === selectedCom)}" class="com" @click="shift_tab({ name:'Component', params: { team: team, project: project, com: item.uuid } })">-->
<!--          <div style="font-size: 16px;font-weight: 500;flex: 0 0 auto;">-->
<!--            <b-icon v-if="item.uuid === 'designer'" scale="0.9" icon="gear"></b-icon>-->
<!--            {{ item.name }}-->
<!--          </div>-->
<!--        </div>-->


        <router-link :class="{active: (item.uuid === selectedCom)}" class="com" :to="{ name:'Component', params: { team: team, project: project, com: item.uuid } }">
          <div style="font-size: 16px;font-weight: 500;flex: 0 0 auto;">
            <b-icon v-if="item.uuid === 'designer'" scale="0.9" icon="gear"></b-icon>
            {{ item.name }}
          </div>
        </router-link>

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
    items: Array,
    projectName: String,
    designer: Boolean
  },
  mounted() {
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
    shift_tab: function (to) {
      router.push(to)
    }
  }
}
</script>

<style scoped>
.com-outline { background-color: #ffffff;height:48px;display: flex;flex-direction: row;width: 100%;flex: 1; }
.com-outline a.com { flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;padding: 0 20px 0 20px;cursor: pointer;text-decoration: none; }
.com-outline a.active { border-top: 3px solid #17C4BB;background-color: #f8f8f8;border-bottom: 3px solid #f8f8f8; }
.com-outline a.active  div { color: #17C4BB!important; }

.nav-pills .nav-link { display: inline;padding:0; }
</style>
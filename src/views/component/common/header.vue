<template>
  <div class="app-header">
    <div class="flex-row" style="width: 100%;">
      <div style="background-color: #ffffff;height:48px;padding:10px 10px 10px 20px;display: flex;flex-direction: row;flex: 0 0 auto;">
        <div style="flex: 1;flex-direction: column;align-items: center;justify-content: center;">
          <div style="flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;">
            <div style="font-weight: 500;color:#303030;flex: 0 0 auto;" class="flex-row">
              <div style="flex: 0 0 auto;">
                <svg t="1601285243495" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8224" width="20" height="20"><path d="M438.857143 804.571429H73.142857V73.142857h731.428572v365.714286h73.142857V62.537143A62.902857 62.902857 0 0 0 815.177143 0H62.537143A62.902857 62.902857 0 0 0 0 62.537143v752.64A62.902857 62.902857 0 0 0 62.537143 877.714286H438.857143z" p-id="8225" fill="#17C4BB"></path><path d="M950.857143 292.571429v658.285714H292.571429v73.142857h668.891428A62.902857 62.902857 0 0 0 1024 961.462857V292.571429z" p-id="8226" fill="#17C4BB"></path><path d="M585.142857 804.571429h219.428572v-219.428572h-73.142858v94.72L344.137143 292.571429H438.857143V219.428571H219.428571v219.428572h73.142858V344.137143L679.862857 731.428571H585.142857v73.142858z" p-id="8227" fill="#17C4BB"></path></svg>
              </div>
              <div style="flex: 0 0 auto;font-size: 18px;margin: 0 10px 0 5px;">
                {{title}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectHeader :items="items"></ProjectHeader>
      <div style="flex: 0;">
        <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" offset="-10" no-caret>
          <template v-slot:button-content>
            <img src="/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
          </template>
          <b-dropdown-item href="/main/center/account">个人中心</b-dropdown-item>
          <b-dropdown-item href="/main/logout">退出登录</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHeader from '../project/header';

export default {
  data() {
    return {
      dropdownActive: false,
      dropParams: ['个人中心', '退出登录']
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
  methods: {
    dropdown: function()
    {
      // console.log(event.target.getAttribute('class'));
      // if(event.target.getAttribute('class') === 'dropdownBtn')
      this.dropdownActive = !this.dropdownActive;
    },
    tabToggle: function() {
      this.dropdownActive = false;
    }
  },
  components: {
    ProjectHeader
  }
}
</script>

<style scoped>
.app-header .wrapper { display: flex; justify-content: center; flex: 0;height: 100%;margin-right: 10px; }
/*!*.wrapper>div { flex: 1; text-align: center; }*!*/
/*ul.dropdownWrapper { padding: 5px 0 5px 0;margin: 0;list-style-type: none; }*/
/*.dropdownWrapper { border: 1px solid #eeeeee; font-size: 14px;background-color: #ffffff;display: flex;flex-direction: column;}*/
/*.dropdownWrapper li { width: 100%;text-align: center;padding: 5px 0 5px 0; }*/
/*.dropdownWrapper li:hover{ background-color: #eee; }*/
/*.nav-item { display: flex;display: flex;display: -webkit-flex;flex-direction: column;flex: 1;align-items:center;justify-content:center; }*/
/*.nav-item .active { font-size: 14px;text-align: center; }*/
/*.dropdownBtn { display: inline-block; flex: 0 0 auto;border-radius: 30px;overflow: hidden;cursor: pointer; }*/
</style>
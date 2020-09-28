<template>
  <div class="app-header">
    <div class="flex-row" style="width: 100%;">
      <div style="background-color: #ffffff;height:48px;padding:10px 10px 10px 20px;display: flex;flex-direction: row;flex: 0 0 auto;">
        <div style="flex: 1;flex-direction: column;align-items: center;justify-content: center;">
          <div style="flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;">
            <div style="font-weight: 500;color:#303030;flex: 0 0 auto;" class="flex-row">
              <div style="flex: 0 0 auto;">
                <svg t="1601298534225" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16381" width="27" height="27"><path d="M100.309 523.896c0 225.277 182.613 407.891 407.895 407.891 225.277 0 407.891-182.613 407.891-407.891 0-225.281-182.613-409.602-407.891-409.602-225.282 0-407.895 182.613-407.895 409.602z m0 0" fill="#F1F1F3" p-id="16382"></path><path d="M450.176 626.294h119.465v131.414H450.176z" fill="#D4A48A" p-id="16383"></path><path d="M509.91 250.829c58.023 0 150.184 32.426 150.184 187.73 0 88.746-29.012 148.481-42.664 163.84-11.949 15.358-76.801 46.082-107.52 46.082V250.829z m0 0" fill="#EED4BB" p-id="16384"></path><path d="M689.109 476.106c3.414-23.89-8.535-46.078-25.602-49.492-17.066-1.707-32.426 15.359-35.84 40.961-3.414 23.891 8.535 46.078 25.602 49.491 17.067 1.707 32.426-17.065 35.84-40.96zM509.91 250.829c-58.027 0-150.188 32.426-150.188 187.73 0 88.746 29.012 148.481 42.664 163.84 11.949 15.358 76.801 46.082 107.523 46.082V250.829z m0 0" fill="#EED4BB" p-id="16385"></path><path d="M330.707 476.106c-3.41-23.89 8.535-46.078 25.602-49.492 17.066-1.707 32.426 15.359 35.84 40.961 1.707 23.891-8.531 46.078-25.602 49.491-17.067 1.707-34.133-17.065-35.84-40.96z m0 0" fill="#EED4BB" p-id="16386"></path><path d="M305.109 738.935c-8.535 8.531-23.895 64.852-34.133 116.051 66.559 47.789 150.184 76.801 238.934 76.801h1.707V709.919l-75.094-6.825c-1.707 1.707-116.054 17.067-131.414 35.841z m0 0" fill="#6D90AC" p-id="16387"></path><path d="M509.91 931.786c88.746 0 172.371-29.012 238.934-78.504-11.949-49.496-25.602-105.816-34.137-114.348-17.066-17.066-131.41-34.134-131.41-34.134l-73.387 5.118v221.868z m0 0" fill="#6D90AC" p-id="16388"></path><path d="M509.91 709.919l-61.441-23.891-15.359 15.358 30.719 66.56 46.081-58.027z m0 0l61.438-23.891 15.359 15.358-30.719 66.56-46.078-58.027z m0 0" fill="#FFFFFF" p-id="16389"></path><path d="M663.508 430.028S713 206.454 509.91 206.454c-204.801 0-153.602 218.453-153.602 218.453s27.309-15.359 27.309 56.32h5.117s10.242-47.785 13.652-90.453c71.684 0 134.828-8.535 189.441-52.906 30.719 0 34.133 37.547 34.133 66.558l-13.652 5.122s13.652 25.597 13.652 71.679h8.535c0.001-1.707-1.706-80.215 29.013-51.199z m0 0" fill="#2F343A" p-id="16390"></path><path d="M509.91 590.454c27.305 0 49.492-8.535 49.492-20.481h-97.281c-1.707 11.946 20.481 20.481 47.789 20.481z m0 0" fill="#FFFFFF" p-id="16391"></path></svg>
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
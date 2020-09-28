<template>
  <div class="app-header">
    <div class="flex-row" style="width: 100%;">
      <div style="background-color: #ffffff;height:48px;padding:10px 10px 10px 20px;display: flex;flex-direction: row;flex: 0 0 auto;">
        <div style="flex: 1;flex-direction: column;align-items: center;justify-content: center;">
          <div style="flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;">
            <div style="font-weight: 500;color:#303030;flex: 0 0 auto;" class="flex-row">
              <div style="flex: 0 0 auto;">
                <svg t="1601284538875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3757" width="24" height="24"><path d="M990.08 111.36a32 32 0 0 0-32 32V960H140.16a32 32 0 0 0 0 64h849.92a32 32 0 0 0 32-32V143.36a32 32 0 0 0-32-32z" p-id="3758" fill="#17C4BB"></path><path d="M393.6 841.6a32 32 0 0 0-32-32H64V64h745.6v300.8a32 32 0 0 0 64 0V32a32 32 0 0 0-32-32H32A32 32 0 0 0 0 32v809.6a32 32 0 0 0 32 32h329.6a32 32 0 0 0 32-32z" p-id="3759" fill="#17C4BB"></path><path d="M625.28 841.6a32 32 0 0 0 32 32H841.6a32 32 0 0 0 32-32V657.92a32 32 0 1 0-64 0v106.24L256 210.56h106.24a32 32 0 0 0 0-64H178.56a32 32 0 0 0-32 32v184.96a32 32 0 0 0 64 0V256l553.6 553.6H657.28a32 32 0 0 0-32 32z" p-id="3760" fill="#17C4BB"></path></svg>
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
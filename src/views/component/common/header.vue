<template>
  <div class="app-header">
    <div class="flex-row" style="width: 100%;">
      <div style="background-color: #ffffff;height:48px;padding:10px 10px 10px 20px;display: flex;flex-direction: row;width: 100%;flex: 1;">
        <div style="flex: 1;flex-direction: column;align-items: center;justify-content: center;">
          <div style="flex:1;vertical-align: middle;align-items: center;height: 100%;display: flex;">
            <div style="font-size: 18px;font-weight: 500;color:#303030;flex: 0 0 auto;">天才团队 | {{title}}</div>
          </div>
        </div>
      </div>
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
export default {
  data() {
    return {
      dropdownActive: false,
      dropParams: ['个人中心', '退出登录']
    }
  },
  props: {
    title: String
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
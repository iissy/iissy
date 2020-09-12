<template>
  <div class="app-header">
    <div style="background-color: #ffffff;height:48px;padding:10px;display: flex;flex-direction: row;width: 100%;">
      <div style="flex: 1;">
        <span style="font-size: 18px;font-weight: 500;color:#606060;display: flex;white-space: nowrap;vertical-align: middle;align-items: center;">{{title}}</span>
      </div>
      <div style="flex: 0;">
        <div class="wrapper" >
          <div class='nav-item'>
            <div class='active dropdownBtn' @click='dropdown'>我</div>
          </div>
        </div>
        <div>
          <ul class="dropdownWrapper" v-show='dropdownActive'>
            <li><router-link to="/main/me">个人中心</router-link></li>
            <li><router-link to="/main/logout">退出登录</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { dropdownActive: false,
      dropParams: ['个人中心', '退出登录']
    }
  },
  props: {
    title: String
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
.app-header .wrapper { display: flex; justify-content: center; background-color: #555555;width: 100px;border-radius: 20%!important;flex: 0;height: 100%; }
/*.wrapper>div { flex: 1; text-align: center; }*/
ul.dropdownWrapper { padding: 5px 0 5px 0; }
.dropdownWrapper { border: 1px solid #eeeeee; font-size: 14px;background-color: #ffffff;display: flex;flex-direction: column;}
.dropdownWrapper li { width: 100%;text-align: center;padding: 5px 0 5px 0; }
.dropdownWrapper li:hover{ background-color: #eee; }
.nav-item { cursor: pointer;display: flex;display: flex;display: -webkit-flex;flex-direction: column;flex: 0;align-items:center;justify-content:center; }
.nav-item .active { color: #ffffff;font-size: 14px; }
.dropdownBtn { display: inline-block; width: 100%; flex: 0 0 auto; }
</style>
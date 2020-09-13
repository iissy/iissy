<template>
  <div class="leftBar">
    <div class="left-header">
      <div style="margin:0 auto 0 auto;text-align:left;height:40px;">
        <div style="overflow:hidden;">
          <div style="margin-left:30px;margin-top: 10px;float:left;">
            <a href="/" class="logo">爱斯园</a>
          </div>
          <div style="width: 18px;height: 18px;float: right;margin-top: 11px;margin-right: 10px;">
            <img src="/shouqi.png" />
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li :class="{active: (currentIndex == 1)}"><router-link to="/main">我的工作台</router-link></li>
      <li><span></span></li>
      <li :class="{active: (currentIndex == 21)}"><router-link to="/main/project">项目管理</router-link></li>
      <li :class="{active: (currentIndex == 22)}"><router-link to="/main/team/uh8rjki3/commit">代码提交</router-link></li>
      <li :class="{active: (currentIndex == 23)}"><router-link to="/main/team/uh8rjki3/doc">项目文档</router-link></li>

      <li><span></span></li>
      <li :class="{active: (currentIndex == 81)}"><router-link to="/main/team/uh8rjki3/member/setting">团队配置中心</router-link></li>
      <li :class="{active: (currentIndex == 82)}"><router-link to="/main/team/uh8rjki3/project/setting">项目配置中心</router-link></li>
      <li :class="{active: (currentIndex == 83)}"><router-link to="/main/team/uh8rjki3/doc/setting">文档配置中心</router-link></li>

      <li><span></span></li>
      <li><a href="/main/help" target="_blank">帮助中心</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        data: function () {
            return {
                currentIndex: parseInt(this.tagIndex)
            };
        },
        props: ['tagIndex']
    };
</script>
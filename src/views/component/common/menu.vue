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
      <li :class="{active: (currentIndex == 1)}"><Link name="我的工作台" icon="Main" :to="{ name: 'Main' }" /></li>
      <li><span></span></li>
      <li :class="{active: (currentIndex == 21)}"><Link name="项目管理" icon="Projects" :to="{ name: 'Projects', params: { team: team } }" /></li>
      <li :class="{active: (currentIndex == 22)}"><Link name="代码提交" icon="Commit" :to="{ name: 'Commit', params: { team: team } }" /></li>
      <li :class="{active: (currentIndex == 23)}"><Link name="项目文档" icon="Doc" :to="{ name:'Doc', params: { team: team } }" /></li>

      <li><span></span></li>
      <li :class="{active: (currentIndex == 81)}"><Link name="团队配置中心" icon="MemberSetting" :to="{ name: 'MemberSetting', params: { team: team } }" /></li>
      <li :class="{active: (currentIndex == 82)}"><Link name="项目配置中心" icon="ProjectSetting" :to="{ name: 'ProjectSetting', params: { team: team } }" /></li>
      <li :class="{active: (currentIndex == 83)}"><Link name="文档配置中心" icon="DocSetting" :to="{ name:'DocSetting', params: { team: team } }" /></li>

      <li><span></span></li>
      <li><Link name="帮助中心" icon="Help" :to="{ name:'Help' }" /></li>
    </ul>
  </div>
</template>

<script>
import Link from './block/link';

export default {
  data: function () {
    return {
      currentIndex: parseInt(this.tagIndex),
      team: 'Sxv5vAgD'
    };
  },
  props: ['tagIndex'],
  components: {
    Link
  }
};
</script>
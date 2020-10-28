<template>
  <transition name="fade">
    <div class="leftBar" v-if="isOpen">
      <div class="left-header">
        <div style="margin:0 auto 0 auto;text-align:left;height:40px;">
          <div style="overflow:hidden;">
            <div style="margin-left:30px;margin-top: 10px;float:left;">
              <a href="/" style="font-size: 22px;font-weight: bold;color: #ffffff;letter-spacing: 3px;margin: 0 0 0 0;text-align: center;">爱斯园</a>
            </div>
            <div style="float: right;margin-top: 11px;margin-right: 10px;cursor: pointer;" @click="close">
              <svg t="1603695788065" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25977" width="20" height="20"><path d="M989.866667 234.666667h-490.666667c-17.066667 0-34.133333-21.333333-34.133333-42.666667 0-25.6 12.8-42.666667 34.133333-42.666667h490.666667c17.066667 0 34.133333 17.066667 34.133333 42.666667 0 21.333333-12.8 42.666667-34.133333 42.666667z m-473.6 128h465.066666c25.6 0 46.933333 21.333333 46.933334 42.666666 0 25.6-21.333333 42.666667-46.933334 42.666667H516.266667c-25.6 0-46.933333-17.066667-46.933334-42.666667s21.333333-42.666667 46.933334-42.666666z m0 298.666666c-25.6 0-46.933333-21.333333-46.933334-42.666666 0-25.6 21.333333-42.666667 46.933334-42.666667h465.066666c25.6 0 46.933333 17.066667 46.933334 42.666667s-21.333333 42.666667-46.933334 42.666666H516.266667z m4.266666 128h452.266667c29.866667 0 51.2 17.066667 51.2 42.666667s-21.333333 42.666667-51.2 42.666667h-452.266667c-29.866667 0-51.2-17.066667-51.2-42.666667s21.333333-42.666667 51.2-42.666667z m-192 25.6c-17.066667 17.066667-46.933333 17.066667-64 0l-251.733333-273.066666c-17.066667-17.066667-17.066667-51.2 0-68.266667l251.733333-273.066667c17.066667-17.066667 46.933333-17.066667 64 0s17.066667 51.2 0 68.266667l-221.866666 238.933333 221.866666 238.933334c17.066667 21.333333 17.066667 51.2 0 68.266666z" p-id="25978" fill="#bfbfbf"></path></svg>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li :class="{active: (currentIndex === 1)}"><Link name="我的工作台" icon="Main" :to="{ name: 'Main' }" /></li>
        <li><span></span></li>
        <li :class="{active: (currentIndex === 21)}"><Link name="项目管理" icon="Projects" :to="{ name: 'Projects', params: { team: team } }" /></li>
        <li :class="{active: (currentIndex === 22)}"><Link name="代码提交" icon="Commit" :to="{ name: 'Commit', params: { team: team } }" /></li>
        <li :class="{active: (currentIndex === 23)}"><Link name="项目文档" icon="Doc" :to="{ name:'Doc', params: { team: team } }" /></li>

        <li><span></span></li>
        <li :class="{active: (currentIndex === 81)}"><Link name="团队配置中心" icon="TeamSetting" :to="{ name: 'TeamSettingDefault', params: { team: team } }" /></li>
        <li :class="{active: (currentIndex === 82)}"><Link name="项目配置中心" icon="ProjectSetting" :to="{ name: 'ProjectSetting', params: { team: team } }" /></li>
        <li :class="{active: (currentIndex === 83)}"><Link name="文档配置中心" icon="DocSetting" :to="{ name:'DefaultDocSetting', params: { team: team } }" /></li>

        <li><span></span></li>
        <li><Link name="帮助中心" icon="Help" :to="{ name:'Help' }" /></li>
      </ul>
    </div>
  </transition>
</template>

<script>
import Link from './block/link';

export default {
  data: function () {
    return {
      currentIndex: parseInt(this.tagIndex),
      team: 'Sxv5vAgD',
      isOpen: true
    };
  },
  props: ['tagIndex'],
  methods: {
    close: function () {
      let self = this;
      self.isOpen = false;
      self.$parent.$refs.Header.hidden = true;
    }
  },
  components: {
    Link
  }
};
</script>

<style scoped>
.fade-leave-active {
  margin-left: -230px;
  transform: translateX(0%);
  transition: 0.3s;
}
.fade-enter-active {
  margin-left: 0;
  transform: translateX(0%);
  transition: 0.3s;
}
.fade-enter {
  margin-left: -230px;
  transform: translateX(0%);
}
.fade-leave {
  transform: translateX(-100%);
}
.fade-leave-to {
  transform: translateX(-100%);
}
</style>
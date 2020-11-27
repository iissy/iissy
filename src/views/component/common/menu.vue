<template>
  <transition name="fade">
    <div class="leftBar" v-if="isOpen">
      <div class="left-header">
        <div style="margin:0 auto 0 auto;text-align:left;height:40px;">
          <div style="overflow:hidden;">
            <div style="margin-left:30px;margin-top: 10px;float:left;">
              <a href="/main">
                <div class="flex-row align-items-center">
                  <div style="flex: 0 0 auto;">
                    <svg t="1604535926297" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5606" width="25" height="25"><path d="M1150.244571 327.0656L925.2864 26.975086c-3.920457-5.880686-14.862629-9.0112-25.951086-9.0112-10.620343 0-21.211429 2.8672-25.980343 9.0112l-207.608685 282.799543c-24.488229 37.917257-12.522057 51.931429 34.552685 51.931428h103.892115c-0.468114 50.5856-3.364571 102.341486-7.753143 137.216-20.948114 167.087543-127.268571 211.646171-131.744914 213.577143-15.594057 6.436571-12.6976 29.9008 6.407314 29.9008 268.463543 0 331.103086-310.915657 340.757943-380.693943h103.8336c1.462857 0.117029 3.861943 0.292571 6.816914 0.292572 15.623314 0 46.021486-3.978971 27.735771-34.933029z" fill="#ffffff" p-id="5607"></path><path d="M600.736914 567.968914h-134.026971c0.585143-65.301943 4.271543-132.213029 9.947428-177.210514 27.092114-215.683657 164.308114-273.261714 170.130286-275.6608 20.187429-8.367543 16.384-38.619429-8.279771-38.619429-346.5216 0-427.446857 401.408-439.9104 491.461486H64.570514a88.4736 88.4736 0 0 0-8.894171-0.4096c-20.099657 0-59.392 5.090743-35.810743 45.143772l290.464914 387.452342c5.061486 7.606857 19.2512 11.644343 33.528686 11.644343 13.692343 0 27.4432-3.715657 33.440914-11.644343l268.0832-365.187657c31.685486-48.9472 16.1792-66.9696-44.6464-66.9696z" fill="#ffffff" p-id="5608"></path></svg>
                  </div>
                  <div style="flex: 0 0 auto;margin-left: 5px;">
                    <span style="font-size: 22px;font-weight: bold;color: #ffffff;letter-spacing: 3px;margin: 0 0 0 0;text-align: center;">Soul</span>
                  </div>
                </div>
              </a>
            </div>
            <div style="float: right;margin-top: 11px;margin-right: 10px;cursor: pointer;" @click="close">
              <svg t="1603695788065" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25977" width="20" height="20"><path d="M989.866667 234.666667h-490.666667c-17.066667 0-34.133333-21.333333-34.133333-42.666667 0-25.6 12.8-42.666667 34.133333-42.666667h490.666667c17.066667 0 34.133333 17.066667 34.133333 42.666667 0 21.333333-12.8 42.666667-34.133333 42.666667z m-473.6 128h465.066666c25.6 0 46.933333 21.333333 46.933334 42.666666 0 25.6-21.333333 42.666667-46.933334 42.666667H516.266667c-25.6 0-46.933333-17.066667-46.933334-42.666667s21.333333-42.666667 46.933334-42.666666z m0 298.666666c-25.6 0-46.933333-21.333333-46.933334-42.666666 0-25.6 21.333333-42.666667 46.933334-42.666667h465.066666c25.6 0 46.933333 17.066667 46.933334 42.666667s-21.333333 42.666667-46.933334 42.666666H516.266667z m4.266666 128h452.266667c29.866667 0 51.2 17.066667 51.2 42.666667s-21.333333 42.666667-51.2 42.666667h-452.266667c-29.866667 0-51.2-17.066667-51.2-42.666667s21.333333-42.666667 51.2-42.666667z m-192 25.6c-17.066667 17.066667-46.933333 17.066667-64 0l-251.733333-273.066666c-17.066667-17.066667-17.066667-51.2 0-68.266667l251.733333-273.066667c17.066667-17.066667 46.933333-17.066667 64 0s17.066667 51.2 0 68.266667l-221.866666 238.933333 221.866666 238.933334c17.066667 21.333333 17.066667 51.2 0 68.266666z" p-id="25978" fill="#bfbfbf"></path></svg>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li :class="{active: (currentIndex === 1)}"><Link name="我的工作台" icon="Main" :to="{ name: 'MainRedirect' }" /></li>
        <li><span></span></li>
        <li :class="{active: (currentIndex === 21)}"><Link name="项目管理" icon="Projects" :to="{ name: 'Projects', params: { team: team } }" /></li>
        <li :class="{active: (currentIndex === 22)}"><Link name="代码提交" icon="Commit" :to="{ name: 'Commit', params: { team: team } }" /></li>
        <li :class="{active: (currentIndex === 23)}"><Link name="项目文档" icon="Wiki" :to="{ name:'Wiki', params: { team: team } }" /></li>

        <li><span></span></li>
        <li :class="{active: (currentIndex === 81)}"><Link name="团队配置中心" icon="TeamSetting" :to="{ name: 'TeamSetting', params: { team: team, type: 'info' } }" /></li>
        <li :class="{active: (currentIndex === 82)}"><Link name="项目配置中心" icon="ProjectSetting" :to="{ name: 'ProjectSetting', params: { team: team, type: 'list' } }" /></li>
        <li :class="{active: (currentIndex === 83)}"><Link name="文档配置中心" icon="WikiSetting" :to="{ name:'WikiSetting', params: { team: team, type: 'list' } }" /></li>

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
      team: 'JZ98PYDE',
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
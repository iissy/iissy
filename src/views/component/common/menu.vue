<template>
  <div class="leftBar" v-if="isOpen">
    <div class="left-header">
      <div style="margin:0 auto 0 auto;text-align:left;height:40px;">
        <div style="overflow:hidden;">
          <div style="margin-left:30px;margin-top: 10px;float:left;">
            <a href="/" class="logo">爱斯园</a>
          </div>
          <div style="float: right;margin-top: 11px;margin-right: 10px;cursor: pointer;" @click="close">
            <svg t="1602142100563" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24345" width="20" height="20"><path d="M294.2 350.45L66.05 513.35l228.15 162.9zM102.05 214.1h826.2c19.8 0 36-16.2 36-36s-16.2-36-36-36h-826.2c-19.8 0-36 16.2-36 36s16.2 36 36 36zM928.7 813.05H102.05c-19.8 0-36 16.2-36 36s16.2 36 36 36h826.2c19.8 0 36-16.2 36-36s-15.75-36-35.55-36z m0-223.65H391.4c-19.8 0-36 16.2-36 36s16.2 36 36 36h536.85c19.8 0 36-16.2 36-36s-15.75-36-35.55-36z m0-223.65H391.4c-19.8 0-36 16.2-36 36s16.2 36 36 36h536.85c19.8 0 36-16.2 36-36s-15.75-36-35.55-36z" p-id="24346" fill="#ffffff"></path></svg>
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
      <li :class="{active: (currentIndex === 81)}"><Link name="团队配置中心" icon="MemberSetting" :to="{ name: 'MemberSetting', params: { team: team } }" /></li>
      <li :class="{active: (currentIndex === 82)}"><Link name="项目配置中心" icon="ProjectSetting" :to="{ name: 'ProjectSetting', params: { team: team } }" /></li>
      <li :class="{active: (currentIndex === 83)}"><Link name="文档配置中心" icon="DocSetting" :to="{ name:'DocSetting', params: { team: team } }" /></li>

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
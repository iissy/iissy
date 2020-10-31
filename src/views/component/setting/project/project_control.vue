<template>
  <div id="project-setting-menu">
    <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;font-size: 18px;margin-bottom: 20px;">配置中心</div>

    <div style="flex: 0;padding: 5px 30px 5px 30px;width: 100%;color:#aaaaaa;">项目</div>
    <div :class="{active: (tagIndex === 1)}"><router-link :to="{name: 'ProjectSetting', params: { team: team, type: 'manager' }}">项目管理</router-link></div>
    <div :class="{active: (tagIndex === 2)}"><router-link :to="{name: 'ProjectSetting', params: { team: team, type: 'field' }}">项目属性</router-link></div>
    <div :class="{active: (tagIndex === 3)}"><router-link :to="{name: 'ProjectSetting', params: { team: team, type: 'status' }}">项目状态</router-link></div>

    <div style="flex: 0;padding: 20px 30px 5px 30px;width: 100%;color:#aaaaaa;">工作项</div>
    <div :class="{active: (tagIndex === 11)}"><router-link :to="{name: 'TeamIssueTypeSetting', params: { team: team, type: 'manager' }}">工作项类型</router-link></div>
    <div :class="{active: (tagIndex === 12)}"><router-link :to="{name: 'TeamIssueTypeSetting', params: { team: team, type: 'field' }}">工作项属性</router-link></div>
    <div :class="{active: (tagIndex === 13)}"><router-link :to="{name: 'TeamIssueTypeSetting', params: { team: team, type: 'status' }}">工作项状态</router-link></div>
    <div :class="{active: (tagIndex === 14)}"><router-link :to="{name: 'TeamIssueTypeSetting', params: { team: team, type: 'priority' }}">优先级</router-link></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      team: '-'
    };
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
  },
  created() {
  },
  props: ['tagIndex'],
  methods: {
  }
};
</script>

<style scoped>
#project-setting-menu { flex: 0 0 auto;width: 218px;height: 100%;flex-direction: column; }
#project-setting-menu > div { flex: 0;padding: 5px 30px 5px 40px;width: 100%;text-align: left; }
#project-setting-menu > div.active { flex: 0;width: 100%;background-color: #e8e8e8;color: #338fe5; }
#project-setting-menu div a { display: block; }
#project-setting-menu > div.active a { color: #338fe5; }
</style>
<template>
  <div id="project-setting-menu">
    <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;font-size: 18px;margin-bottom: 20px;">配置中心</div>

    <div style="flex: 0;padding: 5px 30px 5px 30px;width: 100%;color:#aaaaaa;">信息</div>
    <div :class="{active: (tagIndex === 1)}"><router-link :to="{name: 'TeamSetting', params: { team: team, type: 'info' }}">团队信息</router-link></div>

    <div style="flex: 0;padding: 20px 30px 5px 30px;width: 100%;color:#aaaaaa;">成员</div>
    <div :class="{active: (tagIndex === 11)}"><router-link :to="{name: 'TeamSetting', params: { team: team, type: 'department' }}">成员管理</router-link></div>

    <div style="flex: 0;padding: 20px 30px 5px 30px;width: 100%;color:#aaaaaa;">权限</div>
    <div :class="{active: (tagIndex === 21)}"><router-link :to="{name: 'TeamSetting', params: { team: team, type: 'permission' }}">团队权限</router-link></div>
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
#project-setting-menu { flex: 0 0 218px;height: 100%;flex-direction: column; }
#project-setting-menu > div { flex: 0;padding: 5px 30px 5px 40px;width: 100%;text-align: left; }
#project-setting-menu > div.active { flex: 0;width: 100%;background-color: #e8e8e8;color: #338fe5; }
#project-setting-menu div a { display: block; }
#project-setting-menu > div.active a { color: #338fe5; }
</style>
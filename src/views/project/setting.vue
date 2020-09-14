<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="82"></Menu>
      <div class="rightMain">
        <Header title="项目配置中心"></Header>
        <div class="app-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <div id="project-setting-menu">
                <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;font-size: 18px;margin-bottom: 20px;">配置中心</div>

                <div style="flex: 0;padding: 5px 30px 5px 30px;width: 100%;color:#aaaaaa;">项目</div>
                <div>认证信息</div>
                <div>第三方</div>
                <div>第三方</div>
                <div class="active">团队信息</div>

                <div style="flex: 0;padding: 20px 30px 5px 30px;width: 100%;color:#aaaaaa;">工作项</div>
                <div>认证信息</div>
                <div>第三方</div>
              </div>
              <div style="background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
                asdfsaf
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header';
import Menu from '../../components/menu';

export default {
  data: function () {
    return {
    };
  },
  components: {
    Header,
    Menu
  },
  created: function () {
  },
  methods: {
    add: function () {
    }
  }
};
</script>

<style scoped>
#project-setting-menu { flex: 0 0 auto;width: 188px;height: 100%;flex-direction: column; }
#project-setting-menu > div { flex: 0;padding: 5px 30px 5px 40px;width: 100%;text-align: left; }
#project-setting-menu > div.active { flex: 0;width: 100%;background-color: #e8e8e8;color: #338fe5; }
#project-setting-menu > div.active a { color: #338fe5; }
</style>
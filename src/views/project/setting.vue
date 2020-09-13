<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="82"></Menu>
      <div class="rightMain">
        <Header title="项目配置中心"></Header>
        <div class="app-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <div style="flex: 0 0 auto;width: 188px;height: 100%;padding: 0 0 0 20px;flex-direction: column;">
                <div style="flex: 0;padding: 5px 30px 20px 0;width: 100%;text-align: right;font-size: 18px;">配置中心</div>

                <div style="flex: 0;padding: 5px 30px 5px 0;width: 100%;text-align: right;color:#aaaaaa;">项目</div>
                <div style="flex: 0;padding: 5px 30px 5px 0;width: 100%;text-align: right;">认证信息</div>
                <div style="flex: 0;padding: 5px 30px 5px 0;width: 100%;text-align: right;">第三方</div>
                <div style="flex: 0;padding: 5px 30px 5px 0;width: 100%;text-align: right;">团队信息</div>

                <div style="flex: 0;padding: 20px 30px 5px 0;width: 100%;text-align: right;color:#aaaaaa;">工作项</div>
                <div style="flex: 0;padding: 5px 30px 5px 0;width: 100%;background-color: #e8e8e8;color: #338fe5;text-align: right;border-right: 5px solid #ff0000;">认证信息</div>
                <div style="flex: 0;padding: 5px 30px 5px 0;width: 100%;text-align: right;">第三方</div>
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
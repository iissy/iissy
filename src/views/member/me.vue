<template>
  <div>
    <div class="app-row">
      <Menu></Menu>
      <div class="rightMain">
        <Header title="个人中心"></Header>
        <div class="app-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <div style="flex: 0 0 auto;width: 218px;height: 100%;padding: 0 20px 0 0;flex-direction: column;">
                <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;font-size: 18px;margin-bottom: 20px;">账号管理</div>

                <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;color:#aaaaaa;">个人信息</div>
                <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;">账号信息</div>
                <div style="flex: 0;padding: 5px 0 5px 25px;width: 100%;border-left: 5px solid #ff0000;background-color: #e8e8e8;color: #338fe5;">团队信息</div>

                <div style="flex: 0;padding: 20px 0 5px 30px;width: 100%;color:#aaaaaa;">钉钉账号</div>
                <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;">登陆凭证</div>
                <div style="flex: 0;padding: 5px 0 5px 30px;width: 100%;">群机器人配置</div>
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
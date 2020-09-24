<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="23"></Menu>
      <div class="rightMain">
        <Header title="群机器人"></Header>
        <div class="app-main-container">
          <div class="app-main-content">
            <div>
              <div>
                <div style="float: left;">服务器出口IP：</div><div style="margin-left: 30px;float:left;">47.244.143.251</div>
              </div>
              <div style="clear: both;">
                <div style="float: left;">消息接收地址：</div><div style="margin-left: 30px;float:left;">http://www.iissy.com/api/ding/robot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/form/header';
import Menu from '../component/common/menu';

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
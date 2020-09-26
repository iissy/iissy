<template>
  <div>
    <div class="app-row">
      <Menu></Menu>
      <div class="rightMain">
        <Header title="个人中心"></Header>
        <div class="app-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <personal tagIndex="10"></personal>
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
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import Personal from '../component/center/personal';

export default {
  data: function () {
    return {
    };
  },
  components: {
    Header,
    Menu,
    Personal
  },
  created: function () {
  },
  methods: {
    add: function () {
    }
  }
};
</script>
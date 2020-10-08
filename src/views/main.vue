<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="1" ref="Menu"></Menu>
      <div class="rightMain">
        <Header title="我的工作台" ref="Header"></Header>
        <div class="app-main-container">
          <div class="app-main-content">
            <div>
              <p>asdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './component/common/header';
import Menu from './component/common/menu';

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
  }
};
</script>
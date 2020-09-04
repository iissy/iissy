<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="1"></Menu>
      <div class="rightMain">
        <Header title="我的工作台"></Header>
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
import Header from '../components/header';
import Menu from '../components/menu';

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
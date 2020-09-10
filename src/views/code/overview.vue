<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="24"></Menu>
      <div class="rightMain">
        <Header title="代码提交"></Header>
        <div class="app-main-container">
          <div class="app-main-content">
            <div>
              <div>{{name}}</div>
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
      name: "overview.vue"
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

<style scoped>

</style>
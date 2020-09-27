<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <Header title="项目配置中心"></Header>
        <div class="app-main-container">
          <div class="right-container">
            <div class="right-container-inner">
              asdfasdfasdf
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
import http from "@/util/http";
import router from '../../router';

export default {
  data: function () {
    return {
      name: ''
    };
  },
  components: {
    Header,
    Menu
  },
  created: function () {
    // let self = this;
  },
  watch: {
  },
  methods: {
    add: function () {
      let self = this;
      http.post('/api/team/Sxv5vAgD/add/project', {
        name: self.name
      }).then(function (response) {
        if (response.data.status == true) {
          router.push({ name: 'Project' });
        } else {
          alert(response.data.msg)
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
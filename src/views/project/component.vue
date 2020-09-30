<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <Header :items="items" title="项目管理"></Header>
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
      name: '',
      team: '',
      project: '',
      com: '',
      items: [
      ]
    };
  },
  components: {
    Header,
    Menu
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    let url = '/api/team/' + self.team + '/project/' + self.project + '/components';
    http.get(url).then(function (response) {
      self.items = response.data;
    });
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
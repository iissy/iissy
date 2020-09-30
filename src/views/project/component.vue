<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <Header :items="items" title="项目管理" :projectName="projectName"></Header>
        <div class="app-main-container">
          <div class="right-container">
            <div class="right-container-inner">
              <component v-bind:is="currentTabComponent"></component>
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
import com00001 from '../component/component/com00001';
import com00002 from '../component/component/com00002';
import com00003 from '../component/component/com00003';
import com00004 from '../component/component/com00004';
import com00005 from '../component/component/com00005';
import com00006 from '../component/component/com00006';
import com00007 from '../component/component/com00007';
import com00008 from '../component/component/com00008';
import com00009 from '../component/component/com00009';
import com00010 from '../component/component/com00010';

export default {
  data: function () {
    return {
      name: '',
      team: '',
      project: '',
      projectName: '',
      com: '',
      items: [
      ],
      currentTabComponent: ''
    };
  },
  components: {
    Header,
    Menu,
    com00001,
    com00002,
    com00003,
    com00004,
    com00005,
    com00006,
    com00007,
    com00008,
    com00009,
    com00010
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
    let url = '/api/team/' + self.team + '/project/' + self.project + '/components';
    http.get(url).then(function (response) {
      self.items = response.data;
    });

    url = '/api/team/' + self.team + '/project/' + self.project + '/get';
    http.get(url).then(function (response) {
      self.projectName = response.data.name;
    });
  },
  created: function () {
    this.shift();
  },
  watch: {
    '$route' () {
      this.shift();
    }
  },
  methods: {
    add: function () {
      let self = this;
      http.post('/api/team/Sxv5vAgD/add/project', {
        name: self.name
      }).then(function (response) {
        if (response.data.status === true) {
          router.push({ name: 'Project' });
        } else {
          alert(response.data.msg)
        }
      });
    },
    shift: function () {
      let self = this;
      self.team = self.$route.params.team;
      self.project = self.$route.params.project;
      self.com = self.$route.params.com;
      let url = '/api/team/' + self.team + '/project/' + self.project + '/component/get/' + self.com;
      http.get(url).then(function (response) {
        // switch (response.data.template_uuid) {
        //   case
        // }
        self.currentTabComponent = response.data.template_uuid;
      });
    }
  }
};
</script>

<style scoped>
</style>
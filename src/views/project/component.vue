<template>
  <component v-bind:is="currentTabComponent" :comName="comName" :issue_type="issue_type"/>
</template>

<script>
import http from "../../utils/http";
import com00001 from '../../components/com/com00001';
import com00002 from '../../components/com/com00002';
import com00003 from '../../components/com/com00003';
import com00004 from '../../components/com/com00004';
import com00005 from '../../components/com/com00005';
import com00009 from '../../components/com/com00009';
import designer from '../../components/com/designer';

export default {
  data: function () {
    return {
      team: '',
      project: '',
      issue_type: '',
      com: '',
      comName: '',
      currentTabComponent: ''
    };
  },
  components: {
    com00001,
    com00002,
    com00003,
    com00004,
    com00005,
    com00009,
    designer
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.com = self.$route.params.com;
  },
  created: function () {
    let self = this;
    self.shift();
  },
  watch: {
    '$route' () {
      let self = this;
      if (self.com !== self.$route.params.com) {
        self.shift();
      }
    }
  },
  methods: {
    shift: function () {
      let self = this;
      self.team = self.$route.params.team;
      self.project = self.$route.params.project;
      self.com = self.$route.params.com;

      if (self.com === 'designer') {
        self.currentTabComponent = 'designer'
        return;
      }

      http.get(self.urls.component_get.format(self.team, self.project, self.com)).then(function (response) {
        self.currentTabComponent = response.data.template_uuid;
        self.comName = response.data.name;

        if(response.data.objects.length > 0) {
          self.issue_type = response.data.objects[0].uuid;
        }
      });
    }
  }
};
</script>
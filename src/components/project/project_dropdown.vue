<template>
  <div class="flex-row align-items-center">
    <div style="margin-right: 10px;width: 1px;height: 22px;border-left: 1px solid #d4d4d4;"></div>
    <div id="popover-project" class="flex-row align-items-center" hidefocus="true" tabindex="0">
      <div style="font-size: 16px;">{{ name }}</div>
      <div style="margin-left: 2px;height: 16px;display: flex;" class="align-items-center">
        <svg t="1604985387793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9162" width="16" height="16"><path d="M511.784082 561.278333l206.864418-206.865441c6.012947-6.012947 15.763009-6.012947 21.775956 0l50.808176 50.808176c6.012947 6.012947 6.012947 15.763009 0 21.776979l-267.463588 267.463588-2.133593 2.133593c-5.440919 5.440919-14.262842 5.440919-19.703761 0l-1.889023-1.889023-266.85472-266.855744c-6.701632-6.701632-6.375198-17.107633 0.24457-23.727401l48.179302-48.178279c6.859221-6.859221 17.980513-6.859221 24.839735 0L511.784082 561.278333z" p-id="9163" fill="#2c2c2c"></path></svg>
      </div>
      <b-popover ref="popover" target="popover-project" triggers="focus" placement="bottom" @show="project_list">
        <div style="max-height: 234px;overflow-y:auto;overflow-x: hidden;margin: 3px 0;">
          <div style="padding: 5px 10px;" v-for="p in projects" :key="p.uuid" class="status-item">
            <router-link :to="{ name:'Project', params: { team: team, project: p.uuid } }">{{ p.name }}</router-link>
          </div>
        </div>
      </b-popover>
    </div>
  </div>
</template>

<script>
import http from "../../utils/http";

export default {
  data() {
    return {
      projects: []
    }
  },
  props: {
    team: String,
    name: String
  },
  methods: {
    project_list: function() {
      let self = this;
      let url = self.urls.team_project_list.format(self.team);
      http.post(url).then(function (response) {
        self.projects = response.data;
      });
    }
  }
}
</script>

<style scoped>
#popover-project { box-shadow: none;outline: none;cursor: pointer; }
.status-item { padding: 5px 10px 5px 10px;border-radius: 0.3rem;cursor: pointer; }
.status-item a { display: block; }
.status-item:hover { background-color: #F0F8FF; }
</style>
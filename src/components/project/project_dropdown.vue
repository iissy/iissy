<template>
  <div class="flex-row align-items-center">
    <div style="margin-right: 15px;width: 1px;height: 22px;border-left: 1px solid #aaaaaa;"></div>
    <div id="popover-project" class="flex-row align-items-center project-dropdown" :class="{open: isShow}" hidefocus="true" tabindex="0">
      <div style="font-size: 16px;">{{ name }}</div>
      <b-popover ref="popover" target="popover-project" triggers="focus" placement="bottom" @show="project_list" @hidden="fnHidden">
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
      projects: [],
      isShow: false
    }
  },
  props: {
    team: String,
    name: String
  },
  methods: {
    project_list: function() {
      let self = this;
      self.isShow = true;
      let url = self.urls.team_project_list.format(self.team);
      let params = { categories: [], name: "" }
      http.post(url, params).then(function (response) {
        self.projects = response.data;
      });
    },
    fnHidden: function () {
      let self = this;
      self.isShow = false;
    }
  }
}
</script>

<style scoped>
.project-dropdown:after {
  content: '';
  display: block;
  width: 7px;
  height: 7px;
  border-left: 2px #aaa solid;
  border-bottom: 2px #aaa solid;
  position: absolute;
  bottom: initial;
  top: 7px;
  right: 5px;
  transform: rotate(-45deg);
}
.project-dropdown.open:after {
  transform: rotate(-225deg);
  top: initial;
  bottom: 7px;
  transition: all .1s ease-in-out;
}
#popover-project { position: relative;box-shadow: none;outline: none;cursor: pointer;padding-right: 20px; }
.status-item { padding: 5px 10px 5px 10px;border-radius: 0.3rem;cursor: pointer; }
.status-item a { display: block; }
.status-item:hover { background-color: #F0F8FF; }
</style>
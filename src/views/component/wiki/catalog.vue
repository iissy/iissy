<template>
  <div id="catalog" class="flex-column">
    <div style="flex: 0 0 40px;border-bottom: 1px solid #dedede;" class="flex-row align-items-center">
      <div v-b-toggle.sidebar style="flex: 0 0 auto;margin-left: 20px;outline: none;cursor: pointer;">
        <b-icon icon="list" scale="1.5"/>
      </div>
      <div style="flex: 1;margin-left: 10px;font-weight: bold;">新员工培训文档</div>
      <div style="flex: 0 0 auto;margin-right: 20px;">
        <b-icon icon="gear-fill" scale="1.2"/>
      </div>
    </div>
    <div style="overflow-y: auto;padding: 20px 0;">
      <Drafts :drafts="drafts" :selected="selected" :team="team" :space="space"/>
      <PageTree :pages="pages" :selected="selected" :team="team" :space="space"/>
      <b-sidebar id="sidebar" title="快速导航" width="300px" backdrop>
        <div style="border-top: 1px solid #dedede;padding: 0 20px;">
          <div class="tool">
            <div class="tool-header">工具</div>
            <div class="tool-item" v-for="t in tools" :key="t.uuid">
              <router-link :to="{ name: t.name, params: t.params }">{{ t.title }}</router-link>
            </div>
          </div>
          <div class="tool">
            <div class="tool-header">页面组</div>
            <div class="tool-item" v-for="s in spaces" :key="s.uuid" :class="{active: s.uuid === space }">
              <router-link :to="{ name: 'Space', params: { team: team, space: s.uuid } }">{{ s.title }}</router-link>
            </div>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import http from "@/scripts/http";
import PageTree from "@/views/component/wiki/module/page_tree";
import Drafts from "@/views/component/wiki/module/drafts";

export default {
  data() {
    return {
      team: '-',
      space: '-',
      spaces: [],
      pages: [],
      drafts: []
    }
  },
  props: {
    selected: String
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.page = self.$route.params.page;
    self.draft_list();
    self.page_list();
    self.space_list();
  },
  created() {
  },
  methods: {
    space_list: function () {
      let self = this;
      http.get(self.urls.space_list.format(self.team)).then(function (response) {
        self.spaces = response.data.spaces;
      });
    },
    page_list: function () {
      let self = this;
      http.get(self.urls.pages.format(self.team, self.space)).then(function (response) {
        self.pages = response.data.pages;
      });
    },
    draft_list: function () {
      let self = this;
      http.get(self.urls.drafts.format(self.team, self.space)).then(function (response) {
        self.drafts = response.data.drafts;
      });
    }
  },
  components: {
    PageTree,
    Drafts
  },
  computed: {
    tools: function () {
      let self = this;
      return [
        {uuid: 'wiki-setting', name: 'WikiSetting', params: { team: self.team, type: 'list' }, title: '文档配置中心'}
      ]
    }
  }
}
</script>

<style scoped>
#catalog { flex: 0 0 300px;border-right: 1px solid #dedede;width: 300px; }
.tool { margin-top: 20px; }
.tool .tool-header { color: #909090;margin-bottom: 5px; }
.tool .tool-item { padding: 0 0 0 10px;cursor: pointer;border-radius: 3px;line-height: 40px; }
.tool .tool-item a,.page-item a { display: block;overflow: hidden;white-space: nowrap;min-width: 0;text-overflow: ellipsis; }
.tool .tool-item:hover { background-color: #e9e9e9; }
.tool .tool-item.active { background-color: rgba(51,143,229,0.1); }
</style>
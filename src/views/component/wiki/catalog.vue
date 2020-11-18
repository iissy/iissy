<template>
  <div id="catalog" class="flex-column">
    <div style="flex: 0 0 40px;border-bottom: 1px solid #dedede;" class="flex-row align-items-center">
      <div v-b-toggle.sidebar style="flex: 0 0 auto;margin-left: 20px;outline: none;cursor: pointer;">
        <b-icon icon="list" scale="1.5"/>
      </div>
      <div style="flex: 1;margin-left: 10px;font-weight: bold;">{{ spaceName }}</div>
      <div style="flex: 0 0 auto;margin-right: 20px;">
        <b-icon icon="gear-fill" scale="1.2"/>
      </div>
    </div>
    <div style="overflow-y: auto;padding: 20px 0;">
      <Drafts :drafts="drafts" :selected="selected" :team="team" :space="space"/>

      <div style="padding: 0 20px;">
        <div style="flex: 0 0 auto;margin: 20px 0 10px 0;" class="flex-row align-items-center">
          <div style="flex: 1;color: #909090;">页面树</div>
          <div style="flex: 0 0 auto;">
            <svg t="1605536091310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4339" width="16" height="16"><path d="M624.904671 1023.115112a27.162332 27.162332 0 0 1-18.711829-6.639682L354.488565 814.870566a30.783976 30.783976 0 0 1-13.88297-22.333473v-380.272649L14.054003 50.100016A29.576762 29.576762 0 0 1 11.035966 18.108825 30.783976 30.783976 0 0 1 38.801905 0.000604h942.834727a30.180369 30.180369 0 0 1 21.729865 51.306627l-348.281457 362.164427v582.481122a29.576762 29.576762 0 0 1-16.901007 27.162332 25.35151 25.35151 0 0 1-13.279362 0zM400.966333 778.050516l191.343539 152.712667V400.795903a28.973154 28.973154 0 0 1 8.450503-20.52265l307.839764-319.911911H106.405932l289.127934 320.515518a27.765939 27.765939 0 0 1 5.432467 19.919043z" fill="#515151" p-id="4340"></path><path d="M985.258276 519.706557h-193.154361a30.180369 30.180369 0 0 1-30.180369-30.180369 30.180369 30.180369 0 0 1 30.180369-30.180369h193.154361a30.783976 30.783976 0 0 1 30.180369 30.180369 30.180369 30.180369 0 0 1-30.180369 30.180369zM985.258276 648.878536h-193.154361a30.180369 30.180369 0 0 1-30.180369-30.180369 30.180369 30.180369 0 0 1 30.180369-30.180369h193.154361a30.180369 30.180369 0 0 1 30.180369 30.180369 30.783976 30.783976 0 0 1-30.180369 30.180369zM985.258276 777.446908h-193.154361a30.180369 30.180369 0 0 1 0-60.360738h193.154361a30.180369 30.180369 0 0 1 0 60.360738z" fill="#515151" p-id="4341"></path></svg>
          </div>
        </div>
        <PageTree v-if="loaded" :tree="tree" :selected="selected" :team="team" :space="space"/>
      </div>

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
      tree: {},
      drafts: [],
      inside: false,
      loaded: false,
      spaceName: ''
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
    self.page_tree_get();
    self.space_list();
  },
  created() {
  },
  methods: {
    space_list: function () {
      let self = this;
      http.get(self.urls.space_list.format(self.team)).then(function (response) {
        self.spaces = response.data.spaces;
        for (let i=0;i<self.spaces.length;i++) {
          if(self.spaces[i].uuid === self.space) {
            self.spaceName = self.spaces[i].title;
            break;
          }
        }
      });
    },
    page_tree_get: function () {
      let self = this;
      http.get(self.urls.page_tree_get.format(self.team, self.space)).then(function (response) {
        self.tree = response.data;
        if (self.tree.pages && self.tree.pages.length > 0) {
          for (let i=0;i<self.tree.pages.length;i++) {
            let page = self.tree.pages[i];
            self.find_page(page);
            if (self.inside) {
              break;
            }
          }
        }
        self.loaded = true;
      });
    },
    draft_list: function () {
      let self = this;
      http.get(self.urls.drafts.format(self.team, self.space)).then(function (response) {
        self.drafts = response.data.drafts;
      });
    },
    find_page: function (tree) {
      let self = this;
      if (tree.pages && tree.pages.length > 0) {
        for (let i=0;i<tree.pages.length;i++) {
          let page = tree.pages[i];
          if (page.uuid === self.page) {
            tree.opened = true;
            self.inside = true;
          } else {
            self.find_page(page);
          }

          if (self.inside) {
            break;
          }
        }
      }

      if (self.inside) {
        tree.opened = true;
      }
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
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

      <div style="padding: 0 20px;">
        <div style="flex: 0 0 auto;margin: 20px 0 10px 0;" class="flex-row align-items-center">
          <div style="flex: 1;color: #909090;">页面树</div>
          <div style="flex: 0 0 auto;">
            <svg t="1605536091310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4339" width="16" height="16"><path d="M624.904671 1023.115112a27.162332 27.162332 0 0 1-18.711829-6.639682L354.488565 814.870566a30.783976 30.783976 0 0 1-13.88297-22.333473v-380.272649L14.054003 50.100016A29.576762 29.576762 0 0 1 11.035966 18.108825 30.783976 30.783976 0 0 1 38.801905 0.000604h942.834727a30.180369 30.180369 0 0 1 21.729865 51.306627l-348.281457 362.164427v582.481122a29.576762 29.576762 0 0 1-16.901007 27.162332 25.35151 25.35151 0 0 1-13.279362 0zM400.966333 778.050516l191.343539 152.712667V400.795903a28.973154 28.973154 0 0 1 8.450503-20.52265l307.839764-319.911911H106.405932l289.127934 320.515518a27.765939 27.765939 0 0 1 5.432467 19.919043z" fill="#515151" p-id="4340"></path><path d="M985.258276 519.706557h-193.154361a30.180369 30.180369 0 0 1-30.180369-30.180369 30.180369 30.180369 0 0 1 30.180369-30.180369h193.154361a30.783976 30.783976 0 0 1 30.180369 30.180369 30.180369 30.180369 0 0 1-30.180369 30.180369zM985.258276 648.878536h-193.154361a30.180369 30.180369 0 0 1-30.180369-30.180369 30.180369 30.180369 0 0 1 30.180369-30.180369h193.154361a30.180369 30.180369 0 0 1 30.180369 30.180369 30.783976 30.783976 0 0 1-30.180369 30.180369zM985.258276 777.446908h-193.154361a30.180369 30.180369 0 0 1 0-60.360738h193.154361a30.180369 30.180369 0 0 1 0 60.360738z" fill="#515151" p-id="4341"></path></svg>
          </div>
        </div>
        <PageTree :tree="tree" :selected="selected" :team="team" :space="space"/>
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
      tree: {"uuid":"8ZRLYMiD","space_uuid":"FVN6cAni","title":"主页","parent_uuid":"","son":true,"opened":true,padding: false,
        pages: [
          {"uuid":"SFxGzT1e","space_uuid":"FVN6cAni","title":"阿萨撒旦法撒旦法","parent_uuid":"8ZRLYMiD","son":true,"opened":false,padding: false,
            pages: [
              {"uuid":"ghytr546","space_uuid":"FVN6cAni","title":"是的发生的发生的发送阿斯顿","parent_uuid":"SFxGzT1e","son":true,"opened":false,padding: true,
                pages: [
                  {"uuid":"cvbnmjkh","space_uuid":"FVN6cAni","title":"tertw案发生的发送","parent_uuid":"ertyuiop","son":false,"opened":false,padding: true,},
                  {"uuid":"e3456789","space_uuid":"FVN6cAni","title":"电风扇感受到的稍等撒大声地多多少度","parent_uuid":"ertyuiop","son":false,"opened":false,padding: true,}
                ]},
              {"uuid":"juikiuyt","space_uuid":"FVN6cAni","title":"发过火复合弓结构和更好更好","parent_uuid":"SFxGzT1e","son":false,"opened":false,padding: true,}
            ]},
          {"uuid":"ertyuiop","space_uuid":"FVN6cAni","title":"阿斯顿发生的爱上对方阿斯顿发送","parent_uuid":"8ZRLYMiD","son":true,"opened":false,padding: false,
            pages: [
              {"uuid":"cvbnmjkh","space_uuid":"FVN6cAni","title":"后鼓风机发过火发给交付给发给发给发给发给发给","parent_uuid":"ertyuiop","son":false,"opened":false,padding: true,},
              {"uuid":"e3456789","space_uuid":"FVN6cAni","title":"发过火复合弓结构和更好更好","parent_uuid":"ertyuiop","son":false,"opened":false,padding: true,}
            ]}
        ]},
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
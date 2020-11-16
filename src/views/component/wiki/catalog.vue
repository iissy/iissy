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

    <div v-if="drafts && drafts.length > 0">
      <div style="flex: 0 0 auto;padding: 20px 20px 10px 20px;" class="flex-row">
        <div style="flex: 1;color: #909090;">草稿箱</div>
      </div>
      <div style="padding: 0 20px;">
        <div class="page-item" v-for="d in drafts" :key="d.uuid" :class="{active: d.uuid === selected }">
          <router-link :class="{unnamed: !d.title}" :to="{ name: 'Draft', params: { team: team, space: space, draft: d.uuid } }" :title="d.status === 1 ? '未发布':''">
            <div style="flex: 1;" class="flex-row align-items-center">
              <div style="flex: 1;overflow: hidden;white-space: nowrap;min-width: 0;text-overflow: ellipsis;">
                {{ d.title || '未命名' }}
              </div>
              <div style="flex: 0 0 auto;color: #909090;" v-if="d.status === 1">
                <b-icon icon="cursor-fill"/>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div style="flex: 0 0 auto;padding: 10px 20px;margin-top: 10px;" class="flex-row align-items-center">
      <div style="flex: 1;color: #909090;">页面树</div>
      <div style="flex: 0 0 auto;">
        <svg t="1605536091310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4339" width="16" height="16"><path d="M624.904671 1023.115112a27.162332 27.162332 0 0 1-18.711829-6.639682L354.488565 814.870566a30.783976 30.783976 0 0 1-13.88297-22.333473v-380.272649L14.054003 50.100016A29.576762 29.576762 0 0 1 11.035966 18.108825 30.783976 30.783976 0 0 1 38.801905 0.000604h942.834727a30.180369 30.180369 0 0 1 21.729865 51.306627l-348.281457 362.164427v582.481122a29.576762 29.576762 0 0 1-16.901007 27.162332 25.35151 25.35151 0 0 1-13.279362 0zM400.966333 778.050516l191.343539 152.712667V400.795903a28.973154 28.973154 0 0 1 8.450503-20.52265l307.839764-319.911911H106.405932l289.127934 320.515518a27.765939 27.765939 0 0 1 5.432467 19.919043z" fill="#515151" p-id="4340"></path><path d="M985.258276 519.706557h-193.154361a30.180369 30.180369 0 0 1-30.180369-30.180369 30.180369 30.180369 0 0 1 30.180369-30.180369h193.154361a30.783976 30.783976 0 0 1 30.180369 30.180369 30.180369 30.180369 0 0 1-30.180369 30.180369zM985.258276 648.878536h-193.154361a30.180369 30.180369 0 0 1-30.180369-30.180369 30.180369 30.180369 0 0 1 30.180369-30.180369h193.154361a30.180369 30.180369 0 0 1 30.180369 30.180369 30.783976 30.783976 0 0 1-30.180369 30.180369zM985.258276 777.446908h-193.154361a30.180369 30.180369 0 0 1 0-60.360738h193.154361a30.180369 30.180369 0 0 1 0 60.360738z" fill="#515151" p-id="4341"></path></svg>
      </div>
    </div>
    <div style="padding: 0 20px;">
      <div class="page-item" v-for="p in pages" :key="p.uuid" :class="{active: p.uuid === selected }">
        <router-link :to="{ name: 'Page', params: { team: team, space: space, page: p.uuid } }">
          <div class="flex-row align-items-center">
            <div v-if="p.parent_uuid">
              <svg t="1605536576913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9914" width="16" height="16"><path d="M376.74927658 191.83686876l-89.63519527 88.93848083L520.20284621 511.98261354 287.11532407 743.19857072l89.63519526 88.96456173 322.77363644-320.18051891L376.74927658 191.83686876 376.74927658 191.83686876zM376.74927658 191.83686876" p-id="9915" fill="#515151"></path></svg>
            </div>
            <div v-else>
              <svg t="1605536354808" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6537" width="16" height="16"><path d="M400.779155 111.025065h234.371837a55.512533 55.512533 0 1 0 0-111.025065H400.779155a55.512533 55.512533 0 0 0 0 111.025065z m0 0" p-id="6538" fill="#515151"></path><path d="M881.909388 61.738237H746.176057v11.154388a74.708455 74.708455 0 0 1-75.162412 75.162412H352.724498a74.708455 74.708455 0 0 1-75.162413-75.162412 33.009205 33.009205 0 0 1 1.297022-11.154388H141.958457A85.797991 85.797991 0 0 0 55.641657 148.055037v789.626866a85.797991 85.797991 0 0 0 86.3168 86.3168h740.210335a85.73314 85.73314 0 0 0 86.3168-86.3168V148.055037A85.927694 85.927694 0 0 0 881.909388 61.738237zM739.690948 764.9186H270.882423a30.804268 30.804268 0 1 1 0-61.608535h468.808525a30.415161 30.415161 0 0 1 30.869119 30.739417 31.323076 31.323076 0 0 1-30.869119 30.869118z m0-185.085009H270.882423a30.804268 30.804268 0 1 1 0-61.608535h468.808525a30.544863 30.544863 0 0 1 30.869119 30.869119 31.193374 31.193374 0 0 1-30.869119 30.739416z m0-184.955307H270.882423a30.804268 30.804268 0 1 1 0-61.608535h468.808525a30.544863 30.544863 0 0 1 30.869119 30.869118 31.387927 31.387927 0 0 1-30.869119 30.739417z m0 0" p-id="6539" fill="#515151"></path></svg>
            </div>
            <div style="overflow: hidden;white-space: nowrap;min-width: 0;text-overflow: ellipsis;margin-left: 5px;">{{ p.title }}</div>
          </div>
        </router-link>
      </div>
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
</template>

<script>
import http from "@/scripts/http";

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
    self.page_list();
    self.space_list();
    self.draft_list();
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
.page-item { flex: 0 0 auto;padding: 0 10px;cursor: pointer;line-height: 30px; }
.page-item.active,.page-item:hover { background-color: #e8e8e8;border-radius: 3px; }
.page-item.active { font-weight: 600; }
.page-item a.unnamed div { color: #909090; }
</style>
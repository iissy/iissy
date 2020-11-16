<template>
  <div class="flex-column" style="flex: 1;min-width: 1280px;">
    <div style="flex: 0 0 40px;background-color: #f8f8f8;" class="flex-row align-items-center">
      <div style="flex: 1;" id="toolbarContainer"></div>
      <div style="flex: 0 0 auto;margin-right: 20px;" class="flex-row align-items-center">
        <div style="margin-right: 10px;">
          <div v-if="ing === 0" style="color: #909090;">即将保存...</div>
          <div v-else-if="ing === 1" style="color: #909090;">正在保存...</div>
          <div v-else-if="ing === 2" style="color: #909090;">草稿已保存</div>
        </div>
        <AddAndBackButton @submit="back" title="返回" :fill="fill" :disabled="list && list.length > 0"/>
        <AddAndBackButton @submit="publish" style="margin-left: 10px;" title="发布" :disabled="list && list.length > 0"/>
      </div>
    </div>
    <div style="flex: 1;overflow-y: auto;background-color: #ffffff;" id="scrollable_container" class="flex-row">
      <div style="flex: 1;height: 100%;">
        <div style="flex: 0 0 auto;padding: 20px 60px 0 60px;">
          <input type="text" class="title" v-model="title" placeholder="我的标题">
        </div>
        <froala :tag="'textarea'" :config="config" v-model="model"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddAndBackButton from '@/views/component/button/custom';
import router from "@/router";
import http from "@/scripts/http";

export default {
  data() {
    return {
      team: '',
      space: '',
      page: '',
      title: '',
      fill: false,
      list: [],
      draft: '',
      config: {
        plugins: [
        ],
        toolbarButtons: {
          'moreText': {
            'buttons': ['undo', 'redo', 'paragraphFormat', 'fontSize', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|',
              'subscript', 'superscript', 'textColor', 'backgroundColor', '|',
              'align', 'formatOL', 'formatUL', 'quote', '|',
              'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable'],
            'align': 'left',
            'buttonsVisible': 1000
          },
        },
        fontFamilySelection: true,
        fontSizeSelection: true,
        paragraphFormatSelection: true,
        tabSpaces: 8,
        colorsHEXInput: true,
        fileUploadURL: '/upload_file',
        colorsStep: 14,
        toolbarContainer: '#toolbarContainer',
        toolbarInline: true,
        charCounterCount: true,
        toolbarVisibleWithoutSelection: true,
        toolbarSticky: true
      },
      model: '欢迎使用 Soul 任务管理系统！',
      mod: '',
      loaded: false,
      ing: -1,
      status: 1,
      version: 0
    }
  },
  watch: {
    model() {
      let self = this;
      if (self.loaded) {
        self.ing = 0;
        self.list.push(true);
      }
    },
    title() {
      let self = this;
      if (self.loaded) {
        self.ing = 0;
        self.list.push(true);
      }
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.mod = self.$route.name;
    if (self.mod === 'EditDraft') {
      self.draft = self.$route.params.draft;
      self.draft_get();
    } else if(self.mod === 'AddPage') {
      self.page = self.$route.params.page;
      self.$parent.page = self.page;
      self.loaded = true;
    } else if(self.mod === 'EditPage') {
      self.page = self.$route.params.page;
      self.$parent.page = self.page;
      self.status = 2;
      self.page_get();
    }
  },
  mounted() {
    let self = this;
    setInterval(function() {
      if (self.list.length > 0 && self.ing !== 1) {
        self.ing = 1;
        self.list.length = 0;
        if (self.draft.length === 8) {
          self.update();
        } else {
          self.save();
        }
      }
    }, 3000)
  },
  updated: function () {
    let self = this;
    self.loaded = true;
  },
  methods: {
    back: function () {
      let self = this;
      if (self.mod === 'EditDraft') {
        router.push({ name:'Draft', params: { team: self.team, space: self.space, draft: self.draft } });
      } else if(self.mod === 'AddPage') {
        router.push({ name:'Page', params: { team: self.team, space: self.space, page: self.page } });
      } else if(self.mod === 'EditPage') {
        router.push({ name:'Page', params: { team: self.team, space: self.space, page: self.page } });
      }
    },
    save: function () {
      let self = this;
      let data = { title: self.title, content: self.model, page_uuid: self.page, status: self.status, from_version: self.version }
      http.post(self.urls.page_draft_add.format(self.team, self.space), data).then(function (response) {
        self.draft = response.data.uuid;
        self.ing = 2;
      });
    },
    update: function () {
      let self = this;
      let data = { title: self.title, content: self.model, page_uuid: self.page, status: self.status, is_published: false, space_uuid: self.space, from_version: self.version }
      http.post(self.urls.page_draft_update.format(self.team, self.space, self.draft), data).then(function (response) {
        if(response.data && response.data.draft_uuid) {
          self.draft = response.data.draft_uuid;
        }
        self.ing = 2;
      });
    },
    publish: function () {
      let self = this;
      let data = { title: self.title, content: self.model, page_uuid: self.page, status: self.status, is_published: true, space_uuid: self.space, from_version: self.version }
      http.post(self.urls.page_draft_update.format(self.team, self.space, self.draft), data).then(function (response) {
        let params = { team: self.team, space: self.space, page: response.data.page_uuid };
        router.push({ name:'Page', params: params });
      });
    },
    draft_get: function () {
      let self = this;
      http.get(self.urls.draft_get.format(self.team, self.space, self.draft)).then(function (response) {
        self.title = response.data.title;
        self.model = response.data.content;
        self.draft = response.data.uuid;
        self.page = response.data.page_uuid;
        self.$parent.page = self.page;
      });
    },
    page_get: function () {
      let self = this;
      http.get(self.urls.page_get.format(self.team, self.space, self.page)).then(function (response) {
        self.title = response.data.title;
        self.model = response.data.content;
        self.version = response.data.version;
      });
    }
  },
  components: {
    AddAndBackButton
  }
}
</script>

<style scoped>
#toolbarContainer { position: relative;min-height: 0; }
input.title { border: 0;border-bottom: 2px solid #e8e8e8;box-shadow: none;outline: none;display: block;width: 100%;max-margin: 100%;padding: 5px 0;font-size: 30px; }
</style>
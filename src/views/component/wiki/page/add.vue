<template>
  <div class="flex-column" style="flex: 1;min-width: 1280px;">
    <div style="flex: 0 0 40px;background-color: #f8f8f8;" class="flex-row align-items-center">
      <div style="flex: 1;" id="toolbarContainer"></div>
      <div style="flex: 0 0 auto;margin-right: 20px;">
        <AddAndBackButton @submit="back" title="返回" :fill="fill"/>
        <AddAndBackButton style="margin-left: 10px;" title="发布"/>
      </div>
    </div>
    <div style="flex: 1;overflow-y: auto;background-color: #ffffff;" id="scrollable_container" class="flex-row">
      <div style="flex: 1;height: 100%;">
        <div style="flex: 0 0 auto;padding: 20px 60px 0 60px;">
          <input type="text" class="title" @change="save" v-model="title">
        </div>
        <froala :tag="'textarea'" :config="config" v-model="model"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddAndBackButton from '@/views/component/button/custom';
import router from "@/router";

export default {
  data() {
    return {
      team: '',
      space: '',
      page: '',
      title: '',
      fill: false,
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
        toolbarSticky: true,
        events: {
          'contentChanged': function () {
            console.log(this);
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
    self.page = self.$route.params.page;
  },
  methods: {
    back: function () {
      let self = this;
      router.push({ name:'Page', params: { team: self.team, space: self.space, page: self.page } });
    },
    save: function () {
      console.log(this);
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
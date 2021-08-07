<template>
  <div class="overview padding20" style="overflow:auto;flex: 1 0 auto;width: 100%;position: relative;">
    <div class="flex-row header-container-inner" style="border-radius: 3px;flex: 1;margin-bottom: 20px;">
      <div style="flex: 0 0 auto;">
        <AddButton title="新建页面组" v-b-modal.modal-wiki-add :plus="plus"></AddButton>
      </div>
    </div>
    <div style="flex: 1;flex-direction: row;position: relative;" class="flex-row flex-wrap">
      <Space v-for="space in spaces" :key="space.uuid" :space="space" desc="最近页面更新于 8 小时前"/>
    </div>
    <AddSpace/>
  </div>
</template>

<script>
import AddButton from '../../button/common';
import Space from '../module/space';
import AddSpace from './add';
import http from "../../../utils/http";

export default {
  data() {
    return {
      title: '',
      description: '',
      spaces: [],
      plus: true
    }
  },
  created () {
    let self = this;
    self.team = self.$route.params.team;
    self.space_list();
  },
  methods: {
    space_list: function () {
      let self = this;
      http.get(self.urls.spaces.format(self.team)).then(function (response) {
        self.spaces = response.data.spaces;
      });
    }
  },
  components: {
    AddButton,
    Space,
    AddSpace
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
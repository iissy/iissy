<template>
  <div id="header" class="flex-row align-items-center">
    <div class="title">
      <router-link :to="{ name: 'MainRedirect' }">Soul</router-link>
    </div>
    <div class="name" style="margin-left: 20px;">文档中心</div>
    <div style="flex: 0 0 auto;margin-left: 20px;" @click="add">
      <AddButton title="新建页面"></AddButton>
    </div>
    <div style="flex: 1;"></div>
    <UserCenterAvatar/>
  </div>
</template>

<script>
import AddButton from '../common/form/button';
import UserCenterAvatar from '@/views/component/common/block/avatar';
import router from "@/router";

export default {
  data() {
    return {
    }
  },
  props: {
    page: String
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
  },
  created() {
  },
  methods: {
    add: function () {
      let self = this;
      if (self.$route.name !== 'AddPage') {
        router.push({ name: 'AddPage', params: { team: self.team, space: self.space, page: self.page } });
      }
    }
  },
  components: {
    AddButton,
    UserCenterAvatar
  }
}
</script>

<style scoped>
#header { flex: 0 0 48px;background-color: #373a3d; }
#header .title a { color: #ffffff;font-weight: bolder;flex: 0 0 auto;font-size: 19px;margin: 0 0 0 20px;letter-spacing: 3px;font-family: 'museo-1', 'museo-2', Verdana; }
#header .name { color: #ffffff;flex: 0 0 auto;font-size: 16px;margin: 0 0 0 10px;letter-spacing: 3px;font-family: 'museo-1', 'museo-2', Verdana; }
</style>
<template>
  <div id="header" class="flex-row align-items-center">
    <router-link :to="{ name: 'Master' }">
      <div style="margin-left: 10px;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;">
          <svg t="1604535926297" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5606" width="25" height="25"><path d="M1150.244571 327.0656L925.2864 26.975086c-3.920457-5.880686-14.862629-9.0112-25.951086-9.0112-10.620343 0-21.211429 2.8672-25.980343 9.0112l-207.608685 282.799543c-24.488229 37.917257-12.522057 51.931429 34.552685 51.931428h103.892115c-0.468114 50.5856-3.364571 102.341486-7.753143 137.216-20.948114 167.087543-127.268571 211.646171-131.744914 213.577143-15.594057 6.436571-12.6976 29.9008 6.407314 29.9008 268.463543 0 331.103086-310.915657 340.757943-380.693943h103.8336c1.462857 0.117029 3.861943 0.292571 6.816914 0.292572 15.623314 0 46.021486-3.978971 27.735771-34.933029z" fill="#ffffff" p-id="5607"></path><path d="M600.736914 567.968914h-134.026971c0.585143-65.301943 4.271543-132.213029 9.947428-177.210514 27.092114-215.683657 164.308114-273.261714 170.130286-275.6608 20.187429-8.367543 16.384-38.619429-8.279771-38.619429-346.5216 0-427.446857 401.408-439.9104 491.461486H64.570514a88.4736 88.4736 0 0 0-8.894171-0.4096c-20.099657 0-59.392 5.090743-35.810743 45.143772l290.464914 387.452342c5.061486 7.606857 19.2512 11.644343 33.528686 11.644343 13.692343 0 27.4432-3.715657 33.440914-11.644343l268.0832-365.187657c31.685486-48.9472 16.1792-66.9696-44.6464-66.9696z" fill="#ffffff" p-id="5608"></path></svg>
        </div>
        <div style="flex: 0 0 auto;margin-left: 5px;">
          <span style="font-size: 22px;font-weight: bold;color: #ffffff;letter-spacing: 3px;margin: 0 0 0 0;text-align: center;">Soul</span>
        </div>
      </div>
    </router-link>
    <div class="name" style="margin-left: 20px;">
      <router-link icon="Wiki" :to="{ name:'Wiki', params: { team: team } }" >文档中心</router-link>
    </div>
    <div style="flex: 0 0 auto;margin-left: 20px;" @click="add">
      <AddButton title="新建页面"></AddButton>
    </div>
    <div style="flex: 1;"></div>
    <UserCenterAvatar/>
  </div>
</template>

<script>
import AddButton from '../common/form/button';
import UserCenterAvatar from '../../layout/components/header/avatar';
import router from "../../router";

export default {
  data() {
    return {
      team: ''
    }
  },
  props: {
    page: String
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
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
#header .name a { color: #ffffff;flex: 0 0 auto;font-size: 16px;letter-spacing: 3px;font-family: 'museo-1', 'museo-2', Verdana; }
</style>
<template>
  <div style="background-color: #ffffff;height:48px;padding:10px;display: flex;flex-direction: row;flex: 0 0 auto;">
    <div style="flex: 1;" class="flex-row align-items-center">
      <div v-if="!sidebar.opened" style="flex:1;align-items: center;height: 22px;display: flex;cursor: pointer;padding-right: 10px;border-right: 1px solid #cccccc;" @click="open">
        <svg t="1603696402499" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31622" width="20" height="20"><path d="M41.59999967 784.99999967l483.00000033 0c16.80000033 0 33.59999967 20.99999967 33.59999967 42.00000033 0 25.20000001-12.6 42.00000033-33.59999967 42.00000033l-483.00000033 0c-16.80000033 0-33.59999967-16.80000033-33.59999967-42.00000033 0-20.99999967 12.6-42.00000033 33.59999967-42.00000033z m466.2-125.99999999l-457.79999934 0c-25.20000001 0-46.19999967-20.99999967-46.20000066-41.99999935 0-25.20000001 20.99999967-42.00000033 46.20000066-42.00000033L507.79999967 575c25.20000001 0 46.19999967 16.80000033 46.20000066 42.00000033s-20.99999967 42.00000033-46.20000066 41.99999935z m0-293.99999936c25.20000001 0 46.19999967 20.99999967 46.20000066 41.99999935 0 25.20000001-20.99999967 42.00000033-46.20000066 42.00000033l-457.79999934 0c-25.20000001 0-46.19999967-16.80000033-46.20000066-42.00000033s20.99999967-42.00000033 46.20000066-41.99999935L507.79999967 365.00000032z m-4.19999934-125.99999999l-445.20000034 0c-29.40000033 0-50.4-16.80000033-50.39999999-42.00000033s20.99999967-42.00000033 50.4-42.00000033l445.20000033 0c29.40000033 0 50.4 16.80000033 50.4 42.00000033s-20.99999967 42.00000033-50.4 42.00000033z m189-25.2c16.80000033-16.80000033 46.19999967-16.80000033 63 0l247.79999967 268.79999933c16.80000033 16.80000033 16.80000033 50.4 0 67.20000033l-247.79999966 268.80000034c-16.80000033 16.80000033-46.19999967 16.80000033-63.00000001 0s-16.80000033-50.4 0-67.20000033l218.39999934-235.19999968-218.39999934-235.20000065c-16.80000033-20.99999967-16.80000033-50.4 0-67.19999934z" p-id="31623" fill="#515151"></path></svg>
      </div>
      <div style="color: #666666;font-weight: bolder;flex: 0 0 auto;font-size: 19px;margin: 0 0 0 10px;letter-spacing: 3px;font-family: 'museo-1', 'museo-2', Verdana;text-shadow: #EEE 1px 1px 1px;">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      hidden: false,
      title: ''
    }
  },
  watch: {
    '$route' () {
      let self = this;
      self.title = self.$route.meta.title;
    }
  },
  created() {
    let self = this;
    self.title = self.$route.meta.title;
  },
  methods: {
    open: function () {
      this.$store.dispatch('app/toggleSideBar')
    }
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>
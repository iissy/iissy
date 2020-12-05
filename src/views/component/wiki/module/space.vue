<template>
  <div @click="goto" style="width: 250px;height: 175px;padding: 15px 15px 10px 20px;cursor: pointer;margin-right: 10px;margin-top: 10px;" class="g-container flex-column">
    <div style="flex: 0 0 auto;">
      <div style="flex: 0 0 auto;color: #333333;padding-right: 5px;" class="flex-row align-items-center">
        <div style="flex: 1;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 15px;">{{ space.title }}</div>
        <div style="flex: 0 0 auto;align-content: end;" class="pin-star">
          <b-icon @click="setPin" icon="star" scale="1.3"></b-icon>
        </div>
      </div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 14px;">{{ desc }}</div>
    </div>
    <div style="flex: 1;" class="flex-row align-items-center justify-content-center">
      <div style="flex: 1;font-size: 66px;font-weight: bolder;color: #800000;opacity: 0.4;font-family: Georgia, 'Times New Roman', Times, serif;" class="flex-row align-items-center justify-content-center">
        {{ space.page_count }}
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      team: ''
    }
  },
  props: {
    space: Object
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
  },
  created() {
  },
  methods: {
    goto: function () {
      let self = this;
      router.push({ name: 'Space', params: { team: self.team, space: self.space.uuid } });
    },
    setPin: function (event) {
      event.stopPropagation();
    }
  },
  computed: {
    desc: function () {
      return "最近页面更新于 8 小时前"
    }
  },
  components: {
  }
}
</script>

<style scoped>
.pin-star:hover { color: #f0a100; }
</style>
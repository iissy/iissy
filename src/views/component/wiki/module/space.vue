<template>
  <div @click="goto" style="width: 250px;height: 175px;padding: 15px 20px 10px 20px;cursor: pointer;margin-right: 10px;" class="g-container flex-column">
    <div style="flex: 1;">
      <div style="flex: 0 0 auto;font-size: 16px;color: #333333;">{{ space.title }}</div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 14px;">{{ desc }}</div>
    </div>
    <div style="flex: 0 0 auto;" class="flex-row">
      <div style="flex: 1;"></div>
      <div style="flex: 0 0 auto;">
        <b-icon icon="star" scale="1.2"></b-icon>
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
    console.log(this.space.title);
  },
  methods: {
    goto: function () {
      let self = this;
      router.push({ name: 'Space', params: { team: self.team, space: self.space.uuid } });
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

</style>
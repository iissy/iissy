<template>
  <div @click="goto" style="width: 250px;height: 175px;padding: 15px 20px 10px 20px;cursor: pointer;margin-right: 10px;" class="g-container flex-column">
    <div style="flex: 1;">
      <div style="flex: 0 0 auto;font-size: 16px;color: #333333;">{{ project.name }}</div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 14px;">{{ desc }}</div>
    </div>
    <div style="flex: 0 0 auto;" class="flex-row">
      <div style="flex: 1;"></div>
      <div style="flex: 0 0 auto;" class="pin-star">
        <b-icon @click="setPin" icon="star" scale="1.3"></b-icon>
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
    project: Object
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
      router.push({ name: 'Project', params: { team: self.team, project: self.project.uuid } });
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
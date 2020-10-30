<template>
  <div @click="goto" style="width: 250px;height: 175px;padding: 15px 20px 10px 20px;cursor: pointer;" class="g-container flex-column">
    <div style="flex: 1;">
      <div style="flex: 0 0 auto;font-size: 15px;">{{ title }}</div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 12px;">{{ desc }}</div>
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
    title: String,
    desc: String
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
      router.push({ name: 'Space', params: { team: self.team } });
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
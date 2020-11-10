<template>
  <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;">
    <div class="status" :class="curColor">{{ curName }}<b-icon v-if="icon" icon="chevron-down"/></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    name: String,
    color: String,
    icon: {
      default: false
    }
  },
  computed: {
    curName: function () {
      let self = this;
      let resultName = self.name;
      switch (self.name) {
        case "1":
        case "to_do":
          resultName = '未开始'
          break;
        case "2":
        case "in_progress":
          resultName = '未开始'
          break;
        case "3":
        case "done":
          resultName = '已完成'
          break;
      }

      return resultName;
    },
    curColor: function () {
      let self = this;
      let resultColor = self.color;
      switch (self.color) {
        case "1":
          resultColor = 'to_do'
          break;
        case "2":
          resultColor = 'in_progress'
          break;
        case "3":
          resultColor = 'done'
          break;
      }

      return resultColor;
    }
  }
}
</script>
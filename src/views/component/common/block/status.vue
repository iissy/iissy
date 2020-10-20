<template>
  <div>
    <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;">
      <div class="status" :class="curColor">{{ curName }}</div>
    </div>
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
    color: String
  },
  computed: {
    curName: function () {
      let self = this;
      let resultName = self.name;
      switch (self.name) {
        case "1":
          resultName = '未开始'
          break;
        case "2":
          resultName = '未开始'
          break;
        case "3":
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
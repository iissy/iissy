<template>
  <div>
    <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
      <div class="status" :class="curColor">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curColor: ''
    }
  },
  mounted() {
    if(this.color === "1") {
      this.curColor = "to_do";
    } else if(this.color === "2") {
      this.curColor = "in_progress";
    } else if(this.color === "3") {
      this.curColor = "done";
    } else {
      this.curColor = this.color;
    }
  },
  props: {
    name: String,
    color: String
  }
}
</script>
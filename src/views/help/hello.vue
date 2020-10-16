<template>
  <div id="my-container">
    <div class="my-3">
      <!-- Our triggering (target) element -->
      <div id="popover-reactive-1" variant="primary" ref="button">
        Reactive Content Using Slots
      </div>
    </div>

    <!-- Our popover title and content render container -->
    <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
    <!-- We specify the same container as the trigger button, so that popover is close to button -->
    <b-popover
        target="popover-reactive-1"
        :show.sync="popoverShow"
        placement="auto"
        triggers="hover">
      <div class="flex-column" id="center">
        <div class="menu-item">森岛帆高是改水电费</div>
        <div class="menu-line"></div>
        <div class="menu-item">去玩儿群翁群无</div>
        <div class="menu-item">asdfa地方啊萨斯的</div>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
      input1Return: '',
      input2Return: '',
      popoverShow: false
    }
  },
  // watch: {
  //   input1(val) {
  //     if (val) {
  //       this.input1state = true
  //     }
  //   },
  //   input2(val) {
  //     if (val) {
  //       this.input2state = true
  //     }
  //   }
  // },
  methods: {
    onClose() {
      this.popoverShow = false
    },
    onOk() {
      if (!this.input1) {
        this.input1state = false
      }
      if (!this.input2) {
        this.input2state = false
      }
      if (this.input1 && this.input2) {
        this.onClose()
        // Return our popover form results
        this.input1Return = this.input1
        this.input2Return = this.input2
      }
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = ''
      this.input2 = ''
      this.input1state = null
      this.input2state = null
      this.input1Return = ''
      this.input2Return = ''
    },
    onShown() {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      this.focusRef(this.$refs.input1)
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button)
    },
    focusRef(ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          (ref.$el || ref).focus()
        })
      })
    }
  }
}
</script>

<style scoped>
.menu-item { flex: 1;padding: 10px 0 0 0;cursor: pointer; }
.menu-item:hover { color: #d71b29; }
.menu-line { border-top: 1px solid #eeeeee;height: 1px;margin-top: 10px; }
</style>
<template>
  <div id="iissy" :class="{ shake: dismissCountDown > 0 }" class="alert-box flex-column align-items-center">
    <div style="align-items: center;flex: 1;">
      <b-alert :show="dismissCountDown" :variant="variant" @dismissed="dismissCountDown=0">
        <div class="flex-row align-items-center" style="color: inherit;">
          <div class="mb-0" style="display: flex;">
            <b-iconstack font-scale="1.5">
              <b-icon stacked icon="check-circle" :variant="variant" style="opacity: 0.8;"/>
            </b-iconstack>
          </div>
          <div style="margin-left: 10px;color: inherit;display: flex;flex: 1;">{{ msg }}</div>
        </div>
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissCountDown: 0,
      variant: '',
      msg: ''
    }
  },
  methods: {
    success: function (o) {
      this.dismissCountDown = 3;
      this.variant = 'success';
      this.msg = o;
    },
    danger: function (o) {
      this.dismissCountDown = 3;
      this.variant = 'danger';
      this.msg = o;
    }
  }
}
</script>

<style scoped>
#iissy.alert-box { position:fixed;bottom: 10px;right:20px;text-align:center;opacity: 1;z-index: 999; }
#iissy .alert { padding: 7px 17px 7px 7px;border: 1px solid transparent; }

.shake {
  animation: shake 0.1s cubic-bezier(0.15, 0, 0.28, 1.0) 0s 1;
}
@keyframes shake {
  0% {
    transform:translateY(20px);
    -webkit-transform:translateY(20px);
    -moz-transform:translateY(20px);
    -o-transform:translateY(20px);
    -ms-transform:translateY(20px);
    opacity: 0.5;
  }
  100% {
    transform:translateY(0px);
    -webkit-transform:translateY(0px);
    -moz-transform:translateY(0px);
    -o-transform:translateY(0px);
    -ms-transform:translateY(0px);
    opacity: 1;
  }
}
</style>
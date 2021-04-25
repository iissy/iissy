<template>
  <div id="iissy" class="alert flex-column align-items-center">
    <div style="align-items: center;flex: 0 0 auto;">
      <b-alert :show="dismissCountDown" :variant="variant" @dismissed="dismissCountDown=0">
        <div class="flex-row align-items-center" style="color: inherit;">
          <div class="mb-0" style="display: flex;">
            <b-iconstack font-scale="1.8">
              <b-icon stacked icon="check-circle" :variant="variant"></b-icon>
            </b-iconstack>
          </div>
          <div style="margin-left: 10px;color: inherit;">{{ msg }}</div>
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
      this.dismissCountDown = 1;
      this.variant = 'success';
      this.msg = o;
    },
    danger: function (o) {
      this.dismissCountDown = 1;
      this.variant = 'danger';
      this.msg = o;
    }
  }
}
</script>

<style scoped>
#iissy.alert { position:fixed;top: 100px;left: 0;right: 0;margin:0px auto;text-align:center;height: 0px;border: none;padding: 0;opacity: 1;z-index: 999; }
#iissy .alert { border-radius: 20px;padding: 7px 17px 7px 7px; }
</style>
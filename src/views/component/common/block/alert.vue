<template>
  <div id="iissy" class="alert flex-column">
    <div style="align-items: center;flex: 0 0 auto;">
      <b-alert :show="dismissCountDown" :variant="variant" @dismissed="dismissCountDown=0">
        <div class="flex-row" style="color: inherit;">
          <div class="mb-0">
            <b-iconstack font-scale="2">
              <b-icon stacked icon="check-circle" :variant="variant"></b-icon>
            </b-iconstack>
          </div>
          <div style="margin-left: 10px;color: inherit;">添加成功</div>
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
      variant: ''
    }
  },
  props: {
    showAlert: Boolean
  },
  methods: {
    success: function () {
      this.dismissCountDown = 1;
      this.variant = "success";
    },
    fail: function () {
      this.dismissCountDown = 1;
      this.variant = "danger";
    }
  }
}
</script>

<style scoped>
#iissy.alert { position:fixed;top: 100px;left: 0;right: 0;margin:0px auto;text-align:center;height: 0px;border: none;padding: 0; }
#iissy .alert { border-radius: 15px;padding: 5px 10px 5px 10px; }
</style>
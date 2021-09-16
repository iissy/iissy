<template>
  <div>
    <div :class="{ shake: dismissCountDown > 0 }" class="alert-box flex-column align-items-center">
      <div style="align-items: center;flex: 1;">
        <b-alert :show="dismissCountDown" :variant="variant" @dismissed="dismissCountDown=0">
          <div class="flex-row align-items-center" style="color: inherit;">
            <div class="mb-0" style="display: flex;">
              <b-iconstack v-if="variant === 'success'" font-scale="1.5">
                <b-icon stacked icon="check-circle" :variant="variant"/>
              </b-iconstack>
              <b-iconstack v-else font-scale="1.5">
                <b-icon stacked icon="x-circle" :variant="variant"/>
              </b-iconstack>
            </div>
            <div style="margin-left: 10px;color: inherit;display: flex;flex: 1;letter-spacing: 1px;">{{ msg }}</div>
          </div>
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
import * as errors from '../../../filters';

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
      if (o) {
        this.msg = o;
      } else {
        this.msg = '操作成功';
      }
    },
    danger: function (o) {
      this.dismissCountDown = 3;
      this.variant = 'danger';
      let code = "";
      let codeArray = o.split(".");
      let result = "";
      if (codeArray.length >= 1) {
        code = codeArray[0];
        switch (code) {
          case "ServerError":
            result = errors.ServerError(codeArray);
            break;
          case "NotFound":
            result = errors.NotFound(codeArray);
            break;
          case "InvalidParameter":
            result = errors.InvalidParameter(codeArray);
            break;
          case "VerificationFailure":
            result = errors.VerificationFailure(codeArray);
            break;
          case "AlreadyExists":
            result = errors.AlreadyExists(codeArray);
            break;
          case "PermissionDenied":
            result = errors.PermissionDenied(codeArray);
            break;
          default:
            result = code
            break;
        }
      }

      this.msg = result;
    }
  }
}
</script>

<style scoped>
.alert-box { position:fixed;bottom: 30px;right:30px;text-align:center;opacity: 1;z-index: 999; }
.alert-box .alert { padding: 10px 20px 10px 15px;border: 1px solid transparent;margin-bottom: 0; }

.shake {
  animation: shake 0.1s cubic-bezier(.1,.65,.48,.98) 0s 1;
}
@keyframes shake {
  0% {
    transform:translateY(30px);
    -webkit-transform:translateY(30px);
    -moz-transform:translateY(30px);
    -o-transform:translateY(30px);
    -ms-transform:translateY(30px);
  }

  100% {
    transform:translateY(0px);
    -webkit-transform:translateY(0px);
    -moz-transform:translateY(0px);
    -o-transform:translateY(0px);
    -ms-transform:translateY(0px);
  }
}
</style>
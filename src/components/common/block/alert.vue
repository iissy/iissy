<template>
  <div>
    <div v-for="(m, i) in messages" :class="{ shake: m.dismiss > 0 }" class="alert-box flex-column align-items-center"
         :key="m.key"
         :style="{ bottom: `${i * 60 + 30}px`, right: '30px' }">
      <div style="align-items: center;flex: 1;">
        <b-alert :show="m.dismiss" :variant="m.variant" @dismissed="m.dismiss=0" @dismiss-count-down="countDownChanged">
          <div class="flex-row align-items-center" style="color: inherit;">
            <div class="mb-0" style="display: flex;">
              <b-iconstack v-if="m.variant === 'success'" font-scale="1.5">
                <b-icon stacked icon="check-circle" :variant="m.variant"/>
              </b-iconstack>
              <b-iconstack v-else font-scale="1.5">
                <b-icon stacked icon="x-circle" :variant="m.variant"/>
              </b-iconstack>
            </div>
            <div style="margin-left: 10px;color: inherit;display: flex;flex: 1;letter-spacing: 1px;font-size: 15px;">{{ m.msg }}</div>
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
      dismissCountDown: 5,
      messages: [],
      index: 0
    }
  },
  methods: {
    success: function (o) {
      let self = this;
      self.index += 1;
      if (o) {
        self.msg = o;
      } else {
        self.msg = '操作成功';
      }

      let message = { key: self.index, dismiss: self.dismissCountDown, variant: 'success', msg: self.msg }
      self.messages.push(message);
    },
    danger: function (o) {
      let self = this;
      self.index += 1;
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

      self.msg = result;
      let message = { key: self.index, dismiss: self.dismissCountDown, variant: 'danger', msg: self.msg }
      self.messages.push(message);
    },
    countDownChanged(countDown) {
      if (countDown === 0) {
        let self = this;
        self.messages.shift();
      }
    }
  }
}
</script>

<style scoped>
.alert-box { position:fixed;text-align:center;opacity: 1;z-index: 999;height: 40px; }
.alert-box .alert { padding: 10px 15px 10px 10px;border: 1px solid transparent;margin-bottom: 0; }

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
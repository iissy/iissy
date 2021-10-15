<template>
  <div style="width: 250px;height: 175px;padding: 15px 15px 10px 20px;margin-right: 20px;margin-top: 20px;" class="ibox flex-column">
    <div style="flex: 0 0 auto;">
      <div style="flex: 0 0 auto;color: #333333;padding-right: 5px;" class="flex-row align-items-center">
        <div style="flex: 1;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 15px;">{{ space.title }}</div>
        <div style="flex: 0 0 auto;align-content: end;" :class="{pined: space.is_pin}" class="pin-star">
          <b-icon v-if="space.is_pin" @click="unPin" icon="star-fill" scale="1.3"></b-icon>
          <b-icon v-else @click="pin" icon="star" scale="1.3"></b-icon>
        </div>
      </div>
      <div style="flex: 0 0 auto;color: #909090;font-size: 14px;">更新于 {{ space.updated_time | timeFormat }}</div>
    </div>
    <div @click="goto" style="flex: 1;cursor: pointer;" class="flex-row align-items-center justify-content-center">
      <div style="flex: 1;font-size: 66px;font-weight: bolder;color: #800000;opacity: 0.4;font-family: Georgia, 'Times New Roman', Times, serif;" class="flex-row align-items-center justify-content-center">
        {{ space.page_count }}
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../../router";
import http from "@/utils/http";

export default {
  data() {
    return {
      team: ''
    }
  },
  props: {
    space: Object
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
      router.push({ name: 'Space', params: { team: self.team, space: self.space.uuid } });
    },
    pin: function (event) {
      let self = this;
      event.stopPropagation();
      http.post(self.urls.space_pin.format(self.team, self.space.uuid)).then(function (response) {
        if(response.data.code === 200) {
          self.$parent.space_list();
        }
      }).catch(function (err) {
        self.bus.$emit('alertDanger', err.response.data.errcode);
      });
    },
    unPin: function (event) {
      let self = this;
      event.stopPropagation();
      http.post(self.urls.space_unpin.format(self.team, self.space.uuid)).then(function (response) {
        if(response.data.code === 200) {
          self.$parent.space_list();
        }
      }).catch(function (err) {
        self.bus.$emit('alertDanger', err.response.data.errcode);
      });
    }
  }
}
</script>

<style scoped>
.pin-star { cursor: pointer; }
.pin-star.pined,.pin-star:hover { color: #f0a100; }
</style>
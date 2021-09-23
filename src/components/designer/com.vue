<template>
  <div style="padding: 20px;width: 100%;height: 100%;">
    <div style="flex-direction: row;display: flex;height: 100%;">
      <div style="flex: 1;" class="ibox">
        <PermissionHeader title="组建配置" desc="你可以通过拖放组件库中的组件来自定义界面的导航栏。你也可以设置每一个组件，使其拥有个性化的配置。"/>
        <div class="com-line-header t-line">
          <div class="com-line-header-title">导航自定义</div>
        </div>
        <div class="flex-row com" style="margin-top: 30px;background-color: #f8f8f8;padding: 11px 11px 1px 11px;flex-wrap: wrap;">
          <div style="width: 115px;" class="com-box-border align-items-center flex-row" :class="{active: selectedComUUID === i.uuid}" v-for="i in items" :key="i.uuid" @click="set_value(i);">
            <div style="flex: 0 0 auto;display: flex;">
              <svg t="1602764784806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50821" width="15" height="15"><path d="M329.1136 793.6c63.488 0 115.2 51.712 115.2 115.2S392.6016 1024 329.1136 1024 214.016 972.288 214.016 908.8 265.6256 793.6 329.1136 793.6z m349.2864 0c63.488 0 115.2 51.712 115.2 115.2S741.888 1024 678.4 1024 563.2 972.288 563.2 908.8 614.912 793.6 678.4 793.6z m-349.184-396.8c63.488 0 115.0976 51.712 115.0976 115.2s-51.712 115.2-115.2 115.2S214.016 575.488 214.016 512s51.712-115.2 115.2-115.2z m349.184 0c63.488 0 115.2 51.712 115.2 115.2s-51.712 115.2-115.2 115.2S563.2 575.488 563.2 512s51.712-115.2 115.2-115.2zM329.216 0c63.488 0 115.0976 51.712 115.0976 115.2S392.6016 230.4 329.1136 230.4 214.016 178.688 214.016 115.2 265.6256 0 329.1136 0z m349.184 0c63.488 0 115.2 51.712 115.2 115.2S741.888 230.4 678.4 230.4 563.2 178.688 563.2 115.2 614.912 0 678.4 0z" fill="#8a8a8a" p-id="50822"></path></svg>
            </div>
            <div class="com-name">{{ i.name }}</div>
          </div>
        </div>
        <div class="com-line-header t-line">
          <div class="com-line-header-title">组件详情</div>
        </div>

        <div class="tab-title flex-row b-line" style="margin-top: 30px;">
          <div v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur===index}" :key="index">{{title}}</div>
        </div>
        <div class="tab-content" style="margin-top: 20px;">
          <div v-show="cur===0" style="width: 420px;">
            <div class="flex-row align-items-center">
              <div style="text-align: right;flex: 0 0 100px;">
                <span style="color: #ff0000;">*</span>组件显示名称
              </div>
              <div style="margin-left: 10px;flex: 1;">
                <b-form-input v-model="name" @change="change"/>
              </div>
            </div>
            <div class="flex-row align-items-center" style="margin-top: 20px;">
              <div style="text-align: right;flex: 0 0 100px;">
                组件名称
              </div>
              <div style="margin-left: 10px;flex: 1;">
                {{selectedComTempUUID | formatComponentTemplate}}
              </div>
            </div>
            <div class="flex-row align-items-center" style="margin-top: 20px;">
              <div style="text-align: right;flex: 0 0 100px;">
                组件描述
              </div>
              <div style="margin-left: 10px;flex: 1;overflow: hidden;">
                <b-form-textarea v-model="desc" rows="3" max-rows="3" style="overflow: hidden;" @change="change"/>
              </div>
            </div>
            <div class="flex-row align-items-center" style="margin-top: 20px;">
              <div style="text-align: right;flex: 0 0 100px;"></div>
              <div style="margin-left: 10px;flex: 1;overflow: hidden;">
                <UpdateButton :disabled="disabled" title="更新信息" @submit="update"></UpdateButton>
              </div>
            </div>
          </div>
          <div v-show="cur===1" style="">&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PermissionHeader from '../common/permission/header';
import UpdateButton from '../common/button/universal';
import http from "@/utils/http";

export default {
  data() {
    return {
      team: '',
      project: '',
      tabTitle: ['基础设置'],
      cur: 0,
      selectedComUUID: '',
      selectedComTempUUID: '',
      name: '',
      desc: '',
      disabled: true
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    if (self.items && self.items.length > 0) {
      self.set_value(self.items[0]);
    }
  },
  props: {
    items: Array
  },
  methods: {
    set_value: function (item) {
      let self = this;
      self.selectedComUUID = item.uuid;
      self.selectedComTempUUID = item.template_uuid;
      self.name = item.name;
      self.desc = item.desc;
    },
    change: function () {
      let self = this;
      self.disabled = false;
    },
    update: function () {
      let self = this;
      http.post(self.urls.component_update.format(self.team, self.project, self.selectedComUUID), {name: self.name, desc: self.desc}).then(function (response) {
        if (response.data.code === 200) {
          self.disabled = true;
          self.bus.$emit("alertSuccess", "更新成功");
          self.bus.$emit('updateComponents');
          self.$parent.components_get();
        }
      }).catch(function (err) {
        self.bus.$emit("alertDanger", err.response.data.errcode);
      });
    }
  },
  components: {
    PermissionHeader,
    UpdateButton
  }
}
</script>

<style scoped>
.com-box-border { width: calc(50% - 10px);border: solid 1px #e8e8e8;border-radius: 3px;padding: 5px;cursor: pointer;margin: 0 10px 10px 0;background-color: #ffffff; }
.com-box-border.active { border: solid 1px #17C4BB; }
.com-box-border:hover,.com-box-border.active { color: #17C4BB;border-left: solid 3px #17C4BB;padding-left: 3px; }
.com-box-border:hover svg > path,.com-box-border.active svg > path  { fill: #17C4BB; }
.com-box-border .com-name { margin-left: 10px;flex: 1;color: inherit;white-space: nowrap;text-overflow: ellipsis;overflow: hidden; }

.com-line-header { position: relative;margin: 35px 0 0 0;padding: 0 20px; }
.com-line-header-title { font-size: 15px;font-weight: 500;border: 1px solid #e8e8e8;width: 95px;height: 30px;line-height: 30px;border-radius: 15px;position: absolute;top: -15px;left: 50%;margin-left: -47px;text-align: center;background-color: #ffffff; }

.tab-title { width: 100%;background-color: #ffffff;flex: 0 0 auto; }
.tab-title > div { flex: 0 0 auto;text-align: center;cursor: pointer;padding: 10px;font-size: 15px;margin-right: 10px; }
.tab-title .active{ border-bottom: 3px solid #17C4BB;color: #17C4BB; }
.tab-content { flex: 1 0 auto; }
</style>
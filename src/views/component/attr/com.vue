<template>
  <div style="padding: 10px;width: 100%;height: 100%;">
    <div style="flex-direction: row;display: flex;height: 100%;">
      <div style="flex: 0 0 280px;display: flex;padding: 10px 20px 10px 20px;" class="shadow flex-column">
        <div style="flex: 1;width: 100%;">
          <div style="font-size: 18px;margin-bottom: 20px;">组件库</div>
          <Search placeholder="搜索组建" />
          <div style="margin-bottom: 10px;margin-top: 20px;">通用组件</div>
          <div class="flex-row" style="margin-right: -10px;">
            <div class="com-box-border align-items-center flex-row">
              <div style="flex: 0 0 auto;display: flex;">
                <svg t="1602764784806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50821" width="15" height="15"><path d="M329.1136 793.6c63.488 0 115.2 51.712 115.2 115.2S392.6016 1024 329.1136 1024 214.016 972.288 214.016 908.8 265.6256 793.6 329.1136 793.6z m349.2864 0c63.488 0 115.2 51.712 115.2 115.2S741.888 1024 678.4 1024 563.2 972.288 563.2 908.8 614.912 793.6 678.4 793.6z m-349.184-396.8c63.488 0 115.0976 51.712 115.0976 115.2s-51.712 115.2-115.2 115.2S214.016 575.488 214.016 512s51.712-115.2 115.2-115.2z m349.184 0c63.488 0 115.2 51.712 115.2 115.2s-51.712 115.2-115.2 115.2S563.2 575.488 563.2 512s51.712-115.2 115.2-115.2zM329.216 0c63.488 0 115.0976 51.712 115.0976 115.2S392.6016 230.4 329.1136 230.4 214.016 178.688 214.016 115.2 265.6256 0 329.1136 0z m349.184 0c63.488 0 115.2 51.712 115.2 115.2S741.888 230.4 678.4 230.4 563.2 178.688 563.2 115.2 614.912 0 678.4 0z" fill="#8a8a8a" p-id="50822"></path></svg>
              </div>
              <div class="com-name">一级导航</div>
            </div>
            <div class="com-box-border align-items-center flex-row">
              <div style="flex: 0 0 auto;display: flex;">
                <svg t="1602764784806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50821" width="15" height="15"><path d="M329.1136 793.6c63.488 0 115.2 51.712 115.2 115.2S392.6016 1024 329.1136 1024 214.016 972.288 214.016 908.8 265.6256 793.6 329.1136 793.6z m349.2864 0c63.488 0 115.2 51.712 115.2 115.2S741.888 1024 678.4 1024 563.2 972.288 563.2 908.8 614.912 793.6 678.4 793.6z m-349.184-396.8c63.488 0 115.0976 51.712 115.0976 115.2s-51.712 115.2-115.2 115.2S214.016 575.488 214.016 512s51.712-115.2 115.2-115.2z m349.184 0c63.488 0 115.2 51.712 115.2 115.2s-51.712 115.2-115.2 115.2S563.2 575.488 563.2 512s51.712-115.2 115.2-115.2zM329.216 0c63.488 0 115.0976 51.712 115.0976 115.2S392.6016 230.4 329.1136 230.4 214.016 178.688 214.016 115.2 265.6256 0 329.1136 0z m349.184 0c63.488 0 115.2 51.712 115.2 115.2S741.888 230.4 678.4 230.4 563.2 178.688 563.2 115.2 614.912 0 678.4 0z" fill="#8a8a8a" p-id="50822"></path></svg>
              </div>
              <div class="com-name">自定义连接</div>
            </div>
          </div>
          <div style="margin-top: 20px;">系统组建</div>
          <div class="flex-row" style="flex-wrap: wrap;margin-right: -10px;">
            <div class="com-box-border align-items-center flex-row" v-for="i in items" :key="i.uuid">
              <div style="flex: 0 0 auto;display: flex;">
                <svg t="1602764784806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50821" width="15" height="15"><path d="M329.1136 793.6c63.488 0 115.2 51.712 115.2 115.2S392.6016 1024 329.1136 1024 214.016 972.288 214.016 908.8 265.6256 793.6 329.1136 793.6z m349.2864 0c63.488 0 115.2 51.712 115.2 115.2S741.888 1024 678.4 1024 563.2 972.288 563.2 908.8 614.912 793.6 678.4 793.6z m-349.184-396.8c63.488 0 115.0976 51.712 115.0976 115.2s-51.712 115.2-115.2 115.2S214.016 575.488 214.016 512s51.712-115.2 115.2-115.2z m349.184 0c63.488 0 115.2 51.712 115.2 115.2s-51.712 115.2-115.2 115.2S563.2 575.488 563.2 512s51.712-115.2 115.2-115.2zM329.216 0c63.488 0 115.0976 51.712 115.0976 115.2S392.6016 230.4 329.1136 230.4 214.016 178.688 214.016 115.2 265.6256 0 329.1136 0z m349.184 0c63.488 0 115.2 51.712 115.2 115.2S741.888 230.4 678.4 230.4 563.2 178.688 563.2 115.2 614.912 0 678.4 0z" fill="#8a8a8a" p-id="50822"></path></svg>
              </div>
              <div class="com-name">{{ i.name }}</div>
            </div>
          </div>
          <div style="margin-bottom: 10px;margin-top: 20px;">自定义工作项类型组件</div>
          <div class="flex-row" style="margin-right: -10px;">
            <div class="com-box-border align-items-center flex-row">
              <div style="flex: 0 0 auto;display: flex;">
                <svg t="1602764784806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50821" width="15" height="15"><path d="M329.1136 793.6c63.488 0 115.2 51.712 115.2 115.2S392.6016 1024 329.1136 1024 214.016 972.288 214.016 908.8 265.6256 793.6 329.1136 793.6z m349.2864 0c63.488 0 115.2 51.712 115.2 115.2S741.888 1024 678.4 1024 563.2 972.288 563.2 908.8 614.912 793.6 678.4 793.6z m-349.184-396.8c63.488 0 115.0976 51.712 115.0976 115.2s-51.712 115.2-115.2 115.2S214.016 575.488 214.016 512s51.712-115.2 115.2-115.2z m349.184 0c63.488 0 115.2 51.712 115.2 115.2s-51.712 115.2-115.2 115.2S563.2 575.488 563.2 512s51.712-115.2 115.2-115.2zM329.216 0c63.488 0 115.0976 51.712 115.0976 115.2S392.6016 230.4 329.1136 230.4 214.016 178.688 214.016 115.2 265.6256 0 329.1136 0z m349.184 0c63.488 0 115.2 51.712 115.2 115.2S741.888 230.4 678.4 230.4 563.2 178.688 563.2 115.2 614.912 0 678.4 0z" fill="#8a8a8a" p-id="50822"></path></svg>
              </div>
              <div class="com-name">Android缺陷</div>
            </div>
            <div class="com-box-border align-items-center flex-row">
              <div style="flex: 0 0 auto;display: flex;">
                <svg t="1602764784806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50821" width="15" height="15"><path d="M329.1136 793.6c63.488 0 115.2 51.712 115.2 115.2S392.6016 1024 329.1136 1024 214.016 972.288 214.016 908.8 265.6256 793.6 329.1136 793.6z m349.2864 0c63.488 0 115.2 51.712 115.2 115.2S741.888 1024 678.4 1024 563.2 972.288 563.2 908.8 614.912 793.6 678.4 793.6z m-349.184-396.8c63.488 0 115.0976 51.712 115.0976 115.2s-51.712 115.2-115.2 115.2S214.016 575.488 214.016 512s51.712-115.2 115.2-115.2z m349.184 0c63.488 0 115.2 51.712 115.2 115.2s-51.712 115.2-115.2 115.2S563.2 575.488 563.2 512s51.712-115.2 115.2-115.2zM329.216 0c63.488 0 115.0976 51.712 115.0976 115.2S392.6016 230.4 329.1136 230.4 214.016 178.688 214.016 115.2 265.6256 0 329.1136 0z m349.184 0c63.488 0 115.2 51.712 115.2 115.2S741.888 230.4 678.4 230.4 563.2 178.688 563.2 115.2 614.912 0 678.4 0z" fill="#8a8a8a" p-id="50822"></path></svg>
              </div>
              <div  class="com-name">IOS缺陷</div>
            </div>
          </div>
        </div>
      </div>
      <div style="flex: 0 0 10px;"></div>
      <div style="flex: 1;padding: 10px 20px 10px 20px;" class="shadow">
        <div style="font-size: 18px;">组建配置</div>
        <Summary desc="你可以通过拖放组件库中的组件来自定义界面的导航栏。你也可以设置每一个组件，使其拥有个性化的配置。"/>
        <div class="com-line-header">
          <div class="com-line-header-title">导航自定义</div>
        </div>
        <div class="flex-row" style="margin-top: 30px;background-color: #f8f8f8;padding-left: 10px;">
          <div style="margin-bottom: 10px;" class="com-box-border align-items-center flex-row" v-for="i in items" :key="i.uuid">
            <div style="flex: 0 0 auto;display: flex;">
              <svg t="1602764784806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50821" width="15" height="15"><path d="M329.1136 793.6c63.488 0 115.2 51.712 115.2 115.2S392.6016 1024 329.1136 1024 214.016 972.288 214.016 908.8 265.6256 793.6 329.1136 793.6z m349.2864 0c63.488 0 115.2 51.712 115.2 115.2S741.888 1024 678.4 1024 563.2 972.288 563.2 908.8 614.912 793.6 678.4 793.6z m-349.184-396.8c63.488 0 115.0976 51.712 115.0976 115.2s-51.712 115.2-115.2 115.2S214.016 575.488 214.016 512s51.712-115.2 115.2-115.2z m349.184 0c63.488 0 115.2 51.712 115.2 115.2s-51.712 115.2-115.2 115.2S563.2 575.488 563.2 512s51.712-115.2 115.2-115.2zM329.216 0c63.488 0 115.0976 51.712 115.0976 115.2S392.6016 230.4 329.1136 230.4 214.016 178.688 214.016 115.2 265.6256 0 329.1136 0z m349.184 0c63.488 0 115.2 51.712 115.2 115.2S741.888 230.4 678.4 230.4 563.2 178.688 563.2 115.2 614.912 0 678.4 0z" fill="#8a8a8a" p-id="50822"></path></svg>
            </div>
            <div class="com-name">{{ i.name }}</div>
          </div>
        </div>
        <div class="com-line-header">
          <div class="com-line-header-title">组件详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '@/views/component/common/block/summary';
import Search from "@/views/component/common/form/search";

export default {
  data() {
    return {
    }
  },
  props: {
    items: Array
  },
  methods: {
  },
  components: {
    Summary,
    Search
  }
}
</script>

<style scoped>
.com-box-border { width: calc(50% - 10px);border: solid 1px #e8e8e8;border-radius: 3px;padding: 5px;cursor: pointer;margin: 10px 10px 0 0;background-color: #ffffff; }
.com-box-border:hover { color: #17C4BB;border-left: solid 3px #17C4BB;padding-left: 3px; }
.com-box-border:hover svg > path { fill: #17C4BB; }
.com-box-border .com-name { margin-left: 10px;flex: 1;color: inherit;white-space: nowrap;text-overflow: ellipsis;overflow: hidden; }

.com-line-header { position: relative;margin: 35px -20px 0 -20px;padding: 0 20px;border-top: 1px solid #e8e8e8; }
.com-line-header-title { font-size: 15px;font-weight: 500;border: 1px solid #e8e8e8;width: 95px;height: 30px;line-height: 30px;border-radius: 15px;position: absolute;top: -15px;left: 50%;margin-left: -47px;text-align: center;background-color: #ffffff; }
</style>
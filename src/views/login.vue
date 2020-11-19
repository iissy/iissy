<template>
<!--  <div style="margin: 0 auto 0 auto;width: 100%;height: 100%;" class="flex-column justify-content-center">-->
<!--    <div style="flex: 0 0 48px;"></div>-->
<!--    <div class="enter" style="padding-top: 10px;background-color: #ffffff;flex: 1;">-->
<!--      <router-link :to="{ name: 'MainRedirect' }">进入 soul 项目管理系统</router-link>-->
<!--    </div>-->
<!--    <div style="flex: 0 0 60px;" class="flex-row align-items-center justify-content-center copyright">-->
<!--      <div>-->
<!--        Copyright ©2020 <a href="/">爱斯园</a>-->
<!--      </div>-->
<!--      <div style="margin-left: 5px;">-->
<!--        <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备2020117325号</a>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div style="width: 100%;height: 100%;" class="flex-row align-items-center justify-content-center">
    <div style="position: absolute;width: 800px;height: 600px;background-color: #f0f0f0;border-radius: 10px;overflow: hidden;" class="flex-row align-items-center justify-content-center">
      <div style="position: absolute;color: rgba(255, 206, 86, 0.2);margin:-420px 0 0 -200px;">
        <b-icon icon="circle-fill" scale="10"/>
      </div>
      <div style="position: absolute;color: rgba(75, 192, 192, 0.2);margin:-230px 0 0 -460px;">
        <b-icon icon="circle-fill" scale="20"/>
      </div>
      <div style="position: absolute;color: rgba(255, 99, 132, 0.2);margin:300px 0 0 500px;">
        <b-icon icon="circle-fill" scale="32"/>
      </div>
      <div style="position: absolute;color: rgba(153, 102, 255, 0.2);margin:260px 0 0 -50px;">
        <b-icon icon="circle-fill" scale="18"/>
      </div>
      <div style="position: absolute;width: 600px;height: 400px;background-color: #ffffff;border-radius: 3px;" class="flex-row align-items-center justify-content-center">
        <div class="flex-row align-items-center justify-content-center enter-icon">
          <b-icon icon="arrow-left-short" scale="2"/>
        </div>
        <div style="margin-left: 5px;" class="flex-row align-items-center justify-content-center enter">
          <router-link :to="{ name: 'MainRedirect' }">进入 soul 项目管理系统</router-link>
        </div>
      </div>
      <div style="position: absolute;bottom: 10px;">
        <div style="flex: 0 0 60px;" class="flex-row align-items-center justify-content-center copyright">
          <div>
            Copyright ©2020 <a href="/">爱斯园</a>
          </div>
          <div style="margin-left: 5px;">
            <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备2020117325号</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      name: ''
    };
  },
  methods: {
  },
  computed: {
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.enter a { font-size: 30px;font-weight: 500;color: #333333;opacity: 0.3;letter-spacing: 2px;text-shadow: #000000 1px 1px 1px; }
.enter-icon { color: #333333;opacity: 0.3;letter-spacing: 2px;text-shadow: #000000 1px 1px 1px; }
.copyright div,.copyright a { color: #909090;font-size: 12px;opacity: 0.6; }
</style>
<template>
  <div class="overview" style="overflow:auto;flex: 1 0 auto;padding: 10px;width: 100%;position: relative;">
    <div class="flex-row header-container-inner" style="border-radius: 3px;flex: 1;padding: 10px;">
      <div style="flex: 0 0 auto;">
        <AddButton title="新建页面组" v-b-modal.modal-wiki-add></AddButton>
      </div>
      <div style="flex: 1;"></div>
      <div style="flex: 0 0 auto;" class="flex-row align-items-center">
        <b-icon icon="gear" aria-hidden="true" scale="1.2"></b-icon>
        <div style="margin: 0 20px 0 5px;">Wiki 配置中心</div>
      </div>
    </div>
    <div style="flex: 1;flex-direction: row;margin-top: 10px;position: relative;" class="flex-row">
      <div style="width: 250px;height: 175px;padding: 15px 20px 10px 20px;" class="g-container flex-column">
        <div style="flex: 1;">
          <div style="flex: 0 0 auto;font-size: 15px;">新员工培训文档</div>
          <div style="flex: 0 0 auto;color: #909090;font-size: 12px;">最近页面更新于 8 小时前</div>
        </div>
        <div style="flex: 0 0 auto;" class="flex-row">
          <div style="flex: 1;"></div>
          <div style="flex: 0 0 auto;">
            <b-icon icon="star" scale="1.2"></b-icon>
          </div>
        </div>
      </div>
      <div style="width: 250px;height: 175px;padding: 15px 20px 10px 20px;margin-left: 10px;" class="g-container flex-column">
        <div style="flex: 1;">
          <div style="flex: 0 0 auto;font-size: 15px;">开发技术文档</div>
          <div style="flex: 0 0 auto;color: #909090;font-size: 12px;">最近页面更新于 8 小时前</div>
        </div>
        <div style="flex: 0 0 auto;" class="flex-row">
          <div style="flex: 1;"></div>
          <div style="flex: 0 0 auto;">
            <b-icon icon="star" scale="1.2"></b-icon>
          </div>
        </div>
      </div>
    </div>
    <b-modal size="lg" id="modal-wiki-add">
      asdfasdf
    </b-modal>
  </div>
</template>

<script>
import AddButton from '../common/form/button';

export default {
  data() {
    return {
    }
  },
  created () {
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
  },
  methods: {
  },
  components: {
    AddButton
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
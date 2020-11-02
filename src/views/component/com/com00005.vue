<template>
  <div class="app-main-content flex-column">
    <div style="flex: 0 0 auto;font-size: 18px;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;">报表</div>
    <div class="flex-row align-items-center" style="flex: 0 0 auto;margin: 10px 20px;">
      <div style="flex: 1;">
        <AddMember :curMember="items"></AddMember>
      </div>
      <div style="flex: 0 0 300px;text-align: right;display: flex;">
        <Search placeholder="搜索报表" />
      </div>
    </div>
    <div class="flex-row report" style="flex:1;border-top: 1px solid #e8e8e8;">
      <div style="flex: 0 0 200px;border-right: 1px solid #e8e8e8;">
        <div class="report-menu active">
          常用报表
        </div>
        <div class="report-menu">
          需求分析
        </div>
        <div class="report-menu">
          缺陷分析
        </div>
        <div class="report-menu">
          任务分析
        </div>
        <div class="report-menu">
          工时报表
        </div>
      </div>
      <div style="flex: 1;margin: 10px 20px;" class="flex-column">
        <div class="report-item">常用报表</div>
        <div class="report-item flex-row">
          <div style="flex: 0 0 auto;color: #533f03;">
            <b-icon icon="bar-chart-line" scale="1.2"/>
          </div>
          <div style="flex: 0 0 auto;margin-left: 10px;">
            需求状态分布
          </div>
        </div>
        <div class="report-item flex-row">
          <div style="flex: 0 0 auto;color: #a71d2a;">
            <b-icon icon="bar-chart-line" scale="1.2"/>
          </div>
          <div style="flex: 0 0 auto;margin-left: 10px;">
            缺陷状态分布
          </div>
        </div>
        <div class="report-item flex-row">
          <div style="flex: 0 0 auto;color: #491217;">
            <b-icon icon="bar-chart-steps" scale="1.2"/>
          </div>
          <div style="flex: 0 0 auto;margin-left: 10px;">
            任务状态分布
          </div>
        </div>
        <div class="report-item flex-row">
          <div style="flex: 0 0 auto;color: #1e7e34;">
            <b-icon icon="bar-chart-line" scale="1.2"/>
          </div>
          <div style="flex: 0 0 auto;margin-left: 10px;">
            每日工时日志报表
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/views/component/common/form/search';

export default {
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
  },
  components: {
    Search
  }
}
</script>

<style scoped>
.report .report-menu { border-bottom: 1px solid #e8e8e8;line-height: 48px;padding-left: 20px; }
.report .report-menu.active { border-left: 3px solid #17C4BB;padding-left: 17px; }
.report-item { font-size: 16px;border-bottom: 1px solid #e8e8e8;padding: 10px 0; }
.report-item div { font-size: 16px; }
</style>
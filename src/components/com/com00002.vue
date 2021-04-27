<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <Com00000 :comName="comName" :issue_type="issue_type">
      <template v-slot:workField>
        <div class="field-type-group">
          <div class="flex-row field-row">
            <div style="flex: 0 0 200px;color: #303030;">缺陷类型</div>
            <div style="flex: 1;color: #999999;">未设置</div>
          </div>
          <div class="flex-row field-row">
            <div style="flex: 0 0 200px;color: #303030;">重现概览</div>
            <div style="flex: 1;color: #999999;">未设置</div>
          </div>
          <div class="flex-row field-row">
            <div style="flex: 0 0 200px;color: #303030;">提单版本</div>
            <div style="flex: 1;color: #999999;">未设置</div>
          </div>
          <div class="flex-row field-row">
            <div style="flex: 0 0 200px;color: #303030;">问题单分析</div>
            <div style="flex: 1;color: #999999;">未设置</div>
          </div>
          <div class="flex-row field-row">
            <div style="flex: 0 0 200px;color: #303030;">截止日期</div>
            <div style="flex: 1;color: #999999;">未设置</div>
          </div>
        </div>
      </template>
    </Com00000>
  </div>
</template>

<script>
import Com00000 from "./com00000";

export default {
  data: function () {
    return {
    };
  },
  props: {
    comName: String,
    issue_type: String
  },
  components: {
    Com00000
  }
}
</script>
<template>
  <div>
    <div class="field-type-group">
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">需求来源</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">需求来源</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
    </div>

    <div class="field-type-group">
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">所属项目</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">工作项类型</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">创建者</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">创建时间</div>
        <div style="flex: 1;color: #999999;">{{ task.create_time / 1000 | formatDate }}</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">更新时间</div>
        <div style="flex: 1;color: #999999;">{{ task.server_update_stamp / 1000 | formatDate }}</div>
      </div>
    </div>

    <div class="field-type-group">
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">计划开始日期</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">计划完成日期</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">进度</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
    </div>

    <div class="field-type-group">
      <div class="flex-row">
        <div style="flex: 1;">文件</div>
        <div style="flex: 0 0 auto;color: #000000;cursor: pointer;">
          <b-icon icon="plus" scale="1.8"></b-icon>
        </div>
      </div>
      <div style="color: #999999;margin-top: 10px;">
        暂无文件
      </div>
    </div>

    <div class="field-type-group">
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">预估工时</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">已登记工时</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">剩余工时</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">工时进度</div>
        <div style="flex: 1;">30%</div>
      </div>
      <div class="flex-row field-row">
        <div style="flex: 0 0 200px;color: #303030;">预估偏差</div>
        <div style="flex: 1;color: #999999;">未设置</div>
      </div>
    </div>

    <div class="field-type-group">
      <div class="flex-row">
        <div style="flex: 1;">工时</div>
        <div style="flex: 0 0 auto;color: #000000;cursor: pointer;">
          <b-icon icon="plus" scale="1.8"></b-icon>
        </div>
      </div>
      <div style="color: #999999;margin-top: 10px;">
        暂无工时记录
      </div>
    </div>

    <div style="margin-top: 30px;">评论</div>
    <div style="color: #999999;margin-top: 10px;margin-bottom: 20px;">暂无评论</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    task: Object
  }
}
</script>

<style scoped>
.field-type-group { margin-top: 30px;border-bottom: 1px solid #e8e8e8;padding-bottom: 10px; }
.field-row { margin-top: 10px; }
</style>
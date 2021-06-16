<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <Com00000 :comName="comName" :issue_type="issue_type">
      <template v-slot:workField>
        <div class="field-type-group-last option">
          <div class="flex-row field-row">
            <div class="field-cell">关联需求</div>
            <div class="field-cell-value header">
              <div class="flex-row">
                <div style="flex: 1;"></div>
                <div style="flex: 0 0 auto;color: #303030;cursor: pointer;" v-b-modal.modal-related-task>
                  <b-icon class="link" icon="link" scale="1.8"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-row field-row">
            <div style="padding: 3px 0;">暂无关联</div>
          </div>
        </div>
      </template>
    </Com00000>
    <b-modal size="lg" title="关联需求" id="modal-related-task" no-close-on-backdrop>
      <div style="flex: 1;overflow-y: auto;background-color: #ffffff;min-height: 500px;" class="flex-row ck-content">
        <div style="padding: 10px;">
        </div>
      </div>
    </b-modal>
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

<style scoped>
.field-type-group-last { margin-top: 20px;padding-bottom: 0; }
</style>
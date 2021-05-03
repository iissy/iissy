<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <Com00000 :comName="comName" :issue_type="issue_type">
      <template v-slot:workField>
        <div class="field-type-group option">
          <div class="flex-row field-row">
            <div class="field-cell">需求来源</div>
            <div class="field-cell-value header" ref="permBody" :class="{active: visible}">
              <div @click="dropOptionValues('LH77EaxR')">
                未设置
              </div>
              <div style="position: absolute;" class="edit ibox" :class="{open: visible}">
                <div v-for="option in options" :key="option.uuid">
                  <div style="color: #909090;" class="domain-group-header">
                    {{ option.value }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-row field-row">
            <div class="field-cell">需求类型</div>
            <div class="field-cell-value">未设置</div>
          </div>
          <div class="flex-row field-row">
            <div class="field-cell">截止日期</div>
            <div class="field-cell-value">未设置</div>
          </div>
        </div>
      </template>
    </Com00000>
  </div>
</template>

<script>
import Com00000 from "./com00000";
import http from "../../utils/http";

export default {
  data: function () {
    return {
      team: '',
      project: '',
      visible: false,
      optionValue: '',
      options: []
    };
  },
  props: {
    comName: String,
    issue_type: String
  },
  methods: {
    dropOptionValues: function (fieldUUID) {
      let self = this;
      self.visible = true;
      self.team = self.$route.params.team;
      self.project = self.$route.params.project;
      document.addEventListener('click', self.hidePanel, false)

      http.get(self.urls.field_option_value_list.format(self.team, self.project, self.issue_type, fieldUUID), {}).then(function (response) {
        self.options = response.data;
      });
    },
    hide () {
      let self = this;
      self.visible = false
      document.removeEventListener('click', self.hidePanel, false)
    },
    hidePanel (e) {
      let self = this;
      if(self.$refs.permBody) {
        if (!self.$refs.permBody.contains(e.target)) {
          self.hide();
        }
      } else {
        self.hide();
      }
    }
  },
  components: {
    Com00000
  }
}
</script>

<style scoped>
.option .header {
  position: relative;
}
.option .header.active { border: 1px solid #17C4BB; }
.option .header .edit {
  overflow-y: auto;
  width: 100%;
  top: 30px;
  left: 0;
  max-height: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  transition: max-height .3s ease-out;
}
.option .open.edit {
  max-height: 170px;
  -webkit-animation: slide-down .3s ease-in;
  transition: max-height .3s ease-in;
  transform-origin: 50% 0;
  padding: 5px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.2);
}
</style>
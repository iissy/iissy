<template>
  <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;">
    <div class="status" :class="curColor" id="popover-project-status" hidefocus="true" tabindex="0">
      {{ curName }}
      <b-icon icon="chevron-expand"/>
    </div>
    <b-popover ref="popover" target="popover-project-status" triggers="focus" placement="bottom">
      <div style="max-height: 234px;overflow-y:auto;overflow-x: hidden;">
        <div style="padding: 5px 10px;font-size: 15px;border-bottom: 1px solid #e8e8e8;">更改项目状态</div>
        <div v-for="s in statuses" :key="s.uuid">
          <div @click="change_status(s.uuid)" class="status-item flex-row align-items-center" :class="{selected: curColor === s.uuid}">
            <div style="flex: 0 0 auto;">{{ s.name }}</div>
            <div v-if="curColor === s.uuid"  style="flex: 1;" class="flex-row align-items-center">
              <div style="flex: 1;min-width:50px;"></div>
              <div style="flex: 0 0 auto;display: flex;align-items: center;text-align: right;">
                <b-icon icon="check" scale="1.5"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-popover>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import http from "../../../scripts/http";
import Alert from '../common/block/alert';

export default {
  data() {
    return {
      statuses: [
        {uuid: 'to_do', name: '未开始'},
        {uuid: 'in_progress', name: '进行中'},
        {uuid: 'done', name: '已完成'}
      ]
    }
  },
  props: {
    team: String,
    project: String,
    name: String,
    color: String
  },
  methods: {
    change_status: function (uuid) {
      let self = this;
      let param = { category: uuid }
      http.post(self.urls.project_change_status.format(self.team, self.project), param).then(function (response) {
        if (response.data.status) {
          self.$refs.popover.$emit('close')
          self.$refs.alert.success('更新成功');
          self.$parent.project_get();
        } else {
          self.$refs.alert.danger('更新失败');
        }
      });
    }
  },
  computed: {
    curName: function () {
      let self = this;
      let resultName = self.name;
      switch (self.name) {
        case "1":
        case "to_do":
          resultName = '未开始'
          break;
        case "2":
        case "in_progress":
          resultName = '进行中'
          break;
        case "3":
        case "done":
          resultName = '已完成'
          break;
      }

      return resultName;
    },
    curColor: function () {
      let self = this;
      let resultColor = self.color;
      switch (self.color) {
        case "1":
          resultColor = 'to_do'
          break;
        case "2":
          resultColor = 'in_progress'
          break;
        case "3":
          resultColor = 'done'
          break;
      }

      return resultColor;
    }
  },
  components: {
    Alert
  }
}
</script>

<style scoped>
#popover-project-status { cursor: pointer;box-shadow: none;outline: none; }
.status-item { padding: 5px 10px 5px 10px;border-radius: 0.3rem;cursor: pointer; }
.status-item:hover { background-color: #F0F8FF; }
.selected div { color: #17C4BB; }
</style>
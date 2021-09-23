<template>
  <div style="flex: 1;min-height: 100%;">
    <ProjectMangeHeader title="优先级" desc="通过不同的组合设定，个性化您的优先级显示方式。"/>
    <div style="padding: 0 20px 20px 20px;">
      <Search style="margin: 20px 0;" placeholder="搜索优先级"/>
      <div id="project-main">
        <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
          <div class="table">
            <div class="table-row-header">
              <div class="th">优先级名称</div>
              <div class="th">描述</div>
              <div class="th">显示样式</div>
              <div class="th" style="flex: 0 0 80px;">操作</div>
            </div>
            <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
              <div class="td flex-row">
                <div style="flex: 0 0 auto;">{{ item.value }}</div>
                <div v-if="item.uuid == defaultValue" style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                  <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;">默认</div>
                </div>
              </div>
              <div class="td">
                <div>
                  <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;">
                    <div>{{ item.desc }}</div>
                  </div>
                </div>
              </div>
              <div class="td">
                <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                  <Priority :color="item.color" :name="item.value" :bgColor="item.background_color"></Priority>
                </div>
              </div>
              <div class="td" style="display: flex;align-items: center;flex: 0 0 80px;">
                <div style="width: 30px;height: 2px;">
                  <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../../utils/http";
import Priority from "../../common/control/priority";
import ProjectMangeHeader from '../../common/permission/header';
import Search from "../../common/form/search";

export default {
  data: function () {
    return {
      name: '',
      items: [],
      team: '',
      defaultValue: ''
    };
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.priority_list();
  },
  methods: {
    priority_list: function() {
      let self = this;
      http.post(this.urls.issue_type_priority.format(self.team)).then(function (response) {
        self.items = response.data.options;
        self.defaultValue = response.data.default_value;
      });
    }
  },
  components: {
    Priority,
    ProjectMangeHeader,
    Search
  }
};
</script>

<style scoped>
</style>
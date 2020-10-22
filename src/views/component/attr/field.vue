<template>
  <div class="app-main-content" style="padding: 20px;">
    <div style="font-size: 18px;margin-bottom: 20px;">工作项类型 > 工作项属性</div>
    <Summary :desc="desc"/>
    <Search style="margin-top: 20px;" placeholder="搜索工作项属性"/>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">属性名称</div>
            <div class="th">属性类型</div>
            <div class="th">默认属性</div>
            <div class="th">是否必填</div>
            <div class="th" style="display: flex;flex: 0 0 80px;">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td flex-row">
              <div style="flex: 0 0 auto;">{{ item.name }}</div>
              <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
              </div>
            </div>
            <div class="td">{{ item.type | TaskFieldType }}</div>
            <div class="td">---</div>
            <div class="td">
              <b-form-checkbox v-model="item.fixed" name="check-button" size="lg" switch/>
            </div>
            <div class="td" style="display: flex;flex: 0 0 80px;">
              <div style="width: 30px;height: 2px;" v-if="item.built_in">
                <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
              </div>
              <div style="font-weight: bolder;text-align: center;width: 30px;" v-else>
                <b-icon icon="x" scale="2"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http";
import Summary from "@/views/component/common/block/summary";
import Search from "@/views/component/common/form/search";

export default {
  data: function () {
    return {
      name: '',
      desc: '工作项属性用于配置工作项需要的显示字段，可以用多种属性类型来进行配置，不同项目可以共用同一个属性。',
      team: '',
      items: []
    };
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project_list();
  },
  methods: {
    project_list: function() {
      let self = this;
      http.post(this.urls.issue_type_field.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    Search,
    Summary
  }
};
</script>

<style scoped>
</style>
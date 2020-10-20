<template>
  <div>
    <div style="font-size: 18px;margin-bottom: 20px;">工作项属性</div>
    <Summary :desc="desc"/>
    <div style="overflow:hidden;margin: 20px 0 0 0;width: 300px;height: 30px;position: relative;">
      <div class="flex-column" style="position: absolute;height: 30px;margin-left: 10px;">
        <div style="flex: 1;display: flex;align-items: center;">
          <svg t="1600686491561" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11218" width="16" height="16"><path d="M240.776 240.872A302.952 302.952 0 0 0 157.328 512c18.048-81.912 60.48-161.952 126.576-228.096C350.048 217.736 430.088 175.328 512 157.28c-95.28-17.952-197.52 9.864-271.224 83.592z" fill="#969696" p-id="11219"></path><path d="M959.6 802.736l-114.096-114.096a110.64 110.64 0 0 0-87-31.992c107.304-155.208 91.8-369.744-46.392-507.96-155.568-155.616-407.856-155.616-563.472 0-155.568 155.616-155.568 407.928 0 563.544 138.192 138.216 352.56 153.6 507.864 46.296-2.4 31.2 8.304 63.312 31.992 87l114.096 114.12c43.2 43.104 113.784 43.104 156.888 0 43.32-43.104 43.32-113.712 0.12-156.912zM665.84 665.84c-130.008 130.008-340.68 130.008-470.64 0-130.008-130.008-130.008-340.728 0-470.736 129.96-130.008 340.632-130.008 470.64 0 129.984 129.912 129.984 340.728 0 470.736z" fill="#969696" p-id="11220"></path></svg>
        </div>
      </div>
      <input type="text" v-model="name" name="name" class="form-control" style="padding-left: 40px;height: 100%;padding-top: 5px;padding-bottom: 5px;" placeholder="属性名字">
    </div>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">属性名称</div>
            <div class="th">属性类型</div>
            <div class="th">使用到的项目</div>
            <div class="th last">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td flex-row">
              <div style="flex: 0 0 auto;">{{ item.name }}</div>
              <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
              </div>
            </div>
            <div class="td">{{ item.type }}</div>
            <div class="td">所有项目</div>
            <div class="td last" style="display: flex;align-items: center;">
              <div style="width: 30px;height: 2px;" v-if="item.built_in">
                <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
              </div>
              <div v-else>
                <svg t="1600587759121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5114" width="16" height="16"><path d="M867.858 286.276c0 0 29.859-23.187-1.104-54.1l-91.687-95.672c0 0-27.363-37.252-59.429-5.235l-61.013 65.621 153.853 149.917 59.38-60.532zM773.818 387.109l-162.877-154.069-369.823 372.031 166.765 143.317 365.934-361.278zM221.15 845.308l-62.309-57.579-15.595 68.835h-0.054v49.156h737.34v-49.156h-735.708l76.327-11.256zM360.073 788.686l-164.126-137.483-20.834 92.334 95.287 80.528 89.672-35.378z" p-id="5115" fill="#2c2c2c"></path></svg>
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
    Summary
  }
};
</script>

<style scoped>
#project-main { flex: 1;display: flex; }
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0;font-weight: bolder; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table-row:hover { background-color: #f8f8f8; }
.table .th { width: 100px;padding: 10px 0 10px 20px;font-size: 12px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .last { flex: 0 0 auto; }
</style>
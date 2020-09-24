<template>
  <div>
    <div style="font-size: 18px;margin-bottom: 20px;">项目管理</div>
    <div style="margin-top: 20px;" class="flex-row">
      <div style="height: 40px;flex: 1;margin-right: -22px;border-top: 1px solid #e8e8e8;border-bottom: 1px solid #e8e8e8;border-left: 1px solid #e8e8e8;">
        <div style="flex: 1;align-items: center;height: 100%;display: flex;margin-left: 20px;" >
          <div style="flex: 0 0 auto;">
            项目管理页展示当前所有项目，可对项目进行权限编辑和删除操作。
          </div>
        </div>
      </div>
      <div style="flex: 0 0 auto;" class="flex-column">
        <div style="flex: 1;display: flex;">
          <svg t="1600683890454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9204" width="44" height="44"><path d="M924.8 337.6c-22.6-53.3-54.9-101.3-96-142.4-41.1-41.1-89-73.4-142.4-96C631.1 75.8 572.5 64 512 64S392.9 75.8 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96-41.1 41.1-73.4 89-96 142.4C75.8 392.9 64 451.5 64 512s11.8 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.2 451.5 960 512 960s119.1-11.8 174.4-35.2c53.3-22.6 101.3-54.9 142.4-96 41.1-41.1 73.4-89 96-142.4C948.2 631.1 960 572.5 960 512s-11.8-119.1-35.2-174.4zM512 904.6c-216.5 0-392.6-176.1-392.6-392.6S295.5 119.4 512 119.4c216.5 0 392.6 176.1 392.6 392.6S728.5 904.6 512 904.6z" p-id="9205" fill="#8a8a8a"></path><path d="M562 665.8c-10.4 0-17.8-1.7-22-5-4.2-3.3-6.4-9.6-6.4-18.8 0-3.7 0.6-9 2-16.2 1.3-7.1 2.8-13.5 4.4-19l20.1-69.2c2-6.3 3.3-13.3 4-20.9 0.7-7.6 1.1-12.9 1.1-16 0-14.6-5.3-26.4-15.8-35.6-10.6-9.1-25.5-13.7-45-13.7-10.8 0-22.2 1.9-34.3 5.6-12.1 3.7-24.8 8.2-38 13.4l-5.4 21.4c3.9-1.4 8.6-2.9 14.1-4.5s10.8-2.4 16.1-2.4c10.7 0 17.8 1.8 21.6 5.2 3.8 3.5 5.7 9.7 5.7 18.6 0 4.9-0.6 10.3-1.8 16.3-1.2 5.9-2.7 12.3-4.5 18.9l-20.2 69.5c-1.8 7.3-3.1 13.9-3.9 19.6-0.8 5.8-1.2 11.5-1.2 17 0 14.3 5.4 26.1 16.3 35.3 10.9 9.3 26.1 13.9 45.7 13.9 12.7 0 23.9-1.6 33.5-4.9 9.6-3.2 22.5-8 38.7-14.2l5.4-21.4c-2.8 1.3-7.3 2.7-13.4 4.4-6.4 1.9-11.9 2.7-16.8 2.7zM583.1 337.5c-9.4-8.6-20.7-12.8-33.9-12.8s-24.6 4.3-34 12.8c-9.5 8.6-14.2 18.9-14.2 30.9 0 12.1 4.7 22.3 14.2 30.8s20.8 12.7 34 12.7 24.5-4.2 33.9-12.7c9.4-8.5 14.1-18.7 14.1-30.8 0-12.1-4.7-22.4-14.1-30.9z" p-id="9206" fill="#8a8a8a"></path></svg>
        </div>
      </div>
    </div>
    <div style="overflow:hidden;margin: 20px 0 0 0;width: 300px;height: 30px;">
      <div class="flex-column" style="position: absolute;height: 30px;margin-left: 10px;">
        <div style="flex: 1;display: flex;align-items: center;">
          <svg t="1600686491561" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11218" width="16" height="16"><path d="M240.776 240.872A302.952 302.952 0 0 0 157.328 512c18.048-81.912 60.48-161.952 126.576-228.096C350.048 217.736 430.088 175.328 512 157.28c-95.28-17.952-197.52 9.864-271.224 83.592z" fill="#969696" p-id="11219"></path><path d="M959.6 802.736l-114.096-114.096a110.64 110.64 0 0 0-87-31.992c107.304-155.208 91.8-369.744-46.392-507.96-155.568-155.616-407.856-155.616-563.472 0-155.568 155.616-155.568 407.928 0 563.544 138.192 138.216 352.56 153.6 507.864 46.296-2.4 31.2 8.304 63.312 31.992 87l114.096 114.12c43.2 43.104 113.784 43.104 156.888 0 43.32-43.104 43.32-113.712 0.12-156.912zM665.84 665.84c-130.008 130.008-340.68 130.008-470.64 0-130.008-130.008-130.008-340.728 0-470.736 129.96-130.008 340.632-130.008 470.64 0 129.984 129.912 129.984 340.728 0 470.736z" fill="#969696" p-id="11220"></path></svg>
        </div>
      </div>
      <input type="text" v-model="name" name="name" class="form-control" style="padding-left: 40px;height: 100%;padding-top: 5px;padding-bottom: 5px;" placeholder="项目名字">
    </div>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">项目名称</div>
            <div class="th last">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td">{{ item.name }}</div>
            <div class="td last">
              <router-link :to="{name:'ProjectPermissionSetting', params: { team: item.team_uuid, project: item.uuid, title: item.name }}">
                <svg t="1600587759121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5114" width="16" height="16"><path d="M867.858 286.276c0 0 29.859-23.187-1.104-54.1l-91.687-95.672c0 0-27.363-37.252-59.429-5.235l-61.013 65.621 153.853 149.917 59.38-60.532zM773.818 387.109l-162.877-154.069-369.823 372.031 166.765 143.317 365.934-361.278zM221.15 845.308l-62.309-57.579-15.595 68.835h-0.054v49.156h737.34v-49.156h-735.708l76.327-11.256zM360.073 788.686l-164.126-137.483-20.834 92.334 95.287 80.528 89.672-35.378z" p-id="5115" fill="#2c2c2c"></path></svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http";

export default {
  data: function () {
    return {
      name: '',
      items: []
    };
  },
  created: function () {
    let self = this;
    self.project_list();
  },
  methods: {
    project_list: function() {
      let self = this;
      let url = '/api/team/Sxv5vAgD/setting/project/manager';
      http.post(url).then(function (response) {
        self.items = response.data;
      });
    }
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
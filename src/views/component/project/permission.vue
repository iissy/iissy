<template>
  <div>
    <div style="display: flex;flex-direction: row;align-items: center;border-bottom: 1px solid #e8e8e8;padding-bottom: 10px;">
      <div style="font-size: 18px;flex: 0 0 auto;">项目管理</div>
      <div style="margin-left: 10px;flex: 0 0 auto;">
        <div style="flex:0 0 auto;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
        </div>
      </div>
      <div style="margin-left: 10px;flex: 0 0 auto;font-size: 18px;">{{ ProjectName }}</div>
    </div>
    <div style="margin-top: 20px;">
      <div style="font-size: 16px;">查看项目</div>
      <div style="color: #909090;">允许成员浏览当前项目，包括工作项，迭代，筛选器等信息</div>
      <div class="table">
        <div class="table-row-header">
          <div class="th">以下成员域拥有此操作权限</div>
        </div>
        <div class="table-row">
          <div class="td">项目管理员</div>
          <div class="td last">
            <svg t="1600646500002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8350" width="12" height="12" data-spm-anchor-id="a313x.7781069.0.i15"><path d="M781.947 195.412L512.553 464.806 243.159 195.412c-12.887-12.887-33.78-12.887-46.667 0s-12.887 33.78 0 46.667l269.394 269.394-269.394 269.394c-12.887 12.887-12.887 33.78 0 46.667s33.78 12.887 46.667 0L512.553 558.14l269.394 269.394c12.887 12.887 33.78 12.887 46.667 0s12.887-33.78 0-46.667L559.22 511.473l269.394-269.394c12.887-12.887 12.887-33.78 0-46.667s-33.78-12.887-46.667 0z" p-id="8351"></path></svg>
          </div>
        </div>
        <div class="table-row">
          <div class="td">
            <div class="virtualize-select" ref="reader">
              <div class="virtualize-select-value">
                <div role="presentation" class="text-input ui-input">
                  <input autocomplete="off" @click='dropdown' @blur="blurClick" @focus="focusClick" v-bind:value="readerValue">
                </div>
                <div v-show="isLabel" class="virtualize-select-placeholder">搜索角色、用户组、部门、成员</div>
              </div>
              <div class="virtualize-select-arrow"></div>
            </div>
            <div class="dropdown-role-list" v-show='dropdownActive'>
              <div style="flex: 1;box-shadow: 0 1px 6px rgba(0,0,0,0.2);width: 100%;background-color: #fff;">
                <div style="overflow: auto;height: 200px;width: 100%;">
                  <div v-show='dropdownActive' style="display: flex;flex-direction: column;">
                    <div class="perm-item"><router-link to="/main/center/account">个人中心</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                    <div class="perm-item"><router-link to="/main/logout">退出登录</router-link></div>
                  </div>
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
import http from "@/util/http";

export default {
  data: function () {
    return {
      dropdownActive: false,
      isLabel: true,
      ProjectName: '',
      readerValue: ''
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.$refs.reader) {
        if (!this.$refs.reader.contains(e.target)) {
          this.dropdownActive = false
        }
      }
    })
  },
  created: function () {
    this.GetProjectName();
  },
  methods: {
    blurClick: function () {
      if (this.readerValue) {
        this.isLabel = false;
      } else {
        this.isLabel = true;
      }
    },
    focusClick: function () {
      this.isLabel = false;
    },
    dropdown: function()
    {
      this.dropdownActive = !this.dropdownActive;
    },
    GetProjectName: function() {
      let self = this;
      self.ProjectName = self.$route.params.title
      if (!self.ProjectName) {
        let id = this.$route.params.project;
        let url = '/api/team/Sxv5vAgD/project/get/' + id;
        http.post(url).then(function (response) {
          self.ProjectName = response.data.name;
        });
      }
    }
  }
};
</script>

<style scoped>
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table .th { padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .last { width: 60px;flex: 0 0 auto; }

.virtualize-select { display: -webkit-flex;display: flex;height: 30px;outline: none;border: 1px solid #d9d9d9;-webkit-align-items: center;align-items: center;text-overflow: ellipsis;white-space: nowrap;width: 280px;position: relative; }
.virtualize-select .text-input { border: 0px !important;z-index: 5;height: 26px;overflow: hidden;position: absolute;background: transparent;margin: auto;top: 0;bottom: 0; }
/*.ui-input.ui-input-focus, .ui-input:focus { outline: none; border-color: #338fe5; }*/
.text-input { display: inline-block;height: 30px;line-height: 28px;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;vertical-align: middle; }
.ui-input { display: inline-block;border-radius: 3px;border: 1px solid rgba(134,147,160,0.5);transition: border-color .2s; }
.virtualize-select .text-input input { padding-left: 7px;background: transparent; }
.text-input>input { width: 100%;height: 100%;line-height: normal;padding-left: 10px;box-sizing: border-box;border: 0 none;outline: 0 none; }

.virtualize-select .virtualize-select-placeholder { padding-left: 10px;color: #909090; }
.dropdown-role-list { width: 280px;height: 0;display: flex;flex-direction: column;position: relative;align-items: center; }
.perm-item { flex: 1;padding: 5px 5px 5px 10px; }
.perm-item:hover { background-color: #f8f8f8; }
</style>
<template>
  <div>
    <div style="font-size: 18px;margin-bottom: 20px;">工作项类型</div>
    <Summary :desc="desc"/>
    <div style="overflow:hidden;margin: 20px 0 0 0;width: 300px;height: 30px;position: relative;">
      <div class="flex-column" style="position: absolute;height: 30px;margin-left: 10px;">
        <div style="flex: 1;display: flex;align-items: center;">
          <svg t="1600686491561" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11218" width="16" height="16"><path d="M240.776 240.872A302.952 302.952 0 0 0 157.328 512c18.048-81.912 60.48-161.952 126.576-228.096C350.048 217.736 430.088 175.328 512 157.28c-95.28-17.952-197.52 9.864-271.224 83.592z" fill="#969696" p-id="11219"></path><path d="M959.6 802.736l-114.096-114.096a110.64 110.64 0 0 0-87-31.992c107.304-155.208 91.8-369.744-46.392-507.96-155.568-155.616-407.856-155.616-563.472 0-155.568 155.616-155.568 407.928 0 563.544 138.192 138.216 352.56 153.6 507.864 46.296-2.4 31.2 8.304 63.312 31.992 87l114.096 114.12c43.2 43.104 113.784 43.104 156.888 0 43.32-43.104 43.32-113.712 0.12-156.912zM665.84 665.84c-130.008 130.008-340.68 130.008-470.64 0-130.008-130.008-130.008-340.728 0-470.736 129.96-130.008 340.632-130.008 470.64 0 129.984 129.912 129.984 340.728 0 470.736z" fill="#969696" p-id="11220"></path></svg>
        </div>
      </div>
      <input type="text" v-model="query" name="name" class="form-control" style="padding-left: 40px;height: 100%;padding-top: 5px;padding-bottom: 5px;" placeholder="项目名字">
    </div>
    <div id="project-main">
      <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">工作项类型</div>
            <div class="th">类型</div>
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
            <div class="td">
              <div v-if="item.detail_type == 0">自定义类型</div>
              <div v-else>标准类型</div>
            </div>
            <div class="td">3个项目</div>
            <div class="td last">
              <a v-b-modal.modal-prevent-closing>重命名</a>
              <router-link :to="{name:'IssueTypeSetting', params: { team: item.team_uuid, issue_type: item.uuid, title: item.name, path: 'setting' }}">
                配置
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <b-modal id="modal-prevent-closing" ref="modal" title="重命名工作项类型" :no-close-on-backdrop="true" cancel-title="取消" ok-title="确定" :centered="true" @show="resetModal" @hidden="resetModal" @ok="handleOk">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div style="height: 40px;margin-bottom: 10px;border-top: 1px solid #e8e8e8;border-bottom: 1px solid #e8e8e8;border-left: 3px solid #f0ad4e;border-right: 1px solid #e8e8e8;">
            <div style="flex: 1;align-items: center;height: 100%;display: flex;margin-left: 20px;" >
              <div style="flex: 0 0 auto;">
                项目管理页展示当前所有项目，可对项目进行权限编辑和删除操作。
              </div>
            </div>
          </div>
          <b-form-group :state="nameState" label="类型名称" label-for="name-input" invalid-feedback="Name is required">
            <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import http from "@/util/http";
import Summary from "@/views/component/common/block/summary";

export default {
  data: function () {
    return {
      query: '',
      name: '',
      nameState: null,
      desc: '配置中心下，工作项类型配置项的修改，不会同步到已经应用的项目中。',
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
      http.post(this.urls.issue_type_manager.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      // alert(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
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
.table .last { flex: 0 0 auto;width: 150px; }
.table .last a { color: #337ab7;padding-right: 10px; }
</style>
<template>
  <div style="flex: 1;min-height: 100%;">
    <ProjectMangeHeader title="工作项类型" desc="配置中心下，工作项类型配置项的修改，不会同步到已经应用的项目中。"/>
    <div style="padding: 0 20px 20px 20px;">
      <Search style="margin: 20px 0;" placeholder="搜索工作项类型"/>
      <div id="project-main">
        <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;overflow-x: auto;">
          <div class="table">
            <div class="table-row-header">
              <div style="flex: 1 1 260px;" class="th">工作项类型</div>
              <div class="th">类型</div>
              <div class="th">使用到的项目</div>
              <div class="th op-big">操作</div>
            </div>
            <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
              <div style="flex: 1 1 260px;" class="td flex-row">
                <IBIcon :icon="item.icon.toString()" scale="1.2"/>
                <div class="flex-column" style="margin-left: 15px;">
                  <div class="flex-row">
                    <div style="color:#17C4BB;">{{ item.name }}</div>
                    <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                      <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
                    </div>
                  </div>
                  <div style="color: #999999;">{{ item.field_count }} 工作项属性<span style="margin: 0 10px;color: #999999;"> | </span>{{ item.status_count }} 工作项状态</div>
                </div>
              </div>
              <div class="td flex-row align-items-center">
                <div v-if="item.detail_type == 0">自定义类型</div>
                <div v-else>标准类型</div>
              </div>
              <div class="td flex-row align-items-center">3个项目</div>
              <div class="td flex-row align-items-center op-big">
                <span v-if="!item.built_in" v-b-modal.modal-prevent-closing>重命名</span>
                <router-link :to="{name:'IssueTypeSetting', params: { team: team, issue_type: item.uuid, title: item.name, type: 'config' }}">
                  编辑
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
  </div>
</template>

<script>
import http from "../../../../utils/http";
import ProjectMangeHeader from '../../common/permission/header';
import Search from "../../common/form/search";
import IBIcon from '../../common/block/i_b_icon';

export default {
  data: function () {
    return {
      query: '',
      name: '',
      nameState: null,
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
      http.post(this.urls.issue_type_list.format(self.team)).then(function (response) {
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
    ProjectMangeHeader,
    Search,
    IBIcon
  }
};
</script>

<style scoped>
</style>
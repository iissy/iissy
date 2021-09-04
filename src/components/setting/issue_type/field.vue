<template>
  <div style="flex: 1;min-height: 100%;">
    <ProjectMangeHeader title="工作项属性" desc="工作项属性用于配置工作项需要的显示字段，可以用多种属性类型来进行配置，不同项目可以共用同一个属性。"/>
    <div style="padding: 0 20px 20px 20px;">
      <Search style="margin: 20px 0;" placeholder="搜索工作项属性"/>
      <div id="project-main">
        <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
          <div class="table">
            <div class="table-row-header">
              <div class="th">属性名称</div>
              <div class="th">属性类型</div>
              <div class="th">使用到的项目</div>
              <div class="th op" style="display: flex;">操作</div>
            </div>
            <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
              <div class="td flex-row">
                <div style="flex: 0 0 auto;">{{ item.name }}</div>
                <div style="flex: 0 0 auto;height: 100%;display: flex;align-items: center;margin-left: 5px;">
                  <div style="border-radius: 20px!important;color: #cecece;padding: 0 6px 0 6px;border: solid 1px #cecece;font-size: 12px;height: 20px;flex: 0 0 auto;align-items: center;display: flex;" v-if="item.built_in">系统</div>
                </div>
              </div>
              <div class="td">{{ item.type | taskFieldType }}</div>
              <div class="td">所有项目</div>
              <div class="td op align-items-center" style="display: flex;">
                <div style="width: 30px;height: 2px;" v-if="item.built_in">
                  <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
                </div>
                <div style="font-weight: bolder;" v-else class="flex-row iop">
                  <div style="flex: 0 0 20px;" class="edit"  @click="showModal(item.uuid, item.name)">
                    <svg t="1619926041971" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33589" width="12" height="12"><path d="M522.24 196.9152L157.4912 571.0848 0 1024l452.9152-147.6608L817.2544 512z m462.7456-29.4912L856.576 39.424a119.3984 119.3984 0 0 0-177.2544 0L571.0848 147.6608l295.424 305.2544 118.0672-118.1696A124.8256 124.8256 0 0 0 1024 245.76a121.5488 121.5488 0 0 0-39.424-78.336z" fill="#2c2c2c" p-id="33590"></path></svg>
                  </div>
                  <div style="flex: 0 0 20px;margin-left: 10px;" class="del">
                    <svg t="1619925824323" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24636" width="12" height="12"><path d="M647.168 512L1024 888.832 888.832 1024 512 647.168 135.168 1024 0 888.832 376.832 512 0 135.168 135.168 0 512 376.832 888.832 0 1024 135.168 647.168 512z" p-id="24637" fill="#2c2c2c"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <b-modal id="modal-edit-field" title="编辑工作项属性" :no-close-on-backdrop="true" cancel-title="取消" ok-title="保存" @show="resetModal" @hidden="resetModal" @ok="handleOk">
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group :state="nameState" label="属性名称" label-for="name-input" invalid-feedback="Name is required">
                  <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
                </b-form-group>
                <b-form-group :state="nameState" label="选项值" label-for="option-input" invalid-feedback="Name is required">
                  <div class="flex-row">
                    <div style="flex: 1;">
                      <b-form-input id="name-input" v-model="option"></b-form-input>
                    </div>
                    <div style="flex: 0 0 60px;margin-left: 5px;" class="flex-column align-items-center justify-content-center">
                      <AddButton :disabled="disabled" title="添加" @submit="addOption"></AddButton>
                    </div>
                  </div>
                </b-form-group>
                <div v-for="option in options" :key="option.uuid" class="iop">
                  <div class="flex-row" style="border-bottom: 1px solid #e8e8e8;padding: 5px 0;">
                    <div style="flex: 0 0 20px;margin-left: 5px;">
                      <b-icon icon="grip-horizontal"/>
                    </div>
                    <div style="flex: 1;">{{option.value}}</div>
                    <div style="flex: 0 0 20px;" class="edit" @click="editOption">
                      <svg t="1619926041971" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33589" width="12" height="12"><path d="M522.24 196.9152L157.4912 571.0848 0 1024l452.9152-147.6608L817.2544 512z m462.7456-29.4912L856.576 39.424a119.3984 119.3984 0 0 0-177.2544 0L571.0848 147.6608l295.424 305.2544 118.0672-118.1696A124.8256 124.8256 0 0 0 1024 245.76a121.5488 121.5488 0 0 0-39.424-78.336z" fill="#2c2c2c" p-id="33590"></path></svg>
                    </div>
                    <div style="flex: 0 0 20px;margin-left: 10px" class="del" @click="delOption(option.uuid, option.value)">
                      <svg t="1619925824323" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24636" width="12" height="12"><path d="M647.168 512L1024 888.832 888.832 1024 512 647.168 135.168 1024 0 888.832 376.832 512 0 135.168 135.168 0 512 376.832 888.832 0 1024 135.168 647.168 512z" p-id="24637" fill="#2c2c2c"></path></svg>
                    </div>
                  </div>
                </div>
              </form>
            </b-modal>
            <Alert ref="alert"></Alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectMangeHeader from '../../common/permission/header';
import Search from "../../common/form/search";
import AddButton from '../../button/common';
import Alert from '../../common/block/alert';
import http from "../../../utils/http";

export default {
  data: function () {
    return {
      uuid: '',
      name: '',
      team: '',
      items: [],
      nameState: null,
      option: '',
      optionState: null,
      disabled: false,
      options: []
    };
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
  },
  mounted() {
    let self = this;
    self.project_list();

  },
  methods: {
    project_list: function() {
      let self = this;
      http.post(this.urls.issue_type_field_list.format(self.team)).then(function (response) {
        self.items = response.data;
      });
    },
    list_team_field_option: function() {
      let self = this;
      http.get(this.urls.issue_type_field_option_list.format(self.team, self.uuid)).then(function (response) {
        self.options = response.data;
      });
    },
    showModal: function (fieldUUID, fieldName) {
      let self = this;
      self.$bvModal.show('modal-edit-field');
      self.options = [];
      self.uuid = fieldUUID;
      self.name = fieldName;
      self.list_team_field_option();
    },
    checkFormValidity() {
      let valid = this.$refs.form.checkValidity()
      return valid
    },
    resetModal() {
      this.option = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return
      }
      this.submit();
      this.$nextTick(() => {
        this.$bvModal.hide('modal-edit-field')
      })
    },
    submit: function () {
      let self = this;
      let data = {
        uuid: self.uuid,
        name: self.name,
        options: self.options
      }
      http.post(self.urls.issue_type_field_update.format(self.team), data).then(function (response) {
        if (response.data.code === 200) {
          self.$refs.alert.success('更新成功');
        }
      }).catch(function (err) {
        self.$refs.alert.danger(err.response.data.errcode);
      });
    },
    addOption: function () {
      let self = this;
      let item = {};
      let canAdd = true;
      if (self.option) {
        for (let i = 0; i < self.options.length; i++) {
          if (self.options[i].value === self.option) {
            canAdd = false;
            break;
          }
        }

        if (canAdd) {
          item.value = self.option;
          item.background_color = "#ff6a39";
          item.color = "#fff";
          self.options.push(item);
          self.option = "";
        }
      }
    },
    editOption: function () {
    },
    delOption: function (uuid, val) {
      let self = this;
      let options = [];
      for (let i = 0; i < self.options.length; i++) {
        if (self.options[i].uuid === uuid && self.options[i].value === val) {
          continue;
        }

        options.push(self.options[i]);
      }

      self.options = options;
    }
  },
  components: {
    Search,
    ProjectMangeHeader,
    AddButton,
    Alert
  }
};
</script>
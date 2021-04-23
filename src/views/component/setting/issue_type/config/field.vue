<template>
  <div style="max-width:1200px;flex: 1 1 auto;min-height: 100%;" class="ibox">
    <div style="flex: 0 0 auto;" class="flex-row b-line align-items-center padding20">
      <div style="flex: 1;" class="flex-row align-items-center">
        <div style="flex: 0 0 auto;display: flex;">
          <router-link :to="{ name: 'TeamIssueTypeSetting', params: { team: team, type: 'list' } }">
            <span style="font-size: 18px;">工作项类型</span>
          </router-link>
        </div>
        <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
        </div>
        <div style="display: flex;">
          <router-link :to="{ name: 'IssueTypeSetting', params: { team: team, issue_type: issue_type, type: 'config', title: title } }">
            <span style="font-size: 18px;">{{ title }}</span>
          </router-link>
        </div>
        <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
        </div>
        <div style="flex: 0 0 auto;display: flex;">
          <span style="font-size: 18px;color: #909090;">工作项属性</span>
        </div>
      </div>
      <div style="flex: 0 0 auto;margin-right: 10px;color: #909090;">
        <b-icon icon="exclamation-diamond"/>
        配置中心下，工作项属性修改，不会同步到已经应用的项目中。
      </div>
    </div>
    <div style="padding: 0 20px 20px 20px;">
      <Search style="margin: 20px 0;" placeholder="搜索工作项属性"/>
      <div id="project-main">
        <div style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;display: flex;">
          <div class="table">
            <div class="table-row-header">
              <div class="th">属性名称</div>
              <div class="th">属性类型</div>
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
              <div class="td">{{ item.type | taskFieldType }}</div>
              <div class="td">
                <div style="font-weight: bolder;text-align: center;width: 30px;" v-if="item.can_modify_required">
                  <b-form-checkbox v-model="item.required" name="check-button" switch @change="toggle(item)"></b-form-checkbox>
                </div>
                <div style="width: 30px;height: 2px;" v-else>
                  <div style="width: 100%;height: 100%;background-color: #e0e0e0;"></div>
                </div>
              </div>
              <div class="td align-items-center" style="display: flex;flex: 0 0 80px;">
                <div style="font-weight: bolder;text-align: center;width: 30px;" v-if="item.can_delete">
                  <b-icon icon="x" scale="2"></b-icon>
                </div>
                <div style="width: 30px;height: 2px;" v-else>
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
import http from "../../../../../utils/http";
import Search from "../../../common/form/search";

export default {
  data: function () {
    return {
      title: '',
      name: '',
      team: '',
      project: '',
      issue_type: '',
      fields: [],
      fieldTemplates: []
    };
  },
  created: function () {
    let self = this;
    self.title = self.$route.params.title;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$route.params.issue_type;
    self.project_issue_type_field();
    self.team_field_lst();
  },
  methods: {
    project_issue_type_field: function() {
      let self = this;
      http.get(self.urls.issue_type_template_get.format(self.team, self.issue_type)).then(function (response) {
        self.title = response.data.name;
        self.fieldTemplates = response.data.default_configs.default_field_configs;
      });
    },
    team_field_lst: function() {
      let self = this;
      http.post(this.urls.issue_type_field_list.format(self.team)).then(function (response) {
        self.fields = response.data;
      });
    }
  },
  computed: {
    items: function () {
      let self = this;
      let result = [];
      if (self.fieldTemplates.length > 0 && self.fields.length > 0) {
        for(let i=0;i<self.fieldTemplates.length;i++) {
          let target = {};
          for(let j=0;j<self.fields.length;j++) {
            if(self.fieldTemplates[i].field_uuid === self.fields[j].uuid) {
              Object.assign(target, self.fieldTemplates[i]);
              Object.assign(target, self.fields[j]);
              break;
            }
          }
          result.push(target);
        }
      }

      return result;
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped>
</style>
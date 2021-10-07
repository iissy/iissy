<template>
  <div style="margin: 20px;">
    <div class="flex-row b-line" style="padding: 0 20px 5px 0;margin: 0;">
      <div style="flex: 1;font-size: 18px;">常用仪表盘</div>
    </div>
    <div style="flex: 1;flex-direction: row;position: relative;" class="flex-row">
      <Dashboard name="我的仪表盘"/>
      <Dashboard name="项目仪表盘"/>
    </div>

    <div style="margin: 20px 0 0 0;">
      <div class="flex-row b-line" style="padding: 0 20px 5px 0;">
        <div style="flex: 1;font-size: 18px;">项目 / 最近更新</div>
        <div class="flex-row wb-setting shadow-none" @click="projectShow" v-b-modal.modal-wb-setting>
          <div style="flex: 0 0 auto;color: inherit;" class="flex-row align-items-center">
            <b-icon scale="1.2" icon="gear"></b-icon>
          </div>
          <div style="margin-left: 5px;font-size: 15px;color: inherit;" class="flex-row align-items-center">
            显示设置
          </div>
        </div>
      </div>
      <div style="flex: 1;flex-direction: row;position: relative;" class="flex-row flex-wrap">
        <Project v-for="p in projects" :project="p" :key="p.uuid"/>
      </div>
    </div>

    <div v-if="loaded" style="margin: 20px 0 0 0;">
      <div class="flex-row b-line" style="padding: 0 20px 5px 0;">
        <div style="flex: 1;font-size: 18px;">文档 / 最近更新</div>
        <div class="flex-row wb-setting shadow-none" @click="spaceShow" v-b-modal.modal-wb-setting>
          <div style="flex: 0 0 auto;color: inherit;" class="flex-row align-items-center">
            <b-icon scale="1.2" icon="gear"></b-icon>
          </div>
          <div style="margin-left: 5px;font-size: 15px;color: inherit;" class="flex-row align-items-center">
            显示设置
          </div>
        </div>
      </div>
      <div style="flex: 1;flex-direction: row;position: relative;" class="flex-row flex-wrap">
        <Space v-for="space in spaces" :key="space.uuid" :space="space"/>
      </div>
    </div>
    <b-modal size="sm" hide-header id="modal-wb-setting" no-close-on-backdrop cancel-title="取消" ok-title="确定" :centered="true" @ok="add">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div style="margin-top: 6px;">
          <b-form-group
              class="required"
              label="最多显示个数"
              label-for="input-setting">
            <b-form-input id="input-setting" v-model="size" required/>
          </b-form-group>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Dashboard from '../../components/workbench/dashboard_item';
import Project from '../../components/workbench/project';
import Space from '../../components/wiki/module/space';
import http from "../../utils/http";

export default {
  data() {
    return {
      projects: [],
      spaces: [],
      loaded: false,
      project_size: '10',
      space_size: '10',
      size: '10',
      setting_key: ''
    }
  },
  created () {
    let self = this;
    self.team = self.$route.params.team;
    self.globalSetting();
  },
  methods: {
    globalSetting: function () {
      let self = this;
      let url = self.urls.team_global_setting.format(self.team);
      let data = ['workbench_project_size', 'workbench_space_size'];
      http.post(url, data).then(function (response) {
        if (response.data) {
          Object.keys(response.data).forEach(function(key){
            switch (key) {
              case 'workbench_project_size':
                self.project_size = response.data[key].setting_value;
                break;
              case 'workbench_space_size':
                self.space_size = response.data[key].setting_value;
                break;
            }
          });
        }
        self.project_list();
      });
    },
    project_list: function() {
      let self = this;
      let data = { size: self.project_size };
      let url = self.urls.team_recent_projects.format(self.team);
      http.post(url, data).then(function (response) {
        self.projects = response.data;
        self.space_list();
      });
    },
    space_list: function () {
      let self = this;
      let data = { size: self.space_size };
      let url = self.urls.team_recent_spaces.format(self.team);
      http.post(url, data).then(function (response) {
        self.spaces = response.data.spaces;
        self.loaded = true;
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      return valid;
    },
    projectShow: function () {
      let self = this;
      self.size = self.project_size;
      self.setting_key = 'workbench_project_size';
    },
    spaceShow: function () {
      let self = this;
      self.size = self.space_size;
      self.setting_key = 'workbench_space_size';
    },
    add(bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return
      }
      this.submit();
      this.$nextTick(() => {
        this.$bvModal.hide('modal-wb-setting')
      })
    },
    submit: function () {
      let self = this;
      self.team = self.$route.params.team;
      let data = { setting_key: self.setting_key, setting_value: self.size }
      http.post(self.urls.team_global_setting_update.format(self.team), data).then(function (response) {
        if(response.data.code === 200) {
          self.globalSetting();
        }
      }).catch(function (err) {
        self.bus.$emit('alertDanger', err.response.data.errcode);
      });
    }
  },
  components: {
    Dashboard,
    Project,
    Space
  }
}
</script>

<style scoped>
.wb-setting { cursor: pointer; }
.wb-setting:hover { color: #17C4BB; }
</style>
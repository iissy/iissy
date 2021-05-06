<template>
  <div class="app-main-content ibox">
    <div style="font-size: 18px;margin-bottom: 20px;" class="b-line padding20">项目信息</div>
    <div style="padding: 0 10px;">
      <div>
        <div style="margin-bottom: 20px;" class="flex-row">
          <div style="flex: 0 0 120px;">
            <label>创建者</label>
          </div>
          <div style="flex: 0 0 300px;">
            <Creator :user="creator"/>
          </div>
        </div>
        <div style="margin-bottom: 20px;" class="flex-row">
          <div style="flex: 0 0 120px;">
            <label>创建时间</label>
          </div>
          <div style="flex: 0 0 300px;">
            2019-01-01 12:12:12
          </div>
        </div>
        <div style="margin-bottom: 20px;" class="flex-row">
          <div style="flex: 0 0 120px;">
            <label>项目名称</label>
          </div>
          <div style="flex: 0 0 300px;">
            <b-form-input @change="name_change" @keydown="name_change" v-model="name"></b-form-input>
          </div>
        </div>
        <div style="margin-bottom: 20px;" class="flex-row">
          <div style="flex: 0 0 120px;">
            <label></label>
          </div>
          <div style="flex: 0 0 300px;">
            <AddProjectButton :disabled="disabled" title="更新信息" @submit="update"></AddProjectButton>
          </div>
        </div>
      </div>
    </div>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import Creator from '../task/creator';
import AddProjectButton from '../button/common';
import Alert from '../common/block/alert';
import http from "../../utils/http";

export default {
  data() {
    return {
      team: '',
      project: '',
      name: '',
      disabled: true,
      creator: { uuid: 'pinbor', name: 'jimmy', email: 'pinbor@iissy.com' }
    }
  },
  mounted() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.project_get();
  },
  methods: {
    name_change: function () {
      let self = this;
      self.disabled = false;
    },
    update: function () {
      let self = this;
      http.post(self.urls.project_update.format(self.team, self.project), {name: self.name, uuid: self.project}).then(function (response) {
        if (response.data.status === true) {
          self.$refs.alert.success('更新成功');
          self.bus.$emit('updateProjectInfo', self.project)
          self.disabled = true;
        } else {
          self.$refs.alert.danger('更新失败');
        }
      });
    },
    project_get: function () {
      let self = this;
      http.get(self.urls.project_get.format(self.team, self.project)).then(function (response) {
        self.name = response.data.name;
      });
    }
  },
  components: {
    Creator,
    AddProjectButton,
    Alert
  }
}
</script>
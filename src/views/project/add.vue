<template>
  <div class="app-main-center ibox flex-column">
    <div style="flex: 1;" class="flex-column">
      <div style="flex: 0 0 auto;padding: 20px;font-size: 18px;">
        新建项目
      </div>
      <div class="form-horizontal mg0 t-line" style="flex: 1;padding: 20px;">
        <div style="">
          <label class="col-md-8">项目名字<span style="color: #ff0000;">*</span></label>
        </div>
        <div>
          <div class="col-md-8">
            <input type="text" v-model.trim="name" name="name" class="form-control" placeholder="项目名字">
          </div>
        </div>
      </div>
      <div style="flex: 0 0 auto;text-align: right;" class="t-line padding20">
        <AddProjectButton title="确定提交" @submit="add" :disabled="disabled"></AddProjectButton>
      </div>
    </div>
  </div>
</template>

<script>
import AddProjectButton from '../../components/button/common';
import http from "../../utils/http";
import router from '../../router';

export default {
  data: function () {
    return {
      name: '',
      team: '',
      disabled: false
    };
  },
  components: {
    AddProjectButton
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
  },
  watch: {
  },
  methods: {
    add: function () {
      let self = this;
      if (self.name) {
        self.disabled = true;
        http.post(self.urls.project_add.format(self.team), { project: {"name":self.name}, "template_id":"project-t1" }).then(function (response) {
          if (response.data.code === 200) {
            router.push({ name: 'Projects', params: { team: self.team } });
          } else {
            self.disabled = false;
          }
        });
      }
    }
  }
};
</script>
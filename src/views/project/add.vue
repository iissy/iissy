<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <Header title="项目配置中心"></Header>
        <div class="app-main-container">
          <div class="app-main-center">
            <div style="display: flex;flex-direction: column;height: 100%;">
              <div style="flex: 0 0 auto;padding: 20px;">
                新建项目
              </div>
              <div class="form-horizontal mg0" style="flex: 1;border-top: 1px solid #e8e8e8;padding: 20px;">
                <div style="">
                  <label class="col-md-8">项目名字<span style="color: #ff0000;">*</span></label>
                </div>
                <div>
                  <div class="col-md-8">
                    <input type="text" v-model="name" name="name" class="form-control" placeholder="项目名字">
                  </div>
                </div>
              </div>
              <div style="flex: 0 0 auto;padding: 20px;border-top: 1px solid #e8e8e8;background-color: #f8f8f8;text-align: right;">
                <AddProjectButton title="确定提交" @submit="add"></AddProjectButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/header';
import Menu from '../component/menu';
import AddProjectButton from '../component/button/common';
import http from "@/util/http";
import router from '../../router';

export default {
  data: function () {
    return {
      name: ''
    };
  },
  components: {
    Header,
    Menu,
    AddProjectButton
  },
  created: function () {
    // let self = this;
  },
  watch: {
  },
  methods: {
    add: function () {
      let self = this;
      http.post('/api/team/Sxv5vAgD/add/project', {
        name: self.name
      }).then(function (response) {
        if (response.data.status == true) {
          router.push({ name: 'Project' });
        } else {
          alert(response.data.msg)
        }
      });
    }
  }
};
</script>
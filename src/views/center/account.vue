<template>
  <div>
    <div class="app-row">
      <Menu></Menu>
      <div class="rightMain">
        <Header title="个人中心"></Header>
        <div class="app-main-container">
          <div class="app-main-no-border">
            <div style="display: flex;flex-direction: row;height: 100%;">
              <personal tagIndex="1"></personal>
              <div class="form-horizontal mg0" style="background-color: #ffffff;flex: 1 1 auto;padding: 20px;height: 100%;box-shadow: 0 4px 6px 0 rgba(31,31,31,0.05), 0 0 2px 0 rgba(31,31,31,0.2);">
                <div class="form-body" style="padding:20px;">
                  <div class="form-group">
                    <label class="col-md-1 control-label">头像</label>
                    <div class="col-md-2">
                      <div>
                        <div class="avatar-upload">
                          <img src="/favicon.ico" style="max-height: 100px;">
                          <input type="file">
                        </div>
                        <input type="hidden" v-model="avatar" name="avatar" class="form-control" placeholder="头像">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-1 control-label">名字</label>
                    <div class="col-md-3">
                      <input type="text" v-model="name" name="name" class="form-control" placeholder="名字">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-1 control-label">邮箱</label>
                    <div class="col-md-3">
                      <input type="text" v-model="email" name="email" class="form-control" placeholder="邮箱">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-1 control-label">电话</label>
                    <div class="col-md-3">
                      <input type="text" v-model="phone" name="phone" class="form-control" placeholder="电话">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-1 control-label"></label>
                    <div class="col-md-3">
                      <button style="color:#ffffff;padding:5px 0 5px 0;background-color: #36c6d3;font-size:16px;width: 100%;border: 1px solid #2bb8c4;" v-on:click="add">添  加</button>
                    </div>
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
import Header from '../../components/header';
import Menu from '../../components/menu';
import Personal from '../../components/personal';

export default {
  data: function () {
    return {
      avatar: '',
      name: '',
      email: '',
      phone: ''
    };
  },
  components: {
    Header,
    Menu,
    Personal
  },
  created: function () {
  },
  methods: {
    add: function () {
    }
  }
};
</script>

<style scoped>
.form-horizontal .control-label { text-align: left; }
.avatar-upload {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%!important;
}
.avatar-upload input {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  -ms-filter: 'alpha(opacity=0)';
  height: 100%;
  width: 100%;
}
.avatar-upload img {
  height: 100%;
}

</style>
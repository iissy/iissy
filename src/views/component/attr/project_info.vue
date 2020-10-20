<template>
  <div class="app-main-content">
    <div style="font-size: 18px;margin-bottom: 20px;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;">项目信息</div>
    <div style="padding: 0 10px;">
      <b-container fluid>
        <b-row style="margin-bottom: 20px;">
          <b-col sm="1">
            <label>创建者</label>
          </b-col>
          <b-col sm="4">
            <Creator :user="creator"/>
          </b-col>
        </b-row>
        <b-row style="margin-bottom: 20px;">
          <b-col sm="1">
            <label>创建时间</label>
          </b-col>
          <b-col sm="4">
            2019-01-01 12:12:12
          </b-col>
        </b-row>
        <b-row style="margin-bottom: 20px;">
          <b-col sm="1">
            <label>项目名称</label>
          </b-col>
          <b-col sm="4">
            <b-form-input @change="name_change" @keydown="name_change" v-model="name"></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom: 20px;">
          <b-col sm="1">
            <label></label>
          </b-col>
          <b-col sm="4">
            <AddProjectButton :disabled="disabled" title="更新信息" @submit="update"></AddProjectButton>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import Creator from '@/views/component/task/creator';
import AddProjectButton from '@/views/component/button/common';
import Alert from '@/views/component/common/block/alert';

export default {
  data() {
    return {
      name: '',
      disabled: true,
      creator: { uuid: 'pinbor', name: 'jimmy', email: 'pinbor@iissy.com' }
    }
  },
  methods: {
    name_change: function () {
      let self = this;
      self.disabled = false;
    },
    update: function () {
      let self = this;
      self.$refs.alert.success();
    }
  },
  components: {
    Creator,
    AddProjectButton,
    Alert
  }
}
</script>

<style scoped>

</style>
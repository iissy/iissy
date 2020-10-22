<template>
  <div style="margin-top: 20px;">
    <div style="font-size: 16px;">{{ title }}</div>
    <div style="color: #909090;">{{ desc }}</div>
    <div class="table" style="margin-top: 10px;">
      <div class="table-row-header">
        <div class="th">以下成员域拥有此操作权限</div>
      </div>
      <div class="table-row">
        <div class="td">项目管理员</div>
        <div class="td" style="flex: 0 0 60px;">
          <b-icon icon="x" scale="1.5"></b-icon>
        </div>
      </div>
      <div class="table-row">
        <div class="td" style="flex: 0 0 300px;">
          <b-form-select v-model="read_project_perm" :options="options" @change="read_project_selected"></b-form-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      read_project_perm: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    };
  },
  props: {
    title: String,
    desc: String
  },
  methods: {
    read_project_selected: function () {
      let self = this;
      console.log(self.read_project_perm);
    }
  }
};
</script>

<style scoped>
</style>
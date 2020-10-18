<template>
  <div style="margin-top: 30px;">
    <div style="font-size: 16px;">{{ title }}</div>
    <div style="color: #909090;">{{ desc }}</div>
    <div class="table">
      <div class="table-row-header">
        <div class="th">以下成员域拥有此操作权限</div>
      </div>
      <div class="table-row">
        <div class="td">项目管理员</div>
        <div class="td last">
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
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table .th { padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .last { width: 60px;flex: 0 0 auto; }
</style>
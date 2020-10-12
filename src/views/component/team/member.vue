<template>
  <div class="teamDepartmentTree">
    <div class="left-team-tree">
      <div style="font-size: 18px;margin-bottom: 20px;">组织架构</div>
      <div style="line-height: 30px;">{{departmentTree.name}}</div>
      <div style="margin-left: 20px;" v-for="c in departmentTree.children" v-bind:key="c.id">
        <div style="line-height: 30px;">{{c.name}}</div>
      </div>
    </div>
    <div class="right-member-list">
      <div style="flex: 0 0 auto;">
        <div style="font-size: 18px;margin-bottom: 20px;">成员列表</div>
      </div>
      <div style="flex: 0 0 auto;margin-bottom: 20px;" class="flex-row">
        <div style="flex: 0 0 auto;">
          <Search placeholder="项目属性" />
        </div>
        <div style="flex: 1;text-align: right;">
          <b-button variant="success">邀请新成员</b-button>
        </div>
      </div>
      <div class="member-left">
        <div class="memberList">
          <div class="ui-table">
            <b-table style="width: 800px;" :fields="fields" :items="items" striped>
              <template v-slot:cell(name)="data">
                <div class="flex-row" style="width: 150px;">
                  <div style="flex: 0 0 auto;display: flex;align-items: center;">
                    <b-img left src="https://picsum.photos/25/25/?image=25" rounded="circle" alt="Left image"></b-img>
                  </div>
                  <div style="flex: 0 0 auto;display: flex;align-items: center; margin-left: 5px;">
                    <b-link href="#foo">{{ data.value }}</b-link>
                  </div>
                </div>
              </template>
              <template v-slot:cell(create_time)="data">
                <div>{{ data.value | formatDate }}</div>
              </template>
              <template v-slot:cell(access_time)="data">
                <div>{{ data.value | formatDate }}</div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/util/date';
import http from '@/util/http';
import Search from '../common/form/search';

export default {
  data: function () {
    return {
      departmentTree: {},
      fields: [
        { key: 'name', label: '姓名', formatter: '项目名称' },
        { key: 'uuid', label: 'UUID', formatter: '项目状态' },
        { key: 'union_id', label: 'UnionId', formatter: '项目负责人' },
        { key: 'open_id', label: 'OpenId', formatter: '工作项目完成度' },
        { key: 'app_id', label: 'AppId', formatter: '计划开始时间' },
        { key: 'create_time', label: '创建时间', formatter: '计划完成时间' },
        { key: 'access_time', label: '最后访问时间', formatter: '工作项数量' }
      ],
      items: []
    };
  },
  components: {
    Search
  },
  created: function () {
    let self = this;
    let url = '/api/ding/get_department_list';
    http.get(url).then(function (response) {
      self.departmentTree = response.data;
    });

    self.member_list();
  },
  filters: {
    formatDate(time) {
      return formatDate(time);
    }
  },
  methods: {
    member_list: function() {
      let self = this;
      let url = '/api/ding/get_user_list';
      http.get(url).then(function (response) {
        self.items = response.data;
      });
    }
  }
};
</script>

<style scoped>

</style>
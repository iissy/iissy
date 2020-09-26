<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="81"></Menu>
      <div class="rightMain">
        <div class="layout-container-column">
          <Header title="团队配置中心"></Header>
          <div class="app-main-container">
            <div class="teamDepartmentTree">
              <div class="left-team-tree">
                <div>{{departmentTree.name}}</div>
                <div style="margin-left: 20px;" v-for="c in departmentTree.children" v-bind:key="c.id">
                  <div>{{c.name}}</div>
                </div>
              </div>
              <div class="right-member-list">
                <div class="member-left">
                  <div class="memberList">
                    <div class="ui-table">
                      <div class="ui-table-header ui-table-row">
                        <div class="memberList-field-name">姓名</div>
                        <div class="memberList-field">UUID</div>
                        <div class="memberList-field">UnionID</div>
                        <div class="memberList-field">OpenID</div>
                        <div class="memberList-field">AppID</div>
                        <div class="memberList-field">创建时间</div>
                        <div class="memberList-field">最近访问</div>
                      </div>
                      <div class="ui-table-body">
                        <div v-for="u in users" v-bind:key="u.uuid">
                          <div class="ui-table-row">
                            <div class="memberList-field-name">{{u.name}}</div>
                            <div class="memberList-field">{{u.uuid}}</div>
                            <div class="memberList-field">{{u.union_id}}</div>
                            <div class="memberList-field">{{u.open_id}}</div>
                            <div class="memberList-field">{{u.app_id}}</div>
                            <div class="memberList-field">{{u.create_time | formatDate}}</div>
                            <div class="memberList-field">{{u.access_time | formatDate}}</div>
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
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import http from '../../util/http';
import { formatDate } from '../../util/date.js';

export default {
  data: function () {
    return {
      departmentTree: {},
      users: []
    };
  },
  components: {
    Header,
    Menu
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
        self.users = response.data;
      });
    }
  }
};
</script>
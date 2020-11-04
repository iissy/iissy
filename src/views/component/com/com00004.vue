<template>
  <div class="app-main-content flex-column">
    <div style="flex: 0 0 auto;font-size: 18px;border-bottom: 1px solid #e8e8e8;padding: 20px 0 10px 20px;">成员</div>
    <div class="flex-row align-items-center" style="flex: 0 0 auto;margin: 10px 20px;">
      <div style="flex: 0 0 300px;">
        <Search placeholder="搜索成员" />
      </div>
      <div style="flex: 1;text-align: right;display: flex;">
        <AddMember :curMember="items"></AddMember>
      </div>
    </div>
    <div class="flex-row members" style="flex:1;border-top: 1px solid #e8e8e8;">
      <div style="flex: 0 0 200px;border-right: 1px solid #e8e8e8;">
        <div class="role active">
          项目成员
        </div>
      </div>
      <div style="flex: 1;margin: -1px -1px 0 -1px;">
        <div class="table">
          <div class="table-row-header">
            <div class="th">用户名</div>
            <div class="th">邮箱</div>
            <div class="th">角色</div>
            <div class="th" style="flex: 0 0 80px;">操作</div>
          </div>
          <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
            <div class="td">
              <User :user="item"/>
            </div>
            <div class="td">{{ item.email }}</div>
            <div class="td">无</div>
            <div class="td" style="flex: 0 0 80px;">
              <b-icon icon="x" scale="1.8"></b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/scripts/http';
import Search from '@/views/component/common/form/search';
import AddMember from '@/views/component/common/block/add_member';
import User from '@/views/component/common/block/user';

export default {
  data: function () {
    return {
      team: '',
      project: '',
      items: []
    };
  },
  components: {
    Search,
    AddMember,
    User
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.get_role_members();
  },
  methods: {
    get_role_members: function() {
      let self = this;
      http.post(self.urls.project_role_members.format(self.team, self.project)).then(function (response) {
        self.items = response.data;
      });
    }
  }
};
</script>

<style scoped>
.members .role { border-bottom: 1px solid #e8e8e8;line-height: 48px;padding-left: 20px; }
.members .active { border-left: 3px solid #17C4BB;padding-left: 17px; }
</style>
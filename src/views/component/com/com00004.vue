<template>
  <div class="app-main-content ibox flex-column">
    <div style="flex: 0 0 auto;font-size: 18px;padding: 20px 0 10px 20px;" class="b-line">成员</div>
    <div class="flex-row align-items-center" style="flex: 0 0 auto;margin: 10px 20px;">
      <div style="flex: 0 0 300px;">
        <Search placeholder="搜索成员" />
      </div>
      <div style="flex: 1;text-align: right;display: flex;">
        <AddMember :role="selectedRole" :curMember="items"></AddMember>
      </div>
    </div>
    <div class="flex-row members" style="flex:1;border-top: 1px solid #e8e8e8;">
      <div style="flex: 0 0 200px;border-right: 1px solid #e8e8e8;">
        <div v-for="r in roles" :key="r.uuid" class="role active" :class="{active: r.uuid === selectedRole}">
          {{ r.name }}
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
import http from '../../../scripts/http';
import Search from '../common/form/search';
import AddMember from '../common/block/add_member';
import User from '../common/block/user';

export default {
  data: function () {
    return {
      team: '',
      project: '',
      items: [],
      roles: [],
      selectedRole: ''
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
      self.roles = [];
      http.post(self.urls.project_role_members.format(self.team, self.project)).then(function (response) {
        self.items = response.data;
        let roleUUIDs = []
        for (let i=0;i<self.items.length;i++) {
          let included = false;
          let item = self.items[i];
          for (let x=0;x<roleUUIDs.length;x++) {
            if (roleUUIDs[x] === item.role_uuid) {
              included = true;
              break;
            }
          }
          if (!included) {
            let obj = { uuid: item.role_uuid, name: item.role_name };
            self.roles.push(obj);
          }
          roleUUIDs.push(item.role_uuid);
        }
        if (self.roles.length > 0) {
          self.selectedRole = self.roles[0].uuid;
        }
      });
    }
  }
};
</script>

<style scoped>
.members .role { border-bottom: 1px solid #e8e8e8;line-height: 48px;padding-left: 20px; }
.members .active { border-left: 3px solid #17C4BB;padding-left: 17px; }
</style>
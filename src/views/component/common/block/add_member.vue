<template>
  <div style="flex: 1;text-align: right;">
    <AddProjectButton title="添加成员" v-b-modal.modal-add-member></AddProjectButton>
    <b-modal size="lg" id="modal-add-member" ref="addMember" title="邀请新用户" :no-close-on-backdrop="true" cancel-title="取消" ok-title="确定" :centered="true" @ok="addMember">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div style="flex: 1;height: 100%;" class="flex-row align-items-center">
          <div style="flex: 1;display: flex;">
            选择成员加入到角色： 项目成员
          </div>
          <div style="flex: 0 0 300px;">
            <Search placeholder="输入用户名，邮箱"/>
          </div>
        </div>
      </form>
      <div class="table" style="margin-top: 20px;">
        <div class="table-row-header">
          <div style="flex: 0 0 30px;margin-left: 10px;" class="flex-row align-items-center justify-content-center">
            <input type="checkbox" style="width: 18px;height: 18px;">
          </div>
          <div class="th">用户名</div>
          <div class="th">邮箱</div>
          <div class="th">所属部门</div>
          <div class="th">用户组</div>
        </div>
        <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
          <div style="flex: 0 0 30px;margin-left: 10px;" class="flex-row align-items-center justify-content-center">
            <input v-if="exist(item.uuid)" type="checkbox" style="width: 18px;height: 18px;" disabled checked>
            <input v-else type="checkbox" v-model="item.sel" style="width: 18px;height: 18px;">
          </div>
          <div class="td">
            <User :user="item"/>
          </div>
          <div class="td">{{ item.email }}</div>
          <div class="td">无</div>
          <div class="td">
            无
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import AddProjectButton from '../../button/common';
import http from "@/scripts/http";
import Search from "@/views/component/common/form/search";
import User from '@/views/component/common/block/user';

export default {
  data: function () {
    return {
      team: '',
      project: '',
      name: '',
      items: [],
      members: []
    };
  },
  props: {
    curMember: Array,
    role: String
  },
  components: {
    AddProjectButton,
    Search,
    User
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.get_team_members();
  },
  methods: {
    addMember(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      this.add_member();
      this.$nextTick(() => {
        this.$bvModal.hide('modal-add-member')
      })
    },
    get_team_members: function() {
      let self = this;
      http.get(self.urls.team_member_list.format(self.team)).then(function (response) {
        self.items = response.data;
        if(self.items) {
          for(let i = 0;i < self.items.length;i++) {
            self.items[i].sel = false;
          }
        }
      });
    },
    add_member: function () {
      let self = this;
      if(self.items) {
        for(let i = 0;i < self.items.length;i++) {
          let item = self.items[i];
          if(item.sel) {
            self.members.push(item.uuid)
          }
        }
      }

      let data = { members: self.members, role_uuid: self.role }
      http.post(self.urls.project_member_add.format(self.team, self.project), data).then(function (response) {
        if(response.data.status) {
          self.$parent.get_role_members();
        }
      });
    },
    exist: function (uuid) {
      let self = this;
      if(self.curMember) {
        for(let i=0;i<self.curMember.length;i++) {
          if(self.curMember[i].uuid === uuid) {
            return true;
          }
        }
      }

      return false;
    }
  },
  computed: {
  }
};
</script>

<style scoped>

</style>
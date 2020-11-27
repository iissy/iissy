<template>
  <div style="flex: 1;height: 100%;">
    <div style="display: flex;flex-direction: row;align-items: center;border-bottom: 1px solid #e8e8e8;padding-bottom: 10px;">
      <div style="font-size: 18px;flex: 0 0 auto;">项目管理</div>
      <div style="margin-left: 10px;flex: 0 0 auto;">
        <div style="flex:0 0 auto;display: flex;">
          <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
        </div>
      </div>
      <div style="margin-left: 10px;flex: 0 0 auto;font-size: 18px;">{{ ProjectName }}</div>
    </div>
    <PermissionItem :group="maps.read"/>
    <PermissionItem :group="maps.write"/>
  </div>
</template>

<script>
import http from "@/scripts/http";
import PermissionItem from '@/views/component/common/block/permission_item';

export default {
  data: function () {
    return {
      dropdownActive: false,
      team: '',
      project: '',
      ProjectName: '',
      maps: {
        read: { code: 1102, title: '查看项目', desc: '允许成员浏览当前项目，包括工作项，筛选器，报表等信息', label: 'browse_project', exist: [], roles:
              {uuid: 'role', title: '角色', groups: [{uuid: 's3', type: 3, name: '所有成员', desc: '当前团队所有成员'}, {uuid: 's16', type: 16, name: '项目负责人'}]},
            members: {uuid: 'member', title: '成员', groups:[{uuid: 'rrrrrrrr', name: '刘德华', email: 'zhangzhangzhang@iissy.com'}, {uuid: 'cccccccc', name: '何敏', email: 'tom@iissy.com'}], isMember: true}
        },
        write: { code: 1101, title: '查看项目', desc: '允许成员浏览当前项目，包括工作项，筛选器，报表等信息', label: 'browse_project', exist: [], roles:
              {uuid: 'role', title: '角色', groups: [{uuid: 's3', type: 3, name: '所有成员', desc: '当前团队所有成员'}, {uuid: 's16', type: 16, name: '项目负责人'}]},
          members: {uuid: 'member', title: '成员', groups:[{uuid: 'rrrrrrrr', name: '刘德华', email: 'zhangzhangzhang@iissy.com'}, {uuid: 'cccccccc', name: '何敏', email: 'tom@iissy.com'}], isMember: true}
        }
      }
    };
  },
  mounted() {

  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = this.$route.params.project;
    self.GetProjectName();
    self.GetUserDomainGroups();
  },
  methods: {
    GetProjectName: function() {
      let self = this;
      self.ProjectName = self.$route.params.title
      if (!self.ProjectName) {
        http.get(self.urls.project_get.format(self.team, self.project)).then(function (response) {
          self.ProjectName = response.data.name;
        });
      }
    },
    GetUserDomainGroups: function () {
      let self = this;
      let data = []
      for(let key in self.maps) {
        data.push(self.maps[key].code);
      }
      http.post(self.urls.project_user_domain_group.format(self.team, self.project), data).then(function (response) {
        if(response.data && response.data.length > 0) {
          for (let i=0;i<response.data.length;i++) {
            let rule = response.data[i];
            for(let key in self.maps) {
              let item = self.maps[key];
              if (rule.permission === item.code) {
                let types = [];
                for (let m=0;m<rule.groups.length;m++) {
                  let domain = rule.groups[m];
                  types.push(domain.type);
                  for(let n=0;n<domain.params.length;n++) {
                    let param = domain.params[n];
                    let o = { uuid: param.uuid, param: param.param, type: domain.type, read_only: param.read_only };
                    item.exist.push(o)
                  }

                  let groups = []
                  for (let x=0;x<item.roles.groups.length;x++) {
                    let g = item.roles.groups[x];
                    let include = false;
                    for (let y=0;y<types.length;y++) {
                      if (g.type === types[y]) {
                        include = true;
                        break;
                      }
                    }
                    if (!include) {
                      groups.push(g);
                    }
                  }
                  item.roles.groups = groups;

                  item.items = [];
                  item.items.push(item.roles);
                  item.items.push(item.members);
                }
              }
            }
          }
        }
      });
    }
  },
  components: {
    PermissionItem
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
<template>
  <div style="max-width:1200px;flex: 1 1 auto;padding: 20px;height: 100%;" class="g-container">
    <div style="padding-bottom: 10px;" class="flex-row align-items-center">
      <div style="flex: 0 0 auto;display: flex;">
        <router-link :to="{ name: 'TeamIssueTypeSetting', params: { team: team, type: 'list' } }">
          <span style="font-size: 18px;">工作项类型</span>
        </router-link>
      </div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="display: flex;">
        <router-link :to="{ name: 'IssueTypeSetting', params: { team: team, issue_type: issue_type, type: 'config', title: title } }">
          <span style="font-size: 18px;">{{ title }}</span>
        </router-link>
      </div>
      <div style="flex: 0 0 auto;margin: 0 10px;display: flex;">
        <svg t="1600623000490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7272" width="10" height="10"><path d="M810.217293 510.20351q0-10.778943-10.778943-21.557886L321.571884 10.779158a34.449501 34.449501 0 0 0-25.150866-10.778942q-10.778943 0-21.557886 10.778942L224.561399 61.080892a34.449501 34.449501 0 0 0-10.778943 25.150866q0 10.778943 10.778943 21.557886l402.413866 402.413866L224.561399 916.210356q-10.778943 10.778943-10.778943 21.557886a34.449501 34.449501 0 0 0 10.778943 25.150866l50.301733 50.301734q10.778943 10.778943 21.557886 10.778942a34.449501 34.449501 0 0 0 25.150866-10.778942l477.866466-477.866466a34.449501 34.449501 0 0 0 10.778943-25.150866z" p-id="7273" fill="#8a8a8a"></path></svg>
      </div>
      <div style="flex: 0 0 auto;display: flex;">
        <span style="font-size: 18px;color: #909090;">工作项权限</span>
      </div>
    </div>
    <Summary :desc="desc"/>
    <PermissionItem title="查看项目" desc="允许成员浏览当前项目，包括工作项，迭代，筛选器等信息"/>
  </div>
</template>

<script>
import Summary from '@/views/component/common/block/summary';
import PermissionItem from '@/views/component/common/block/permission_item';
import http from "@/scripts/http";

export default {
  data() {
    return {
      title: '',
      desc: '项目权限可以用于定制项目的操作权限控制。'
    }
  },
  created: function () {
    let self = this;
    self.title = self.$route.params.title;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$route.params.issue_type;
    // self.project_issue_type_field();
    self.issue_type_get();
  },
  methods: {
    issue_type_get: function() {
      let self = this;
      if (!self.title) {
        http.get(this.urls.issue_type_get.format(self.team, self.issue_type)).then(function (response) {
          self.title = response.data.name;
        });
      }
    }
  },
  components: {
    Summary,
    PermissionItem
  }
}
</script>

<style scoped>

</style>
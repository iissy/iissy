<template>
  <div class="app-main-content ibox">
    <PermissionHeader title="工作项类型" desc="工作项类型用于在同一个项目下使用不同类型的工作项，不同的工作项类型可以定义不同的属性字段、权限和工作流等。项目下的工作项类型配置的修改不会同步到配置中心下的工作项类型中。"/>
    <div style="margin: 15px 20px;">
      <Search placeholder="搜索工作项类型" />
    </div>
    <div style="margin: 0 20px;">
      <div class="table">
        <div class="table-row-header">
          <div class="th">以下为当前项目使用的工作项类型</div>
          <div class="th op">操作</div>
        </div>
        <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
          <div style="flex: 1;" class="td flex-row align-items-center">
            <IBIcon :icon="item.icon.toString()" scale="2"/>
            <div class="flex-column" style="margin-left: 20px;">
              <div>{{ item.name }}</div>
              <div style="color: #999999;">{{ item.field_count }} 工作项属性<span style="margin: 0 10px;color: #999999;"> | </span>{{ item.status_count }} 工作项状态</div>
            </div>
          </div>
          <div style="flex: 1;align-items: center;justify-content: flex-end;" class="td last flex-row">
            <div class="flex-row task-attr align-items-center" style="margin-right: 20px;">
              <div style="flex: 0 0 auto;">
                <svg t="1602939503677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59063" width="16" height="16"><path d="M510.81 959L31.93 754.63C12.77 741.86 0 722.7 12.77 703.55 19.15 684.4 44.7 678 63.85 684.4l453.34 191.54L970.52 684.4c19.16-6.39 44.7 0 51.09 19.15s0 44.7-19.16 51.08z m0 0" p-id="59064" fill="#515151"></path><path d="M510.81 729.09L31.93 524.77C12.77 518.38 0 492.84 12.77 473.69c6.38-19.16 25.54-25.54 44.69-19.16l453.35 191.56 453.33-191.56c19.16-6.38 44.7 0 51.08 19.16s0 44.69-19.15 51.08z m0 0" p-id="59065" fill="#515151"></path><path d="M510.81 499.23L0 282.14 510.81 65.05l510.8 217.09z m0 0" p-id="59066" fill="#515151"></path></svg>
              </div>
              <div style="flex: 0 0 auto;margin-left: 5px;">
                <router-link :to="{ name: 'ComponentIssueTypeDesigner', params: { team: team, project: project, com:'designer', attr: 'field', issue_type: item.uuid, title: item.name } }">工作项属性</router-link>
              </div>
            </div>
            <div class="flex-row task-attr align-items-center" style="margin-right: 20px;">
              <div style="flex: 0 0 auto;">
                <svg t="1602939398177" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="55763" width="16" height="16"><path d="M908.864 128h-9.6C765.888 128 644.096 85.888 592.64 13.312 586.304 6.912 572.864 0 554.56 0h-21.12c-19.072 0-36.352 6.08-41.408 17.28C442.688 86.976 323.648 128 188.736 128h-9.6C150.912 128 128 158.976 128 187.392l0.064 351.552c14.08 234.816 181.888 433.792 408.064 483.904a31.808 31.808 0 0 0 13.824 0c222.656-49.28 388.672-242.752 407.296-472.768A33.152 33.152 0 0 0 960 537.024V187.392C960 158.08 937.984 128 908.864 128zM896 526.016a31.04 31.04 0 0 0-1.856 9.088c-12.224 204.032-156.16 377.28-351.104 423.68C348.096 912.32 204.16 739.2 192 537.024V199.936C342.208 199.168 472.704 148.992 539.328 64h8.576C609.984 146.176 745.216 199.168 896 199.936v326.08z" p-id="55764" fill="#515151"></path><path d="M416 352c0 59.456 40.96 109.12 96 123.456V832a32 32 0 0 0 64 0v-64h64a32 32 0 0 0 0-64h-64v-64h64a32 32 0 0 0 0-64h-64V475.456c55.04-14.336 96-64 96-123.456 0-70.592-57.408-128-128-128s-128 57.408-128 128z m192 0a64 64 0 1 1-128 0 64 64 0 0 1 128 0z" p-id="55765" fill="#515151"></path></svg>
              </div>
              <div style="flex: 0 0 auto;margin-left: 5px;">
                <router-link :to="{ name: 'ComponentIssueTypeDesigner', params: { team: team, project: project, com:'designer', attr: 'issue_type_permission', issue_type: item.uuid, title: item.name } }">工作项权限</router-link>
              </div>
            </div>
            <div class="flex-row task-attr align-items-center" style="margin-right: 20px;">
              <div style="flex: 0 0 auto;">
                <svg t="1603325433305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10548" width="16" height="16"><path d="M426.496 170.496h427.008v256H768V256H426.496v170.496H0V0h426.496zM597.504 597.504V768H256v-170.496H170.496v256h426.496V1024H1024v-426.496h-426.496z m340.992 340.992h-256v-256h256v256z" p-id="10549"></path></svg>
              </div>
              <div style="flex: 0 0 auto;margin-left: 5px;">
                <router-link :to="{ name: 'ComponentIssueTypeDesigner', params: { team: team, project: project, com:'designer', attr: 'issue_type_flow', issue_type: item.uuid, title: item.name } }">工作项工作流</router-link>
              </div>
            </div>
            <div class="flex-row task-attr align-items-center" style="margin-right: 20px;">
              <div style="flex: 0 0 auto;">
                <svg t="1603325268548" class="icon" viewBox="0 0 1059 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6696" width="16" height="16"><path d="M826.512515 882.978679a64.292434 64.292434 0 0 1-64.511862 63.92672H297.105649a64.365576 64.365576 0 0 1-64.511862-63.92672V204.068134h593.918728v678.837403zM361.617511 89.38038a13.019401 13.019401 0 0 1 13.238829-13.165686h310.41762a13.019401 13.019401 0 0 1 13.238829 13.165686v38.546203H361.617511v-38.546203z m658.72316 38.546203H775.312624v-38.546203A90.038664 90.038664 0 0 0 685.200817 0H374.85634a90.038664 90.038664 0 0 0-90.18495 89.307237v38.546203H38.911917a38.546203 38.546203 0 1 0 0 77.092407h115.784894v677.95969A141.750553 141.750553 0 0 0 297.105649 1023.997806h465.114432a141.677411 141.677411 0 0 0 142.335695-141.019127V204.141277h115.858037a38.619346 38.619346 0 0 0 38.911917-38.473061 37.961062 37.961062 0 0 0-38.911917-37.741633z m-490.714377 703.41335a38.692489 38.692489 0 0 0 38.911916-38.546203v-409.599123a38.911917 38.911917 0 0 0-77.823833 0v409.599123a38.692489 38.692489 0 0 0 38.911917 38.47306z m-181.247612 0a38.692489 38.692489 0 0 0 38.911917-38.546203v-409.599123a38.911917 38.911917 0 0 0-77.823834 0v409.599123a39.716486 39.716486 0 0 0 38.911917 38.47306z m362.495223 0a38.619346 38.619346 0 0 0 38.911917-38.546203v-409.599123a38.911917 38.911917 0 0 0-77.823833 0v409.599123a38.619346 38.619346 0 0 0 38.911916 38.47306z" p-id="6697"></path></svg>
              </div>
              <div style="flex: 0 0 auto;margin-left: 5px;">删除工作项类型</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PermissionHeader from '../common/permission/header';
import IBIcon from '../common/block/i_b_icon';
import Search from "../common/form/search";
import http from "../../utils/http";

export default {
  data() {
    return {
      team: '',
      project: '',
      items: []
    }
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type_list();
  },
  methods: {
    issue_type_list: function() {
      let self = this;
      http.get(this.urls.project_template.format(self.team, self.project)).then(function (response) {
        self.items = response.data;
      });
    }
  },
  components: {
    PermissionHeader,
    Search,
    IBIcon
  }
}
</script>

<style scoped>
.task-attr:not(:last-child):after { content: "";width: 1px;height: 14px;background: #dedede;display: inline-block;margin-left: 20px; }
</style>
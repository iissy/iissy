<template>
  <div class="app-main-content" style="padding: 20px;">
    <div style="font-size: 18px;margin-bottom: 20px;">工作项类型</div>
    <Summary desc="工作项类型用于在同一个项目下使用不同类型的工作项，不同的工作项类型可以定义不同的属性字段、权限和工作流等。项目下的工作项类型配置的修改不会同步到配置中心下的工作项类型中。“项目组件”中增加的工作项类型组件会同时增加到这里。"/>
    <div style="margin: 20px 0 0 0;">
      <Search placeholder="搜索工作项类型" />
    </div>
    <div style="margin-top: 20px;">
      <div class="table">
        <div class="table-row-header">
          <div class="th">以下为当前项目使用的工作项类型</div>
          <div class="th last">操作</div>
        </div>
        <div class="table-row" v-for="item in items" v-bind:key="item.uuid">
          <div style="flex: 1;" class="td flex-row">
            <IBIcon :icon="item.icon.toString()"/>
            <div class="flex-column" style="margin-left: 10px;">
              <div>{{ item.name }}</div>
              <div style="color: #999999;">{{ item.field_count }} 工作项属性<span style="margin: 0 10px;color: #999999;"> | </span>{{ item.status_count }} 工作项状态</div>
            </div>
          </div>
          <div style="flex: 1;align-items: center;justify-content: flex-end;" class="td last flex-row">
            <div class="flex-row task-attr align-items-center" style="margin-right: 20px;">
              <div style="flex: 0 0 auto;">
                <svg t="1602939503677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59063" width="16" height="16"><path d="M510.81 959L31.93 754.63C12.77 741.86 0 722.7 12.77 703.55 19.15 684.4 44.7 678 63.85 684.4l453.34 191.54L970.52 684.4c19.16-6.39 44.7 0 51.09 19.15s0 44.7-19.16 51.08z m0 0" p-id="59064" fill="#515151"></path><path d="M510.81 729.09L31.93 524.77C12.77 518.38 0 492.84 12.77 473.69c6.38-19.16 25.54-25.54 44.69-19.16l453.35 191.56 453.33-191.56c19.16-6.38 44.7 0 51.08 19.16s0 44.69-19.15 51.08z m0 0" p-id="59065" fill="#515151"></path><path d="M510.81 499.23L0 282.14 510.81 65.05l510.8 217.09z m0 0" p-id="59066" fill="#515151"></path></svg>
              </div>
              <div style="flex: 0 0 auto;margin-left: 5px;">工作项属性</div>
            </div>
            <div class="flex-row task-attr align-items-center" style="margin-right: 20px;">
              <div style="flex: 0 0 auto;">
                <svg t="1602939398177" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="55763" width="16" height="16"><path d="M908.864 128h-9.6C765.888 128 644.096 85.888 592.64 13.312 586.304 6.912 572.864 0 554.56 0h-21.12c-19.072 0-36.352 6.08-41.408 17.28C442.688 86.976 323.648 128 188.736 128h-9.6C150.912 128 128 158.976 128 187.392l0.064 351.552c14.08 234.816 181.888 433.792 408.064 483.904a31.808 31.808 0 0 0 13.824 0c222.656-49.28 388.672-242.752 407.296-472.768A33.152 33.152 0 0 0 960 537.024V187.392C960 158.08 937.984 128 908.864 128zM896 526.016a31.04 31.04 0 0 0-1.856 9.088c-12.224 204.032-156.16 377.28-351.104 423.68C348.096 912.32 204.16 739.2 192 537.024V199.936C342.208 199.168 472.704 148.992 539.328 64h8.576C609.984 146.176 745.216 199.168 896 199.936v326.08z" p-id="55764" fill="#515151"></path><path d="M416 352c0 59.456 40.96 109.12 96 123.456V832a32 32 0 0 0 64 0v-64h64a32 32 0 0 0 0-64h-64v-64h64a32 32 0 0 0 0-64h-64V475.456c55.04-14.336 96-64 96-123.456 0-70.592-57.408-128-128-128s-128 57.408-128 128z m192 0a64 64 0 1 1-128 0 64 64 0 0 1 128 0z" p-id="55765" fill="#515151"></path></svg>
              </div>
              <div style="flex: 0 0 auto;margin-left: 5px;">工作项权限</div>
            </div>
            <div class="flex-row task-attr align-items-center" style="margin-right: 20px;">
              <div style="flex: 0 0 auto;">
                <svg t="1602939453442" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="56636" width="16" height="16"><path d="M901.248 677.12V528.192c0-24.512-19.008-44.416-42.432-44.416H538.88V388.288h133.312c23.424 0 42.496-19.84 42.496-44.416V136.576c0-24.512-19.072-44.416-42.496-44.416h-323.2c-23.424 0-42.496 19.904-42.496 44.416v207.36c0 24.448 19.072 44.352 42.496 44.352h133.248V483.84H168.192c-23.424 0-42.432 19.84-42.432 44.416v148.928H56.256a24.32 24.32 0 0 0-24.256 24.256v206.528a24.32 24.32 0 0 0 24.32 24.256h194.816a24.32 24.32 0 0 0 24.32-24.256V701.44a24.32 24.32 0 0 0-24.32-24.256H182.4V542.976h299.84v134.144h-72.96a24.32 24.32 0 0 0-24.32 24.256v206.528a24.32 24.32 0 0 0 24.32 24.256H612.48a24.32 24.32 0 0 0 24.256-24.256V701.44a24.32 24.32 0 0 0-24.32-24.256H538.88V542.976h305.792v134.144h-65.856a24.32 24.32 0 0 0-24.32 24.256v206.528a24.32 24.32 0 0 0 24.32 24.256h188.928a24.32 24.32 0 0 0 24.256-24.256V701.44a24.32 24.32 0 0 0-24.32-24.256h-66.432z" fill="#515151" p-id="56637"></path></svg>
              </div>
              <div style="flex: 0 0 auto;margin-left: 5px;">工作项工作流</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '@/views/component/common/block/summary';
import IBIcon from '@/views/component/common/block/i_b_icon';
import Search from "@/views/component/common/form/search";
import http from "@/util/http";

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
    Summary,
    Search,
    IBIcon
  }
}
</script>

<style scoped>
.table { margin-top: 10px;flex: 1;display: flex;flex-direction: column;border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8; }
.table-row-header { flex: 0 0 auto;display: flex;border-bottom: 1px solid #e8e8e8;border-top: 1px solid #e8e8e8;background-color: #f0f0f0; }
.table-row { flex: 0 1 auto;display: flex;border-bottom: 1px solid #e8e8e8; }
.table-row:hover { background-color: #f8f8f8; }
.table .th { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .td { width: 100px;padding: 10px 0 10px 20px;flex: 1 1 auto; }
.table .last { flex: 0 0 auto; }

.task-attr:not(:last-child):after { content: "";width: 1px;height: 14px;background: #dedede;display: inline-block;margin-left: 20px; }
</style>
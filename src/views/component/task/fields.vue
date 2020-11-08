<template>
  <div style="overflow: auto;flex: 0 0 500px;display: flex;height: 100%;border-left: 5px solid #e8e8e8;flex-direction: column;min-width: 500px;">
    <div style="flex-direction: column;flex: 1;display: flex;overflow: auto;padding: 20px;">
      <div class="field-block">
        <div class="flex-row" style="width: 100%;">
          <div style="flex: 1;">#{{ task.number }}</div>
          <div style="flex: 0 0 auto;">
            <svg t="1601948666806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10407" width="20" height="20"><path d="M509.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10408"></path><path d="M849.1 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10409"></path><path d="M174.9 512m-111 0a111 111 0 1 0 222 0 111 111 0 1 0-222 0Z" fill="#515151" p-id="10410"></path></svg>
          </div>
        </div>
      </div>
      <div class="field-block">
        <div class="flex-row" style="width: 100%;">
          <div style="flex: 1;width: 0;height: 30px;line-height: 30px;flex: 1;font-size: 18px;text-shadow: #EEE 1px 1px 1px;color: #4F4F4F;letter-spacing: 1px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">
            {{ task.summary }}
          </div>
        </div>
      </div>
      <div class="field-block">
        <div class="flex-row" style="width: 100%;padding: 0 10px 10px 10px;justify-content: space-between;">
          <div style="flex: 1;text-align: center;">
            <Assign :user="task.assign" :task="task.uuid"/>
          </div>
          <div style="flex: 1;text-align: center;">
            <TaskStatus :status="task.task_status" :issue_type="task.issue_type.uuid"/>
          </div>
          <div style="flex: 1;text-align: center;">
            <TaskPriority :option="task.priority"/>
          </div>
        </div>
      </div>
      <div class="field-block">
        <div class="flex-row">
          <div style="flex: 1;padding: 0 5px 0 0;">
            描述
          </div>
          <div style="padding: 0 5px 0 0;flex: 0 0 auto;">
            <router-link style="color: #36c6d3;" :to="{ name: 'Task', params: { team: team, project: project, com: com, task: task.uuid } }">全屏查看</router-link>
          </div>
        </div>
      </div>
      <div style="min-height: 100px;border: 1px solid #e8e8e8;flex: 0 0 auto;padding: 10px;margin-top: 5px;">
        {{ task.desc }}
      </div>

      <div class="field-type-group">
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">需求来源</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">截止日期</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
      </div>

      <div class="field-type-group">
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">所属项目</div>
          <div style="flex: 1;">{{ task.project.name }}</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">工作项类型</div>
          <div style="flex: 1;">{{ task.issue_type.name }}</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">创建者</div>
          <div style="flex: 1;">
            <User :user="task.owner" :hasEmail="hasEmail"/>
          </div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">创建时间</div>
          <div style="flex: 1;">{{ task.create_time | formatDate }}</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">更新时间</div>
          <div style="flex: 1;">{{ task.server_update_stamp / 1000 | formatDate }}</div>
        </div>
      </div>

      <div class="field-type-group">
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">计划开始日期</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">计划完成日期</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">进度</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
      </div>

      <div class="field-type-group">
        <div class="flex-row">
          <div style="flex: 1;">文件</div>
          <div style="flex: 0 0 auto;color: #000000;cursor: pointer;">
            <b-icon icon="plus" scale="1.8"></b-icon>
          </div>
        </div>
        <div style="color: #999999;margin-top: 10px;">
          暂无文件
        </div>
      </div>

      <div class="field-type-group">
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">预估工时</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">已登记工时</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">剩余工时</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">工时进度</div>
          <div style="flex: 1;">30%</div>
        </div>
        <div class="flex-row field-row">
          <div style="flex: 0 0 200px;color: #303030;">预估偏差</div>
          <div style="flex: 1;color: #999999;">未设置</div>
        </div>
      </div>

      <div class="field-type-group">
        <div class="flex-row">
          <div style="flex: 1;">工时</div>
          <div style="flex: 0 0 auto;color: #000000;cursor: pointer;">
            <b-icon icon="plus" scale="1.8"></b-icon>
          </div>
        </div>
        <div style="color: #999999;margin-top: 10px;">
          暂无工时记录
        </div>
      </div>

      <div style="margin-top: 30px;">评论</div>
      <div style="color: #999999;margin-top: 10px;margin-bottom: 20px;">暂无评论</div>
    </div>
    <div style="flex: 0 0 auto;border-top: 1px solid #e8e8e8;padding: 10px;">关注我</div>
  </div>
</template>

<script>
import User from '@/views/component/common/block/user';
import Assign from '@/views/component/task/assign';
import TaskStatus from '@/views/component/task/status';
import TaskPriority from '@/views/component/task/priority';

export default {
  data() {
    return {
      hasEmail: false,
      team: '',
      project: '',
      issue_type: '',
      com: ''
    }
  },
  props: {
    task: Object
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.issue_type = self.$parent.issue_type;
    self.com = self.$route.params.com;
  },
  components: {
    User,
    Assign,
    TaskStatus,
    TaskPriority
  }
}
</script>

<style scoped>
.field-block { margin-top: 10px; }
.field-type-group { margin-top: 30px;border-bottom: 1px solid #e8e8e8;padding-bottom: 10px; }
.field-row { margin-top: 10px; }
</style>
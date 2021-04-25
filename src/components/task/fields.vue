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
            <Assign :user="task.assign" :project="task.project.uuid" :task="task.uuid"/>
          </div>
          <div style="flex: 1;text-align: center;">
            <TaskStatus :status="task.task_status" :project="task.project.uuid" :issue_type="task.issue_type.uuid" :task_uuid="task.uuid"/>
          </div>
          <div style="flex: 1;text-align: center;">
            <TaskPriority :project="task.project.uuid" :priority="task.priority" :task_uuid="task.uuid"/>
          </div>
        </div>
      </div>
      <div class="field-block">
        <div class="flex-row">
          <div style="flex: 1;padding: 0 5px 0 0;">
            描述
          </div>
          <div style="padding: 0 5px 0 0;flex: 0 0 auto;">
            全屏查看
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
            <User :user="task.owner"/>
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

      <div style="margin-top: 30px;">评论</div>
      <div style="color: #999999;margin-top: 10px;margin-bottom: 20px;">暂无评论</div>
    </div>
    <div style="flex: 0 0 auto;border-top: 1px solid #e8e8e8;padding: 10px;" class="flex-row align-items-center">
      <div class="watchers" style="flex: 1;">
        关注我
      </div>
      <div style="flex: 0 0 auto;cursor: pointer;" class="flex-row align-items-center watch" @click="watchers_add">
        <div style="flex: 0 0 auto;color: inherit;">
          <b-icon icon="binoculars-fill"/>
        </div>
        <div style="flex: 0 0 auto;margin-left: 5px;color: inherit;">
          关注
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../common/block/suser';
import Assign from './assign';
import TaskStatus from './status';
import TaskPriority from './priority';
import http from "../../utils/http";

export default {
  data() {
    return {
      hasEmail: false
    }
  },
  props: {
    task: Object
  },
  components: {
    User,
    Assign,
    TaskStatus,
    TaskPriority
  },
  methods: {
    watchers_add: function () {
      let self = this;
      self.team = self.$route.params.team;
      http.post(self.urls.watchers_add.format(self.team, self.task.uuid), {}).then(function (response) {
        if (response.data.status) {
          self.$parent.task_get(self.task.uuid);
        }
      });
    }
  }
}
</script>

<style scoped>
.field-block { margin-top: 10px; }
.field-type-group { margin-top: 30px;border-bottom: 1px solid #e8e8e8;padding-bottom: 10px; }
.field-row { margin-top: 10px; }
.watch:hover { color: #17C4BB; }
</style>
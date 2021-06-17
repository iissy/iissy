<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <Com00000 :comName="comName" :issue_type="issue_type">
      <template v-slot:workField>
        <div class="field-type-group option">
          <div class="flex-row field-row">
            <div class="field-cell">关联需求</div>
          </div>
          <div class="flex-row field-row">
            <div v-if="linkedTasks && linkedTasks.length > 0" class="flex-row" style="-webkit-flex: 1;flex: 1;position: relative;z-index: 0;">
              <div style="overflow: auto;flex: 1;display: flex;height: 100%;">
                <div id="linked-task-list" style="flex-direction: column;flex: 1;display: flex;overflow: auto;">
                  <div v-for="t in linkedTasks" v-bind:key="t.uuid" class="flex-row task-item align-items-center">
                    <div class="flex-row" style="flex: 1;padding: 5px 0 5px 5px;">
                      <div style="flex: 0 0 auto;">
                        <b-icon icon="folder2"/>
                      </div>
                      <div style="flex: 1;margin-left: 10px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;" :class="{ del: t.task_status.category === 3 }">{{t.summary}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else style="padding: 3px 0;">暂无关联</div>
          </div>
        </div>
      </template>
    </Com00000>
  </div>
</template>

<script>
import Com00000 from "./com00000";
import http from "@/utils/http";

export default {
  data: function () {
    return {
      team: '',
      project: '',
      task: '',
      tasks: [],
      linkedTasks: []
    };
  },
  props: {
    comName: String,
    issue_type: String
  },
  watch: {
    '$route' () {
      let self = this;
      self.team = self.$route.params.team;
      self.project = self.$route.params.project;
      self.task = self.$route.params.task;
      self.linked_task_list();
    }
  },
  created() {
    let self = this;
    self.team = self.$route.params.team;
    self.project = self.$route.params.project;
    self.task = self.$route.params.task;
    self.linked_task_list();
  },
  methods: {
    linked_task_list: function() {
      let self = this;
      let url = self.urls.linked_source_tasks.format(self.team, self.task);
      http.get(url).then(function (response) {
        self.linkedTasks = response.data;
      });
    }
  },
  components: {
    Com00000
  }
}
</script>

<style scoped>
.task-item .del { text-decoration: line-through; }
</style>
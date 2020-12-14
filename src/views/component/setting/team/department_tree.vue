<template>
  <div style="padding: 0 0 0 10px;">
    <div class="department-item flex-row align-items-center" :class="{active: tree.uuid === selected }">
      <div class="arrow flex-row align-items-center" v-if="!tree.parent_uuid && tree.children && tree.children.length > 0">
        <div class="down" v-if="tree.opened" @click="tree.opened=false"></div>
        <div class="right" v-else @click="tree.opened=true"></div>
      </div>
      <div v-else-if="!tree.children || tree.children.length === 0" style="color: #c0c0c0;padding-left: 10px;">
        <b-icon icon="dot" scale="2"/>
      </div>
      <div v-else style="padding-left: 10px;">
        <svg t="1605661940824" class="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="177974" width="16" height="16"><path d="M1152 896a128 128 0 0 1-128 128H128a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128h279.936a128 128 0 0 1 120.576 84.992l9.728 27.456H1024a128 128 0 0 1 127.68 118.528l0.32 9.536zM407.936 128H128v768h896V494.72H629.056a128 128 0 0 1-116.8-75.52l-3.84-9.408L408 128z m176 112.448l45.12 126.336L1024 366.72V240.512l-440.064-0.064z" p-id="177975" fill="#515151"></path></svg>
      </div>
      <div style="flex: 1;width: 0;" @click="tree.opened=true">
        <router-link :to="{ name: 'Department', params: { team: team, department: tree.uuid } }">
          <div class="flex-row align-items-center" @mouseover="overUUID=tree.uuid;" @mouseleave="overUUID='';">
            <div style="overflow: hidden;white-space: nowrap;min-width: 0;text-overflow: ellipsis;margin-left: 5px;flex: 1;">{{ tree.name }}</div>
            <div style="flex: 0 0 auto;box-shadow: none;outline: none;" v-b-modal.modal-prevent-closing v-if="overUUID===tree.uuid">
              <b-icon icon="plus"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-show="tree.opened">
      <DepartmentTree v-for="c in tree.children" :key="c.uuid" :tree="c" :selected="selected" :team="team" :space="space"/>
    </div>
  </div>
</template>

<script>
import DepartmentTree from "@/views/component/setting/team/department_tree";

export default {
  name: 'DepartmentTree',
  data() {
    return {
      overUUID: ''
    }
  },
  props: {
    tree: Object,
    team: String,
    space: String,
    selected: String
  },
  methods: {
  },
  components: {
    DepartmentTree
  }
}
</script>

<style scoped>
.arrow { height: 100%; }
.arrow .down, .arrow .right {
  width: 20px;
  height: 30px;
  padding: 12px;
}
.arrow .down:after {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-left: 2px #666666 solid;
  border-bottom: 2px #666666 solid;
  transform: translateY(-2px) rotate(-45deg);
  /*transform:translateY(-1px);*/
}
.arrow .right:after {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-left: 2px #666666 solid;
  border-bottom: 2px #666666 solid;
  transform: rotate(-135deg);
}
</style>
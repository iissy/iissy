<template>
  <div style="padding: 0 0 0 10px;">
    <div class="department-item flex-row align-items-center" :class="{active: tree.uuid === selected }">
      <div class="arrow flex-row align-items-center" v-if="tree.children && tree.children.length > 0">
        <div class="down" v-if="tree.opened" @click="tree.opened=false"></div>
        <div class="right" v-else @click="tree.opened=true"></div>
      </div>
      <div v-else style="color: #c0c0c0;padding-left: 10px;">
        <b-icon icon="dot" scale="2"/>
      </div>
      <div style="flex: 1;width: 0;">
        <router-link :to="{ name: 'Department', params: { team: team, department: tree.uuid } }">
          <div class="flex-row align-items-center" @mouseover="overUUID=tree.uuid;" @mouseleave="overUUID='';">
            <div style="padding-left: 5px;">
              <svg data-v-e9f5f316="" t="1602580577253" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37322" width="20" height="20" class="icon"><path data-v-e9f5f316="" d="M455.224889 171.406222c12.572444 33.223111 48.014222 56.092444 84.935111 57.571556H910.222222c31.004444 0 56.888889 26.567111 56.888889 57.628444v515.470222a58.026667 58.026667 0 0 1-56.888889 57.628445H114.062222c-31.061333 0-56.888889-26.624-56.888889-57.628445V171.406222a58.026667 58.026667 0 0 1 56.888889-57.628444h284.330667m0 0.739555c27.306667 1.479111 49.493333 34.702222 56.888889 57.628445" fill="#cdcdcd" p-id="37323"></path></svg>
            </div>
            <div class="name" style="overflow: hidden;white-space: nowrap;min-width: 0;text-overflow: ellipsis;margin-left: 5px;flex: 1;">{{ tree.name }}</div>
            <div style="flex: 0 0 auto;box-shadow: none;outline: none;" v-b-modal.modal-prevent-closing v-if="overUUID===tree.uuid" class="tree-plus">
              <b-icon icon="plus" scale="1.5"/>
            </div>
            <div style="flex: 0 0 auto;margin-left: 5px;" v-if="overUUID===tree.uuid && overUUID !== 'all'" class="tree-plus" @click="del">
              <b-icon icon="x" scale="1.5"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-show="tree.opened">
      <DepartmentTree v-for="c in tree.children" :key="c.uuid" :tree="c" :selected="selected" :team="team"/>
    </div>
  </div>
</template>

<script>
import DepartmentTree from "./department_tree";
import http from "../../../utils/http";
import router from "../../../router";

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
    selected: String
  },
  methods: {
    del() {
      let self = this;
      this.$bvModal.msgBoxConfirm('此操作不可撤销，是否确定？', {
        title: '删除部门',
        okVariant: 'danger',
        okTitle: '确定',
        cancelTitle: '取消',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          http.post(self.urls.department_delete.format(self.team, self.selected)).then(function (response) {
            if (response.data.status === true) {
              router.push({ name:'Department', params: { team: self.team, department: 'all' } });
            }
          });
        }
      }).catch(err => {console.log(err);})
    }
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
  border-left: 1px #666666 solid;
  border-bottom: 1px #666666 solid;
  transform: translateY(-2px) rotate(-45deg);
  /*transform:translateY(-1px);*/
}
.arrow .right:after {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-left: 1px #666666 solid;
  border-bottom: 1px #666666 solid;
  transform: rotate(-135deg);
}
.tree-plus:hover { color: #338fe5; }
</style>
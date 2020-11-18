<template>
  <div :style="{padding: (tree.padding ? '0 0 0 10px' : '0')}">
    <div class="page-item flex-row align-items-center" :class="{active: tree.uuid === selected }">
      <div v-if="tree.son && tree.parent_uuid">
        <div v-if="tree.opened" @click="tree.opened=false">
          <svg t="1605658922505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="103506" width="10" height="10"><path d="M61.282304 348.891136c0-31.985664 12.214272-63.978496 36.624384-88.410112 48.835584-48.845824 128.016384-48.845824 176.835584 0l236.839936 236.833792 236.827648-236.833792c48.83456-48.845824 128.014336-48.845824 176.841728 0 48.821248 48.84992 48.821248 127.997952 0 176.84992l-325.24288 325.251072c-23.463936 23.45472-55.258112 36.622336-88.426496 36.622336-33.158144 0-64.960512-13.166592-88.423424-36.622336l-325.25312-325.251072C73.495552 412.903424 61.282304 380.920832 61.282304 348.891136z" p-id="103507" fill="#515151"></path></svg>
        </div>
        <div v-else @click="tree.opened=true">
          <svg t="1605659406156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="130159" width="10" height="10"><path d="M757.792745 435.407215L419.597482 96.904967c-40.010393-40.010393-104.886579-40.010393-144.896972 0-40.010393 40.010393-40.010393 104.988908 0 144.9993L540.344959 507.855701 274.70051 773.807135c-40.010393 40.112721-40.010393 104.988908 0 144.9993 40.010393 40.010393 104.886579 40.010393 144.896972 0l338.092935-338.39992c40.112721-40.010393 40.112721-104.988908 0.102328-144.9993z" fill="#515151" p-id="130160"></path></svg>
        </div>
      </div>
      <div v-else-if="tree.parent_uuid" style="color: #c0c0c0;">
        <b-icon icon="dot" scale="2"/>
      </div>
      <div v-else>
        <svg t="1605661940824" class="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="177974" width="16" height="16"><path d="M1152 896a128 128 0 0 1-128 128H128a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128h279.936a128 128 0 0 1 120.576 84.992l9.728 27.456H1024a128 128 0 0 1 127.68 118.528l0.32 9.536zM407.936 128H128v768h896V494.72H629.056a128 128 0 0 1-116.8-75.52l-3.84-9.408L408 128z m176 112.448l45.12 126.336L1024 366.72V240.512l-440.064-0.064z" p-id="177975" fill="#515151"></path></svg>
      </div>
      <div style="flex: 1;width: 0;" @click="tree.opened=true">
        <router-link :to="{ name: 'Page', params: { team: team, space: space, page: tree.uuid } }">
          <div class="flex-row align-items-center">
            <div style="overflow: hidden;white-space: nowrap;min-width: 0;text-overflow: ellipsis;margin-left: 5px;">{{ tree.title }}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-show="tree.opened">
      <PageTree v-for="p in tree.pages" :key="p.uuid" :tree="p" :selected="selected" :team="team" :space="space"/>
    </div>
  </div>
</template>

<script>
import PageTree from "@/views/component/wiki/module/page_tree";

export default {
  name: 'PageTree',
  data() {
    return {
    }
  },
  props: {
    tree: Object,
    team: String,
    space: String,
    selected: {
      default: false
    }
  },
  created() {
  },
  methods: {
  },
  components: {
    PageTree
  }
}
</script>

<style scoped>

</style>
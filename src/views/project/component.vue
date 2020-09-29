<template>
  <div>
    <div class="app-row">
      <Menu tagIndex="21"></Menu>
      <div class="rightMain">
        <Header :items="items" title="项目管理"></Header>
        <div class="app-main-container">
          <div class="right-container">
            <div class="right-container-inner">
              asdfasdfasdf
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../component/common/header';
import Menu from '../component/common/menu';
import http from "@/util/http";
import router from '../../router';

export default {
  data: function () {
    return {
      name: '',
      items: [
        { name: '项目概况', com: 'u5eu33i1', key: 'task' },
        { name: '任务', com: 'u8e733i0', key: 'task' },
        { name: '需求', com: 'u8e734i0', key: 'task' },
        { name: '缺陷缺陷', com: 'u5eu33i0', key: 'task' },
        { name: '缺陷', com: 'u8eu33i0', key: 'task' },
        { name: '缺陷缺陷', com: 'u80u33i0', key: 'task' },
        { name: '缺陷缺陷', com: 'u88u33i0', key: 'task' },
        { name: '人员培训', com: 'u5eu33i2', key: 'task' },
        { name: '测试任务', com: 'u5eu33i3', key: 'task' }
      ]
    };
  },
  components: {
    Header,
    Menu
  },
  created: function () {
  },
  watch: {
  },
  methods: {
    add: function () {
      let self = this;
      http.post('/api/team/Sxv5vAgD/add/project', {
        name: self.name
      }).then(function (response) {
        if (response.data.status == true) {
          router.push({ name: 'Project' });
        } else {
          alert(response.data.msg)
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
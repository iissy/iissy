<template>
  <div class="app-row">
    <Menu tagIndex="81" ref="Menu"></Menu>
    <div class="rightMain">
      <Header title="团队配置中心" ref="Header"></Header>
      <div class="app-main-container">
        <div class="app-main-no-border flex-column">
          <div style="height: 100%;flex: 1;" class="flex-row">
            <Control :tagIndex="tagIndex"></Control>
            <Member/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Member from "@/views/component/setting/team/member";
import Control from '@/views/component/setting/team/team_control';
import Header from '@/views/component/common/header';
import Menu from '@/views/component/common/menu';

export default {
  data() {
    return {
      team: '',
      tagIndex: 11
    }
  },
  components: {
    Header,
    Menu,
    Control,
    Member
  }
}
</script>

<style scoped>

</style>
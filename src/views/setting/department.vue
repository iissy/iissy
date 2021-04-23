<template>
  <div class="app-main-no-border flex-column">
    <div style="height: 100%;flex: 1;" class="flex-row">
      <Control :tagIndex="tagIndex"></Control>
      <Member/>
    </div>
  </div>
</template>

<script>
import Member from "../component/setting/team/member";
import Control from '../component/setting/team/team_control';

export default {
  data() {
    return {
      team: '',
      tagIndex: 11
    }
  },
  components: {
    Control,
    Member
  }
}
</script>

<style scoped>

</style>
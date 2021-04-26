<template>
  <div class="app-main-no-border">
    <div style="display: flex;flex-direction: row;height: 100%;">
      <Control :tagIndex="tagIndex"></Control>
      <ProjectPermission/>
    </div>
  </div>
</template>

<script>
import Control from '../../components/setting/project/project_control';
import ProjectPermission from "../../components/setting/project/permission";

export default {
  data: function () {
    return {
      tagIndex: 1
    };
  },
  components: {
    Control,
    ProjectPermission
  },
  created: function () {
  },
  methods: {
  }
};
</script>
<template>
  <div/>
</template>

<script>
import router from '../../router';

export default {
  data() {
    return {
    }
  },
  mounted() {
    let self = this;
    router.push({ name:'Workbench', params: { team: self.$parent.Menu.team, type: 'overview' } });
  }
}
</script>
<template>
  <div id="app">
    <router-view/>
    <Alert ref="alert"></Alert>
  </div>
</template>

<script>
import Alert from '../components/common/block/alert';

export default {
  name: 'App',
  data: function(){
    return {
    }
  },
  mounted() {
    let self = this;
    self.bus.$on('alertSuccess', function(code) {
      self.$refs.alert.success(code);
    });
    self.bus.$on('alertDanger', function(code) {
      self.$refs.alert.danger(code);
    });
  },
  components: {
    Alert
  }
}
</script>
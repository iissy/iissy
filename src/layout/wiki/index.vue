<template>
  <div class="flex-column">
    <Header ref="Header" :page="page"/>
    <Main/>
  </div>
</template>

<script>
import Header from './header';
import Main from './main';

export default {
  data: function () {
    return {
      team: '',
      space: '',
      page: '',
      item: {},
      loaded: false
    };
  },
  components: {
    Header,
    Main
  }
};
</script>
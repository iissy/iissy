<template>
  <div class="app-column">
    <Header ref="Header" :page="page"/>
    <div class="rightMain flex-row" style="height: 0;">
      <AddPage/>
    </div>
  </div>
</template>

<script>
import Header from '@/views/component/wiki/header';
import AddPage from '@/views/component/wiki/page/add';

export default {
  data: function () {
    return {
      team: '',
      space: '',
      page: '',
      item: {},
      loaded: false,
      pages: [],
      spaces: []
    };
  },
  components: {
    Header,
    AddPage
  },
  mounted() {
    // let self = this;
  },
  created: function () {
    let self = this;
    self.team = self.$route.params.team;
    self.space = self.$route.params.space;
  },
  computed: {
  },
  methods: {
  }
};
</script>
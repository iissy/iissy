<template>
  <AddPage/>
</template>

<script>
import AddPage from '../../components/wiki/page/add';

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
    AddPage
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
<template>
  <div class="app-row">
    <Catalog ref="Catalog"/>
    <div class="rightMain">
      <Header ref="Header"/>
      <div class="app-main-container">
        <div class="app-main-content">
          <div>
            <p>asdf</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/component/wiki/header';
import Catalog from '@/views/component/wiki/catalog';

export default {
  data: function () {
    return {
    };
  },
  components: {
    Header,
    Catalog
  },
  created: function () {
  },
  methods: {
  }
};
</script>
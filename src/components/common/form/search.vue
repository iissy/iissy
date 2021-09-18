<template>
  <div class="search" >
    <div class="flex-column" style="position: absolute;margin-left: 10px;height: 100%;">
      <div style="flex: 1;display: flex;align-items: center;justify-content: center;">
        <b-icon icon="search"></b-icon>
      </div>
    </div>
    <b-form-input style="padding-left: 30px;" v-model="name" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: ''
    };
  },
  props: {
    value: String,
    placeholder: String
  },
  computed: {
    my_value: function () {
      let self = this;
      return self.value;
    }
  }
}
</script>

<style scoped>
.search { overflow:hidden;max-width: 300px;width: 100%;position: relative; }
.search input::-webkit-input-placeholder{ color: #909090; }
.search input:-moz-placeholder{ color: #909090; }
.search input::-moz-placeholder{ color: #909090; }
.search input:-ms-input-placeholder{ color: #909090; }
</style>
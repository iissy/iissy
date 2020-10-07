<template>
  <div class="flex-row">
    <div style="flex: 0 0 auto;">
      <svg t="1601947067356" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9171" width="30" height="30"><path d="M967.111111 477.297778a63.146667 63.146667 0 0 0-36.693333-113.777778l-256-9.671111a6.542222 6.542222 0 0 1-5.688889-4.266667l-88.462222-238.933333a63.146667 63.146667 0 0 0-118.613334 0l-88.177777 239.786667a6.542222 6.542222 0 0 1-5.688889 4.266666l-256 9.671111a63.146667 63.146667 0 0 0-36.693334 113.777778l200.817778 157.866667a6.542222 6.542222 0 0 1 2.275556 6.826666l-69.12 244.906667a63.146667 63.146667 0 0 0 96.142222 69.688889l212.195555-142.222222a6.257778 6.257778 0 0 1 7.111112 0l212.195555 142.222222a62.577778 62.577778 0 0 0 72.533333 0 62.577778 62.577778 0 0 0 23.608889-68.266667l-69.688889-245.76a6.229333 6.229333 0 0 1 2.275556-6.826666l201.671111-159.288889z" p-id="9172" fill="#DAA520"></path></svg>
    </div>
    <div style="flex: 0 0 auto;margin-left: 10px;align-items: normal;" class="flex-column">
      <div style="text-align: left;color: #363636;">{{ option.value }}</div>
      <div style="text-align: left;color: #999999;font-size: 12px;">优先级</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    option: Object
  }
}
</script>

<style scoped>

</style>
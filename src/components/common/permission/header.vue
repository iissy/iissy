<template>
  <div style="flex: 0 0 auto;" class="flex-row b-line align-items-center padding20">
    <div style="font-size: 18px;flex: 1;white-space: nowrap;">{{title}}</div>
    <div style="flex: auto;align-items: center;justify-content: end;" class="flex-row">
      <Summary :desc="desc"/>
    </div>
  </div>
</template>

<script>
import Summary from "../block/summary";

export default {
  props: ['title', 'desc'],
  components: {
    Summary
  }
}
</script>
<template>
  <div class="flex-row b-line align-items-center padding20 task-flex-auto">
    <div style="font-size: 18px;flex: 1;white-space: nowrap;">{{title}}</div>
    <div style="align-items: center;justify-content: end;" class="flex-row">
      <Summary :desc="desc"/>
    </div>
  </div>
</template>

<script>
import Summary from "../control/summary";

export default {
  props: ['title', 'desc'],
  components: {
    Summary
  }
}
</script>
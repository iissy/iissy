<template>
  <div style="flex: 1 0 auto;display: flex;height: 100%;width: 100%;">
    <Com00000 :comName="comName" :issue_type="issue_type">
    </Com00000>
  </div>
</template>

<script>
import Com00000 from "./com00000";

export default {
  data: function () {
    return {
    };
  },
  props: {
    comName: String,
    issue_type: String
  },
  components: {
    Com00000
  }
}
</script>
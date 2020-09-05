<template>
    <div class="app-header">
        <div style="background-color: #ffffff;height:48px;padding:10px;">
          <div>
            <span style="font-size: 18px;font-weight: 500;color:#606060;font-family: markpro;display: flex;white-space: nowrap;vertical-align: middle;align-items: center;">{{title}}</span>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        title: String
      }
    }
</script>

<style scoped>

</style>
<template>
  <div id="popover-user-center" style="flex: 0;align-items: center;display: flex;margin-right: 20px;box-shadow: none;outline: none;cursor: pointer;" hidefocus="true" tabindex="0">
    <img src="/images/touxiang.jpg" style="height: 30px;width: 30px;border-radius: 30px;">
    <b-popover
        target="popover-user-center"
        placement="bottom"
        triggers="focus">
      <div class="flex-column" id="center">
        <div class="menu-item">
          <router-link :to="{ name: 'CenterAccount' }">账号设置</router-link>
        </div>
        <div class="menu-item">
          <router-link :to="{ name: 'CenterSafe' }">安全设置</router-link>
        </div>
        <div class="menu-line"></div>
        <div class="menu-item">
          <router-link :to="{ name: 'Logout' }">注销</router-link>
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
#center { width: 138px; }
.menu-item { flex: 1;padding: 4px 0 4px 20px;cursor: pointer;letter-spacing: 3px; }
.menu-item a { display: block;text-decoration: none; }
.menu-item:hover { background-color: #eff6fd;border-radius: 0.3rem; }
.menu-item:hover a { color: inherit; }
.menu-line { border-bottom: 1px solid #e0e0e0;height: 2px;margin-top: 3px; }
</style>
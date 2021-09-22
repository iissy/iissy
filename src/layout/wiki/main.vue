<template>
  <div class="rightMain flex-row" style="height: 0;">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
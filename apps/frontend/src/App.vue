<script setup lang="ts">
import SidebarMain from './components/SidebarMain.vue';
</script>

<template>
  <div class="app">
    <SidebarMain />
    <router-view />
  </div>
</template>

<style lang="scss">
/* INFO:
   SCSS global imports doesn't work
   if we make root component styles scoped
*/

body {
  font-weight: 400;
  font-size: 1rem;
  font-family: 'IBM Plex Sans';
}

.app {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>

<template>
  <div class="sidebar">
    <SidebarNavigation />
  </div>
</template>

<script setup lang="ts">
import SidebarNavigation from './SidebarNavigation.vue';
</script>

<style scoped lang="scss">
.sidebar {
  height: 100vh;
  width: 245px;
  padding: 16px 14px;
  background-color: var(--color-basic-3);
}
</style>

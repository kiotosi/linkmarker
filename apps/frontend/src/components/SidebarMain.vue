<template>
  <div class="sidebar">
    <SidebarNavigation />
    <div class="sidebar__tools">
      <SidebarSearch />
      <SidebarTagList />
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarNavigation from './SidebarNavigation.vue';
import SidebarSearch from './SidebarSearch.vue';
import SidebarTagList from './SidebarTagList.vue';
</script>

<style scoped lang="scss">
.sidebar {
  height: 100vh;
  width: 245px;
  padding: 16px 14px;
  background-color: var(--color-basic-3);

  &__tools {
    padding: 0 8px;

    & > * {
      margin-top: 24px;
    }
  }
}
</style>

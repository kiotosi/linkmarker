<script setup lang="ts">
import { onMounted } from 'vue';
import SidebarMain from './components/SidebarMain.vue';
import useLinkmanagerStore from './stores/linkmanager.store';
import useSelectStore from './stores/selectmanager.store';
import localStorageUtil from './utils/localStorage';

const linkmanagerStore = useLinkmanagerStore();
const selectStore = useSelectStore();

onMounted(() => {
  const linkList = localStorageUtil.linkmanager.getList();
  const tagList = localStorageUtil.tagmanager.getList();

  if (linkList) {
    linkmanagerStore.linkList = linkList;
  }

  if (tagList) {
    selectStore.tagList = tagList;
  }
});
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
  color: var(--color-basic-12);
}

.app {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>

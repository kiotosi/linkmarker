<script setup lang="ts">
import type { LinkPreview } from 'linkmarker';
import { onMounted, onUnmounted, computed } from 'vue';
import LinkManagerEmpty from '../components/LinkManagerEmpty.vue';
import LinkManagerItem from '../components/LinkManagerItem.vue';
import useLinkmanagerStore from '../stores/linkmanager.store';
import useSelectStore from '../stores/selectmanager.store';
import localStorageUtil from '../utils/localStorage';

// Stores
const linkmanagerStore = useLinkmanagerStore();
const selectStore = useSelectStore();

// Computed
const searchQuery = computed(() => selectStore.searchQuery.toLowerCase());

const linkList = computed(() => {
  let linkList: LinkPreview[];

  if (selectStore.activeTagId !== null) {
    linkList = linkmanagerStore.linkList.filter(linkItem =>
      linkItem.tagList.some(tag => tag.id === selectStore.activeTagId)
    );
  } else {
    linkList = linkmanagerStore.linkList;
  }

  if (searchQuery.value !== '') {
    linkList = linkList.filter(
      linkItem =>
        linkItem.href.includes(searchQuery.value) ||
        linkItem.text.toLowerCase().includes(searchQuery.value) ||
        linkItem.title.toLowerCase().includes(searchQuery.value)
    );
  }

  return linkList;
});

function handlePasteEvent(ev: ClipboardEvent): void {
  const clipboardData = ev.clipboardData;

  if (!(clipboardData && clipboardData.types.indexOf('text/plain') !== -1)) {
    return;
  }

  linkmanagerStore
    .fetchNewLink(clipboardData.getData('text/plain'))
    .then(() => {
      localStorageUtil.linkmanager.saveList(linkList.value);
    });
}

// Hooks
onMounted(() => {
  document.addEventListener('paste', handlePasteEvent);
});

onUnmounted(() => {
  document.removeEventListener('paste', handlePasteEvent);
});
</script>

<template>
  <div class="link-manager">
    <LinkManagerEmpty v-if="linkList.length === 0" />
    <div
      v-else
      class="link-manager-browser"
    >
      <LinkManagerItem
        v-for="link in linkList"
        :key="link.id"
        class="link-manager-browser__item"
        :item-id="link.id"
        :title="link.title"
        :favicon="link.favicon"
        :href="link.href"
        :theme-color="link.themeColor"
        :text="link.text"
        :tag-list="link.tagList"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.link-manager {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.link-manager-browser {
  padding: 24px 64px;

  &__item + &__item {
    margin-top: 12px;
  }
}
</style>

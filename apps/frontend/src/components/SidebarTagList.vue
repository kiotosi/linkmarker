<script setup lang="ts">
import { computed } from 'vue';
import TagMain from './TagMain.vue';
import useSelectStore from '../stores/selectmanager.store';
import useLinkmanagerStore from '../stores/linkmanager.store';

const selectStore = useSelectStore();
const linkmanagerStore = useLinkmanagerStore();

// Computed values
const tagList = computed(() => selectStore.tagList);
const linkList = computed(() => linkmanagerStore.linkList);
const activeTagId = computed(() => selectStore.activeTagId);

function deleteTag(id: number): void {
  // Delete from tag store
  const tagIndex = tagList.value.findIndex(tag => tag.id === id);
  if (tagIndex !== -1) {
    tagList.value.splice(tagIndex, 1);
  }

  // Delete from link store
  linkList.value.forEach(linkItem => {
    const tagIndex = linkItem.tagList.findIndex(tag => tag.id == id);
    if (tagIndex !== -1) {
      linkItem.tagList.splice(tagIndex, 1);
    }
  });
}
</script>

<template>
  <div class="sidebar-tag-list">
    <div class="sidebar-tag-list__header">
      Tags
    </div>
    <ul class="sidebar-tag-list__taglist taglist">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        class="taglist__item"
      >
        <TagMain
          :name="tag.name"
          :tag-id="tag.id"
          :is-active="tag.id === activeTagId"
          @delete="deleteTag(tag.id)"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.sidebar-tag-list {
  &__header {
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
  }

  &__taglist {
    margin-top: 8px;
  }
}

.taglist {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

<script setup lang="ts">
import type { TagList } from 'linkmarker';
import { computed } from 'vue';
import TagMain from './TagMain.vue';
import useLinkmanagerStore from '../stores/linkmanager.store';

const linkmanagerStore = useLinkmanagerStore();
const linkList = computed(() => linkmanagerStore.linkList);

interface LinkManagerItemTagListProps {
  tags: TagList;
  linkId: number;
}

const props = defineProps<LinkManagerItemTagListProps>();

function deleteTag(id: number): void {
  const linkItem = linkList.value.find(
    linkItem => linkItem.id === props.linkId
  );

  if (linkItem) {
    const tagIndex = linkItem.tagList.findIndex(tag => tag.id == id);
    if (tagIndex !== -1) {
      linkItem.tagList.splice(tagIndex, 1);
    }
  }
}
</script>

<template>
  <ul class="link-manager-tag-list">
    <li
      v-for="tag in tags"
      :key="tag.id"
      class="tag-list__item"
    >
      <TagMain
        :tag-id="tag.id"
        :name="tag.name"
        @delete="deleteTag(tag.id)"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.link-manager-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>

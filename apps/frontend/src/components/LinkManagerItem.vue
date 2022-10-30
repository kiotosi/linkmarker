<script setup lang="ts">
import type { TagList } from 'linkmarker';
import { onMounted, ref, capitalize, computed } from 'vue';
import escapeText from '../utils/textEncode';
import LinkManagerItemTagList from './LinkManagerItemTagList.vue';
import useLinkmanagerStore from '../stores/linkmanager.store';
import ModalAddTag from './Modal/ModalAddTag.vue';

// Stores
const linkmanagerStore = useLinkmanagerStore();
const linkList = computed(() => linkmanagerStore.linkList);

// Reference for core element
const linkManagerItem = ref<HTMLElement | null>(null);

// Modal
const isModalShowed = ref(false);

// Props
interface Props {
  title: string;
  href: string;
  favicon: string;
  text: string;
  themeColor: string;
  tagList: TagList;
  itemId: number;
}

const props = defineProps<Props>();

// Hooks
onMounted(async () => {
  // Settings background
  if (!linkManagerItem.value) {
    return;
  }

  linkManagerItem.value.style.backgroundColor = props.themeColor;
});

function openLink() {
  window.open(props.href, '_BLANK');
}

function deleteLink(id: number) {
  const linkItemIndex = linkList.value.findIndex(
    linkItem => linkItem.id === id
  );
  if (linkItemIndex !== -1) {
    linkList.value.splice(linkItemIndex, 1);
  }
}

function toggleModal(isActive: boolean): void {
  isModalShowed.value = isActive;
}
</script>

<template>
  <div
    ref="linkManagerItem"
    class="link-manager-item"
    @click.prevent="openLink"
    @contextmenu.prevent="deleteLink(itemId)"
  >
    <div class="link-manager-item__title">
      {{ capitalize(title) }}
    </div>
    <div class="link-manager-item__link link">
      <img
        class="link__favicon"
        :style="{ display: favicon ? 'block' : 'none' }"
        :src="favicon"
      >
      <div class="link__source">
        {{ href }}
      </div>
    </div>
    <div
      class="link-manager-item__description"
      v-text="capitalize(escapeText(text))"
    />
    <div
      class="link-manager-item__add-button"
      @click.stop="toggleModal(true)"
    >
      +
    </div>
    <LinkManagerItemTagList
      :link-id="itemId"
      :tags="tagList"
      class="link-manager-item__tag-list"
    />
    <Teleport to="#modal">
      <ModalAddTag
        v-show="isModalShowed"
        :item-id="itemId"
        @close="toggleModal(false)"
      />
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.link-manager-item {
  position: relative;
  width: 100%;
  min-height: 184px;
  border-radius: 8px;
  padding: 24px;
  color: var(--color-basic-2);
  cursor: pointer;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0.75%,
    rgba(217, 217, 217, 0) 155.41%
  );

  &__title {
    font-size: 32px;
    font-weight: 600;
    max-width: 890px;
  }

  &__link {
    margin-top: 8px;
  }

  &__description {
    margin-top: 12px;
    font-size: 14px;
    white-space: pre-line;
  }

  &__tag-list {
    position: absolute;
    right: 24px;
    bottom: 24px;
  }

  &__add-button {
    position: absolute;
    background-color: var(--color-basic-5);
    color: var(--color-basic-12);
    border-radius: 4px;
    font-size: 12px;
    padding: 2px 8px;
    line-height: 20px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 8;
    right: 24px;
    top: 24px;

    &:hover {
      background-color: var(--color-basic-4);
    }
  }
}

.link {
  display: flex;
  color: var(--color-basic-5);
  font-size: 14px;

  &__favicon {
    width: 14px;
    height: 14px;
    display: none;
    margin-right: 8px;
    border-radius: 4px;
  }
}
</style>

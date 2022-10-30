<script setup lang="ts">
import ModalMain from './ModalMain.vue';
import { computed, ref } from 'vue';
import useLinkmanagerStore from '../../stores/linkmanager.store';
import useSelectStore from '../../stores/selectmanager.store';
import localStorageUtil from '../../utils/localStorage';

// Refs
const name = ref('');

// Stores
const linkmanagerStore = useLinkmanagerStore();
const selectStore = useSelectStore();

// Emits
const emit = defineEmits(['close']);

// Props
const props = defineProps<{ itemId: number }>();

// Computed values
const linkList = computed(() => linkmanagerStore.linkList);
const currentLinkItem = computed(() =>
  linkList.value.find(item => item.id === props.itemId)
);
const tagList = computed(() => selectStore.tagList);
const isValid = computed(() => {
  return !(
    name.value.trim() == '' ||
    currentLinkItem?.value?.tagList.some(
      tag => tag.name.toLowerCase() === name.value.toLowerCase()
    )
  );
});

/**
 * Add tag to the tag list
 * @param name Name of the tag
 */
function addTag(name: string): void {
  const foundedTag = tagList.value.find(tag => tag.name === name);

  if (foundedTag && currentLinkItem.value) {
    currentLinkItem.value.tagList.push(foundedTag);
    localStorageUtil.linkmanager.saveList(linkList.value);
    emit('close');
    return;
  }

  const currentTag = {
    id: Date.now(),
    name,
  };

  if (currentLinkItem.value) {
    currentLinkItem.value.tagList.push(currentTag);
    tagList.value.push(currentTag);
    localStorageUtil.linkmanager.saveList(linkList.value);
    localStorageUtil.tagmanager.saveList(tagList.value);
  }

  emit('close');
}
</script>

<template>
  <ModalMain @close="$emit('close')">
    <div class="modal-add-tag">
      <div class="modal-add-tag__header">
        Add tag
      </div>
      <div class="model-add-tag__input input">
        <span class="input__tag">#</span>
        <input
          v-model="name"
          placeholder="Example"
          spellcheck="false"
          type="text"
          class="input__text"
        >
      </div>
      <button
        class="modal-add-tag__accept"
        :disabled="!isValid"
        @click="addTag(name)"
      >
        Add
      </button>
    </div>
  </ModalMain>
</template>

<style scoped lang="scss">
.modal-add-tag {
  width: 290px;
  padding: 24px 36px;

  &__header {
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
  }

  &__input {
    margin-top: 18px;
  }

  &__accept {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    margin-top: 18px;
    outline: none;
    border: none;
    font-size: 14px;
    background-color: var(--color-blue-300);
    color: var(--color-basic-4);
    cursor: pointer;

    &[disabled] {
      background-color: var(--color-basic-7);
    }
  }
}

.input {
  &__tag {
    color: var(--color-basic-4);
    font-size: 14px;
  }

  &__text {
    padding: 10px;
    width: 100%;
    background-color: var(--color-basic-4);
    outline: none;
    border: none;
    border-radius: 4px;
    color: var(--color-basic-10);

    &::placeholder {
      color: var(--color-basic-7);
    }
  }
}
</style>

<script setup lang="ts">
import { capitalize } from 'vue';
import useSelectStore from '../stores/selectmanager.store';

const selectStore = useSelectStore();

const emit = defineEmits(['delete']);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  tagId: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});

function selectTag(): void {
  if (selectStore.activeTagId === props.tagId) {
    selectStore.activeTagId = null;
  } else {
    selectStore.activeTagId = props.tagId;
  }
}
</script>

<template>
  <div
    class="tag"
    :class="{ tag_active: isActive }"
    @click.stop="selectTag"
    @contextmenu.stop.prevent="$emit('delete')"
  >
    #{{ capitalize(name) }}
  </div>
</template>

<style scoped lang="scss">
.tag {
  display: inline-block;
  background-color: var(--color-basic-5);
  color: var(--color-basic-12);
  border-radius: 4px;
  font-size: 12px;
  max-width: 200px;
  padding: 2px 8px;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
  }

  &_active {
    background-color: var(--color-blue-100);
    color: var(--color-blue-700);
  }
}
</style>

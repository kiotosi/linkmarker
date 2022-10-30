<script setup lang="ts">
import { ref, watch } from 'vue';
import useSelectStore from '../stores/selectmanager.store';

// Store
const selectStore = useSelectStore();

// Refs
const searchQuery = ref('');

// Watch
watch(searchQuery, (value: string) => {
  selectStore.searchQuery = value;
});
</script>

<template>
  <div class="sidebar-search">
    <div class="sidebar-search__header">
      Search
    </div>
    <input
      v-model="searchQuery"
      placeholder="Search for something.."
      type="text"
      class="sidebar-search__input"
    >
  </div>
</template>

<style scoped lang="scss">
.sidebar-search {
  font-size: 12px;
  color: var(--color-basic-12);

  &__header {
    font-weight: bold;
    line-height: 20px;
  }

  &__input {
    margin-top: 8px;
    padding: 10px;
    outline: none;
    border: none;
    width: 100%;
    border-radius: 4px;
    font-size: 14px;
    color: var(--color-basic-12);
    background-color: var(--color-basic-4);

    &::placeholder {
      font-size: 14px;
      color: var(--color-basic-7);
    }
  }
}
</style>

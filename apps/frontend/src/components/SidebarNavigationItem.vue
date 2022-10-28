<script setup lang="ts">
import type { FunctionalComponent, VNodeProps, HTMLAttributes } from 'vue';

export interface SidebarNavigationItemProps {
  title: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>;
  isActive?: boolean;
  path: string;
}

defineProps<SidebarNavigationItemProps>();
</script>

<template>
  <li>
    <RouterLink :to="path">
      <div
        class="sidebar-navigation-item"
        :class="{ 'sidebar-navigation-item_active': isActive }"
      >
        <component :is="icon" class="sidebar-navigation-item__icon" />
        <span class="sidebar-navigation-item__text">
          {{ title }}
        </span>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped lang="scss">
.sidebar-navigation-item {
  display: flex;
  align-items: center;
  padding: 9px 10px;
  color: var(--color-basic-12);
  cursor: pointer;
  user-select: none;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-basic-4);
  }

  &_active {
    background-color: var(--color-basic-5);

    &:hover {
      background-color: var(--color-basic-6);
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__text {
    margin-left: 8px;
  }
}
</style>

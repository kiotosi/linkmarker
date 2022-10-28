<script setup lang="ts">
import type { SidebarNavigationItemProps } from './SidebarNavigationItem.vue';
import SidebarNavigationItem from './SidebarNavigationItem.vue';
import {
  HomeIcon,
  UserIcon,
  InformationCircleIcon,
} from '@heroicons/vue/24/solid';
import { useRouter } from 'vue-router';

const router = useRouter();

const navgationList: Array<SidebarNavigationItemProps> = [
  {
    title: 'Home',
    icon: HomeIcon,
    path: '/',
  },
  {
    title: 'Account',
    icon: UserIcon,
    path: '/auth',
  },
  {
    title: 'About',
    icon: InformationCircleIcon,
    path: '/about',
  },
];
</script>

<template>
  <nav class="sidebar-navigation">
    <ul class="sidebar-navigation__list sidebar-navigation-list">
      <SidebarNavigationItem
        v-for="(item, index) in navgationList"
        :key="index"
        class="sidebar-navigation-list__item"
        :is-active="item.path === router.currentRoute.value.path"
        v-bind="item"
      />
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.sidebar-navigation {
  &__list {
    margin: 0;
  }
}

.sidebar-navigation-list {
  padding: 0;
  list-style-type: none;

  &__item + &__item {
    margin-top: 12px;
  }
}
</style>

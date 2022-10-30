<script setup lang="ts">
import { ArchiveBoxIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="link-manager-empty">
    <ArchiveBoxIcon class="link-manager-empty__icon" />
    <div class="link-manager-empty__text">
      Your link manager is empty.<br>Add link by pressing
      <code>Ctrl + V</code> or with input above this screen.
    </div>
  </div>
</template>

<style scoped lang="scss">
.link-manager-empty {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-basic-7);
  font-size: 14px;
  &__icon {
    width: 96px;
    height: 96px;
  }

  &__text {
    margin-top: 1rem;
    text-align: center;
    line-height: 150%;
  }
}
</style>

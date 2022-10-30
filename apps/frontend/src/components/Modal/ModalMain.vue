<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
const emit = defineEmits(['close']);
const maskRef = ref<HTMLElement | null>(null);

function closeModal(ev: MouseEvent): void {
  if (ev.target == maskRef.value) {
    emit('close');
  }
}

onMounted(() => {
  if (maskRef.value) {
    maskRef.value.addEventListener('click', closeModal);
  }
});

onUnmounted(() => {
  if (maskRef.value) {
    maskRef.value.removeEventListener('click', closeModal);
  }
});
</script>

<template>
  <div
    ref="maskRef"
    class="mask"
  >
    <div class="modal-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.mask {
  position: absolute;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.15);
}

.modal-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-basic-3);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.08);
  z-index: 11;
}
</style>

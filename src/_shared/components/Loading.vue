<template>
  <div v-if="isLoading" class="content-spinner">
    <div class="loading-spinner" />
  </div>
</template>

<script>
import { isLoading } from '@/_shared/utils/LoadingUtils';

export default {
  computed: {
    isLoading() {
      return isLoading.value;
    }
  }
};
</script>

<style scoped>
.content-spinner {
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  left: 0;
  height: 100vh;
  top: 0;
  text-align: center;
  z-index: 1;
}

.loading-spinner {
  transform: translate(-50%, -50%);
  border: 8px solid var(--vt-c-black);
  border-top: 8px solid var(--primary);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin-2f55b8c1 2s linear infinite;
  margin: auto;
  top: 0;
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

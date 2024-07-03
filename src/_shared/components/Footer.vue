<template>
  <footer>
    <div class="container container-footer">
      <div>Version: {{ version }}</div>
      <div>Api Utilizada: <a href="https://api.nasa.gov">Nasa APIs</a></div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      version: import.meta.env.VITE_VERSION
    };
  }
};
</script>

<style scoped>
footer {
  padding: 15px;
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.container-footer {
  display: flex;
  justify-content: space-between;
}
</style>

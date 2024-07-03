<script setup lang="ts">
import { RouterView } from 'vue-router';
import Loading from './_shared/components/Loading.vue';
import Header from './_shared/components/Header.vue';
import Footer from './_shared/components/Footer.vue';

</script>

<template>
  <Loading />
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>

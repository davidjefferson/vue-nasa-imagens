<script>
import { formatDate } from '@/_shared/utils/DateUtils';

export default {
  data() {
    return {
      objectImage: ''
    };
  },
  created() {
    this.objectImage = JSON.parse(localStorage.getItem('objectImage'));
  },
  methods: {
    formatDate
  }
};
</script>

<template>

  <main class="container">

    <router-link to="/" class="btn-back">
      <img src="../../assets/svg/arrow.svg" alt="Semana Anterior">
      Voltar
    </router-link>

    <div class="card content-details">
      <div class="media">
        <figure v-if="objectImage.media_type == 'image'">
          <img :src="objectImage.url" alt="Imagem">
        </figure>

        <iframe v-if="objectImage.media_type == 'video'" :src="objectImage.url" width="1280" height="720"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="details">
        <h1>{{ objectImage.title }}</h1>
        <p class="description">{{ objectImage.explanation }}</p>
        <p class="description">{{ objectImage.copyright }}</p>
        <p class="description">{{ formatDate(new Date(objectImage.date), 'dd/MM/yyyy') }}</p>
        <p class="description">
          <a :href="objectImage.url">{{ objectImage.url }}</a>
        </p>
      </div>
    </div>
  </main>

</template>

<style>
.content-details {
  display: flex;
  position: relative;
  gap: 30px;
  margin-top: 20px;
}

.content-details>div {
  flex: 1;
  width: 50%;
}

.content-details.card {
  margin-bottom: 50px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h1 {
  font-size: 20px;
}

.description {
  text-align: justify;
  font-size: 12px;
  word-wrap: break-word;
}

figure,
iframe {
  margin-top: 8px;
}

figure img {
  width: 100%;
  height: auto;
}

iframe {
  width: 485px;
  height: 340px;
}

.btn-back {
  display: flex;
  color: var(--vt-c-white);
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media(max-width: 1024px) {
  .content-details {
    flex-direction: column;
  }

  .content-details>div {
    width: auto;
  }
}
</style>

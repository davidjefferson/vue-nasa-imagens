<template>
  <div class="card result-item">
    <figure v-if="image.media_type == 'image'">
      <img :src="image.url" alt="Imagem">
    </figure>

    <iframe v-if="image.media_type == 'video'" :src="image.url" width="300" height="200" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <div>
      <h3>{{ image.title }}</h3>
      <p>
        {{ image.explanation.length > 500 ? image.explanation.substring(0, 500) + '...' : image.explanation }}
      </p>
      <p>
        {{ formatDate(new Date(image.date), 'dd/MM/yyyy') }}
      </p>
      <div class="content-button">
        <button class="btn-primary" @click="verDetalhes(image)">
          Ver Detalhes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/_shared/utils/DateUtils';

export default {
  name: 'HomeSearchItemView',
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  methods: {
    verDetalhes(image) {
      localStorage.setItem('objectImage', JSON.stringify(image));
      this.$router.push({ name: 'details' });
    },
    formatDate
  }
};

</script>

<style scoped>
.result-item {
  display: flex;
  flex-direction: row;
}

iframe,
figure {
  min-width: 300px;
  width: 300px;
  height: 200px;
  overflow: hidden;
  margin-right: 20px;
  margin-top: 8px;
  background: var(--vt-c-black);
}

figure img {
  width: 100%;
  height: auto;
  min-height: 100%;
}

p {
  font-size: 12px;
  opacity: 0.8;
}

.btn-primary,
.content-button {
  margin-top: 5px;
}

@media(max-width: 1024px) {
  .result-item {
    flex-direction: column;
    align-items: center;
  }

  .result-item h3 {
    margin-top: 15px
  }

  .result-item p {
    display: none;
  }

  .content-button {
    text-align: center;
  }
}
</style>
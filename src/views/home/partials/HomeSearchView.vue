<script>
import ImageService from '@/_shared/services/ImageService';
import HomeSearchItemView from './HomeSearchItemView.vue';
import NotFound from "@/_shared/components/NotFound.vue";
import { formatDate } from '@/_shared/utils/DateUtils';

export default {
  components: {
    HomeSearchItemView,
    NotFound
  },
  data() {
    return {
      images: [],
      startDate: new Date(),
      endDate: new Date(),
    };
  },
  created() {
    this.startDate.setDate(this.startDate.getDate() - 7);
    this.fetchImages();
  },

  methods: {
    fetchImages() {
      const formattedStartDate = this.startDate.toISOString().split('T')[0];
      const formattedEndDate = this.endDate.toISOString().split('T')[0];

      ImageService.getImages(formattedStartDate, formattedEndDate)
        .then((response) => {
          this.images = response.data;
        })
        .catch((error) => {
          this.images = [];
        });
    },
    next() {
      this.startDate.setDate(this.startDate.getDate() + 7);
      this.endDate.setDate(this.endDate.getDate() + 7);
      this.fetchImages();
    },
    prev() {
      this.startDate.setDate(this.startDate.getDate() - 7);
      this.endDate.setDate(this.endDate.getDate() - 7);
      this.fetchImages();
    },
    formatDate
  },
};
</script>


<template>

  <div>
    <h2>Galeria de Imagens</h2>
    <div class="paginator-details">
      Mostrando de {{ formatDate(startDate, 'dd/MM/yyyy') }} até {{ formatDate(endDate, 'dd/MM/yyyy') }}
    </div>

    <div class="grid-itens">
      <div v-if="images.length">
        <ul>
          <li v-for="image in images" :key="image.id">
            <HomeSearchItemView :image="image" />
          </li>
        </ul>
      </div>

      <NotFound v-if="images.length === 0 && !isLoading" />
    </div>

    <div class="paginator">
      <a @click="prev">
        <img src="./../../../assets/svg/arrow.svg" alt="Semana Anterior">
        Semana Anterior
      </a>
      <a @click="next">
        Próxima Semana
        <img src="./../../../assets/svg/arrow.svg" alt="Semana Anterior">
      </a>
    </div>
  </div>

</template>


<style scoped>
.grid-itens {
  min-height: 500px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: grid;
  margin-bottom: 20px;
}

.paginator {
  display: flex;
  justify-content: space-between;
}

.paginator a {
  display: flex;
  color: #fff;
  margin: 50px 0;
}

.paginator a:last-child img {
  transform: rotate(180deg);
}

.paginator-details {
  margin: 0px 0 20px 0;
  font-size: 12px;
  font-style: italic
}
</style>
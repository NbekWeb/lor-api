<template>
  <div class="relative">
    <h3
      class="mt-32 mb-20 text-5xl font-semibold text-black font-unbounded max-md:text-xl max-md:mt-16"
    >
      Наши доктора
    </h3>
    <div class="swiper-container heroSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of data" :key="item.id">
          <Doctor :item="item" />
        </div>
      </div>
      <div class="absolute swiper-pagination bottom-20"></div>
    </div>
  </div>
</template>

<script>
import Doctor from "./doctor-card.vue";
import Swiper, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "якубов режаббой фарходович",
          job: "Главный доктор оториноларинголог",
        },
        {
          id: 2,
          name: "Киргизбоев Ботир Тохирович",
          job: "Главный доктор оториноларинголог",
        },
        {
          id: 3,
          name: "Тохиров Бобур Ботирович",
          job: "Главный доктор оториноларингологг",
        },
      ],
      swiperDoc: null,
    };
  },
  components: {
    Doctor,
  },
  mounted() {
    Swiper.use([Pagination, Autoplay]);
    this.swiper = new Swiper(".heroSwiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  },
};
</script>

<style scoped>
.swiper-container-horizontal > .swiper-pagination-bullets {
  margin-bottom: 100px;
}
@media (max-width: 768px) {
  .swiper-container-horizontal > .swiper-pagination-bullets {
    margin-bottom: 70px;
  }
}
</style>

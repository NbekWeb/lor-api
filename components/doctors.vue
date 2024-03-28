<template>
  <div class="relative">
    <h3
      class="mt-32 mb-20 text-5xl font-semibold text-black font-unbounded max-md:text-xl max-md:mt-16"
    >
      Наши доктора
    </h3>
    <div class="swiper-container heroSwiperDoc">
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
    };
  },
  components: {
    Doctor,
  },
};
</script>



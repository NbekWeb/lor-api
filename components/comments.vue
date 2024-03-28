<template>
  <div class="my-32 comment max-md:my-16">
    <div class="flex items-center justify-between w-full mb-14">
      <h3
        class="text-5xl font-semibold text-black font-unbounded max-md:text-xl"
      >
        Отзывы
      </h3>
      <div class="flex gap-5">
        <button
          class="flex items-center justify-center border max-md:h-12 rounded-xl bg-blue hover:bg-white border-blue h-14 w-14 max-md:w-12 swiper-button-next"
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66663 1.3335L1.33329 8.00016L6.66663 14.6668"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          class="flex items-center justify-center rotate-180 border swiper-button-prev rounded-xl bg-blue hover:bg-white border-blue max-md:h-12 h-14 w-14 max-md:w-12"
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66663 1.3335L1.33329 8.00016L6.66663 14.6668"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="swiper-container heroSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of data" :key="item.id">
          <Comment :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from "./comment-card.vue";
import { Swiper, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Солиха Абдурашидова",
          context:
            "ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит все процедуры. Медсестры тоже замечательные, всегда внимательны и аккуратны. Сама клиника всегда чистая, светлая и приятный персонал(ни разу не видела грубости с их стороны, даже во времена карантина, когда все люди были нервными и уставшими).",
          date: "23.02.2023",
          tags: ["Отит", "Болезни слюнных желез"],
        },
        {
          id: 2,
          name: "Шамсиддин Тухтамурадов",
          context:
            "ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит",
          date: "23.02.2023",
          tags: ["Болезни слюнных ", "Серные пробки"],
        },
        {
          id: 3,
          name: "Акмал Абдулаев ",
          context:
            "ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит все процедуры. Медсестры тоже замечательные, всегда внимательны и аккуратны. Сама клиника всегда чистая,",
          date: "23.02.2023",
          tags: ["Повреждения барабанной ;", "желез"],
        },
      ],
      swiper: null,
    };
  },
  components: {
    Comment,
  },
  mounted() {
    this.swiper = new Swiper(".heroSwiper", {
      slidesPerView: 1,
      modules: [Navigation, Autoplay],
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
<style>
.comment button:hover svg path {
  stroke: #3c4bdc;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after,
.swiper-button-next:after {
  content: "" !important;
}

.swiper-button-prev,
.swiper-button-next {
  position: static;

  width: 56px !important;
  height: 56px !important;
  margin-top: 0px !important;
}
@media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px !important;
    height: 40px !important;
  }
}
</style>

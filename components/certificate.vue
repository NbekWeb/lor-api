<template>
  <div class="relative w-full mb-24 mt-52 max-md:mt-16 max-md:mb-0">
    <div
      class="mb-12 leading-4 text-center text-s px-52 text-grey max-md:mb-6 max-md:text-min max-md:px-0"
    >
      <h3
        class="text-5xl font-semibold text-blue mb-7 font-unbounded max-md:text-xl max-md:mb-2"
      >
        Сертификаты и лицензии
      </h3>
      <p>
        Мы знаем, что такое долг перед обществом, консеквент, принимающий
        решения, и мы делаем все возможное, чтобы избежать последствий,
        связанных с трудом и великой скорбью.
      </p>
    </div>

    <div class="swiper-container customSwiper">
      <div class="swiper-wrapper">
        <div v-for="item in certificates" :key="item?.id" class="swiper-slide">
          <div
            class="p-[10px] border rounded-lg border-blue flex items-center justify-center max-md:p-[5px]"
          >
            <!-- <div class="lightgallery-item"> -->
            <img
              :src="item?.image"
              :alt="item?.title"
              class="w-full h-auto rounded-md"
            />
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 swiper-pagination customPagination"></div>
    </div>
  </div>
</template>

<script>
import { Pagination, Navigation, Autoplay, Swiper } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  props: {
    certificates: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    const swiper = new Swiper(".customSwiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 2,
      spaceBetween: 24,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: ".customPagination",
        type: "bullets",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
      },
    });
  },
};
</script>

<template>
  <div class="w-full py-12 mt-24 border-t border-bor max-md:py-6 max-md:mt-4">
    <h1 class="w-full pb-5 text-6xl text-black max-md:text-2xl">
      <div class="mb-3 font-medium font-unbounded">КРУГЛОСУТОЧНЫЙ</div>
      <div class="font-medium font-unbounded">ПРЕМИАЛЬНЫЙ ЛОР В ТАШКЕНТЕ</div>
    </h1>
    <div class="flex flex-row w-full gap-6 text-grey max-md:flex-col">
      <div
        class="w-[544px] max-md:w-full h-[606px] max-md:h-[370px] bg-white flex flex-col gap-y-10 justify-center items-center rounded-3xl mb-4"
      >
        <div class="w-[357px] max-md:w-[281px]">
          <div class="">
            <div class="swiper-container heroSwiper">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in slideImages1"
                  :key="index"
                  class="swiper-slide"
                >
                  <img
                    :src="require(`@/assets/img/${item}.png`)"
                    :alt="item"
                    class="object-cover w-full h-[357px] rounded-full max-md:h-[281px]"
                  />
                </div>
              </div>
              <div class="absolute bottom-0 swiper-pagination heroPagination"></div>
            </div>
            <!-- <div class="swiper-pagination"></div> -->
            <p
              class="mt-12 text-3xl text-center max-md:text-xs max-md:leading-4"
            >
              Врачи — кандидаты и доктора наук
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-[544px] h-[606px] flex flex-col justify-between max-md:w-full max-md:h-[202px] max-md:flex-row max-md:gap-x-4"
      >
        <div
          class="w-full bg-white max-md:w-1/2 h-[291px] px-10  text-center max-md:h-full  max-md:px-1 flex flex-col justify-center"
        >
          <img
            src="@/assets/img/pasient.png"
            alt="bemorlar soni"
            class="w-full h-auto px-2"
          />
          <p class="mt-8 text-2xl max-md:text-min max-md:leading-4 max-md:mt-4">
            Довольных Пациентов
          </p>
        </div>
        <div
          class="w-full p-6 max-md:p-3 h-[291px] max-md:h-full max-md:w-1/2 flex flex-col items-center justify-center bg-white rounded-xl"
        >
          <div class="w-full">
            <div class="swiper-container heroSwiper">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in slideImages2"
                  :key="index"
                  class="mt-4 swiper-slide"
                >
                  <img
                    :src="require(`@/assets/img/${item}.png`)"
                    :alt="item"
                    class="object-cover w-full h-auto rounded-lg max-md:h-[164px] "
                  />
                </div>
              </div>
              <div class="absolute bottom-0 swiper-pagination heroPagination"></div>
            </div>
            <p class="mt-6 text-2xl max-md:text-min max-md:leading-3 max-md:mt-2">
              Довольных Пациентов 
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-[544px] h-[606px] rounded-xl bg-blue flex flex-col justify-between py-20 px-6 items-start max-md:w-full max-md:h-[221px] max-md:py-10"
      >
        <div class="px-8 max-md:px-6">
          <img src="@/assets/img/logo.png" alt="logo" class="w-full h-auto" />
        </div>
        <p
          class="flex w-2/3 text-2xl text-left text-white max-md:w-full max-md:text-xs max-md:leading-6"
        >
          Самые лучшие - врачи и оборудование все для вашего здоровье
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Pagination, Navigation, Autoplay, Swiper } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      slideImages1: ["doc-slide", "doc-slide2", "doc-slide3"],
      slideImages2: ["work-slide", "work-slide2", "work-slide3", "work-slide4"],
    };
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    const swiper = new Swiper(".heroSwiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      modules: [Navigation, Pagination, Autoplay],

      pagination: {
        el: ".heroPagination",
        type: "bullets",
        clickable: true,
      },
      autoplay: {
        delay: 2000,
      },
    });
  },
};
</script>

<style>
.swiper-pagination-bullet-active {
  background: #fff !important;
}
.swiper-container {
  width: 100%;
  height: auto;
  background: inherit;
}
.swiper-slide {
  width: 100%;
  text-align: center;
  font-size: 18px;
  background: inerit;
}
</style>

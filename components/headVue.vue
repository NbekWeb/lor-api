<template>
  <div class="w-full py-12 mt-24 border-t border-bor">
    <h1 class="w-full pb-5 text-6xl font-medium text-black">
      <div class="mb-3 font-unbounded">КРУГЛОСУТОЧНЫЙ</div>
      <div class="font-unbounded">ПРЕМИАЛЬНЫЙ ЛОР В ТАШКЕНТЕ</div>
    </h1>
    <div class="flex w-full gap-6 text-grey">
      <div
        class="w-[544px] h-[606px] bg-white flex flex-col gap-y-10 justify-center items-center rounded-3xl"
      >
        <div class="w-[357px]">
          <div class="">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in slideImages1"
                  :key="index"
                  class="swiper-slide"
                >
                  <img
                    :src="require(`@/assets/img/${item}.png`)"
                    :alt="item"
                    class="object-cover w-full h-[357px] rounded-full"
                  />
                </div>
              </div>
              <div class="absolute bottom-0 swiper-pagination"></div>
            </div>
            <!-- <div class="swiper-pagination"></div> -->
            <p class="mt-12 text-3xl text-center">
              Врачи — кандидаты и доктора наук
            </p>
          </div>
        </div>
      </div>

      <div class="w-[544px] h-[606px] flex flex-col justify-between">
        <img
          src="@/assets/img/pasient.png"
          alt="bemorlar soni"
          class="w-full h-auto"
        />
        <div
          class="w-full p-6 h-[291px] flex flex-col items-center justify-center bg-white rounded-xl"
        >
          <div class="w-full">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in slideImages2"
                  :key="index"
                  class="swiper-slide"
                >
                  <img
                    :src="require(`@/assets/img/${item}.png`)"
                    :alt="item"
                    class="object-cover w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div class="absolute bottom-0 swiper-pagination"></div>
            </div>
            <p class="mt-6 text-2xl">
              Современное оборудование и методики лечения
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-[544px] h-[606px] rounded-xl bg-blue flex flex-col justify-between py-20 px-6 items-center"
      >
        <img src="@/assets/img/logo.png" alt="logo" class="w-full h-auto" />
        <div class="text-2xl text-left text-white">
          <p>Самые лучшие -</p>
          <p class="w-2/3">врачи и оборудование все для вашего здоровье</p>
        </div>
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

    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      modules: [Navigation, Pagination, Autoplay],

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
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

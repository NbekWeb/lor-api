import Vue from "vue";
import { Swiper as SwiperClass, Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

SwiperClass.use([Pagination, Navigation]);

Vue.component("Swiper", Swiper);
Vue.component("SwiperSlide", SwiperSlide);




import Vue from "vue";
import { Swiper as SwiperClass, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper";

import "swiper/swiper-bundle.css";

SwiperClass.use([Pagination, Navigation]);

Vue.component("Swiper", Swiper);
Vue.component("SwiperSlide", SwiperSlide);




<template>
  <div class="w-full mt-10">
    <h3 class="text-5xl font-semibold text-black font-unbounded max-md:text-xl">
      Запись на консульта­цию
    </h3>
    <div>
      <div
        class="flex flex-row mt-16 gap-x-36 max-md:mt-8 max-md:flex-col gap-y-4"
      >
        <div class="text-2xl leading-4 max-md:text-s">
          <p class="font-medium text-light-black font-unbounded">
            Режим работы
          </p>
          <div
            class="flex flex-col mt-6 text-xl text-bold-grey gap-y-3 max-md:text-min max-md:mt-3 max-md:gap-y-1 max-md:leading-4"
          >
            <p>Понедельник—четверг — с 08:00 до 16:00</p>
            <p>Суббота и воскресенье — выходные</p>
            <p>Пятница — с 08:00 до 13:00</p>
          </div>
          <div class="mt-12 max-md:mt-6">
            <p class="mb-6 font-unbounded max-md:mb-3">Адрес клиники</p>
            <p>Улица Богишамол 1</p>
          </div>
        </div>
        <div class="text-2xl leading-4 max-md:text-s">
          <p class="font-medium text-light-black font-unbounded">
            Телефоны для записи
          </p>
          <div class="flex flex-col mt-6 text-4xl text-blue gap-y-3 max-md:text-xl">
            <a href="tel:+998904388855">+998 90 438 88 55</a>
            <a href="tel:+998881080707">+998 88 108 07 07</a>
          </div>
          <div class="mt-12 max-md:mt-6">
            <p class="mb-6 font-unbounded max-md:mb-3">Электронная почта</p>
            <p>info@lor777.uz</p>
          </div>
        </div>
      </div>
    </div>
    <MapCard class="mt-20 mb-16" />
  </div>
</template>
<script>
import MapCard from "./map-card.vue";
export default {
  components: {
    MapCard,
  },
};
</script>
<style lang=""></style>

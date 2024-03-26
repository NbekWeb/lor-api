<template>
  <div class="w-full mt-10">
    <h3 class="text-5xl text-black">Запись на консульта­цию</h3>
    <div>
      <div class="flex gap-32 mt-16">
        <div class="text-2xl">
          <p class="font-medium text-light-black font-unbounded">
            Режим работы
          </p>
          <div class="mt-6 text-xl text-bold-grey">
            <p>Понедельник—четверг — с 08:00 до 16:00</p>
            <p>Суббота и воскресенье — выходные</p>
            <p>Пятница — с 08:00 до 13:00</p>
          </div>
        </div>
        <div class="text-2xl">
          <p class="font-medium text-light-black font-unbounded">
            Телефоны для записи
          </p>
          <div class="flex flex-col mt-6 text-4xl text-blue gap-y-3">
            <a href="tel:+998904388855">+998 90 438 88 55</a>
            <a href="tel:+998881080707">+998 88 108 07 07</a>
          </div>
        </div>
      </div>
      <div class="mt-11">
        <div
          class="flex gap-32 text-xl font-medium text-light-black font-unbounded"
        >
          <p>Адрес клиники</p>
          <p>Электронная почта</p>
        </div>
        <div class="flex gap-32 mt-6 text-grey">
          <p>Улица Богишамол 1</p>
          <p>info@lor777.uz</p>
        </div>
      </div>
    </div>
    <MapCard class="mt-20 mb-16"/>
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

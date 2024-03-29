<template>
  <div class="w-full mt-10">
    <h3 class="text-5xl font-semibold text-black font-unbounded max-md:text-xl">
      Запись на консульта­цию
    </h3>
    <div>
      <div
        class="flex flex-row h-auto mt-16 gap-x-36 max-md:mt-8 max-md:flex-col gap-y-4"
      >
        <div class="h-full text-2xl leading-4 max-md:text-s">
          <p class="font-medium text-light-black font-unbounded">
            Режим работы
          </p>

          <div
            class="flex flex-col mt-6 text-xl text-bold-grey gap-y-3 max-md:text-min max-md:mt-3 max-md:gap-y-1 max-md:leading-4"
          >
            <p>{{ workTimeParts[0] }}</p>
            <p>{{ workTimeParts[1] }}</p>
            <p>{{ workTimeParts[2] }}</p>
          </div>
          <div class="justify-end mt-12 max-md:mt-6 max-md:justify-start">
            <p class="mb-6 font-medium font-unbounded max-md:mb-3">
              Адрес клиники
            </p>
            <p>{{ staticInfo?.adres }}</p>
          </div>
        </div>
        <div class="h-full text-2xl leading-4 max-md:text-s">
          <p class="font-medium text-light-black font-unbounded">
            Телефоны для записи
          </p>

          <div
            class="flex flex-col mt-6 text-4xl text-blue gap-y-3 max-md:text-xl"
          >
            <a :href="'tel:' + phoneNumber[0]">{{ phoneNumber[0] }}</a>
            <a :href="'tel:' + phoneNumber[1]">{{ phoneNumber[1] }}</a>
          </div>
          <div class="mt-[62px] justify-end max-md:mt-6 max-md:justify-start">
            <p class="mb-6 font-medium font-unbounded max-md:mb-3">
              Электронная почта
            </p>
            <p>{{ staticInfo?.email }}</p>
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
  props: {
    staticInfo: { type: Object, required: true },
  },
  computed: {
    workTimeParts() {
      if (this.staticInfo?.work_time) {
        return this.staticInfo.work_time.split(",");
      } else {
        return ["", "", ""];
      }
    },
    phoneNumber() {
      if (this.staticInfo?.nbm) {
        return this.staticInfo.nbm.split(",");
      } else {
        return ["", ""];
      }
    },
  },
  components: {
    MapCard,
  },
};
</script>
<style lang=""></style>

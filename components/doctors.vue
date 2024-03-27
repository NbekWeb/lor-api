<template>
  <div>
    <h3
      class="mt-32 mb-20 text-5xl font-semibold text-black font-unbounded max-md:text-xl max-md:mt-16"
    >
      Наши доктора
    </h3>
    <div class="flex flex-row gap-16 max-md:flex-col">
      <Doctor  v-for="item in data" :key="item.id" :item="item" />
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
<style lang=""></style>

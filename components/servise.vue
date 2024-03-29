<template>
  <div>
    <h2
      class="mb-10 text-4xl font-semibold text-black font-unbounded max-md:text-xl max-md:leading-6 max-md:mb-4"
    >
      Наши услуги
    </h2>
    <div class="flex flex-col gap-y-6">
      <Card v-for="item in servises" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<script>
import Card from "./cardServise.vue";
export default {
  props: {
    servises: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: "Заболевания носа",
          context: "Заболевания носа и околоносовых пазух",
          tags: [
            "гайморит",
            "сфеноидит",
            "фронтит",
            "этмоидит",
            "этмоидит",
          ],
        },
        {
          id: 2,
          title: "Заболевания горла",
          context: "Заболевания горла",
          tags: ["ОРВИ", "Тонзиллит", "Фарингит", "этмоидит", "Ларингит"],
        },
        {
          id: 3,
          title: "Заболевания уха ",
          context: "Заболевания горла ",
          tags: [
            "Евстахиит",
            "Мастоидит",
            "Отиты и тимпаниты",
            "Отомикоз",
            "Ушная пробка",
            "Отосклероз",
          ],
        },
        {
          id: 4,
          title: "Оперативная отоларингология ",
          context: "Оперативная отоларингология ",
          tags: [
            "вазотомия нижних носовых раковин",
            "этмоидит",
            "септопластика",
            "гайморотомия",
          ],
        },
      ],
    };
  },

  components: {
    Card,
  },
};
</script>
<style lang=""></style>

<template>
  <div class="my-32 comment max-md:my-16">
    <h3 class="text-5xl font-semibold text-black font-unbounded max-md:text-xl">
      Отзывы
    </h3>
    <div class="flex flex-row gap-6 mb-10 mt-14 max-md:mt-9 max-md:mb-8">
      <Comment v-for="item of data" :key="item.id" :item="item" />
    </div>
    <div class="flex justify-center gap-6 mt-8">
      <button
        class="flex items-center justify-center border max-md:h-12 rounded-xl bg-blue hover:bg-white border-blue h-14 w-14 max-md:w-12"
      >
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66663 1.3335L1.33329 8.00016L6.66663 14.6668"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <button
        class="flex items-center justify-center rotate-180 border rounded-xl bg-blue hover:bg-white border-blue max-md:h-12 h-14 w-14 max-md:w-12"
      >
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66663 1.3335L1.33329 8.00016L6.66663 14.6668"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import Comment from "./comment-card.vue";
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Солиха Абдурашидова",
          context:
            "ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит все процедуры. Медсестры тоже замечательные, всегда внимательны и аккуратны. Сама клиника всегда чистая, светлая и приятный персонал(ни разу не видела грубости с их стороны, даже во времена карантина, когда все люди были нервными и уставшими).",
          date: "23.02.2023",
          tags: ["Отит", "Болезни слюнных желез"],
        },
        {
          id: 2,
          name: "Шамсиддин Тухтамурадов",
          context:
            "ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит",
          date: "23.02.2023",
          tags: ["Болезни слюнных желез", "Серные пробки"],
        },
        {
          id: 3,
          name: "Акмал Абдулаев ",
          context:
            "ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит все процедуры. Медсестры тоже замечательные, всегда внимательны и аккуратны. Сама клиника всегда чистая,",
          date: "23.02.2023",
          tags: ["Повреждения барабанной перепонки;", "Болезни слюнных желез"],
        },
      ],
    };
  },
  components: {
    Comment,
  },
};
</script>
<style>
.comment button:hover svg path {
  stroke: #3c4bdc;
}
</style>

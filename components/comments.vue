<template>
  <div class="my-32 comment ">
    <div class="flex items-center justify-between">
      <h3 class="text-5xl text-black">Отзывы</h3>
      <div class="flex gap-6">
        <button
          class="flex items-center justify-center border rounded-xl bg-blue hover:bg-white border-blue h-14 w-14"
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
          class="flex items-center justify-center rotate-180 border rounded-xl bg-blue hover:bg-white border-blue h-14 w-14"
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
    <div class="flex gap-6 mt-14">
        <Comment v-for="n of 4" :key="n"/>
    </div>
  </div>
</template>
<script>
import Comment from './comment-card.vue';
export default {
    components:{
        Comment
    }
};
</script>
<style>
.comment button:hover svg path {
  stroke: #3c4bdc;
}
</style>

<template>
  <div
    class="flex flex-col p-6 bg-white rounded-xl max-md:w-full max-md:h-auto comment-card"
  >
    <p class="flex items-start w-40 mb-6 gap-y-1 text-blue font-unbounded">
      {{ item?.title }}
    </p>
    <div class="flex gap-3 text-s text-grey">
      <div
        class="py-[10px] px-[14px] bg-back rounded-xl"
        v-for="tag of item?.illnesess"
        :key="tag?.id"
      >
        {{ tag?.title }}
      </div>
    </div>
    <div class="mt-4 mb-2 leading-4 text-black text-s" v-html="item?.text"></div>
    <span class="mt-auto text-grey">{{ item?.date }}</span>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
<style>
.comment-card {
  text-align: start !important;
  height: 382px !important;
}
</style>

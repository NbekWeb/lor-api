<template>
  <div
    class="w-[544px] h-[382px] p-6 flex flex-col bg-white rounded-xl max-md:w-full max-md:h-auto"
  >
    <p class="flex items-start w-40 mb-6 gap-y-1 text-blue font-unbounded">
      {{ item.name }}
    </p>
    <div class="flex gap-3 text-s text-grey">
      <div
        class="py-[10px] px-[14px] bg-back rounded-xl"
        v-for="tag of item.tags"
        :key="tag"
      >
        {{ tag }}
      </div>
    </div>
    <p class="mt-4 mb-2 leading-4 text-black text-s">
      {{ item.context }}
    </p>
    <span class="mt-auto text-grey">{{ item.date }}</span>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
<style lang=""></style>

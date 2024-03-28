<template>
  <div class="max-md:w-full">
    <img
      :src="require(`@/assets/img/doc${item.id}.png`)"
      alt=""
      class="w-full h-auto rounded-xl max-md:mt-4"
    />
    <div class="mt-8 leading-4 text-s text-grey">
      <p
        class="flex flex-col mb-3 text-xl font-semibold text-blue max-md:text-s max-md:leading-4"
      >
        {{ item.name }}
      </p>
      <p class="text-lg max-md:text-min max-md:leading-4">
        {{ item.job }}
      </p>
    </div>
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

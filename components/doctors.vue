<template>
  <div>
    <h3
      class="mt-32 mb-20 text-5xl font-semibold text-black font-unbounded max-md:text-xl max-md:mt-16"
    >
      Наши доктора
    </h3>
    <div class="flex gap-16">
      <Doctor />
      <Doctor class="max-md:hidden" />
      <Doctor class="max-md:hidden" />
    </div>
  </div>
</template>
<script>
import Doctor from "./doctor-card.vue";
export default {
  components: {
    Doctor,
  },
};
</script>
<style lang=""></style>

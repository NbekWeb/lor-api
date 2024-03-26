<template>
  <div>
    <h3 class="mb-16 text-5xl text-black">Наши доктора</h3>
    <div class="flex gap-16">
      <Doctor />
      <Doctor />
      <Doctor />
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

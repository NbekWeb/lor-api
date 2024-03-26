<template>
  <div>
    <h2 class="mb-10 text-4xl font-semibold text-black font-unbounded">Наши услуги</h2>
    <div class="flex flex-col gap-y-6">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script>
import Card from "./cardServise.vue";
export default {
  components: {
    Card,
  },
};
</script>
<style lang=""></style>

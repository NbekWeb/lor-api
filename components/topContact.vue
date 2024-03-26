<template>
  <div
    class="flex items-center justify-between w-full h-12 leading-4 text-light-black max-md:text-min max-md:leading-3 text-s font-unbounded"
  >
    <a
      class="flex items-center gap-2"
      target="_blank"
      :href="this.$store.state.loc"
    >
      <img src="@/assets/img/icon/location.svg" />
      <span>Улица Богишамол 1</span>
    </a>
    <a href="tel:+99888108070" class="flex items-center gap-2">
      <img src="@/assets/img/icon/call.svg" />
      <span>+998 88 108 07 07</span>
    </a>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>

<template>
  <div class="w-full bg-blue">
    <div
      class="container flex justify-around py-24 leading-4 text-white text-s"
    >
      <img src="@/assets/img/logo.png" alt="logo" class="w-auto h-14" />
      <div class="">
        <p class="mb-6 text-3xl">Главная</p>
        <div class="flex flex-col gap-y-3">
          <p>Наши услуги</p>
          <p>О нас</p>
          <p>Доктора</p>
          <p>Отзывы</p>
          <p>Контакт</p>
        </div>
      </div>
      <div>
        <p class="mb-6 text-3xl">Услуги</p>
        <div class="flex flex-col gap-y-3">
          <p>Лечения уха</p>
          <p>Лечения носа</p>
          <p>Лечения горла</p>
          <p>Лечения головы</p>
        </div>
      </div>
      <div>
        <p class="mb-6 text-3xl">Контакты</p>
        <div class="flex flex-col gap-y-8">
          <a
            target="_blank"
            :href="this.$store.state.loc"
            class="flex items-center gap-3"
          >
            <img
              src="@/assets/img/icon/location.svg"
              alt=""
              class="icon-white"
            />
            Улица Богишамол 1
          </a>
          <a href="mailto:info@lor777.uz" class="flex items-center gap-3">
            <img src="@/assets/img/icon/gmail.svg" alt="" class="icon-white" />
            info@lor777.uz
          </a>
          <a href="tel:+998881080707" class="flex items-center gap-3">
            <img src="@/assets/img/icon/call.svg" alt="" class="icon-white" />
            +998 88 108 07 07</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.icon-white {
  filter: brightness(0) invert(1) grayscale(100%) contrast(100%);
}
</style>

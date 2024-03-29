<template>
  <div class="w-full h-auto py-16 bg-blue">
    <div
      class="container flex flex-row justify-around py-24 mx-auto leading-4 text-white text-s max-md:py-16 max-md:flex-col max-md:gap-y-6 max-md:justify-start"
    >
      <div class="flex w-auto pr-0 max-md:w-full max-md:pr-20 h-14">
        <img src="@/assets/img/logo.png" alt="logo" class="w-full h-auto" />
      </div>
      <div>
        <p class="mb-6 text-3xl max-md:text-xl max-md:mb-4">Главная</p>
        <div class="flex flex-col gap-y-3 foot">
          <a href="#services">Наши услуги</a>
          <p>О нас</p>
          <p>Доктора</p>
          <p>Отзывы</p>
          <p>Контакт</p>
        </div>
      </div>
      <div>
        <p class="mb-6 text-3xl max-md:text-xl max-md:mb-4">Услуги</p>
        <div class="flex flex-col gap-y-3 foot">
          <p>Лечения уха</p>
          <p>Лечения носа</p>
          <p>Лечения горла</p>
          <p>Лечения головы</p>
        </div>
      </div>
      <div>
        <p class="mb-6 text-3xl max-md:text-xl max-md:mb-4">Контакты</p>
        <div class="flex flex-col gap-y-8 foot max-md:gap-y-4">
          <a
            target="_blank"
            :href="this.$store.state.loc"
            class="flex items-center gap-3"
          >
            <img src="@/assets/img/icon/loc.svg" alt="" class="icon-white" />
            {{ staticInfo?.adres }}
          </a>
          <a href="mailto:info@lor777.uz" class="flex items-center gap-3">
            <img src="@/assets/img/icon/gmail.svg" alt="" class="icon-white" />
            {{ staticInfo?.email }}
          </a>
          <a :href="'tel:' + phoneNumber[0]" class="flex items-center gap-2">
            <img src="@/assets/img/icon/call.svg" alt="" class="icon-white" />{{
              phoneNumber[0]
            }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    staticInfo: { type: Object, required: true },
  },
  computed: {
    phoneNumber() {
      if (this.staticInfo?.nbm) {
        return this.staticInfo.nbm.split(",");
      } else {
        return ["", ""];
      }
    },
  },
};
</script>
<style>
.icon-white {
  filter: brightness(0) invert(1) grayscale(100%) contrast(100%);
}

/* .foot p {
  margin-bottom: 18px;
} */

/* .foot a {
  margin-bottom: 32px;
} */

.foot a,
.foot p {
  color: #ebebeb;
}
/* .foot a:hover,
.foot p:hover {
  color:#fff;
} */
</style>

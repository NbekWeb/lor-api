<template>
  <div class="relative w-full mb-24 mt-52">
    <div class="mb-12 leading-4 text-center text-s px-52 text-grey">
      <h3 class="text-5xl font-medium text-blue mb-7 font-unbounded max-md:text-xl">
        Сертификаты и лицензии
      </h3>
      <p>
        Мы знаем, что такое долг перед обществом, консеквент, принимающий
        решения, и мы делаем все возможное, чтобы избежать последствий,
        связанных с трудом и великой скорбью.
      </p>
    </div>

    <div class="flex gap-6">
      <div
        class="p-[10px] border rounded-lg border-blue"
        v-for="n of 6"
        :key="n"
      >
        <img
          src="@/assets/img/sertifikat.png"
          alt="sertifikat"
          class="rounded-md w-240px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

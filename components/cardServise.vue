<template>
  <div class="flex w-full gap-10 p-6 bg-white rounded-xl service">
    <img src="@/assets/img/servise.png" alt="" class="w-auto h-full" />

    <div class="flex flex-col justify-between w-full py-4 text-grey">
      <p class="text-xl">Заболевания носа</p>
      <div class="flex items-end justify-between w-full gap-6">
        <div class="text-light-black">
          <p class="text-3xl font-semibold">
            Заболевания носа и околоносовых пазух
          </p>
          <ul class="flex flex-wrap gap-4 mt-6 text-blue">
            <li>• гайморит</li>
            <li>• сфеноидит</li>
            <li>• фронтит</li>
            <li>• этмоидит</li>
            <li>• риниты, в том числе аллергические</li>
          </ul>
        </div>

        <button
          class="flex items-center justify-center gap-1 rounded-lg bg-blue h-14 w-[300px]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
              fill="#020105"
              class="fill-white"
            />
          </svg>
          <span class="text-lg font-medium text-white"
            >Заказать по телефону</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.service button:hover span {
  color: #3c4bdc;
}
.service button:hover svg path {
  fill: #3c4bdc;
}
.service button:hover {
  border: 1px solid #3c4bdc;
  background: #fff;
}
</style>

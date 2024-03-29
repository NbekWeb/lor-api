<template>
  <div
    class="flex flex-row w-full p-6 bg-white gap-x-10 gap-y-2 rounded-xl service max-md:flex-col max-md:p-3"
  >
    <img
      :src="item?.image"
      alt=""
      class="w-auto h-full max-md:w-full max-md:h-auto"
    />

    <div class="flex flex-col justify-between w-full py-4 text-grey">
      <p class="text-xl max-md:text-min max-md:leading-4 max-md:mb-4">
        {{ item?.category?.title }}
      </p>
      <div
        class="flex flex-row items-end justify-between w-full gap-y-6 max-md:gap-y-4 max-md:flex-col"
      >
        <div class="text-light-black">
          <p class="text-3xl font-semibold max-md:text-lg max-md:leading-4">
            {{ item.title }}
          </p>
          <ul
            class="flex flex-wrap w-full gap-4 mt-6 text-blue max-md:mt-4 max-md:gap-2"
          >
            <li v-for="tag of item?.illnesess" :key="tag?.id">
              • {{ tag?.title }}
            </li>
          </ul>
        </div>

        <button
          class="flex items-center justify-center gap-1 rounded-lg bg-blue h-14 w-[300px] max-md:w-full max-md:h-12"
        >
          <svg
            class="w-6 h-6 max-md:w-3 max-md:h-3"
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
          <span class="text-lg font-medium text-white max-md:text-xs"
            >Заказать по телефону</span
          >
        </button>
      </div>
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

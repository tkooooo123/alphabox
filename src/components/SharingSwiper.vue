<template>
    <div class="relative">
        <swiper-container init="false" class="" ref="swiperEl" slides-per-view="1" spaceBetween="24" 
        :scrollbar="true"
        :draggable="true"
        :breakpoints="{
      1024: {
        slidesPerView: 3,
      },
    }"
        >
            <swiper-slide v-for="item in shares" :key="item.name" class="odd:bg-primary-300 even:bg-white even:text-black">
                <div class=" p-10 space-y-8 font-bold">
                    <h3 class="flex">{{ item.name }} <span class="material-icons self-center text-[8px] mx-2">
                            fiber_manual_record
                        </span>
                        {{ item.location }}</h3>
                    <p class="min-h-[240px] ">ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。</p>
                    <div class="flex gap-4">
                        <span class="material-icons">
                            circle
                        </span>
                        <span class="material-icons">
                            circle
                        </span>
                        <p>ALPHABOX+ Dianne
                        </p>
                    </div>

                </div>

            </swiper-slide>


        </swiper-container>
        <div class="mt-8 grid grid-cols-3">
            <div class="col-span-2">
            </div>
            <div class="col-span-1 relative">
                <p class="absolute top-[-66px] left-4 translate-y-1/2 font-bold">SCROLL</p>
            </div>
        </div>
        

    </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import { onMounted, ref, } from "vue";
register();
const swiperEl = ref(null);


const params = {
  // array with CSS styles
  injectStyles: [
    ` 
      .swiper {
        overflow: initial;
      }
      .swiper-scrollbar-drag {
        background: white;
        width: 75%;
      }
      `,
  ],
};

onMounted(() => {
    Object.assign(swiperEl.value, params);
    swiperEl.value.initialize();
});




const shares = ref([
    {
        name: "Zona",
        location: "Taipei",
        content: "ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。",
        product: "ALPHABOX+ Dianne",
    },
    {
        name: "Lin",
        location: "Chiayi",
        content: "非常推薦！它的畫面清晰度超高，真的讓我驚艷不已。而且它還可以和我互動，感覺就像是有個真實的朋友在身邊。",
        product: "ALPHABOX+ Felix",
    },
    {
        name: "云",
        location: "Taipei",
        content: "我之前一直在找能陪伴我度過空虛時光的好夥伴，直到遇見 ALPHABOX+。它不僅僅是一個機器人，更像是一個真正的朋友，陪著我分享喜怒哀樂。真的很讚！",
        product: "ALPHABOX+ Dianne",
    },
    {
        name: "Zichi",
        location: "Kaohsiung",
        content: "讓我在忙碌的工作之餘，也能找到休閒的樂趣。它的互動功能非常有趣，讓我在短短的時間內就愛上了它。給它一百分！",
        product: "ALPHABOX+ Vito",
    },
])
</script>



<style>
swiper-container::part(scrollbar) {
    @apply static my-10 hidden bg-white/20 w-[66%] lg:block;
}
</style>
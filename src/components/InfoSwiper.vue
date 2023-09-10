<template>
    <div class="lg:grid grid-cols-11">
        <div class="col-span-1 self-center pt-8 lg:block hidden">
            <button class="" @click="prevBtn"><img src="../assets/images/line_end_arrow_notch_left.png" alt="arrow-left"></button>
        </div>
        <div class="col-span-9">
            <swiper-container class="mt-8 relative" ref="swiperEl" slides-per-view="1">
                <swiper-slide class="bg-[url(../assets/images/carousel.png)] bg-center bg-cover lg:py-[280px] py-[175.5px]">
                    
                        
                        <div class="absolute lg:top-1/2 lg:right-0 lg:translate-y-[-50%] lg:right-4 lg:left-auto left-4 bottom-4">
                            <p class="lg:text-[96px] text-16 font-shrik italic">01</p>
                            <p class="font-bold lg:text-8 text-6">立體投影技術</p>
                            <p class="font-weight">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
                        </div>
                    
                </swiper-slide>
                <swiper-slide class="bg-[url(../assets/images/carousel.png)] bg-center bg-cover lg:py-[280px] py-[175.5px]">
                        <div class="absolute lg:top-1/2 lg:right-0 lg:translate-y-[-50%] lg:right-4 lg:left-auto left-4 bottom-4">
                            <p class="lg:text-[96px] text-16 font-shrik italic">02</p>
                            <p class="font-bold lg:text-8 text-6">立體投影技術</p>
                            <p class="font-weight">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
                        </div>
                </swiper-slide>
                <swiper-slide class="bg-[url(../assets/images/carousel.png)] bg-center bg-cover lg:py-[280px] py-[175.5px]">
                        <div class="absolute lg:top-1/2 lg:right-0 lg:translate-y-[-50%] lg:right-4 lg:left-auto left-4 bottom-4">
                            <p class="lg:text-[96px] text-16 font-shrik italic">03</p>
                            <p class="font-bold lg:text-8 text-6">立體投影技術</p>
                            <p class="font-weight">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
                        </div>
                </swiper-slide>
            </swiper-container>
        </div>
        <div class="col-span-1 self-center justify-self-end pt-8 lg:block hidden" ><button class="" @click="nextBtn"><img src="../assets/images/line_end_arrow_notch2.png" alt="arrow-right"></button></div>
    </div>
</template>

<script setup>
import { register, } from "swiper/element/bundle";
import { ref, } from "vue";
register();
const swiperEl = ref(null);


const nextBtn = () => {
    swiperEl.value.swiper.slideNext();
}
const prevBtn = () => {
    swiperEl.value.swiper.slidePrev();
}

</script>
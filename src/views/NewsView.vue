<template>
    <Header></Header>
    <div class="bg-radial lg:pt-40 pt-15 lg:pb-[120px] pb-20">
        <div class="container max-w-pc-2xl">
            <h2 class="lg:text-center font-bold lg:text-12 text-10 tracking-[1em] lg:indent-[1em]">最新消息</h2>
            <ul class="" v-for="item in newsList" :key="item.id">
                <li class="grid grid-cols-6 lg:space-x-6 lg:mt-[60px] mt-10">
                    <div class="lg:col-span-2 col-span-6">
                        <div class="grid lg:grid-cols-2 grid-cols-8 space-x-6">
                            <div class="col-span-1 text-center self-center font-saira font-light lg:text-[128px] text-[96px]">{{ item.id
                            }}
                            </div>
                            <div class="lg:col-span-1 col-span-7 self-center">
                                <img class="lg:h-[226px] h-[108px] w-full object-cover" :src="item.image" :alt="item.title">
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 col-span-6 border-y-[1px] border-white">
                        <div class="font-medium lg:mt-10 mt-6"><span class="material-symbols-outlined align-bottom">
                                emergency
                            </span>
                            {{ item.date }}</div>
                        <h3 class="text-5 font-medium tracking-[1em] mt-2">{{ item.title }}</h3>
                        <p class="mt-3 lg:mb-0 mb-6">{{ item.content }}</p>
                    </div>
                    <div class="lg:col-span-1 col-span-6 lg:self-end lg:justify-self-start justify-self-end">
                        <RouterLink to="">
                            <span class="material-symbols-outlined text-10 -mb-5">
                                arrow_forward
                            </span>

                        </RouterLink>

                    </div>
                </li>


            </ul>
        </div>
        <ul class="lg:mt-20 mt-10 flex justify-center space-x-8">
            <li>
                <RouterLink to="">
                    1
                </RouterLink>
            </li>
            <li>
                <RouterLink to="">
                    2
                </RouterLink>
            </li>
            <li>
                <RouterLink to="">
                    3
                </RouterLink>
            </li>
        </ul>
    </div>
    <Footer></Footer>
</template>

<script setup>
import Header from '../components/HeaderComponent.vue';
import Footer from '../components/FooterComponent.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const newsList = ref([
    {
        id: 1,
        date: "2023.06.30",
        title: "產品升級公告",
        content: "榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！",
        image: "/src/assets/images/news/news.png"
    },
    {
        id: 2,
        date: "2023.06.01",
        title: "限時優惠活動",
        content: "為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。",
        image: "/src/assets/images/news/thanks.png"
    },
    {
        id: 3,
        date: "2023.06.30",
        title: "參加科技展覽",
        content: "本公司將參與今年的台灣國際科技展覽，屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！",
        image: "/src/assets/images/news/exhibition.png"
    },
    {
        id: 4,
        date: "2023.06.30",
        title: "新功能上線",
        content: "為使您的3D立體陪伴機器人更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。近期，我們新推出智慧家居控制功能。",
        image: "/src/assets/images/news/update.png"
    },
    {
        id: 5,
        date: "2023.06.30",
        title: "用戶見面會",
        content: "為進一步滿足客戶需求，並優化產品性能，我們將舉行用戶見面會。屆時，我們將向您展示我們的研發成果，同時聆聽您的意見和建議，讓我們共同打造更完美的產品！同時聆聽您的意見和建議！",
        image: "/src/assets/images/news/interview.png"
    },

])

</script>
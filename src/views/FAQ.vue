<template>
    <Header></Header>
    <div class="text-primary-500 bg-primary-100 pb-[120px]">
        <div class="container max-w-pc-2xl">
            <h1 class="lg:text-12 text-10 tracking-[1em] lg:font-black font-bold lg:pt-16 pt-15 ">FAQ</h1>
            <div class="lg:grid grid-cols-3 space-x-6 mt-16  border-t-2 border-dotted border-white">
                <div
                    class="col-span-1 font-medium space-y-4 lg:pt-10 py-6 border-b-2 border-dotted border-white lg:border-0">
                    <ul class="" v-for="item in questionCategory" :key="item.id">
                        <li>
                            <p class="border-b-2 hover:border-primary-500 border-transparent">{{ item.name }}</p>
                        </li>
                    </ul>
                </div>
                <div class="col-span-2">
                    <ul class="" v-for="item in QuestionList" :key="item.id">
                        <li class="grid grid-cols-4 lg:py-5 py-[14px] border-b-2 border-dotted border-white">
                            <div class="col-span-3">
                                <h3 class=" self-center lg:pt-5 pt-[18px] font-medium">
                                    {{ item.title }}
                                </h3>
                            </div>
                            <div class="col-span-1 lg:text-start text-end">
                                <button class="text-start" @click="openDetail(item.id)" v-if="currentId !== item.id"><span
                                        class="material-symbols-outlined text-10">
                                        add
                                    </span></button>
                                <button class="text-start" @click="closeDetail" v-else><span
                                        class="material-symbols-outlined text-10">
                                        remove
                                    </span></button>
                            </div>
                            <p class="-pt-[2px] lg:pb-5 pb-[10px] font-normal lg:col-span-3 col-span-4"
                                :class="currentId === item.id ? 'flex' : 'hidden'">
                                {{ item.answer }}
                            </p>
                        </li>



                    </ul>
                </div>

            </div>

        </div>
    </div>
    <Footer></Footer>
</template>

<script setup>
import Header from '../components/HeaderComponent.vue';
import Footer from '../components/FooterComponent.vue';
import { ref } from 'vue';
const questionCategory = ref([
    {
        id: 1,
        name: 'ALPHABOX+ 使用問題',
    },
    {
        id: 2,
        name: '訂購與運送',
    },
    {
        id: 3,
        name: '產品保養與維修',
    },
])

const QuestionList = ref([
    {
        id: 1,
        title: "ALPHABOX+ 的使用方式是什麼？",
        answer:
            "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
    },
    {
        id: 2,
        title: "ALPHABOX+ 需要什麼樣的環境來使用？",
        answer:
            "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
    },
    {
        id: 3,
        title: "ALPHABOX+ 支援哪些語言？",
        answer:
            "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
    },
    {
        id: 4,
        title: "ALPHABOX+ 的軟體更新方式為何？",
        answer:
            "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
    },
    {
        id: 5,
        title: "購買 ALPHABOX+ 後的售後服務如何？",
        answer:
            "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
    },
    {
        id: 6,
        title: "ALPHABOX+ 與其他智能家居設備的相容性如何？",
        answer:
            "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
    },
]);

const isOpen = ref(false);
const currentId = ref(0);
const openDetail = (id) => {
    console.log('123', id)
    currentId.value = id
    isOpen.value = !isOpen.value
}
const closeDetail = () => {
    isOpen.value = !isOpen.value;
    currentId.value = 0;
}
</script>
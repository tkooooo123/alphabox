<template>
    <header class="bg-primary-200 text-white py-3 relative border-b border-white">
        <nav class="container flex items-center justify-between relative lg:max-w-[1296px]">
            <h1 class="text-6 lg:text-8 font-shrik" @click="openMenu">
                <RouterLink to="/">ALPHABOX+</RouterLink>
            </h1>
            <ul class="hidden text-white items-center gap-10 lg:flex ">
                <li class="font-medium">
                    <RouterLink to="">產品</RouterLink>
                </li>
                <li class="font-medium">關於我們</li>
                <li class="font-medium">最新消息</li>
                <li class="font-medium"><RouterLink to="/faq">FAQ</RouterLink></li>
                <li class="font-medium">聯絡我們</li>
            </ul>

            <div class="hidden lg:flex items-center">
                <ul class="flex gap-2">
                    <li>註冊</li>
                    <li>登入</li>
                </ul>
                <button class="text-black bg-white px-4 py-2 ms-8 rounded">
                    <span class="material-symbols-outlined align-bottom">
                        point_scan
                    </span>
                    訂閱
                </button>
            </div>
            <div class="lg:hidden absolute right-3">
                <button @click="openMenu">
                    <span class="material-symbols-outlined text-11">
                        menu
                    </span>
                </button>
            </div>
        </nav>
    </header>
    <ul class=" flex-col items-center justify-center fixed w-full pt-6 pb-8  bg-gradient-to-b from-primary-300 to-primary-600 z-10"
        :class="isOpen ? 'flex' : 'hidden'">
        <li class="py-2" v-for=" item in toggler" :key="item.title"> {{ item.title }}</li>
        <li class="pt-1">
            <button class="text-black bg-white px-4 py-2 rounded">
                <span class="material-symbols-outlined align-bottom">
                    point_scan
                </span>
                訂閱
            </button>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const toggler = ref([
    {
        title: "產品",
        path: "",
    },
    {
        title: "關於我們",
        path: "",
    },
    {
        title: "最新消息",
        path: "",
    },
    {
        title: "FAQ",
        path: "",
    },
    {
        title: "聯絡我們",
        path: "",
    },
    {
        title: "註冊",
        path: "",
    },
    {
        title: "登入",
        path: "",
    },
]);

const isOpen = ref(false);
const openMenu = () => {
    isOpen.value = !isOpen.value
}

</script>
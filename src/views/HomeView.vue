

<template>
  <Header></Header>
  <div
    class="lg:bg-[url('../assets/images/home_background.png')] lg:bg-center bg-cover  bg-gradient-to-b from-primary-300 to-primary-600 lg:to-primary-300 h-full w-full">
    <div class="container max-w-pc-2xl lg:flex lg:flex-row-reverse justify-between lg:py-14 py-7">
      <p class=" w-full lg:w-[416px] border-white border-t py-1">ALPHABOX+ STUDIO</p>
      <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true"
        alt="ALPHABOX+" class="alphaboxCircle img-fluid mx-auto w-[196px]">
      <p class="w-[416px]  border-white border-b self-end pb-2 hidden lg:block">最新消息！新版本 v15.4 釋出，搶先體驗！</p>
    </div>
    <div class="text-center mt-1 lg:hidden">
      <h2 class="font-shrik text-5 tracking-[1.3em] indent-2.5 break-words">ALPHABOX+</h2>
      <p class="font-bold tracking-[.3em]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
    </div>
    <ul class="container  mt-8 flex lg:hidden flex-col gap-2">
      <li class="relative">
        <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Diane</h3>
        <img src="../assets/images/diane_square1.png" alt="Diane">
      </li>
      <li class="relative">
        <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Felix</h3>
        <img src="../assets/images/felix_square1.png" alt="Felix">
      </li>
      <li class="relative">
        <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Karina</h3>
        <img src="../assets/images/karina_square1.png" alt="Karina">
      </li>
      <li class="relative z-10">
        <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Vito</h3>
        <img src="../assets/images/vito_square1.png" alt="Vito">
      </li>
    </ul>

    <div class="">
      <div class="container">
        <ul class=" hidden lg:grid grid-cols-4 gap-8  top-[104px] z-10">
          <li class="relative z-10">
            <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Diane</h3>
            <img class="h-full object-cover" src="../assets/images/diane.png" alt="Diane">
          </li>
          <li class="col-span-2">
            <div class="text-center">
              <h2 class="font-shrik text-5 tracking-[1.3em] indent-2.5 break-words">ALPHABOX+</h2>
              <p class="font-bold tracking-[.3em]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
            </div>
            <ul class="grid grid-cols-2 gap-8 mt-6">
              <li class="relative z-10">
                <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Felix</h3>
                <img class="h-full object-cover" src="../assets/images/felix.png" alt="Felix">
              </li>
              <li class="relative z-10">
                <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Karina</h3>
                <img class="h-full object-cover" src="../assets/images/karina.png" alt="Karina">
              </li>
            </ul>

          </li>
          <li class="relative z-10">
            <h3 class="font-shrik absolute top-4 left-1/2 translate-x-[-50%] text-8">Vito</h3>
            <img class="h-full object-cover" src="../assets/images/vito.png" alt="Vito">
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- test-->
  <div class="relative lg:py-[492.5px] py-[343.5px]">
    <div class="bg-radial absolute w-full top-[-104px] z-0">
      <div class="bg-[url('../assets/images/carousel_background.png')] lg:py-[544.5px] py-[395.5px] bg-cover lg:w-1/2 ">
      </div>
      <div class="absolute top-0 left-0 right-0">
        <div class="container lg:max-w-pc-2xl">
          <div class="bg-gradient-to-r from-primary-300 to-primary-600 py-5 mt-[144px]"></div>
          <h2 class="lg:text-12 text-5 font-bold tracking-[1em] mt-2 mb-4">什麼是 <br>
            <span class="block lg:mt-3 mt-2">ALPHABOX+</span>
          </h2>
        </div>
        <hr class="border-1">
        <div class="container lg:max-w-pc-2xl">
          <!-- Swiper Slide-->
          <InfoSwiper></InfoSwiper>
          <div class="bg-gradient-to-r from-primary-300 to-primary-600 py-5 mt-8"></div>
        </div>
      </div>
    </div>
  </div>
  <!---->



  <!-- /News-->
  <div class="bg-radial lg:pt-40 pt-15 lg:pb-10 pb-20">
    <div class="container max-w-pc-2xl">
      <h2 class=" lg:text-10 text-6 text-center tracking-[1em] indent-[1em]  ">最新消息</h2>
      <hr class="border-1 lg:mt-10 mt-8">
      <div class="lg:mt-10 mt-8 px-4">
        <p class="tracking-[1em]">
          <span class="material-symbols-outlined align-bottom me-4">
            emergency
          </span>2023.06.30
        </p>
        <h3 class="tracking-[1em] text-5 mt-2">產品升級公告</h3>
        <div class="lg:grid lg:grid-cols-4 mt-3">
          <div class="lg:col-span-3 mb-3 lg:mb-0">
            <p class="font-bold">
              榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！
            </p>
          </div>
          <a class="lg:ml-[118px]" href="#">
            <img src="../assets/images/line_end_arrow_notch.png" alt="arrow-right">
          </a>
        </div>
      </div>

      <div class=" mt-10 border-y-[1px] border-white">
        <div class="lg:grid lg:grid-cols-2">
          <div class="col-span-1 py-10 px-4 lg:border-r-[1px] border-b-[1px] lg:border-b-0">
            <p class="tracking-[1em]">
              <span class="material-symbols-outlined align-bottom me-4">
                emergency
              </span>2023.06.30
            </p>
            <h3 class="tracking-[1em] text-5 mt-2">限時優惠活動</h3>
            <p class="font-bold my-3">
              為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！
            </p>
            <a class="" href="#"><img src="../assets/images/line_end_arrow_notch2.png" alt="arrow-right"></a>
          </div>
          <div class="col-span-1 py-10 px-4">
            <p class="tracking-[1em]">
              <span class="material-symbols-outlined align-bottom me-4">
                emergency
              </span>2023.06.30
            </p>
            <h3 class="tracking-[1em] text-5 mt-2">新功能上線</h3>


            <p class="font-bold my-3">
              為使您的 ALPHABOX+ 更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。
            </p>

            <a href="#"><img src="../assets/images/line_end_arrow_notch2.png" alt="arrow-right"></a>

          </div>

        </div>
      </div>
      <div class="lg:mt-16 mt-10">
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true"
          alt="ALPHABOX+" class="alphaboxCircle img-fluid mx-auto w-[132px]">
        <p class="hidden lg:block text-end mt-24">為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料</p>
      </div>
    </div>
  </div>
  <!-- User-->
  <div class="bg-radial-reverse overflow-hidden relative">
    <div class="container max-w-pc-2xl pt-40 lg:pb-0 pb-12">
      <div class="grid grid-cols-12">
        <h2 class="col-span-12 lg:col-span-5 lg:text-12 text-10 font-bold tracking-[1em]">使用分享</h2>
        <div class="col-span-12 font-bold mt-4 lg:order-3">01<span class="material-symbols-outlined align-bottom mx-1">
            horizontal_rule
          </span>04</div>
        <p class="col-span-12  lg:col-span-7 mt-6">展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
      </div>
      <span class="material-symbols-outlined text-20 lg:mt-5 mt-1 mb-1 ">
        emergency
      </span>
      <SharingSwiper></SharingSwiper>
      <p class="mt-[96px] mb-10 fw-bold md:block hidden">
        若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。
      </p>
    </div>
    <div
      class="absolute md:text-[400px] text-[128px] bottom-0  left-1/2 translate-x-[-50%] lg:translate-y-[39%] translate-y-[35%] text-white/5 font-shrik">
      ALPHABOX+
    </div>
  </div>
  <!--Contact us-->
  <div class="bg-primary-500 font-bold py-15">
    <div class="container lg:grid grid-cols-12 max-w-pc-2xl">
      <div class="lg:col-span-5">
        <h2 class="text-10 lg:text-12 tracking-[1em]">聯絡我們</h2>
        <div class="flex items-center space-x-2 mt-5 lg:mt-8">
          <span class="material-icons text-[12px]">
            circle
          </span>
          <div class="h-3 w-[124px] rounded-full bg-white"></div>
        </div>
        <p class="mt-9 lg:mt-[54px]">讓科技成為您的最佳夥伴</p>
        <p class="mt-1">立即體驗神奇功能並享限時優惠！</p>
      </div>
      <div class="lg:col-span-7">
        <span class="material-symbols-outlined text-20 lg:-mt-5 mt-1 mb-1 ">
          emergency
        </span>
        <form action="" class="space-y-4">
          <div class="relative">

            <input type="email" id="email" class="text-black w-full py-2 pl-4 peer">
            <label for="email"
              class="text-primary-500 absolute top-2 left-4 peer-focus:top-0 peer-focus:-translate-y-1/4 peer-focus:scale-75 peer-focus:left-2.5">EMAIL</label>
          </div>
          <div class="relative">
            <textarea name="comments" id="" cols="30" rows="4" class="w-full text-black py-2 pl-4 peer"></textarea>
            <label for="comments"
              class="text-primary-500 absolute top-2 left-4 peer-focus:top-0 peer-focus:-translate-y-1/4 peer-focus:scale-75 peer-focus:left-1">COMMENTS</label>
          </div>

          <button class="font-medium bg-primary-300 lg:w-[55%] ml-auto block w-full py-2 rounded mb-5">
            <span class="material-symbols-outlined align-bottom">
              point_scan
            </span>
            送出
          </button>
        </form>

      </div>

    </div>
  </div>
  <!--Products-->
  <div class="grid lg:grid-cols-4 grid-cols-2">
    <div class="col-span-1 relative">
      <img class="lg:h-[876px] md-[406px] object-cover" src="../assets/images/diane_vertical.png" alt="">
      <div class="absolute inset-0 lg:bg-black hover:bg-transparent text-center bg-black/50">
        <p class="lg:text-[400px] text-[128px] font-saira font-light mt-6">1</p>
        <h2 class="md:text-8 text-6 font-shrik italic md:mt-5 mt-4">Diane</h2>
        <div class="md:px-10 px-3 lg:mt-20 mt-18px">
          <p class="font-bold text-start">知識型</p>
          <div class="md:flex justify-between md:space-x-10">
            <p class="text-start">學術領導/知識分享/智能問答</p>
            <a class="flex items-center" href="#">
              <img class="self-center" src="../assets/images/line_end_arrow_notch.png" alt="arrow-right">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1 relative">
      <img class="lg:h-[876px] md-[406px] object-cover" src="../assets/images/felix_vertical.png" alt="">
      <div class="absolute inset-0 lg:bg-black hover:bg-transparent text-center bg-black/50">
        <p class="lg:text-[400px] text-[128px] font-saira font-light mt-6">2</p>
        <h2 class="md:text-8 text-6 font-shrik italic md:mt-5 mt-4">Felix</h2>
        <div class="md:px-10 px-3 lg:mt-20 mt-18px">
          <p class="font-bold text-start">知識型</p>
          <div class="md:flex justify-between md:space-x-10">
            <p class="text-start">學術領導/知識分享/智能問答</p>
            <a class="flex items-center" href="#">
              <img class="self-center" src="../assets/images/line_end_arrow_notch.png" alt="arrow-right">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1 relative">
      <img class="lg:h-[876px] md-[406px] object-cover" src="../assets/images/karina_verticalgle.png" alt="">
      <div class="absolute inset-0 lg:bg-black hover:bg-transparent text-center bg-black/50">
        <p class="lg:text-[400px] text-[128px] font-saira font-light mt-6">3</p>
        <h2 class="md:text-8 text-6 font-shrik italic md:mt-5 mt-4">Karina</h2>
        <div class="md:px-10 px-3 lg:mt-20 mt-18px">
          <p class="font-bold text-start">知識型</p>
          <div class="md:flex justify-between md:space-x-10">
            <p class="text-start">學術領導/知識分享/智能問答</p>
            <a class="flex items-center" href="#">
              <img class="self-center" src="../assets/images/line_end_arrow_notch.png" alt="arrow-right">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1 relative">
      <img class="lg:h-[876px] md-[406px] object-cover" src="../assets/images/vito_vertical.png" alt="">
      <div class="absolute inset-0 lg:bg-black hover:bg-transparent text-center bg-black/50">
        <p class="lg:text-[400px] text-[128px] font-saira font-light mt-6">4</p>
        <h2 class="md:text-8 text-6 font-shrik italic md:mt-5 mt-4">Vito</h2>
        <div class="md:px-10 px-3 lg:mt-20 mt-18px">
          <p class="font-bold text-start">知識型</p>
          <div class="md:flex justify-between md:space-x-10">
            <p class="text-start">學術領導/知識分享/智能問答</p>
            <a class="flex items-center" href="#">
              <img class="self-center" src="../assets/images/line_end_arrow_notch.png" alt="arrow-right">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>




  <Footer></Footer>
</template>

<script setup>
import Footer from './../components/FooterComponent.vue'
import Header from './../components/HeaderComponent.vue'
import InfoSwiper from './../components/InfoSwiper.vue'
import SharingSwiper from '../components/SharingSwiper.vue';
</script>

<style lang="scss">
.bg-radial {
  background: radial-gradient(#28085C, black);
}

.bg-radial-reverse {
  background: radial-gradient(black, #28085C);
}

.alphaboxCircle {
  animation-name: rotate;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}
</style>

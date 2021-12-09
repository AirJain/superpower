<!--
 * @Author: your name
 * @Date: 2021-12-07 10:23:17
 * @LastEditTime: 2021-12-09 10:55:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \superpower\src\views\index\index.vue
-->
<template>
  <div class="main-page flex-col" style="overflow-y: auto">
    <div class="mod2 flex-col">
      <div class="wrap1 flex-row">
        <img
          class="label1"
          referrerpolicy="no-referrer"
          src="./assets/img/ps6ryctser1zd2nqft4jvpo2drwhe80d0nl978a8df4-3da6-441e-b256-90bc1403157d.png"
        />
        <span class="word1">首页</span>
        <img
          class="label2"
          referrerpolicy="no-referrer"
          src="./assets/img/psdyc19xvysbrryr984ii7hu8snotbq9e897c5f49-81b1-493d-af12-fe710abf0d3d.png"
        />
        <span class="txt1">抽奖</span>
        <div class="section1 flex-col">
          <div class="group1 flex-col"><span class="info1">SAPLING</span></div>
        </div>
      </div> 
      <div class="wrap2 flex-row"><div class="bd1 flex-col"></div></div>
    </div>
    <div class="mod1 flex-col">
      <div class="main1 flex-col" style="position: relative">
        <div
          style="width: 100%; height: 100%; position: absolute; left: 0; top: 0"
        >
          <!-- <indexCom />
          <aboutCom />
          <investmentCom />
          <endCom /> -->
          <swiper
            ref="mySwiper"
            :options="swiperOptions"
            style="width: 100%; height: 100%"
          >
            <swiper-slide>
              <indexCom />
            </swiper-slide>
            <swiper-slide>
              <aboutCom />
            </swiper-slide>
            <swiper-slide>
              <investmentCom />
            </swiper-slide>
            <swiper-slide>
              <endCom />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import indexCom from "../components/index-com/index-com.vue";
import aboutCom from "../components/about-com/about-com.vue";
import endCom from "../components/end-com/end-com.vue";
import investmentCom from "../components/investment-com/investment-com.vue";
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        effect: "fade",
        direction: "vertical",
        spaceBetween: 0,
        // Some Swiper option/callback...
      },
      show:true
    };
  },
  components: {
    indexCom,
    aboutCom,
    investmentCom,
    endCom,
  },
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>
<style scoped lang="css" src="./assets/index.css" />
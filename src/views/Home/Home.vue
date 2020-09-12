<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">購物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-View :recommends="recommends"/>
  </div>
</template>
<script>
  import NavBar from "components/common/nabbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";

  import {getHomeMultidata} from "network/home";
  /*import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  import {Swiper, SwiperItem} from "components/common/swiper";*/

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //1.請求多個數據
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>

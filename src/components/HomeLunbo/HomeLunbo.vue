<template>
  <div class="div1" v-if="lunboImgs">
    <div class="banner_item">
      <div class="swiper-container" ref="dog_banner">
        <div class="swiper-wrapper">
          <!--狗狗轮播图-->
          <div class="swiper-slide" v-for="(item, index) in lunboImgs" :key="index">
            <a href="javascript:;">
              <img style="width: 375px" :src="item.image">
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default{
    props:{
      lunboImgs:Array
    },

    watch:{
      lunboImgs(){
        this.$nextTick(()=>{
          if(!this.dog_banner){
            this.dog_banner = new Swiper(this.$refs.dog_banner, {
              centeredSlides: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            })
          }else{
            this.dog_banner.refresh()
          }
        })
      }
    },

    mounted(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .div1
    overflow hidden
</style>

<template>
  <footer class="group-footer" v-if="groupNames">
    <div class="group-footer-left">
      <ul class="item">
        <li @click="handleClick(index)" :class="{on:index == num}" v-for="(name, index) in groupNames" :key="index">{{name.name}}</li>
      </ul>
    </div>

    <div class="group-footer-right" v-if="groupContents" ref="right">
      <div class="item-wrap" v-for="(content, index) in groupContents" v-if="index == num">
        <div class="item" v-for="(cate, index) in content">
          <a href="javascript:;">
            {{cate.title}}
            <img src="../../../common/group-image/cate_right_img.png">
          </a>
          <ul>
            <li v-if="cate.type == '0'" v-for="(item, index) in cate.list">
              <a href="javascript:;">
                <div>
                  <img :src="item.photo" height="87px">
                </div>
                <p>{{item.name}}</p>
              </a>
            </li>
            <li class="llogo" v-if="cate.type == '2'" v-for="(item, index) in cate.list">
              <a href="javascript:;">
                <div>
                  <img :src="item.logo">
                </div>
                <p>{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default{

    data(){
      return{
        num:0
      }
    },

    methods:{
      handleClick(index){
        this.num = index
      }
    },

    computed:{
      ...mapState(['groupNames','groupContents'])
    },

    mounted(){
      this.$store.dispatch('getGroupContents')
      this.$store.dispatch('getGroupNames', ()=>{
        this.$nextTick(()=>{
          if(!this.type_left){
            this.type_left = new BScroll('.group-footer-left', {
              click:true
            })
          }

          if(!this.type_right){
            this.type_right = new BScroll(this.$refs.right, {
              click:true
            })
          }
        })
      })

      /*this.$nextTick(()=>{
        var swiper_nav = new Swiper(this.$refs.nav, {
          slidesPerView: 12,
          direction: 'vertical',
          spaceBetween: 5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        })
      })*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .group-footer
    .group-footer-left
      border-right 5px solid #f3f4f5
      position fixed
      top 40px
      bottom 0
      left 0
      .item
        background #fff
        padding-bottom 40px
        li
          color #333
          text-align center
          width 70px
          height 50px
          line-height 50px
          font-size 13px
          border-bottom 1px solid #f3f4f5
          &.on
            background #f3f4f5
            color #ed4044


    .group-footer-right
      position fixed
      top 40px
      bottom 0
      margin-left 75px
      box-sizing border-box
      border-top 5px solid #f3f4f5
      .item-wrap
        padding-bottom 45px
        background #fff
      .item
        border-top 1px solid #f3f4f5
        padding 5px 5px 20px
        >a
          padding-left 5px
          display block
          margin-top 10px
          font-size 12px
          img
            height 10px
            float right
            margin-right 5px
        ul
          overflow hidden
          li
            float left
            margin-top 10px
            width 33.33333%
            padding 0 5px
            &.llogo
              width 50%
              div
                border 1px solid #f3f4f5
                height 55px
                line-height 55px
                text-align center
                img
                  width 80%
                  height 45px
                  margin-top 2px
            a
              display block
              font-size 12px
              div
                img
                  width 100%
              p
                color #000
                margin-top 10px
                height 20px
                text-align center
</style>

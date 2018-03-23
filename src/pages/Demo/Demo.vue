<template>
  <div class="container">
    <div class="header"></div>
    <div class="wrap" ref="wrap">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>
    </div>
    <div class="content" ref="content">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.wrap, {
          click:true
        })
        new BScroll(this.$refs.content, {
          click:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.container
    position relative
    height 100%
    .wrap
      position absolute
      top 0
      bottom 0
      !*left 0
      right 0*!
      width 50px
      height 50px
      margin auto
      background #0f0*/

.container
  width 100%
  .header
    position fixed
    z-index 2
    top 0
    left 0
    height 60px
    width 100%
    background #f00
  .footer
    z-index 2
    position fixed
    bottom 0
    left 0
    height 60px
    width 100%
    background #f00
  .wrap
    position fixed
    top 0px
    bottom 0px
    width 70px
    text-align center
    ul
      padding-top 60px
      padding-bottom 60px
      li
        background #0f0
        text-align center
        height 70px
        line-height 70px
        border 1px solid #f00
        &:nth-child(2n+0)
          background #0ff
  .content
    margin-left 70px
    position fixed
    top 0px
    bottom 0px
    width 305px
    text-align center
    ul
      text-align center
      padding-top 60px
      padding-bottom 60px
      li
        background #0f0
        text-align center
        height 70px
        line-height 70px
        border 1px solid #f00
        &:nth-child(2n+0)
          background #0ff
</style>

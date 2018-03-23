<template>
  <div>
    <div class="search">
      <span class="back-btn" @click="$router.back()"></span>
      <div class="search-wrapper">
        <input type="text" placeholder="搜索你喜欢的宝贝">
        <img src="../../common/search-image/search.png">
      </div>
      <a href="javascript:;" class="search-btn">搜索</a>
    </div>

    <div class="hot">
      <p class="title">
        <img src="../../common/search-image/rmss.png">
        <span>精品推荐</span>
      </p>
      <div class="label">
        <a href="javascript:;" class="fl">狗碗</a>
        <a href="javascript:;" class="fl">消毒</a>
        <a href="javascript:;" class="fl">强骨</a>
        <a href="javascript:;" class="fl">液体钙</a>
        <a href="javascript:;" class="fl">宠物梳子</a>
        <a href="javascript:;" class="fl">福来恩</a>
        <a href="javascript:;" class="fl">澳路雪</a>
        <a href="javascript:;" class="fl">狗狗鞋子</a>
        <a href="javascript:;" class="fl">狗狗零食</a>
        <a href="javascript:;" class="fl">幼犬</a>
        <a href="javascript:;" class="fl">螨虫</a>
        <a href="javascript:;" class="fl">狗狗香波</a>
        <a href="javascript:;" class="fl">发育宝</a>
        <a href="javascript:;" class="fl">雪山</a>
        <a href="javascript:;" class="fl">牛油果</a>
      </div>
    </div>

    <div class="recently">
      <p class="title">
        <img src="../../common/search-image/zjss.png">
        <span>最近搜索</span>
      </p>
    </div>

    <div class="empty">
      清空搜索历史
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  padding 7px 12px
  height 50px
  background #fff
  .back-btn
    float left
    width 16px
    height 16px
    border-top 1px solid #999
    border-left 1px solid #999
    transform rotate(-45deg)
    margin-top 8px
  .search-wrapper
    float left
    height 35px
    width 83%
    padding 0 10px
    background #f6f6f6
    border-radius 5px
    input
      background #f6f6f6
      line-height 35px
      font-size 14px
      outline none
    img
      margin-left 72px
      height 16px
      vertical-align middle
  .search-btn
    margin-left 10px
    line-height 32px
.hot
  overflow hidden
  .title
    height 30px
    line-height 30px
    background #fbfbfd
    font-size 14px
    padding-left 12px
    color #666
    img
      height 20px
      vertical-align middle
      margin -2px 8px 0 0
  .label
    overflow hidden
    padding 0 12px 23px
    a
      line-height 1.6
      float left
      padding 3px 10px
      margin 10px 10px 0 0
      border-radius 15px
      font-size 12px
      background #fff
.recently
  clear both
  .title
    color #666
    height 30px
    line-height 30px
    background #fbfbfd
    padding-left 12px
    font-size 14px
    img
      margin -2px 8px 0 0
      height 20px
      vertical-align middle
.empty
  text-align center
  width 60%
  line-height 40px
  margin 40px auto 60px
  border 1px solid #777
  font-size 15px
  border-radius 5px
</style>

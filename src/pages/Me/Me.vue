<template>
  <div>
    <!--头部-->
    <header class="me-header">
      <div class="me-header-wrap">
        <!--箭头-->
        <div class="me-header-top">
          <a href="javascript:;" class="icon" @click="$router.back()"></a>
          <a href="javascript:;" class="regist">注册</a>
        </div>
        <!--logo-->
        <div class="me-header-center">
          <img src="../../common/me-image/logo.png">
        </div>
        <!--登录导航-->
        <div class="me-header-bottom">
          <ul>
            <li @click="toggleLogin(true)">
              <a href="javascript:;">
                普通登录
              </a>
              <i :class="{cur:isShow}"></i>
            </li>
            <li @click="toggleLogin(false)">
              <a href="javascript:;">
                手机动态密码登录
              </a>
              <i :class="{cur:!isShow}"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!--尾部-->
    <footer class="me-footer">
      <!--表单-->
      <div class="me-footer-content">
        <form v-show="isShow" class="user-login">
          <div class="me-footer-input">
            <ul>
              <li>
                <span></span>
                <input type="text" placeholder="手机号/邮箱/用户名">
              </li>
              <li>
                <span class="pwd-icon"></span>
                <input type="password" placeholder="输入密码">
              </li>
            </ul>
          </div>
        </form>
        <form v-show="!isShow" class="phone-login">
          <div class="me-footer-input">
            <ul>
              <li>
                <span class="phone-icon"></span>
                <input type="text" placeholder="已注册的手机号">
              </li>
              <li>
                <span class="pwd-icon"></span>
                <input type="password" placeholder="请输入图片内容">
                <span class="code-icon">
                  <img src="../../common/me-image/seccode.png">
                </span>
              </li>
              <li>
                <span class="pwd-icon"></span>
                <input type="password" placeholder="动态密码">
                <a href="javascript:;" class="dongtai">获取动态密码</a>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <!--忘记密码-->
      <div class="me-footer-text">
        <a href="javascript:;">忘记密码？</a>
      </div>
      <!--登录按钮-->
      <div class="me-footer-login">
        <a href="javascript:;">登录</a>
      </div>
      <!--空白-->
      <div class="me-footer-blank"></div>
      <!--合作网站登录-->
      <div class="me-footer-other">
        <div class="hezuo">合作网站登录</div>
        <ul class="other">
          <li>
            <a href="javascript:;">
              <img src="../../common/me-image/login_ico4.png">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../common/me-image/login_ico2.png">
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      toggleLogin(isShow){
        this.isShow = isShow
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.me-header
  .me-header-wrap
    background url("../../common/me-image/2ac7b0a4f0ab1e4a63819e0668d1cb39.png") no-repeat
    background-size 100% 100%
    .me-header-top
      height 50px
      line-height 50px
      .icon
        display inline-block
        width 20px
        height 20px
        background url("../../common/me-image/personal-bico3.png") no-repeat
        background-size 12px 17px
        margin-left 10px
        margin-top 16px
      .regist
        float right
        color #fff
        margin-right 10px


    .me-header-center
      padding 1em 0 2em 0
      img
        display block
        width 20%
        margin auto
    .me-header-bottom
      height 44px
      background rgba(255,255,255,0.3)
      ul
        li
          position relative
          text-align center
          width 50%
          height 44px
          line-height 44px
          float left
          a
            color #fff
          i
            display block
            width 0
            height 0
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-top 10px solid transparent
            position absolute
            left 0
            right 0
            bottom 0
            margin auto
            &.cur
              border-bottom 10px solid #fff
.me-footer
  background #fff
  .me-footer-content
    form
      .me-footer-input
        ul
          width 333px
          margin auto
          li
            position relative
            background: #fff;
            height 46px
            line-height 46px
            width 333px
            box-sizing border-box
            border-bottom #e2e2e2 solid 1px
            span
              display inline-block
              vertical-align middle
              height 21px
              width 17px
              background url("../../common/me-image/ico3.png") no-repeat
              background-size contain
              margin-right 4px
              &.pwd-icon
                background url("../../common/me-image/ico4.png") no-repeat
                background-size contain
              &.phone-icon
                background url("../../common/me-image/ico1.png") no-repeat
                background-size contain
              &.code-icon
                position absolute
                top 7px
                right 65px
            input
              padding 0
              box-sizing border-box
              height 21px
              width 303px
              outline none
            .dongtai
              color #ff4259
              height 29px
              line-height 29px
              text-align center
              font-size 10px
              position absolute
              width 100px
              top 7px
              right 0
              border 1px solid #eb4c33
              border-radius 3px

.me-footer-text
    height 20px
    line-height 20px
    text-align right
    padding-right 20px
    margin-top 10px
  .me-footer-login
    padding-top 10px
    text-align center
    a
      display block
      padding 12px 0
      background #2ec975
      margin 0 20px
      border-radius 5px
      letter-spacing 10px
      color #fff
  .me-footer-blank
    height 6em
  .me-footer-other
    overflow hidden
    .hezuo
      color #999
      text-align center
    .other
      padding 12px 0
      display flex
      li
        text-align center
        width 50%
        img
          width 60px
</style>

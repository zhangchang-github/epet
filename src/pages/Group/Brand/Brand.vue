<template>
  <div class="group-other-header">
  <footer class="group-other">
    <div class="item-wrap">

      <div class="item" v-for="(brand, index) in groupBrands" :key="index">
        <div class="item-title">
          <span>—— {{brand.title}} ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li v-for="(item, index) in brand.list" :key="index">
              <a href="javascript:;" class="block">
                <div class="image">
                  <img :src="item.logo">
                </div>
                <div>
                  <img v-if="item.recommend == 1" src="../../../common/group-image/jian.png" class="jian">
                </div>
                <span v-if="item.tagongyi == 1" class="logo">TA公益</span>
                <p class="name">{{item.name}}</p>
                <p class="address">{{item.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!--<div class="item">
        <div class="item-title">
          <span>—— 主粮品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <span class="logo">TA公益</span>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <span class="logo">TA公益</span>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>—— 零食品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <span class="logo">TA公益</span>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <span class="logo">TA公益</span>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>—— 医疗品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>—— 保健品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>—— 洗护品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>—— 玩具品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>—— 日用品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>—— 护理品牌 ——</span>
        </div>
        <div class="item-list">
          <ul>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg">
                </div>
                <div>
                  <img src="../../../common/group-image/jian.png" class="jian">
                </div>
                <p class="name">ZIWI Peak</p>
                <p class="address">新西兰</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>

            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/3b236d1731bd91004bffcec3515e1a0a.jpg">
                </div>
                <p class="name">冠能</p>
                <p class="address">美国</p>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="block">
                <div class="image">
                  <img src="../../../common/group-image/87feaa80f9fbed84c37a7b07da6324a1.jpg">
                </div>
                <p class="name">原始猎食渴望</p>
                <p class="address">加拿大</p>
              </a>
            </li>
          </ul>
        </div>
      </div>-->
    </div>
  </footer>
    <div>
      <a href="javascript:;" class="all" @click="showAll">全部</a>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default{

    computed:{
      ...mapState(['groupBrands'])
    },

    mounted(){
      this.$store.dispatch('getGroupBrands', ()=>{
        this.$nextTick(()=>{
          if(!this.type_left){
            this.type_left = new BScroll('.group-other', {
              click:true
            })
          }
        })
      })
    },
    methods:{
      showAll(){
        this.$router.push('/allbrand')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.all
  width 40px
  height 40px
  right 6px;
  bottom 50px
  position fixed
  z-index 999;
  background rgba(0,0,0,.4)
  line-height 40px
  border-radius 50%
  color #fff
  font-size 12px
  text-align center

.group-other-header
  .group-other
    position fixed
    top 40px
    bottom 0
    background #f3f4f5
    .item-wrap
      padding-top 5px
      padding-bottom 40px
      text-align center
      .item
        padding-bottom 10px
        margin 0 auto
        .item-title
          background #fff
          padding-top 20px
          font-size 12px
          color #999
        .item-list
          background #fff
          overflow hidden
          ul
            overflow hidden
            li
              position relative
              padding 0 5px
              width 33.3333%
              float left
              text-align center
              margin-top 20px
              .block
                display block
                .image
                  border 1px solid #e2e2e2
                  img
                    width 80%
                    height 40px
                    margin 10px auto 10px
                .jian
                  position absolute
                  width 13px
                  height 13px
                  top 0
                  left 5px
                .logo
                  position absolute
                  top 0
                  right 6px
                  padding 0 2px
                  background #e44b46
                  color #fff
                  font-size 8px
                .name
                  margin-top 5px
                  height 20px
                  font-size 13px
                  color #333
                .address
                  height 20px
                  font-size 12px

</style>

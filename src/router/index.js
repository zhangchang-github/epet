
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home/Home.vue'
import Group from '../pages/Group/Group.vue'
import Cart from '../pages/Cart/Cart.vue'
import Me from '../pages/Me/Me.vue'

import AllBrand from '../pages/AllBrand/AllBrand.vue'
import Search from '../pages/Search/Search.vue'

import Type from '../pages/Group/Type/Type.vue'
import Brand from '../pages/Group/Brand/Brand.vue'

import Demo from '../pages/Demo/Demo.vue'

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/group',
      component:Group,
      children:[
        {
          path:'type',
          component:Type
        },
        {
          path:'brand',
          component:Brand
        },
        {
          path:'',
          redirect:'type'
        }
      ]
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/allBrand',
      component:AllBrand
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/demo',
      component:Demo
    }
  ]
})


import Mock from 'mockjs'

import home from './home.json'
import group from './group.json'

import brand from './brand.json'
import allbrand from './allbrand.json'

// 顶部导航栏数据
Mock.mock('/wap/homeMenus', {code:0, data:home.menus})
// 所有轮播图广告
const imgList = home.datas.filter(item => item.type_name === '图片轮播广告')
Mock.mock('/wap/homeImgList', {code:0, data:imgList})
// 10个图标
const iconList = home.datas.filter(item => item.type_name === '栏目菜单二')
Mock.mock('/wap/homeIconList', {code:0, data:iconList[0].menus})
// 惊喜模板 - 返回结果为数组
const dailyList = home.datas.filter(item => item.type_name === '天天惊喜模板')
Mock.mock('/wap/homeDaily', {code:0, data:dailyList[0]})
// 广告模板
const advertList = home.datas.filter(item => item.type_name === '通用广告模板').map(item => {
  return [item.content_images[0], item.content_images[1]]
})
Mock.mock('/wap/homeAdvertList', {code:0, data:advertList})


Mock.mock('/wap/groupNames', {code:0, data:group.name})
Mock.mock('/wap/groupContents', {code:0, data:group.list})

Mock.mock('/wap/groupBrands', {code:0, data:brand.brand})

Mock.mock('/wap/allBrands', {code:0, data:allbrand.brand})

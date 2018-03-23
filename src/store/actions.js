
import {
  reqHomeMenus,
  reqHomeImgList,
  reqHomeIconList,
  reqHomeDaily,
  reqHomeAdvertList,

  reqGroupNames,
  reqGroupBrands,

  reqAllBrands,
  reqGroupContents
} from '../api'

import {
  RECEIVE_HOME_MENUS,
  RECEIVE_HOME_IMG_LIST,
  RECEIVE_HOME_ICON_LIST,
  RECEIVE_HOME_DAILY,
  RECEIVE_HOME_ADVERT_LIST,

  RECEIVE_GROUP_NAMES,
  RECEIVE_GROUP_BRANDS,
  RECEIVE_ALL_BRANDS,
  RECEIVE_GROUP_CONTENTS
} from './mutation-types'

export default {
  // 首页导航栏
  async getHomeMenus({commit}, callback){
    const result = await reqHomeMenus()
    if(result.code === 0){
      commit(RECEIVE_HOME_MENUS, {homeMenus:result.data})
      callback && callback()
    }
  },
  // 首页导航栏
  async getHomeImgList({commit}, callback){
    const result = await reqHomeImgList()
    if(result.code === 0){
      commit(RECEIVE_HOME_IMG_LIST, {homeImgList:result.data})
      callback && callback()
    }
  },
  // 首页导航栏
  async getHomeIconList({commit}, callback){
    const result = await reqHomeIconList()
    if(result.code === 0){
      commit(RECEIVE_HOME_ICON_LIST, {homeIconList:result.data})
      callback && callback()
    }
  },
  // 首页导航栏
  async getHomeDaily({commit}, callback){
    const result = await reqHomeDaily()
    if(result.code === 0){
      commit(RECEIVE_HOME_DAILY, {homeDaily:result.data})
      callback && callback()
    }
  },
  // 首页导航栏
  async getHomeAdvertList({commit}, callback){
    const result = await reqHomeAdvertList()
    if(result.code === 0){
      commit(RECEIVE_HOME_ADVERT_LIST, {homeAdvertList:result.data})
      callback && callback()
    }
  },

  // 分类页
  async getGroupNames({commit}, callback){
    const result = await reqGroupNames()
    if(result.code === 0){
      commit(RECEIVE_GROUP_NAMES, {groupNames:result.data})
      callback && callback()
    }
  },
  // 分类页
  async getGroupContents({commit}, callback){
    const result = await reqGroupContents()
    if(result.code === 0){
      commit(RECEIVE_GROUP_CONTENTS, {groupContents:result.data})
      callback && callback()
    }
  },

  // 分类页品牌
  async getGroupBrands({commit}, callback){
    const result = await reqGroupBrands()
    if(result.code === 0){
      commit(RECEIVE_GROUP_BRANDS, {groupBrands:result.data})
      callback && callback()
    }
  },

  // 所有品牌
  async getAllBrands({commit}, callback){
    const result = await reqAllBrands()
    if(result.code === 0){
      commit(RECEIVE_ALL_BRANDS, {allBrands:result.data})
      callback && callback()
    }
  }
}

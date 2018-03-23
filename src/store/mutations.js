
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
  [RECEIVE_HOME_MENUS](state, {homeMenus}){
    state.home.homeMenus = homeMenus
  },
  [RECEIVE_HOME_IMG_LIST](state, {homeImgList}){
    state.home.homeImgList = homeImgList
  },
  [RECEIVE_HOME_ICON_LIST](state, {homeIconList}){
    state.home.homeIconList = homeIconList
  },
  [RECEIVE_HOME_DAILY](state, {homeDaily}){
    state.home.homeDaily = homeDaily
  },
  [RECEIVE_HOME_ADVERT_LIST](state, {homeAdvertList}){
    state.home.homeAdvertList = homeAdvertList
  },

  [RECEIVE_GROUP_NAMES](state, {groupNames}){
    state.groupNames = groupNames
  },
  [RECEIVE_GROUP_CONTENTS](state, {groupContents}){
    state.groupContents = groupContents
  },

  [RECEIVE_GROUP_BRANDS](state, {groupBrands}){
    state.groupBrands = groupBrands
  },

  [RECEIVE_ALL_BRANDS](state, {allBrands}){
    state.allBrands = allBrands
  }
}

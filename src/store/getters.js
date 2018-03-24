
export default {
  lunboImgs(state){
    return state.home.homeImgList.filter(item => item.index === '3160' || item.index === '3171').map(item => item.value)
  },

  otherImgs(state){
    return state.home.homeImgList.filter(item => item.index !== '3160' && item.index !== '3171').map(item => item.value[0])
  },

  adverCollection(state){
    return state.home.homeAdvertList.slice(1, 6)
  }
}


import ajax from './ajax'

export const reqHomeMenus = () => ajax('/wap/homeMenus')
export const reqHomeImgList = () => ajax('/wap/homeImgList')
export const reqHomeIconList = () => ajax('/wap/homeIconList')
export const reqHomeDaily = () => ajax('/wap/homeDaily')
export const reqHomeAdvertList = () => ajax('/wap/homeAdvertList')

export const reqGroupNames = () => ajax('/wap/groupNames')
export const reqGroupContents = () => ajax('/wap/groupContents')

export const reqGroupBrands = () => ajax('/wap/groupBrands')

export const reqAllBrands = () => ajax('/wap/allBrands')

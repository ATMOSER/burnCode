import { pages, tabBar } from '../pages.json'
import { tabbarStore } from '@/components/fg-tabbar/tabbar'
const { list } = tabBar
// 初始化pages映射
const mapUrl = {}
const mapTabBarUrl = {}
pages.map((item) => {
  const { path, style } = item
  return (mapUrl[style.navigationBarTitleText] = '/' + path)
})
list.map((item) => {
  const { pagePath, text } = item
  return (mapTabBarUrl[text] = '/' + pagePath)
})
function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&')
}
// 跳转页面
export function navigateByName(url, params = {}) {
  let resURL = mapUrl[url]
  if (Object.keys(params).length > 0) {
    resURL += `?${objectToQueryString(params)}`
  }
  if ([...Object.keys(mapUrl)].includes(url)) {
    uni.navigateTo({
      url: resURL,
    })
  }
}
// 切换tab
export function switchTab(name) {
  uni.switchTab({
    url: mapTabBarUrl[name],
  })
  tabbarStore.setCurIdx(list.findIndex((item) => name === item.text))
}
// 重定向页面
export function xRelaunch(url, params = {}) {
  let resURL = mapUrl[url]
  if (Object.keys(params).length > 0) {
    resURL += `?${objectToQueryString(params)}`
  }
  if ([...Object.keys(mapUrl)].includes(url)) {
    uni.reLaunch({
      url: resURL,
    })
  }
}
// 返回页面
export function back() {
  uni.navigateBack({
    delta: 1,
  })
}

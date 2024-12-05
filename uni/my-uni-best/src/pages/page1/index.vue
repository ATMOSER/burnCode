<route lang="json5">
{
  layout: 'tabbar',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: 'page1',
  },
}
</route>

<template>
  <view class="pt-40 text-xl text-center text-green-500">page1</view>
  <view @click="handleTo('次级页面')">去次级页面</view>
  <view @click="switch_tab">去首页</view>
</template>

<script lang="ts" setup>
import {navigateByName, switchTab} from "@/tool/navigate";
import {tabbarStore} from "@/components/fg-tabbar/tabbar";

const handleTo = (page) => {
  navigateByName(page)
}
const switch_tab = () => {
  switchTab('首页')
}
</script>

<style lang="scss" scoped>
.test-css {
  // mt-4=>1rem=>16px;
  margin-top: 16px;
}
</style>

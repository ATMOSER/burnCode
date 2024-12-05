<template>
  <wd-config-provider :themeVars="themeVars">
    <x-navigator :title="pageTitleText" />
    <slot />
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import XNavigator from "@/components/xNavigator/xNavigator.vue";
const pageTitleText = ref(toRaw(getCurrentPages()[0].$page.meta.navigationBar.titleText))

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>

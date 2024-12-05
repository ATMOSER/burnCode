<script setup>
const prop = defineProps({
  title: {
    type: String,
  },
  showAction: {
    type: Boolean,
    default: true,
  },
  actionRight: {
    type: Function,
    default: () => {
      return () => false
    },
  },
  showRight: {
    type: Boolean,
    default: false,
  },
  otherLeft: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update-data'])

const sendDataToParent = () => {
  // 当按钮被点击时触发事件
  emit('update-data', false)
}
</script>

<template>
  <view class="navigator">
    <view class="text-center">{{ title }}</view>
  </view>
</template>

<style scoped lang="scss">

</style>

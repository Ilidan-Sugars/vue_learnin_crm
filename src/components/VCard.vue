<template>
  <NCard :title="title">
    <NSpin :show="show">
      <slot></slot>
    </NSpin>
  </NCard>
</template>

<script setup>
import { NSpin, NCard } from 'naive-ui';


defineProps({
  title: String,
  show: {
    type: Boolean,
    default: false
  },
})
</script>

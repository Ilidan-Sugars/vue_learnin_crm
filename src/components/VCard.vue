<template>
  <div class="VCard">
    <NSpin :show="show">
      <NCard :title="title">
        <slot></slot>
      </NCard>
    </NSpin>

  </div>
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

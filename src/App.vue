<template>
  <NConfigProvider :theme="darkTheme">
    <RouterView></RouterView>
  </NConfigProvider>
</template>

<script setup>
import { darkTheme, NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
</script>

<style>
body {
  background: black !important;
  color: wheat !important;
}
</style>

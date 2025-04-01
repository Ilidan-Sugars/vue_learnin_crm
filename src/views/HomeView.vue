<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <VCard title="World" :show="show">
            Hello
          </VCard>
          <NButton @click="show = !show">
            tesst
          </NButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NButton } from 'naive-ui';
import VCard from '~/components/VCard.vue'

const show = ref(false)
</script>

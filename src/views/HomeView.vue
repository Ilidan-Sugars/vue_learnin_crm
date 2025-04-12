<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <VCard title="World" :show="show">
            Hello
          </VCard>
          <LoginParticle></LoginParticle>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VCard from '~/components/VCard.vue'
import LoginParticle from '~/components/LoginParticle.vue'


const show = ref(false)
</script>

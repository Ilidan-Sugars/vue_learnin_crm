<template>
  <div class="LoginParticle">
    {{ Hash }}
    <NInput v-model:value="login" placeholder="Login"></NInput>
    <NInput v-model:value="password" @update:value="computeHash" placeholder="Password"></NInput>
    <NButton @Click="signIn"> Test </NButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NInput, NButton } from 'naive-ui';
import { useUsersStore } from '~/stores/users'

const password = ref('')
const login = ref('')
const Hash = ref('')
const users = useUsersStore()

async function getSHA256Hash(str) {
  if (!str) return '';

  const buf = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

async function computeHash() {
  Hash.value = await getSHA256Hash(password.value);
}

const signIn = () => {
  console.log(users.checkUsers(login.value, Hash.value))
  for (let key of Object.keys(users.users)) {
    var capital = users.users[key];
    console.log(key, capital.login == login.value)
  }
}
</script>

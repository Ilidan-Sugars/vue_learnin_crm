  <template>
    <div class="LoginParticle">
      {{ Hash }}
      <NInput v-model:value="login" placeholder="Login"></NInput>
      <NInput v-model:value="password" placeholder="Password"></NInput>
      <NButton @Click="signIn"> Test </NButton>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NInput, NButton } from 'naive-ui';
import { useUsersStore } from '~/stores/users'

const password = ref('')
const login = ref('')
const usersStore = useUsersStore()

const router = useRouter()


const signIn = async () => {
  if (usersStore.checkUser(login.value, password.value)) {
    console.log(1111)
    router.push('/Posts')
  }
}
</script>

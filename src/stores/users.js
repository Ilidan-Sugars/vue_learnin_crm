import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref([{ id: 1, login: 'admin', pasword: '' }])
  return { users }
})

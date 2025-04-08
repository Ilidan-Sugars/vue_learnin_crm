import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    {
      id: 1,
      name: 'Adeptus Administratum',
      login: 'admin',
      password: '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5',
    }, //qwerty
    {
      id: 2,
      name: 'Readactor Ignat',
      login: 'Olegus',
      password: '31eac9726242e2c437c6968adc4d7aacbc5194ef0900eddce268bd7d383fd304 ',
    }, //Haha
    {
      id: 3,
      name: 'Brouli',
      login: 'goku',
      password: '23162791bbf79e01563d2a564e33664ca5110f9f9be088ccb886c98faa06286b',
    }, //
    {
      id: 4,
      name: 'Sareh',
      login: 'necrodermis',
      password: '3043e5e2511a46d7efea051590ea56308ffc4ccf1b68b3b6aeb115ba3b1a1c97 ',
    }, //Necron
    {
      id: 5,
      name: 'Петя',
      login: 'Phoner',
      password: '3e46c8846ec5016c238d9f68c89c5efaeea89d565399881ba15b36ece1d699af ',
    }, //gum
    {
      id: 6,
      name: 'Alex',
      login: 'coder',
      password: '47ebf385118a877d3bb15bdbb4877635dd7070f1afce8c1bc2565a1e704fda95 ',
    }, //fullstack
    {
      id: 7,
      name: 'Rvl',
      login: 'Rvl',
      password: '07b9b468c0d421f622f9ed4a641e648ee6e47f266ae22b938a88209177d99d30 ',
    }, //54731
    {
      id: 8,
      name: '???',
      login: '???',
      password: 'a03b221c6c6eae7122ca51695d456d5222e524889136394944b2f9763b483615 ',
    }, //???
    {
      id: 9,
      name: 'Goblin',
      login: 'svin',
      password: 'd41ff7570ed4a890a72a6bc1cdbb24bb9a9dae1b614338ea57edc3a02f940516 ',
    }, //hru
    {
      id: 10,
      name: 'aaaaaaa',
      login: 'bbbbbbb',
      password: 'cd4f3afa6982937e1fcc283c451f1cd9d368e998b554ff7b06eabe6e723a39c2 ',
    }, //  ccccccc
  ])

  const checkUsers = (login, password) => {
    for (let user in users) {
      if (user.login == login && user.password == password) {
        return true
      }
    }
    return false
  }
  return { users, checkUsers }
})

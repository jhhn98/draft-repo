<template><header class="header-fixed">
  <h1>LOGO</h1>
  <a href="#" class="user-link" @click.prevent="toggleLogin">
    {{ user.isLoggedIn ? 'logout' : 'login' }}
  </a>
</header>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const router = useRouter()
const user = useUserStore()

function toggleLogin() {
  if (user.isLoggedIn) {
    alert('초기화면으로 이동합니다.')
    user.logout()
    router.replace('/')
  } else {
    user.toggle()
  }
}
</script>
<template>
  <h2>Guest Page</h2>
  <section>
    <p>로그인 후 {{ targetTitle }} 페이지로 이동이 가능합니다.</p>
    <router-link to="/" class="login-button" @click="handleLogin">LOGIN</router-link>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'

const router = useRouter()//페이지 이동, 네비게이션 제어
/**
 * router.push() 특정 경로로 이동
 * router.replace() 히스토리에 남기지 않고 이동
 * router.back() 브라우저 뒤로가기 기능
 * router.resolve() 경로 정보를 라우트 객체로 변환
 */
const route = useRoute()//현재 페이지의 상태/정보 제공
/**
 * route.path 현재 경로 /order 같은 문자열
 * route.params 동적 파라미터 :id 등
 * route.query 쿼리 파라미터 ?redirect=/order
 * route.meta 라우트 정의에서 지정한 meta 정보
 */
const user = useUserStore()
const targetTitle = computed(() => getTargetInfo().title)
function getTargetInfo() {
  const rawRedirect = (route.query.redirect as string) || '/'
  const resolved = router.resolve(rawRedirect)
  const title = (resolved.meta?.title as string) ?? (typeof resolved.name === 'string' ? resolved.name : resolved.path)
  const url = resolved.fullPath || resolved.path || '/'

  return { title, url }
}

function handleLogin() {
  user.login()
  const { title, url } = getTargetInfo()

  alert(`로그인되었습니다.\n확인버튼을 클릭하면 ${title} 페이지로 이동합니다.`)
  //const redirect = (route.query.redirect as string) || '/'
  router.replace(url)
}
</script>
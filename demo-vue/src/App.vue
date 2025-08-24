<template>
  <Header/>
  <main class="main-container">
    <router-view/>
  </main>
  <FooterNav/>
</template>
<script setup lang="ts">
  import Header from '@/components/layout/Header.vue'
  import FooterNav from '@/components/layout/FooterNav.vue'
</script>
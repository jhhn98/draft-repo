<template>
    <!-- <Header/>
    <router-view/>
    <section class="home-page">
        <h1>Coffee Demo</h1>
    </section>
    <FooterNav/> -->
    <header>
        <h1>☕️ LOGO</h1>
        <router-link to="/" class="user-link">login</router-link>
    </header>
    <main class="main-container">
        <h2>Demo Home</h2>
        <section>
            <p>Coffee Demo</p>
        </section>
    </main>
    <footer class="footer-fixed">
        <nav class="footer-navigation">
            <router-link to="/">Home</router-link>
            <router-link to="/">Order</router-link>
            <router-link to="/">Pay</router-link>
            <router-link to="/">More</router-link>
        </nav>
    </footer>
</template>
<script setup lang="ts"></script>
<template>
    <!-- <Header/>
    <router-view/>
    <section class="home-page">
        <h1>Coffee Demo</h1>
    </section>
    <FooterNav/> -->
    <header class="header-fixed">
        <h1>LOGO</h1>
        <router-link to="/" class="user-link">login</router-link>
    </header>
    <main class="main-container">
        <h2>Home</h2>
        <section>
            <p>본문 영역 index 페이지입니다.</p>
        </section>
    </main>
    <footer class="footer-fixed">
        <nav class="footer-navigation">
            <router-link to="/" class="nav-link"><span>Home</span></router-link>
            <router-link to="/" class="nav-link"><span>Order</span></router-link>
            <router-link to="/" class="nav-link"><span>Pay</span></router-link>
            <router-link to="/" class="nav-link"><span>More</span></router-link>
        </nav>
    </footer>
</template>
<script setup lang="ts"></script>
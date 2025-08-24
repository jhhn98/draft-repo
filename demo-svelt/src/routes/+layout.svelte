<script lang="ts">
    import '../../../assets/styles/style-reset.scss';
    import '../styles/layout.scss';

    import Header from '$lib/components/Header.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
</script>
<svelte:head>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>
<div class="layout">
    <Header/>
    <main class="main-container">
        <slot/>
    </main>
    <FooterNav/>
</div>
<script>
    import Header from '$lib/components/Header.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import Router from 'svelte-spa-router';
    import routes from './routes.js';
</script>

<div class="layout">
    <Header/>
    <main class="main-container" role="main" aria-live="polite">
        <Router {routes} useHash={true}/>
    </main>
    <FooterNav/>
</div>
<script>
    import { page } from '$app/stores';

    const items = [
        { path: '/', key: 'home', label: '홈' },
        { path: '/order', key: 'order', label: '주문' },
        { path: '/pay', key: 'pay', label: '결제' },
        { path: '/more', key: 'more', label: '더보기' }
    ];

    $: current = $page.url.pathname;
</script>
<footer class="footer-fixed">
    <nav class="footer-navigation">
        {#each items as item}
            <a href={item.path} data-sveltekit-preload-data class:selected={current === item.path} aria-current={current === item.path ? 'page' : undefined}>{item.label}</a>
        {/each}
    </nav>
</footer>
<style>
    .footer-fixed{position:fixed;left:50%;bottom:0;width:100%;max-width:760px;height:100px;transform:translateX(-50%);}
    .footer-fixed::before{display:block;position:absolute;top:0;left:0;width:100%;height:1px;background:#f6f6f6;}
    .footer-navigation{display:flex;height:100%;align-items:center;justify-content:center;}
    a{display:flex;flex:0 0 25%;align-items:center;justify-content:center;height:100%;padding:10px;background:#dedede;text-align:center;}
    a:nth-child(even){background:#fafafa;}
    a span{display:block;flex:0 0 100%;}
    a.selected{background:#222;color:#fff;font-weight:600;}
</style>
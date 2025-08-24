<script>
    import { isLoggedIn } from '$lib/stores/user.js';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    export let message = '로그인이 필요합니다.';
    export let title;

    $: redirectTo = $page.url.pathname + $page.url.search;

    function login() {
        isLoggedIn.set(true);
        alert(`로그인 되었습니다. ${title} 페이지로 이동합니다.`);
        goto(redirectTo, { replaceState: true });
    }
</script>

{#if $isLoggedIn}
    <slot />
{:else}
    <h2>로그인</h2>
    <p>{message}</p>
    <button class="login-btn" on:click={login}>login</button>
{/if}
<style>
    .login-btn{display:inline-block;padding:5px 10px;background:#eee;border-radius:5px;color:#222;font-size:14px;line-height:16px;}
</style>
<script>
    import { isLoggedIn } from '$lib/stores/user.js';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';


    export let title = 'Demo';


    function toggleLogin(e) {
        e.preventDefault();

        if ($isLoggedIn) {
            isLoggedIn.set(false);
            alert('초기화면으로 이동합니다.');
            goto('/', { replaceState: true });
        } else {
            isLoggedIn.update(v => !v);
        }
    }
</script>

<header class="header-fixed">
    <h1>{title}</h1>
    <a href="#" class="user-link" on:click={toggleLogin}>
        {$isLoggedIn ? 'logout' : 'login'}
    </a>
</header>

<style>
    .header-fixed{position:fixed;top:0;left:50%;width:100%;max-width:760px;height:60px;transform:translateX(-50%);}
    .header-fixed h1{display:none;}
    .user-link{display:block;position:absolute;top:50%;right:0;padding:5px 10px;background:#eee;border-radius:5px;transform:translateY(-50%);color:#222;font-size:14px;line-height:16px;}
</style>
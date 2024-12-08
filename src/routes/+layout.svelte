<script>
    import Header from '$lib/Header.svelte';
</script>

<Header />
<main>
    <div class="container">
        <slot />
    </div>
</main>

<style>
    main {
        background-color: royalblue;
        padding: 0 0 2vh 0;
    }
    .container {
        background-color: white;
        width: 90%;
        margin: 0 auto 2vh auto;
    }
</style>
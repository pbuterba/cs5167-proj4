<main>
    <slot name="header" />
    <div class="content-area">
        <slot name="main-content" />
        <slot name="side-content" />
    </div>
</main>

<style>
    main {
        padding: 2vh 0 2vh 0;
        font-family: sans-serif;
    }
    .content-area {
        display: grid;
        grid-template-columns: 4fr 1fr;
    }
</style>
<script>
    import {Accordion, AccordionHeader, AccordionBody} from 'kiwi-nl';
    import {categories} from '$lib/presetData.js';
</script>

<main>
    <div class="container">
        <h1>Frequently Asked Questions:</h1>
        {#each categories as category}
            <Accordion>
                <div slot="header">
                    <AccordionHeader>
                        {category.name}
                    </AccordionHeader>
                </div>
            </Accordion>
        {/each}
    </div>
</main>

<style>
    main {
        padding: 2vh 0 2vh 0;
        font-family: sans-serif;
    }
    h1 {
        text-align: center;
        margin: 0;
    }
</style>
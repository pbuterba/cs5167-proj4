<script>
    import {Accordion, AccordionHeader, AccordionBody} from 'kiwi-nl';
    import ContentPage from '$lib/ContentPage.svelte';
    import {categories, faqs} from '$lib/presetData.js';
</script>

<ContentPage>
    <h1 slot="header">Frequently Asked Questions:</h1>
    <div slot="main-content">
        {#each categories as category}
            <div class="category" style={"background-color: " + category.color}>
                <Accordion>
                    <div slot="header">
                        <AccordionHeader>
                            {category.name}
                        </AccordionHeader>
                    </div>
                    <AccordionBody slot="body">
                        {#each faqs as faq}
                            {#if faq.category === category.name}
                                <div class="question">
                                    <p><strong>Q: {faq.q}</strong></p>
                                    <p><strong>A:</strong> {faq.a}</p>
                                </div>
                            {/if}
                        {/each}
                    </AccordionBody>
                </Accordion>
            </div>
        {/each}
    </div>
</ContentPage>

<style>
    h1 {
        text-align: center;
    }
    .question {
        margin: 2vh auto;
        border: 1.5px dashed black;
        padding: 0.5vh 1vw;
    }
</style>
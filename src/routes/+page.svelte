<script>
    import {Accordion, AccordionHeader, AccordionBody} from 'kiwi-nl';
    import ContentPage from '$lib/ContentPage.svelte';
    import {categories, faqs} from '$lib/presetData.js';
</script>

<main>
    <p>
        There comes a time in everyone's life where you need to start "adulting": taking care of various life tasks that were previously taken care of by someone else. With such a vast number of questions that come up, many times it seems like everyone is expected to already know the answers. This page is dedicate to helping everyone who finds themself in such a
        situation. If you have found yourself suddenly needing to understand a concept or know how to accomplish something that
        you've never had to deal with before, if you have been asking yourself "How do I...?", this site is for you. Here you can
        consult our expert<sup>*</sup> advice provided in respons to our Frequently Asked Questions, or check out the discussion board to ask
        your own question if it's not answered in the FAQs.
    </p>
    <small>
        *This is a prototype site. Answers to FAQs are not actually expert advice, but are AI generated, and should be followed
        with discernment.
    </small>
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
</main>

<style>
    main {
        padding: 2vh 2vw;
    }
    h1 {
        text-align: center;
    }
    .question {
        margin: 2vh auto;
        border: 1.5px dashed black;
        padding: 0.5vh 1vw;
    }
</style>
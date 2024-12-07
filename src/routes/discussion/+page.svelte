<script>
    import {Button} from 'kiwi-nl';
    import ContentPage from "$lib/ContentPage.svelte";
    import {discussionStore} from '$lib/stores.js'

    let discussions;
    discussionStore.subscribe((discussionList) => {
        discussions = discussionList;
    });

    console.log(discussions);
</script>

<main>
    <ContentPage>
        <h1 slot="header">Discussion Forum:</h1>
        <div slot="main-content" class="discussion-board">
            <textarea rows="10" cols="100" placeholder="Ask your question..."></textarea>
        </div>
        <div slot="side-content" class="side-bar">
            <p>Check out Frequently Asked Questions!</p>
            <Button href="/">See FAQs</Button>
            <p>Other categories that should be addressed?</p>
            <Button href="/category-suggestion">Suggest them</Button>
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
    .discussion-board {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .side-bar {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        text-align: center;
        padding: 2vh 2vw;
    }
    textarea {
        width: 90%;
    }
</style>
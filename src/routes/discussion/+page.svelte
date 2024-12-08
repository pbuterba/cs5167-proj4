<script>
    import {Button, TextInput} from 'kiwi-nl';
    import ContentPage from "$lib/ContentPage.svelte";
    import DiscussionPost from '$lib/DiscussionPost.svelte';
    import {discussionStore} from '$lib/stores.js'

    let discussions;
    discussionStore.subscribe((discussionList) => {
        discussions = discussionList;
    });
</script>

<main>
    <ContentPage>
        <h1 slot="header">Discussion Forum:</h1>
        <div slot="main-content" class="discussion-board">
            <div id="post-form">
                <textarea rows="10" cols="110" placeholder="Ask your question..."></textarea>
                <div class="form-buttons">
                    <Button type="inverse">Clear</Button>
                    <Button>Post</Button>
                </div>
            </div>
            {#each discussions as discussion}
                <DiscussionPost postData={discussion} />
                {#each discussion.replies as reply}
                    <DiscussionPost postData={reply} reply />
                {/each}
                <div class="reply-box">
                    <TextInput placeholder='Reply to this question...' />
                    <div class="form-buttons">
                        <Button type="inverse">Clear</Button>
                        <Button>Post</Button>
                    </div>
                </div>
            {/each}
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
    #post-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 85%;
        margin: 2vh auto;
    }
    .form-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1vw;
        width: 100%;
        margin: 1vh auto;
    }
    .reply-box {
        width: 93.25%;
        margin: 1vh auto;
    }
</style>
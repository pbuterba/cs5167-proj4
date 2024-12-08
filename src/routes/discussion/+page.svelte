<script>
    import {Button, TextInput} from 'kiwi-nl';
    import ContentPage from "$lib/ContentPage.svelte";
    import DiscussionPost from '$lib/DiscussionPost.svelte';
    import {discussionStore} from '$lib/stores.js'

    let discussions;
    discussionStore.subscribe((discussionList) => {
        discussions = discussionList;
    });
    
    let postText;
    let replyTexts = [];
    for(let i = 0; i < discussions.length; i++) {
        replyTexts.push("");
    }

    function getCurrentTime() {
        let date = new Date();
        let dateComponents = date.toLocaleDateString().split('/');
        let timeComponents = date.toLocaleTimeString().split(" ");
        let ampm = timeComponents[1];
        timeComponents = timeComponents[0].split(":");

        let dateString = dateComponents[2] + "-";
        dateString += dateComponents[0].padStart(2, "0") + "-";
        dateString += dateComponents[1].padStart(2, "0") + " ";
        
        let hour = parseInt(timeComponents[0]);
        if(hour === 12 && ampm === "AM") {
            hour = "00";
        } else if(hour != 12 && ampm === "PM") {
            hour = (hour + 12).toString();
        } else {
            hour = hour.toString().padStart(2, "0");
        }

        dateString += hour + ":";
        dateString += timeComponents[1];

        return dateString;
    }

    function postDiscussion() {
        let post = {
            "posterName": "Preston Buterbaugh",
            "postTime": getCurrentTime(),
            "postText": postText
        };

        discussionStore.update((discussions) => {
            discussions.unshift(post);
            return discussions;
        });

        postText = "";
    }

    function postReply(discussionIndex) {
        let post = {
            "posterName": "Preston Buterbaugh",
            "postTime": getCurrentTime(),
            "postText": replyTexts[discussionIndex]
        }; 

        discussionStore.update((discussions) => {
            discussions[discussionIndex].replies.push(post);
            return discussions;
        });

        replyTexts[discussionIndex] = "";
    }
</script>

<main>
    <ContentPage>
        <h1 slot="header">Discussion Forum:</h1>
        <div slot="main-content" class="discussion-board">
            <div id="post-form">
                <textarea bind:value={postText} rows="10" cols="110" placeholder="Ask your question..."></textarea>
                <div class="form-buttons">
                    <Button type="inverse" on:click={() => {postText = ''}}>Clear</Button>
                    <Button on:click={postDiscussion}>Post</Button>
                </div>
            </div>
            {#each discussions as discussion, i}
                <DiscussionPost postData={discussion} />
                {#each discussion.replies as reply}
                    <DiscussionPost postData={reply} reply />
                {/each}
                <div class="reply-box">
                    <TextInput bind:value={replyTexts[i]} placeholder='Reply to this question...' />
                    <div class="form-buttons">
                        <Button type="inverse" on:click={() => {replyTexts[i] = ""}}>Clear</Button>
                        <Button on:click={postReply(i)}>Post</Button>
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
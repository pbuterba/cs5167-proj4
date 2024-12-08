<script>
    import profilePhoto from '$lib/images/profile-picture.jpg';

    export let postData;

    const MONTH_NAMES = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    function printTimestamp(timestamp) {
        let dateAndTime = timestamp.split(" ");
        let dateComponents = dateAndTime[0].split("-");
        let timeComponents = dateAndTime[1].split(":");

        let month = MONTH_NAMES[parseInt(dateComponents[1]) - 1];
        let day = parseInt(dateComponents[2]);
        let year = parseInt(dateComponents[0]);

        let hour = parseInt(timeComponents[0]);
        let ampm;
        if(hour === 0) {
            hour = 12;
            ampm = "AM";
        } else if(hour === 12) {
            ampm = "PM";
        } else if(hour > 12) {
            hour = hour - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }
        let minute = timeComponents[1];

        return month + " " + day + ", " + year + " " + hour + ":" + minute + " " + ampm;
    }
</script>

<main>
    <div class="heading">
        <div class="profile-information">
            <img src={profilePhoto} alt="Profile" with="1" class="profile-pic" />
            <h1>{postData.posterName}</h1>
        </div>
        <p class="post-time">{printTimestamp(postData.postTime)}</p>
    </div>
    <p>{postData.postText}</p>
</main>

<style>
    main {
        border: 1px solid black;
        padding: 0.25vw 1vh;
        width: 90%;
    }
    h1 {
        font-size: 1.1rem;
    }
    .heading {
        display: flex;
        justify-content: space-between;
    }
    .profile-information {
        display: flex;
        align-items: center;
    }
    .profile-information * {
        margin: auto 0.25vw;
    }
    .post-time {
        font-size: 0.9rem;
        font-style: italic;
    }
</style>
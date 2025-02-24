<template>
    <div class="d-flex" style="height: 100vh;">
        <!-- Sidebar -->
        <Taskbar />
        
        <!-- Main Dashboard Area -->
        <div class="flex-grow-1 d-flex justify-content-center align-items-center text-center">
            <h1>Wassup {{ firstname }},<br />{{ displayedText }}</h1>
        </div>
    </div>
</template>

<script>
import Taskbar from './Taskbar.vue';

export default {
    components: {
        Taskbar
    },

    data() {
        return {
            firstname: '',
            phrases: [
                "how u doin today?",
                "eyooo tijd voor koffietje!",
                "MONEY MONEY MONEY",
                "Just Fcking Good Coffee",
                "Drink some Fcking Good Coffee!!"
            ],
            fullText: "", // Current phrase being typed out
            displayedText: "",
            currentIndex: 0,

            // Funny button
            buttonPosition: { top: 0, left: 0 }, // Initial button position
            funnyButtonText: null,
            funnyButtonPhrases: [
                "Hahahaha!",
                "Too slow!",
                "Try harder!",
                "Nice try!",
                "You can do better!",
                "Is that all?",
                "Almost, but no!",
                "Better luck next time!",
                "Too bad, try again!",
                "Give up yet?",
                "Not fast enough!",
                "Is that the best you got?",
                "You missed!",
                "I’m too quick for you!",
                "Close, but not quite!",
                "Fail!",
                "You’re not even close!",
                "Try again, loser!",
                "Whoops, too slow!",
                "Hah! Missed me!"
            ]
        };
    },

    methods: {
        getSession() {
            // Login request
            this.req('Get', '/user/getsession').then((res) => {
                if (res.status) {
                    this.firstname = res.data.first_name;
                    this.funnyButtonText = `Hey ${this.firstname}, click this button!`;
                }
            });
        },

        // Typing effect for the current phrase
        typeWriterEffect() {
            if (this.currentIndex < this.fullText.length) {
                this.displayedText += this.fullText.charAt(this.currentIndex);
                this.currentIndex++;
                setTimeout(this.typeWriterEffect.bind(this), 100);
            } else {
                setTimeout(this.deleteEffect.bind(this), 1500); // Delay before starting to delete
            }
        },

        // Deleting effect for the current phrase
        deleteEffect() {
            if (this.currentIndex > 0) {
                this.displayedText = this.fullText.substring(0, this.currentIndex - 1);
                this.currentIndex--;
                setTimeout(this.deleteEffect.bind(this), 100);
            } else {
                this.switchPhrase(); // Once deleted, pick a new random phrase
                setTimeout(this.typeWriterEffect.bind(this), 1500); // Delay before typing again
            }
        },

        // Randomly switch to a new phrase
        switchPhrase() {
            const randomIndex = Math.floor(Math.random() * this.phrases.length); // Random index between 0 and the last phrase index
            this.fullText = this.phrases[randomIndex];
            this.currentIndex = 0; // Reset typing position for the new phrase
        },
    },

    mounted() {
        this.getSession();
        this.switchPhrase(); // Pick the first random phrase when the component is mounted
        this.typeWriterEffect();
    }
};
</script>

<style scoped>
.dashboard {
    background: gray;
}

.fullscreen-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 80vw;
    height: 100vh;
    overflow: hidden;
}

.moving-button {
    position: absolute;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    transition: top 0.2s, left 0.2s; /* Smooth movement */
}
</style>

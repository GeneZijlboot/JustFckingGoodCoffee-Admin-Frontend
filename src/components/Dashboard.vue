<template>
    <div v-if="firstname" class="d-flex vh-100 bg-light">
        <!-- Taskbar Section -->
        <Taskbar />
        <!-- Main Content Section -->
        <div class="flex-grow-1 d-flex justify-content-center align-items-center position-relative">
            <div class="text-center">
                <h1>Wassup {{ firstname }},<br />{{ displayedText }}</h1>
            </div>
        </div>
        <div class="fullscreen-container">
            <button type="button" class="btn btn-primary moving-button" @mouseenter="moveButton" :style="{ top: `${buttonPosition.top}px`, left: `${buttonPosition.left}px` }">Hey {{ firstname }}, click this button!</button>
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
        };
    },

    methods: {
        getSession() {
            // Login request
            this.req('Get', '/user/getsession').then((res) => {
                if (res.status) {
                    console.log(res);
                    this.firstname = res.data.first_name;
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

        moveButton() {
            // Calculate random position within the full screen
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            const randomTop = Math.random() * (viewportHeight - 50); // Account for button height
            const randomLeft = Math.random() * (viewportWidth - 100); // Account for button width

            this.buttonPosition = { top: randomTop, left: randomLeft };
        },
    },

    mounted() {
        this.getSession();
        this.switchPhrase(); // Pick the first random phrase when the component is mounted
        this.typeWriterEffect();

        // Center the button at the start
        this.buttonPosition = {
            top: window.innerHeight / 2 - -75, // Center vertically (subtract half the button height)
            left: window.innerWidth / 2 - 15 // Center horizontally (subtract half the button width)
        };
    }
};
</script>

<style scoped>
.dashboard {
    background: gray;
}

.fullscreen-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
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

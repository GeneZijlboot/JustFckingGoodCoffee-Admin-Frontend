<template>
    <div class="d-flex vh-100 bg-light">
        <!-- Taskbar Section -->
        <Taskbar />
        <!-- Main Content Section -->
        <div class="flex-grow-1 d-flex justify-content-center align-items-center">
            <div class="text-center">
                <h1>Wassup {{ firstname }},<br />{{ displayedText }}</h1>
            </div>
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
                phrases: ["how u doin today?", "eyooo tijd voor koffietje!", "MONEY MONEY MONEY", "Just Fcking Good Coffee", "Drink some Fcking Good Coffee!!"],
                fullText: "",  // Current phrase being typed out
                displayedText: "",
                currentIndex: 0,
            }
        },

        methods: {
            getSession() {
                //login req
                this.req('Get', '/user/getsession').then((res) => {
                    if (res.status) {
                        console.log(res);
                        this.firstname = res.data.first_name;
                    }
                })
            },

            // Typing effect for the current phrase
            typeWriterEffect() {
                if (this.currentIndex < this.fullText.length) {
                    this.displayedText += this.fullText.charAt(this.currentIndex);
                    this.currentIndex++;
                    setTimeout(this.typeWriterEffect.bind(this), 100);
                } else {
                    setTimeout(this.deleteEffect.bind(this), 1500);  // Delay before starting to delete
                }
            },

            // Deleting effect for the current phrase
            deleteEffect() {
                if (this.currentIndex > 0) {
                    this.displayedText = this.fullText.substring(0, this.currentIndex - 1);
                    this.currentIndex--;
                    setTimeout(this.deleteEffect.bind(this), 100);
                } else {
                    this.switchPhrase();  // Once deleted, pick a new random phrase
                    setTimeout(this.typeWriterEffect.bind(this), 1500);  // Delay before typing again
                }
            },

            // Randomly switch to a new phrase
            switchPhrase() {
                const randomIndex = Math.floor(Math.random() * this.phrases.length);  // Random index between 0 and the last phrase index
                this.fullText = this.phrases[randomIndex];
                this.currentIndex = 0;  // Reset typing position for the new phrase
            },
        },

        mounted() {
            this.getSession();
            this.switchPhrase();  // Pick the first random phrase when the component is mounted
            this.typeWriterEffect();
        }
    }
</script>
<style scoped>
    .dashboard {
        background: gray;
    }
</style>
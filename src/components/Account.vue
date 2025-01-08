<template>
    <div class="d-flex vh-100 bg-light">
        <!-- Taskbar Section -->
        <Taskbar />
        <!-- Main Content Section -->
        <div class="flex-grow-1 d-flex justify-content-center align-items-center">
            <h3>Account</h3>
        </div>
    </div>
</template>
<script>
import Taskbar from './Taskbar.vue';
    export default {
        components: {
            Taskbar
        },

    }
</script>
<style scoped>
</style>
<template>
    <div class="d-flex" style="height: 100vh;">
        <!-- Sidebar -->
        <Taskbar />
        
        <!-- Main Dashboard Area -->
        <div class="flex-grow-1 d-flex justify-content-center align-items-center text-center">
            <h3>Analytics</h3>
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
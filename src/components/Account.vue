<template>
    <div class="row">
        <div class="col-md-2">
            <Taskbar />
        </div>
        <div class="col-md-10 dashboard">
            <p>Account</p>
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
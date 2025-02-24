<template>
    <div class="d-flex" style="height: 100vh;">
      <!-- Sidebar -->
      <Taskbar />
      
      <!-- Main Dashboard Area -->
      <div class="flex-grow-1 d-flex justify-content-center align-items-center">
        <h1>Account</h1>
      </div>
  </div>
</template>

<script>
  import Taskbar from './Taskbar.vue';
  export default {
    components: {
      Taskbar
    },
  };
</script>

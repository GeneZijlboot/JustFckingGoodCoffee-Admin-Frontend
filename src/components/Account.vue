<template>
  <div class="row m-0">
    <div class="col-md-2 p-0">
      <Taskbar />
    </div>
    <div class="col-md-10 p-0 vh-100 d-flex align-items-center justify-content-center">
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
  };
</script>

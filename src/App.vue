<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const route = useRoute();

    // Watch the route path and update body background color
    watchEffect(() => {
      let backgroundColor;
      switch (route.path) {
        case '/page/login':
          backgroundColor = 'rgba(45,57,42,1)'; // Dark green for authentication routes -- rgb(49, 76, 56)
          localStorage.setItem('textColor', 'rgba(237, 232, 225, 1)');
          break;
        case '/page/account':
        case '/page/database':
        // case '/page/analytics':
        // case '/page/mollie':
        // case '/page/sendcloud':
        // case '/page/moneybird':
        // case '/page/settings':
        case '/page/dashboard':
        case (route.path.startsWith('/page/product/') ? route.path : null):
          backgroundColor = 'rgba(237, 232, 225, 1)'; // Blue for logged-in routes
          localStorage.setItem('textColor', 'rgba(45,57,42,1)'); // -- rgb(49, 76, 56)
          break;
        default:
          backgroundColor = 'rgba(45,57,42,1)'; // Default color -- rgb(49, 76, 56)
      }

      // Apply the background color to the body
      document.body.style.backgroundColor = backgroundColor;
    });
  },
};
</script>

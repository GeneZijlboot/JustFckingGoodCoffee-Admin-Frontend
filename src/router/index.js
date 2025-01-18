// rc/router.js
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';

//importing Authentication components
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';
import Database from '../components/Database.vue';
// import Analytics from '../components/Analytics.vue';
// import Mollie from '../components/Mollie.vue';
// import Sendcloud from '../components/Sendcloud.vue';
// import Moneybird from '../components/Moneybird.vue';
import Account from '../components/Account.vue';
// import Settings from '../components/Settings.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/page/login',
    },
    {
      path: '/page/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/page/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/page/database',
      name: 'Database',
      component: Database,
    },
    // {
    //   path: '/page/analytics',
    //   name: 'Analytics',
    //   component: Analytics,
    // },
    // {
    //   path: '/page/mollie',
    //   name: 'Mollie',
    //   component: Mollie,
    // },
    // {
    //   path: '/page/sendcloud',
    //   name: 'Sendcloud',
    //   component: Sendcloud,
    // },
    // {
    //   path: '/page/moneybird',
    //   name: 'Moneybird',
    //   component: Moneybird,
    // },
    {
      path: '/page/account',
      name: 'Account',
      component: Account,
    },
    // {
    //   path: '/page/settings',
    //   name: 'Settings',
    //   component: Settings,
    // }
  ]
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('authentication'); // Checkt of de gebruiker ingelogd is

//   // Als de gebruiker ingelogd is en naar login of register gaat, stuur hem naar de dashboard
//   if (isAuthenticated && (to.path === '/login' || to.path === '/register' || to.path === '/reset_password' || to.path === '/forgot_password')) {
//     next('/account');
//   } else {
//     next(); // Ga verder naar de gewenste route
//   }
// });

export default router;
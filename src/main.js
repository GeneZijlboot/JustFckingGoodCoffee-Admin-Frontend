//import bootrstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//import only stylesheet
import '../src/styles/App.scss';

//import router
import router from './router/index';
import App from './App.vue';

//import translations -> i18n file
import i18n from './translations.js';

import { functions } from './mixins/functions.js';

import { createApp } from 'vue';

//create the app instance
const app = createApp(App);

//add the mixin
app.mixin(functions);

//use router and i18n
app.use(router).use(i18n).mount('#app');
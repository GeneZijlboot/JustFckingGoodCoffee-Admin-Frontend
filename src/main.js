//import bootrstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//import only stylesheet
import '../src/styles/App.scss';

//import router
import router from './router/index';
import App from './App.vue';

import { functions } from './mixins/functions.js';

import { createApp } from 'vue';

//import i18n
import { createI18n } from 'vue-i18n';

const defaultLocale = 'en';

const localeOptions = [
    { id: 'en', name: 'English', direction: 'ltr' },
    { id: 'nl', name: 'Nederlands', direction: 'ltr' }
];

var messages = {};
const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale

const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: 'nl',
    messages,
    reloadOnLanguageChange: false,
});

//create the app instance
const app = createApp(App);

//get messages from backend
functions.methods.req('GET', '/message/getWithLanguage').then((res) => {
    if (res.status) {
        console.log(res);
        for (let locale in res.data) {
            i18n.global.setLocaleMessage(locale.toLocaleLowerCase(), res.data[locale])
            console.log(locale);
        }
    }
});

//add the mixin
app.mixin(functions);

//use router and i18n
app.use(router).use(i18n).mount('#app');
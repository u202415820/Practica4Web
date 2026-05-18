import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import {
    Button, Card,
    Column,
    DataTable,
    InputText,
    Select,
    SelectButton,
    Textarea,
    Toast,
    ToastService,
    Toolbar
} from 'primevue';
import i18n from './i18n.js';
import router from './router.js';
import pinia from './pinia.js';

createApp(App)
    .use(i18n)
    .use(router)
    .use(pinia)
    .use(PrimeVue, { theme: { preset: Material }, ripple: true })
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-column', Column)
    .component('pv-card', Card)
    .component('pv-data-table', DataTable)
    .component('pv-input-text', InputText)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-textarea', Textarea)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)
    .mount('#app');
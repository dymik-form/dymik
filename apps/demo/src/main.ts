import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import DirectusService from './services/directus.service';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import TextArea from 'primevue/textarea';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import ToastService from 'primevue/toastservice';

import 'primeicons/primeicons.css'


import DymikForm from 'dymik-core';
import 'dymik-core/dist/dymik-core.css';


DirectusService.init(import.meta.env.VITE_DIRECTUS_URL, import.meta.env.VITE_DIRECTUS_STATIC_TOKEN);

const app = createApp(App);

app.use(DymikForm);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(ToastService);

// Register PrimeVue components globally
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Select', Select);
app.component('TextArea', TextArea);
app.component('Button', Button);
app.component('DatePicker', DatePicker);


app.mount('#app')

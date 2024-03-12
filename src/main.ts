import '@/style.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import i18n from '@/assets/i18n';
import { configure } from 'vee-validate';

const app = createApp(App);
configure({
  validateOnBlur: true,
});

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');

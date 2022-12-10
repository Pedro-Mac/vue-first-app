import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TheHeader from './components/layouts/TheHeader.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('TheHeader', TheHeader);

app.mount('#app');

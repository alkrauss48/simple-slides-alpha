import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import './css/index.css';
import './css/typography.css';

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
})

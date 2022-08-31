import { createApp } from 'vue';
// use vuex
import { createStore } from 'vuex';

import App from './App.vue';

// initial store vuex
const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
});

const app = createApp(App);

// use store
app.use(store);

app.mount('#app');

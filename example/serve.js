import { createApp } from "vue";
import App from "./App.vue";

import store from "v-toastser/src/store"; //important
import ToastNotification from "v-toastser";

createApp(App).use(store).use(ToastNotification).mount("#app");

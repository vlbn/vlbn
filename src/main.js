import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import stores from "./stores";

import "./assets/scss/_index.scss";

const app = createApp(App);

app.use(router);

app.provide("stores", stores);

app.mount("#app");

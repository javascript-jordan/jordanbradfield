import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@fontsource/jetbrains-mono";

const app = createApp(App);

app.use(router).use(vuetify);

app.mount("#app");

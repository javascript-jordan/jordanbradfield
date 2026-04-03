import "@fontsource/jetbrains-mono";
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import "vuetify/styles";
import App from "./App.vue";
import TranslationDirective from "./directives/TranslationDirective";
import vuetify from "./plugins/vuetify";
import router from "./router";

const app = createApp(App);

app.directive("translate", TranslationDirective).use(router).use(vuetify);

app.mount("#app");

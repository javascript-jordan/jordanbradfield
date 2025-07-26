import { createApp, App as VueApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/Vuetify";
import StringsDirective from "./directives/StringsDirective";

import "@/assets/scss/main.scss";

const app: VueApp<Element> = createApp(App).use(router).use(vuetify);

app.directive("translate", new StringsDirective().setup());

app.mount("#app");

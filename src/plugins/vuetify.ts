// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify, VuetifyOptions } from "vuetify";

const theme: VuetifyOptions = {
  theme: {
    defaultTheme: "dark",
  },
};

export default createVuetify(theme);

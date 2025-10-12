import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import type { ThemeOptions } from "vuetify/lib/composables/theme.mjs";

const theme: ThemeOptions = {
  defaultTheme: "dark",
  themes: {
    dark: {
      colors: {
        primary: "#2962FF",
      },
    },
  },
};

export default createVuetify({
  components,
  directives,
  theme,
});

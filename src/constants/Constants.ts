import { IExternalLinks } from "@/interfaces/models/IExternalLinks";
import { VuetifyOptions } from "vuetify";

export const EXTERNAL_LINKS: IExternalLinks = {
  linkedin: {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/jordan-bradfield-9333a1119/?originalSubdomain=ca",
    icon: "mdi-linkedin",
  },
  email: {
    name: "Email",
    url: "mailto:jordan.p.bradfield@gmail.com",
    icon: "mdi-email",
  },
  github: {
    name: "Github",
    url: "https://github.com/javascript-jordan",
    icon: "mdi-github",
  },
  twitter: {
    name: "Twitter",
    url: "https://x.com/JordanBrad46979",
    icon: "mdi-twitter",
  },
};

export const SCREEN_SIZES: { [key: string]: number } = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

export const VUETIFY_OPTIONS: VuetifyOptions = {
  theme: {
    defaultTheme: "dark",
    themes: {
      custom: {
        colors: {
          primary: "#00aff0",
        },
      },
    },
  },
};

import { describe, it, expect } from "vitest";
import en from "@/i18n/en";
import es from "@/i18n/es";
import fr from "@/i18n/fr";

const languagePacks = { en, es, fr };
const languageNames = ["en", "es", "fr"] as const;

describe("Language Packs", () => {
  describe("Language Pack Structure", () => {
    it("all language packs should be defined", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang]).toBeDefined();
      });
    });

    it("all language packs should be objects", () => {
      languageNames.forEach((lang) => {
        expect(typeof languagePacks[lang]).toBe("object");
      });
    });

    it("all language packs should have NAVBAR", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].NAVBAR).toBeDefined();
      });
    });

    it("all language packs should have PAGES", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].PAGES).toBeDefined();
      });
    });
  });

  describe("Translation Consistency", () => {
    it("NAVBAR.PROMOTION should be defined in all languages", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].NAVBAR.PROMOTION).toBeDefined();
      });
    });

    it("NAVBAR.PROMOTION should be non-empty in all languages", () => {
      languageNames.forEach((lang) => {
        expect(typeof languagePacks[lang].NAVBAR.PROMOTION).toBe("string");
        expect(languagePacks[lang].NAVBAR.PROMOTION.length).toBeGreaterThan(0);
      });
    });

    it("PAGES.CONTACT.TITLE should be defined in all languages", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].PAGES.CONTACT).toBeDefined();
        expect(languagePacks[lang].PAGES.CONTACT.TITLE).toBeDefined();
      });
    });

    it("PAGES.CONTACT.TITLE should be non-empty in all languages", () => {
      languageNames.forEach((lang) => {
        expect(typeof languagePacks[lang].PAGES.CONTACT.TITLE).toBe("string");
        expect(languagePacks[lang].PAGES.CONTACT.TITLE.length).toBeGreaterThan(0);
      });
    });

    it("PAGES should have HOME in all languages", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].PAGES.HOME).toBeDefined();
      });
    });

    it("PAGES should have EXPERIENCES in all languages", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].PAGES.EXPERIENCES).toBeDefined();
      });
    });
  });

  describe("English Language Pack", () => {
    it("should have valid NAVBAR structure", () => {
      expect(en.NAVBAR).toBeDefined();
      expect(typeof en.NAVBAR).toBe("object");
    });

    it("should have valid PAGES structure", () => {
      expect(en.PAGES).toBeDefined();
      expect(typeof en.PAGES).toBe("object");
    });

    it("PAGES should have CONTACT", () => {
      expect(en.PAGES.CONTACT).toBeDefined();
    });

    it("CONTACT should have TITLE", () => {
      expect(en.PAGES.CONTACT.TITLE).toBe("Get in Touch");
    });

    it("PROMOTION should contain professional", () => {
      expect(en.NAVBAR.PROMOTION).toContain("professional");
    });

    it("EXPERIENCES should be an object", () => {
      expect(typeof en.PAGES.EXPERIENCES).toBe("object");
    });

    it("EXPERIENCES should have timeline", () => {
      expect((en.PAGES.EXPERIENCES as any).timeline).toBeDefined();
    });
  });

  describe("Spanish Language Pack", () => {
    it("should have valid NAVBAR structure", () => {
      expect(es.NAVBAR).toBeDefined();
      expect(typeof es.NAVBAR).toBe("object");
    });

    it("should have valid PAGES structure", () => {
      expect(es.PAGES).toBeDefined();
      expect(typeof es.PAGES).toBe("object");
    });

    it("PAGES should have CONTACT", () => {
      expect(es.PAGES.CONTACT).toBeDefined();
    });

    it("CONTACT should have TITLE", () => {
      expect(es.PAGES.CONTACT.TITLE).toBe("Ponte en contacto");
    });

    it("PROMOTION should contain Spanish professional", () => {
      expect(es.NAVBAR.PROMOTION).toContain("profesional");
    });

    it("EXPERIENCES should be an array", () => {
      expect(Array.isArray(es.PAGES.EXPERIENCES)).toBe(true);
    });
  });

  describe("French Language Pack", () => {
    it("should have valid NAVBAR structure", () => {
      expect(fr.NAVBAR).toBeDefined();
      expect(typeof fr.NAVBAR).toBe("object");
    });

    it("should have valid PAGES structure", () => {
      expect(fr.PAGES).toBeDefined();
      expect(typeof fr.PAGES).toBe("object");
    });

    it("PAGES should have CONTACT", () => {
      expect(fr.PAGES.CONTACT).toBeDefined();
    });

    it("CONTACT should have TITLE", () => {
      expect(fr.PAGES.CONTACT.TITLE).toBe("Entrez en contact");
    });

    it("PROMOTION should contain French professional", () => {
      expect(fr.NAVBAR.PROMOTION).toContain("professionnel");
    });

    it("EXPERIENCES should be an array", () => {
      expect(Array.isArray(fr.PAGES.EXPERIENCES)).toBe(true);
    });
  });

  describe("Multi-Language Consistency", () => {
    it("all translations should have consistent number of root keys", () => {
      const enKeys = Object.keys(en).length;
      const esKeys = Object.keys(es).length;
      const frKeys = Object.keys(fr).length;
      expect(enKeys).toBe(esKeys);
      expect(esKeys).toBe(frKeys);
    });

    it("all NAVBAR sections should have same keys", () => {
      const enNavbarKeys = Object.keys(en.NAVBAR).sort();
      const esNavbarKeys = Object.keys(es.NAVBAR).sort();
      const frNavbarKeys = Object.keys(fr.NAVBAR).sort();
      expect(enNavbarKeys).toEqual(esNavbarKeys);
      expect(esNavbarKeys).toEqual(frNavbarKeys);
    });

    it("PAGES should have HOME and CONTACT and EXPERIENCES across all languages", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].PAGES).toHaveProperty("HOME");
        expect(languagePacks[lang].PAGES).toHaveProperty("CONTACT");
        expect(languagePacks[lang].PAGES).toHaveProperty("EXPERIENCES");
      });
    });
  });

  describe("Translation Quality", () => {
    it("no translation should be empty string", () => {
      languageNames.forEach((lang) => {
        const checkTranslations = (obj: any): boolean => {
          for (const key in obj) {
            if (typeof obj[key] === "string") {
              if (obj[key] === "") return false;
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
              if (!checkTranslations(obj[key])) return false;
            }
          }
          return true;
        };
        expect(checkTranslations(languagePacks[lang])).toBe(true);
      });
    });

    it("no translation should be only whitespace", () => {
      languageNames.forEach((lang) => {
        const checkTranslations = (obj: any): boolean => {
          for (const key in obj) {
            if (typeof obj[key] === "string") {
              if (obj[key].trim() === "") return false;
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
              if (!checkTranslations(obj[key])) return false;
            }
          }
          return true;
        };
        expect(checkTranslations(languagePacks[lang])).toBe(true);
      });
    });

    it("translations should contain reasonable content", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].NAVBAR.PROMOTION.length).toBeGreaterThan(10);
        expect(languagePacks[lang].PAGES.CONTACT.TITLE.length).toBeGreaterThan(3);
      });
    });
  });

  describe("EXPERIENCES Structure", () => {
    it("all language packs should have EXPERIENCES", () => {
      languageNames.forEach((lang) => {
        expect(languagePacks[lang].PAGES.EXPERIENCES).toBeDefined();
      });
    });

    it("EXPERIENCES should be either array or object for all languages", () => {
      languageNames.forEach((lang) => {
        const exp = languagePacks[lang].PAGES.EXPERIENCES;
        expect(typeof exp === "object" && exp !== null).toBe(true);
      });
    });

    it("English EXPERIENCES should have timeline", () => {
      expect(en.PAGES.EXPERIENCES).toHaveProperty("timeline");
    });

    it("Spanish EXPERIENCES should be iterable", () => {
      expect(typeof es.PAGES.EXPERIENCES).toBe("object");
    });

    it("French EXPERIENCES should be iterable", () => {
      expect(typeof fr.PAGES.EXPERIENCES).toBe("object");
    });
  });

  describe("HOME Page Structure", () => {
    it("HOME should be an object in all languages", () => {
      languageNames.forEach((lang) => {
        expect(typeof languagePacks[lang].PAGES.HOME).toBe("object");
      });
    });
  });

  describe("Translation Type Safety", () => {
    it("PAGES.CONTACT should always return object", () => {
      languageNames.forEach((lang) => {
        expect(typeof languagePacks[lang].PAGES.CONTACT).toBe("object");
      });
    });

    it("PAGES.CONTACT.TITLE should always be string", () => {
      languageNames.forEach((lang) => {
        expect(typeof languagePacks[lang].PAGES.CONTACT.TITLE).toBe("string");
      });
    });

    it("NAVBAR.PROMOTION should always be string", () => {
      languageNames.forEach((lang) => {
        expect(typeof languagePacks[lang].NAVBAR.PROMOTION).toBe("string");
      });
    });
  });
});

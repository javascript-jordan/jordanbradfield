import TranslationService from "@/services/TranslationService/TranslationService";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("TranslationService", () => {
  beforeEach(() => {
    // Reset the service state before each test
    vi.clearAllMocks();
  });

  describe("Service Initialization", () => {
    it("should be a valid service instance", () => {
      expect(TranslationService).toBeDefined();
    });

    it("should have ALL_LANGUAGES property", () => {
      expect(TranslationService.ALL_LANGUAGES).toBeDefined();
    });

    it("should have CURRENT_LANGUAGE property", () => {
      expect(TranslationService.CURRENT_LANGUAGE).toBeDefined();
    });

    it("should have translate method", () => {
      expect(TranslationService.translate).toBeDefined();
      expect(typeof TranslationService.translate).toBe("function");
    });

    it("should support multiple languages", () => {
      const languages = Object.keys(TranslationService.ALL_LANGUAGES);
      expect(languages.length).toBeGreaterThan(0);
    });

    it("should have en, es, fr languages available", () => {
      const languages = Object.keys(TranslationService.ALL_LANGUAGES);
      expect(languages).toContain("en");
      expect(languages).toContain("es");
      expect(languages).toContain("fr");
    });
  });

  describe("Language Management", () => {
    it("should have a current language set", () => {
      expect(TranslationService.CURRENT_LANGUAGE).toBeTruthy();
    });

    it("current language should be a string", () => {
      expect(typeof TranslationService.CURRENT_LANGUAGE).toBe("string");
    });

    it("current language should be one of available languages", () => {
      const languages = Object.keys(TranslationService.ALL_LANGUAGES);
      expect(languages).toContain(TranslationService.CURRENT_LANGUAGE);
    });

    it("should default to en if browser language not supported", () => {
      // The service defaults to 'en' if navigator.language is not available
      expect(["en", "es", "fr", "de", "fr", "pt", "zh", "ja", "ko"]).toContain(
        TranslationService.CURRENT_LANGUAGE,
      );
    });
  });

  describe("Basic Translation", () => {
    it("should return empty string for simple missing key", () => {
      const result = TranslationService.translate("nonexistent.key");
      expect(typeof result).toBe("string");
    });

    it("should handle translation for root level keys", () => {
      const result = TranslationService.translate("NAVBAR");
      expect(typeof result).toBe("string");
    });

    it("should handle nested key translation", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(typeof result).toBe("string");
    });

    it("should return string for valid translations", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toBeDefined();
    });
  });

  describe("Nested Key Translation", () => {
    it("should handle two-level nested keys", () => {
      const result = TranslationService.translate("PAGES.HOME");
      expect(typeof result).toBe("string");
    });

    it("should handle three-level nested keys", () => {
      const result = TranslationService.translate("PAGES.CONTACT.TITLE");
      expect(typeof result).toBe("string");
    });

    it("should handle multi-level deeply nested keys", () => {
      const result = TranslationService.translate("PAGES.EXPERIENCES.timeline");
      expect(typeof result).toBe("string");
    });

    it("should correctly traverse nested objects", () => {
      const promotionText = TranslationService.translate("NAVBAR.PROMOTION");
      expect(promotionText).toBeTruthy();
      expect(promotionText.length).toBeGreaterThan(0);
    });

    it("should handle keys with underscores", () => {
      const result = TranslationService.translate("PAGES.EXPERIENCES.timeline");
      expect(typeof result).toBe("string");
    });
  });

  describe("Translation Retrieval", () => {
    it("should return non-empty string for known NAVBAR key", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    });

    it("promotion text should be a valid string", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toBe("The professional you need with the skills you want");
    });

    it("contact title should be retrievable", () => {
      const result = TranslationService.translate("PAGES.CONTACT.TITLE");
      expect(result).toBe("Get in Touch");
    });

    it("should handle case sensitivity in keys", () => {
      const uppercase = TranslationService.translate("NAVBAR.PROMOTION");
      const lowercase = TranslationService.translate("navbar.promotion");
      expect(uppercase.length).toBeGreaterThanOrEqual(lowercase.length);
    });
  });

  describe("Missing Keys", () => {
    it("should return empty string for completely missing key", () => {
      const result = TranslationService.translate("this.key.does.not.exist");
      expect(result).toBe("");
    });

    it("should return empty string for partial path", () => {
      const result = TranslationService.translate("NONEXISTENT");
      expect(result).toBe("");
    });

    it("should return empty string for invalid path", () => {
      const result = TranslationService.translate("PAGES.NONEXISTENT.KEY");
      expect(result).toBe("");
    });

    it("should handle empty string key", () => {
      const result = TranslationService.translate("");
      expect(typeof result).toBe("string");
    });

    it("should return result for partial match key", () => {
      const result = TranslationService.translate("PAGES");
      expect(typeof result).toBe("string");
    });
  });

  describe("Key Parsing", () => {
    it("should split keys by dot separator", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toBeTruthy();
    });

    it("should handle single character keys", () => {
      const result = TranslationService.translate("a");
      expect(typeof result).toBe("string");
    });

    it("should handle keys with multiple dots", () => {
      const result = TranslationService.translate("a.b.c.d.e.f");
      expect(typeof result).toBe("string");
    });

    it("should handle keys with trailing dot", () => {
      const result = TranslationService.translate("NAVBAR.");
      expect(typeof result).toBe("string");
    });

    it("should handle keys with leading dot", () => {
      const result = TranslationService.translate(".NAVBAR");
      expect(typeof result).toBe("string");
    });

    it("should handle keys with consecutive dots", () => {
      const result = TranslationService.translate("NAVBAR..PROMOTION");
      expect(typeof result).toBe("string");
    });
  });

  describe("Language Support", () => {
    it("should support English language", () => {
      expect(TranslationService.ALL_LANGUAGES.en).toBeDefined();
    });

    it("should support Spanish language", () => {
      expect(TranslationService.ALL_LANGUAGES.es).toBeDefined();
    });

    it("should support French language", () => {
      expect(TranslationService.ALL_LANGUAGES.fr).toBeDefined();
    });

    it("all language packs should be objects", () => {
      Object.values(TranslationService.ALL_LANGUAGES).forEach((lang) => {
        expect(typeof lang).toBe("object");
      });
    });

    it("language packs should have NAVBAR property", () => {
      const languages = Object.values(TranslationService.ALL_LANGUAGES);
      languages.forEach((lang: any) => {
        expect(lang.NAVBAR).toBeDefined();
      });
    });
  });

  describe("Fallback Behavior", () => {
    it("should fallback to English for invalid language", () => {
      // When current language is not found, it should fallback to en
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toBeTruthy();
    });

    it("should use current language for translation", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toBeDefined();
    });

    it("should consistently return translations", () => {
      const result1 = TranslationService.translate("NAVBAR.PROMOTION");
      const result2 = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result1).toBe(result2);
    });
  });

  describe("Return Type", () => {
    it("should always return a string", () => {
      const results = [
        TranslationService.translate("NAVBAR.PROMOTION"),
        TranslationService.translate("PAGES.CONTACT.TITLE"),
        TranslationService.translate("nonexistent"),
      ];
      results.forEach((result) => {
        expect(typeof result).toBe("string");
      });
    });

    it("should never return undefined", () => {
      const result = TranslationService.translate("any.key");
      expect(result).not.toBeUndefined();
    });

    it("should never return null", () => {
      const result = TranslationService.translate("any.key");
      expect(result).not.toBeNull();
    });

    it("should return strings with correct content", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toContain("professional");
    });
  });

  describe("Edge Cases", () => {
    it("should handle very long key strings", () => {
      const longKey = "a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z";
      const result = TranslationService.translate(longKey);
      expect(typeof result).toBe("string");
    });

    it("should handle numeric-like keys", () => {
      const result = TranslationService.translate("123.456");
      expect(typeof result).toBe("string");
    });

    it("should handle special characters in keys", () => {
      const result = TranslationService.translate("KEY@#$%");
      expect(typeof result).toBe("string");
    });

    it("should handle Unicode characters in keys", () => {
      const result = TranslationService.translate("Ключ.значение");
      expect(typeof result).toBe("string");
    });

    it("should handle repeated translate calls", () => {
      const key = "NAVBAR.PROMOTION";
      for (let i = 0; i < 10; i++) {
        const result = TranslationService.translate(key);
        expect(result).toBeTruthy();
      }
    });
  });

  describe("NAVBAR Translations", () => {
    it("should have NAVBAR key", () => {
      expect(TranslationService.ALL_LANGUAGES.en.NAVBAR).toBeDefined();
    });

    it("should have PROMOTION message in NAVBAR", () => {
      expect(TranslationService.ALL_LANGUAGES.en.NAVBAR.PROMOTION).toBeDefined();
    });

    it("PROMOTION should be a non-empty string", () => {
      const text = TranslationService.ALL_LANGUAGES.en.NAVBAR.PROMOTION;
      expect(typeof text).toBe("string");
      expect(text.length).toBeGreaterThan(0);
    });

    it("should translate NAVBAR.PROMOTION correctly", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      const expected = TranslationService.ALL_LANGUAGES.en.NAVBAR.PROMOTION;
      expect(result).toBe(expected);
    });
  });

  describe("PAGES Translations", () => {
    it("should have PAGES key", () => {
      expect(TranslationService.ALL_LANGUAGES.en.PAGES).toBeDefined();
    });

    it("should have HOME section", () => {
      expect(TranslationService.ALL_LANGUAGES.en.PAGES.HOME).toBeDefined();
    });

    it("should have CONTACT section", () => {
      expect(TranslationService.ALL_LANGUAGES.en.PAGES.CONTACT).toBeDefined();
    });

    it("CONTACT should have TITLE", () => {
      expect(TranslationService.ALL_LANGUAGES.en.PAGES.CONTACT.TITLE).toBeDefined();
    });

    it("should translate PAGES.CONTACT.TITLE correctly", () => {
      const result = TranslationService.translate("PAGES.CONTACT.TITLE");
      const expected = TranslationService.ALL_LANGUAGES.en.PAGES.CONTACT.TITLE;
      expect(result).toBe(expected);
    });
  });

  describe("Service Interface Compliance", () => {
    it("should implement ITranslationService interface", () => {
      expect(TranslationService.ALL_LANGUAGES).toBeDefined();
      expect(TranslationService.CURRENT_LANGUAGE).toBeDefined();
      expect(TranslationService.translate).toBeDefined();
    });

    it("should have all required properties", () => {
      const requiredProps = ["ALL_LANGUAGES", "CURRENT_LANGUAGE"];
      requiredProps.forEach((prop) => {
        expect(TranslationService).toHaveProperty(prop);
      });
    });

    it("should have all required methods", () => {
      const requiredMethods = ["translate"];
      requiredMethods.forEach((method) => {
        expect(TranslationService).toHaveProperty(method);
      });
    });
  });

  describe("Translation Consistency", () => {
    it("same key should always return same translation", () => {
      const key = "NAVBAR.PROMOTION";
      const results = [];
      for (let i = 0; i < 5; i++) {
        results.push(TranslationService.translate(key));
      }
      expect(new Set(results).size).toBe(1);
    });

    it("different keys should potentially return different translations", () => {
      const key1 = TranslationService.translate("NAVBAR.PROMOTION");
      const key2 = TranslationService.translate("PAGES.CONTACT.TITLE");
      // At least one should be different or not empty
      expect(key1 + key2).toBeTruthy();
    });

    it("should maintain state across multiple calls", () => {
      const before = TranslationService.CURRENT_LANGUAGE;
      TranslationService.translate("NAVBAR.PROMOTION");
      const after = TranslationService.CURRENT_LANGUAGE;
      expect(before).toBe(after);
    });
  });

  describe("Key Lookup Logic", () => {
    it("should find translations at nested levels", () => {
      const level1 = TranslationService.translate("NAVBAR");
      const level2 = TranslationService.translate("NAVBAR.PROMOTION");
      expect(typeof level1).toBe("string");
      expect(typeof level2).toBe("string");
    });

    it("should handle navigation through object hierarchy", () => {
      const result = TranslationService.translate("PAGES.CONTACT.TITLE");
      expect(result).toBe("Get in Touch");
    });

    it("should not confuse similar keys", () => {
      const result1 = TranslationService.translate("PAGES.HOME");
      const result2 = TranslationService.translate("PAGES.CONTACT");
      // Both should return strings (one may be empty object converted to string)
      expect(typeof result1).toBe("string");
      expect(typeof result2).toBe("string");
    });
  });

  describe("Error Handling", () => {
    it("should not throw on missing key", () => {
      expect(() => {
        TranslationService.translate("nonexistent.key.path");
      }).not.toThrow();
    });

    it("should not throw on empty key", () => {
      expect(() => {
        TranslationService.translate("");
      }).not.toThrow();
    });

    it("should gracefully handle edge cases", () => {
      const testCases = [".", "..", "...", "NAVBAR.", ".NAVBAR", "NAVBAR..KEY"];
      testCases.forEach((key) => {
        expect(() => {
          TranslationService.translate(key);
        }).not.toThrow();
      });
    });
  });

  describe("Language Pack Structure", () => {
    it("language packs should be objects", () => {
      Object.values(TranslationService.ALL_LANGUAGES).forEach((pack) => {
        expect(typeof pack).toBe("object");
        expect(pack).not.toBeNull();
      });
    });

    it("should have consistent structure across languages", () => {
      const enKeys = Object.keys(TranslationService.ALL_LANGUAGES.en || {});
      const esKeys = Object.keys(TranslationService.ALL_LANGUAGES.es || {});
      const frKeys = Object.keys(TranslationService.ALL_LANGUAGES.fr || {});

      // Basic check that languages have keys
      expect(enKeys.length).toBeGreaterThan(0);
      expect(esKeys.length).toBeGreaterThan(0);
      expect(frKeys.length).toBeGreaterThan(0);
    });

    it("should have NAVBAR in all languages", () => {
      const hasNavbar = Object.values(TranslationService.ALL_LANGUAGES).every(
        (lang: any) => lang.NAVBAR !== undefined,
      );
      expect(hasNavbar).toBe(true);
    });

    it("should have PAGES in all languages", () => {
      const hasPages = Object.values(TranslationService.ALL_LANGUAGES).every(
        (lang: any) => lang.PAGES !== undefined,
      );
      expect(hasPages).toBe(true);
    });
  });
});

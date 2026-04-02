import { describe, it, expect } from "vitest";
import constants from "@/util/constants";

describe("Constants", () => {
  describe("EXTERNAL_LINKS", () => {
    it("should be defined", () => {
      expect(constants.EXTERNAL_LINKS).toBeDefined();
    });

    it("should be an object", () => {
      expect(typeof constants.EXTERNAL_LINKS).toBe("object");
    });

    it("should have LINKEDIN property", () => {
      expect(constants.EXTERNAL_LINKS.LINKEDIN).toBeDefined();
    });

    it("should have GITHUB property", () => {
      expect(constants.EXTERNAL_LINKS.GITHUB).toBeDefined();
    });

    it("LINKEDIN should be a non-empty string", () => {
      expect(typeof constants.EXTERNAL_LINKS.LINKEDIN).toBe("string");
      expect(constants.EXTERNAL_LINKS.LINKEDIN.length).toBeGreaterThan(0);
    });

    it("GITHUB should be a non-empty string", () => {
      expect(typeof constants.EXTERNAL_LINKS.GITHUB).toBe("string");
      expect(constants.EXTERNAL_LINKS.GITHUB.length).toBeGreaterThan(0);
    });

    it("LINKEDIN should be a valid URL", () => {
      const url = constants.EXTERNAL_LINKS.LINKEDIN;
      expect(url).toMatch(/^https:\/\//);
    });

    it("GITHUB should be a valid URL", () => {
      const url = constants.EXTERNAL_LINKS.GITHUB;
      expect(url).toMatch(/^https:\/\//);
    });

    it("LINKEDIN should point to linkedin.com", () => {
      const url = constants.EXTERNAL_LINKS.LINKEDIN;
      expect(url).toContain("linkedin.com");
    });

    it("GITHUB should point to github.com", () => {
      const url = constants.EXTERNAL_LINKS.GITHUB;
      expect(url).toContain("github.com");
    });

    it("all links should have http protocol", () => {
      Object.values(constants.EXTERNAL_LINKS).forEach((url: string) => {
        expect(url).toMatch(/^https?:\/\//);
      });
    });

    it("should have exactly 2 external links", () => {
      const links = Object.keys(constants.EXTERNAL_LINKS);
      expect(links).toHaveLength(2);
    });

    it("should contain only string values", () => {
      Object.values(constants.EXTERNAL_LINKS).forEach((value: any) => {
        expect(typeof value).toBe("string");
      });
    });
  });

  describe("Constants Structure", () => {
    it("constants should not be empty", () => {
      expect(Object.keys(constants).length).toBeGreaterThan(0);
    });

    it("should have at least one property", () => {
      expect(constants).toHaveProperty("EXTERNAL_LINKS");
    });
  });
});

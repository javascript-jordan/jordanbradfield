import { describe, it, expect } from "vitest";
import { ROUTES } from "@/router/index";

describe("Router Configuration", () => {
  describe("ROUTES Array", () => {
    it("should be defined", () => {
      expect(ROUTES).toBeDefined();
    });

    it("should be an array", () => {
      expect(Array.isArray(ROUTES)).toBe(true);
    });

    it("should have all required routes", () => {
      expect(ROUTES.length).toBe(4);
    });

    it("should have Home route", () => {
      const homeRoute = ROUTES.find((r) => r.name === "Home");
      expect(homeRoute).toBeDefined();
    });

    it("should have Experience route", () => {
      const experienceRoute = ROUTES.find((r) => r.name === "Experience");
      expect(experienceRoute).toBeDefined();
    });

    it("should have Skills route", () => {
      const skillsRoute = ROUTES.find((r) => r.name === "Skills");
      expect(skillsRoute).toBeDefined();
    });

    it("should have Contact route", () => {
      const contactRoute = ROUTES.find((r) => r.name === "Contact");
      expect(contactRoute).toBeDefined();
    });
  });

  describe("Route Properties", () => {
    it("each route should have a name", () => {
      ROUTES.forEach((route) => {
        expect(route.name).toBeDefined();
        expect(typeof route.name).toBe("string");
      });
    });

    it("each route should have a path", () => {
      ROUTES.forEach((route) => {
        expect(route.path).toBeDefined();
        expect(typeof route.path).toBe("string");
      });
    });

    it("each route should have a component", () => {
      ROUTES.forEach((route) => {
        expect(route.component).toBeDefined();
      });
    });

    it("each route should have an icon", () => {
      ROUTES.forEach((route) => {
        expect(route.icon).toBeDefined();
        expect(typeof route.icon).toBe("string");
      });
    });

    it("all routes should have unique names", () => {
      const names = ROUTES.map((r) => r.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    it("all routes should have unique paths", () => {
      const paths = ROUTES.map((r) => r.path);
      const uniquePaths = new Set(paths);
      expect(uniquePaths.size).toBe(paths.length);
    });
  });

  describe("Specific Route Configuration", () => {
    it("Home route should have path /", () => {
      const homeRoute = ROUTES.find((r) => r.name === "Home");
      expect(homeRoute?.path).toBe("/");
    });

    it("Experience route should have path /experience", () => {
      const experienceRoute = ROUTES.find((r) => r.name === "Experience");
      expect(experienceRoute?.path).toBe("/experience");
    });

    it("Skills route should have path /skills", () => {
      const skillsRoute = ROUTES.find((r) => r.name === "Skills");
      expect(skillsRoute?.path).toBe("/skills");
    });

    it("Contact route should have path /contact", () => {
      const contactRoute = ROUTES.find((r) => r.name === "Contact");
      expect(contactRoute?.path).toBe("/contact");
    });

    it("Home route should have home icon", () => {
      const homeRoute = ROUTES.find((r) => r.name === "Home");
      expect(homeRoute?.icon).toBe("mdi-home");
    });

    it("Experience route should have timeline icon", () => {
      const experienceRoute = ROUTES.find((r) => r.name === "Experience");
      expect(experienceRoute?.icon).toBe("mdi-timeline");
    });

    it("Skills route should have xml icon", () => {
      const skillsRoute = ROUTES.find((r) => r.name === "Skills");
      expect(skillsRoute?.icon).toBe("mdi-xml");
    });

    it("Contact route should have email icon", () => {
      const contactRoute = ROUTES.find((r) => r.name === "Contact");
      expect(contactRoute?.icon).toBe("mdi-email");
    });
  });

  describe("Route Order", () => {
    it("routes should be in correct order", () => {
      const names = ROUTES.map((r) => r.name);
      expect(names).toEqual(["Home", "Experience", "Skills", "Contact"]);
    });
  });

  describe("Component Loading", () => {
    it("Home route should have component", () => {
      const homeRoute = ROUTES.find((r) => r.name === "Home");
      expect(homeRoute?.component).toBeTruthy();
    });

    it("Experience route should have component", () => {
      const experienceRoute = ROUTES.find((r) => r.name === "Experience");
      expect(experienceRoute?.component).toBeTruthy();
    });

    it("Skills route should have component", () => {
      const skillsRoute = ROUTES.find((r) => r.name === "Skills");
      expect(skillsRoute?.component).toBeTruthy();
    });

    it("Contact route should have component", () => {
      const contactRoute = ROUTES.find((r) => r.name === "Contact");
      expect(contactRoute?.component).toBeTruthy();
    });
  });

  describe("Icon Configuration", () => {
    it("all icons should start with mdi- prefix", () => {
      ROUTES.forEach((route) => {
        expect(route.icon).toMatch(/^mdi-/);
      });
    });

    it("should have exactly 4 unique icons", () => {
      const icons = ROUTES.map((r) => r.icon);
      const uniqueIcons = new Set(icons);
      expect(uniqueIcons.size).toBe(icons.length);
    });
  });
});

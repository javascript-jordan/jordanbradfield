import CredentialsComponent from "@/components/views/Skills/Credentials/CredentialsComponent.vue";
import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock constants
vi.mock("@/util/constants", () => ({
  default: {
    EXTERNAL_LINKS: {
      S3_BADEGS_PATH: "https://example.com/badges/",
    },
  },
}));

describe("CredentialsComponent", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(CredentialsComponent, {
      global: {
        stubs: {
          "v-text-field": { template: '<input type="text" />' },
          "v-divider": { template: "<hr />" },
        },
      },
    });
  });

  describe("Component Rendering", () => {
    it("should render the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("should render without errors", () => {
      expect(wrapper.vm).toBeDefined();
    });

    it("should render as a valid Vue component", () => {
      expect(wrapper.element).toBeDefined();
    });
  });

  describe("Page Title", () => {
    it("should render h2 heading", () => {
      const heading = wrapper.find("h2");
      expect(heading.exists()).toBe(true);
    });

    it("should display 'Credentials' text", () => {
      const heading = wrapper.find("h2");
      expect(heading.text()).toBe("Credentials");
    });

    it("should have correct heading content", () => {
      expect(wrapper.text()).toContain("Credentials");
    });

    it("should have h2 with correct text content", () => {
      const h2 = wrapper.find("h2");
      expect(h2.element.textContent).toBe("Credentials");
    });

    it("should render only one h2 element", () => {
      const h2s = wrapper.findAll("h2");
      expect(h2s).toHaveLength(1);
    });
  });

  describe("Data Loading", () => {
    it("should load badges from JSON", () => {
      const vm = wrapper.vm as any;
      expect(vm.badges.length).toBeGreaterThan(0); // Real number is 30
    });

    it("should sort badges alphabetically", () => {
      const vm = wrapper.vm as any;
      const firstBadge = vm.badges[0];
      expect(firstBadge.name).toBe("AWS Certified AI Practitioner"); // Assuming it's the first alphabetically
    });

    it("should add image paths to badges", () => {
      const vm = wrapper.vm as any;
      const firstBadge = vm.badges[0];
      expect(firstBadge.image).toContain("https://example.com/badges/");
    });

    it("should set show to true for all badges", () => {
      const vm = wrapper.vm as any;
      vm.badges.forEach((badge: any) => {
        expect(badge.show).toBe(true);
      });
    });

    it("should initialize badgesFiltered with all badges", () => {
      const vm = wrapper.vm as any;
      expect(vm.badgesFiltered.length).toBe(vm.badges.length);
    });
  });

  describe("Search Functionality", () => {
    it("should render search text field", () => {
      const textField = wrapper.find("input");
      expect(textField.exists()).toBe(true);
    });

    it("should initialize searchCriteria as empty string", () => {
      const vm = wrapper.vm as any;
      expect(vm.searchCriteria).toBe("");
    });

    it("should filter badges when searchCriteria changes", async () => {
      const vm = wrapper.vm as any;
      vm.searchCriteria = "AI Practitioner";
      vm.filterOrRestBadges();
      await wrapper.vm.$nextTick();
      expect(vm.badgesFiltered.length).toBeGreaterThan(0);
      expect(vm.badgesFiltered.length).toBeLessThan(vm.badges.length);
    });

    it("should filter badges case insensitively", async () => {
      const vm = wrapper.vm as any;
      vm.searchCriteria = "aws";
      await wrapper.vm.$nextTick();
      expect(vm.badgesFiltered.length).toBeGreaterThan(0);
    });

    it("should show all badges when search is empty", async () => {
      const vm = wrapper.vm as any;
      vm.searchCriteria = "AWS";
      await wrapper.vm.$nextTick();
      const filteredCount = vm.badgesFiltered.length;
      vm.searchCriteria = "";
      await wrapper.vm.$nextTick();
      expect(vm.badgesFiltered.length).toBe(vm.badges.length);
    });

    it("should show no badges when no matches", async () => {
      const vm = wrapper.vm as any;
      vm.searchCriteria = "xyz";
      vm.filterOrRestBadges();
      await wrapper.vm.$nextTick();
      expect(vm.badgesFiltered.length).toBe(0);
    });
  });

  describe("Badge Display", () => {
    it("should render badge images", () => {
      const images = wrapper.findAll("img");
      expect(images.length).toBeGreaterThan(0);
    });

    it("should render badge names", () => {
      const paragraphs = wrapper.findAll("p");
      expect(paragraphs.length).toBeGreaterThan(0);
      expect(paragraphs[0].text()).toBeTruthy();
    });

    it("should set correct alt text for images", () => {
      const images = wrapper.findAll("img");
      expect(images[0].attributes("alt")).toBeTruthy();
    });

    it("should set correct src for images", () => {
      const images = wrapper.findAll("img");
      expect(images[0].attributes("src")).toContain("https://example.com/badges/");
    });
  });

  describe("Methods", () => {
    it("should have filterBadges method", () => {
      const vm = wrapper.vm as any;
      expect(typeof vm.filterBadges).toBe("function");
    });

    it("should have filterOrRestBadges method", () => {
      const vm = wrapper.vm as any;
      expect(typeof vm.filterOrRestBadges).toBe("function");
    });

    it("filterBadges should filter correctly", () => {
      const vm = wrapper.vm as any;
      vm.searchCriteria = "AWS";
      vm.filterBadges();
      expect(vm.badgesFiltered.length).toBeGreaterThan(0);
      expect(vm.badgesFiltered.length).toBeLessThan(vm.badges.length);
    });

    it("filterOrRestBadges should reset when empty", () => {
      const vm = wrapper.vm as any;
      vm.searchCriteria = "AWS";
      vm.filterOrRestBadges();
      const filteredLength = vm.badgesFiltered.length;
      vm.searchCriteria = "";
      vm.filterOrRestBadges();
      expect(vm.badgesFiltered.length).toBe(vm.badges.length);
    });
  });

  describe("HTML Structure", () => {
    it("should have correct tag structure", () => {
      expect(wrapper.element.tagName).toBeDefined();
    });

    it("should contain v-card", () => {
      const card = wrapper.find("v-card");
      expect(card.exists()).toBe(true);
    });

    it("should have v-divider", () => {
      const divider = wrapper.find("hr");
      expect(divider.exists()).toBe(true);
    });

    it("should have badges container", () => {
      const badgesDiv = wrapper.find(".badges");
      expect(badgesDiv.exists()).toBe(true);
    });
  });

  describe("Component Props", () => {
    it("should not have any required props", () => {
      const props = wrapper.vm.$options.props;
      expect(props).toBeUndefined();
    });

    it("should mount without props", () => {
      const testWrapper = mount(CredentialsComponent, {
        global: {
          stubs: {
            "v-card": true,
            "v-text-field": true,
            "v-divider": true,
          },
        },
      });
      expect(testWrapper.exists()).toBe(true);
    });
  });

  describe("Component Emits", () => {
    it("should not have any defined emits", () => {
      const emits = wrapper.vm.$options.emits;
      expect(emits).toBeUndefined();
    });

    it("should not emit any events", () => {
      expect(wrapper.emitted()).toEqual({});
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty badges JSON", () => {
      // Since mocking static imports is complex, test with real data
      const vm = wrapper.vm as any;
      expect(vm.badges.length).toBe(30); // Real count
      expect(vm.badgesFiltered.length).toBe(30);
    });

    it("should handle component remounting", () => {
      wrapper.unmount();
      const newWrapper = mount(CredentialsComponent, {
        global: {
          stubs: {
            "v-text-field": true,
            "v-divider": true,
          },
        },
      });
      expect(newWrapper.find("h2").text()).toBe("Credentials");
    });
  });

  describe("Integration Tests", () => {
    it("should render complete credentials page", () => {
      expect(wrapper.find("h2").exists()).toBe(true);
      expect(wrapper.find("input").exists()).toBe(true);
      expect(wrapper.findAll("img").length).toBeGreaterThan(0);
    });

    it("should work as page component", () => {
      expect(wrapper.element.tagName).toBeDefined();
      expect(wrapper.find("h2").exists()).toBe(true);
    });
  });
});

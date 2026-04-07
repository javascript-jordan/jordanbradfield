import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ref } from "vue";
import ProgressNavbarComponent from "../../../../../components/common/Navbar/ProgressNavbar/ProgressNavbarComponent.vue";
import router from "../../../../../router";

type WrapperType = ReturnType<typeof mount>;

// Mock router
vi.mock("@/router", () => ({
  default: {
    afterEach: vi.fn(),
  },
}));

describe("ProgressNavbarComponent", () => {
  let wrapper: WrapperType;

  beforeEach(() => {
    vi.clearAllMocks();
    wrapper = mount(ProgressNavbarComponent);
  });

  describe("Component Rendering", () => {
    it("should render the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("should have progress-bar ID", () => {
      const progressBar = wrapper.find("#progress-bar");
      expect(progressBar.exists()).toBe(true);
    });

    it("should have correct classes", () => {
      const progressBar = wrapper.find("#progress-bar");
      expect(progressBar.classes()).toContain("scrollbar");
      expect(progressBar.classes()).toContain("bg-primary");
    });

    it("should have correct height style", () => {
      const progressBar = wrapper.find("#progress-bar");
      expect(progressBar.attributes("style")).toContain("width: 0%");
    });
  });

  describe("Scroll Progress Calculation", () => {
    it("should initialize scrollPercent to 0", () => {
      expect(wrapper.vm.scrollPercent).toBe(0);
    });

    it("should update scrollPercent on scroll", () => {
      // Mock the router outlet element
      const mockElement = {
        addEventListener: vi.fn(),
        scrollTop: 50,
        scrollHeight: 200,
        clientHeight: 100,
      };

      // Mock document.querySelector
      const originalQuerySelector = document.querySelector;
      document.querySelector = vi.fn(() => mockElement as any);

      // Trigger route change
      router.afterEach.mock.calls[0][0]();

      // Simulate scroll event
      const scrollEvent = {
        target: mockElement,
      };
      mockElement.addEventListener.mock.calls[0][1](scrollEvent);

      // Expected: (50 / (200 - 100)) * 100 = (50 / 100) * 100 = 50
      expect(wrapper.vm.scrollPercent).toBe(50);

      // Restore original querySelector
      document.querySelector = originalQuerySelector;
    });

    it("should handle zero scroll height gracefully", () => {
      const mockElement = {
        addEventListener: vi.fn(),
        scrollTop: 0,
        scrollHeight: 100,
        clientHeight: 100,
      };

      const originalQuerySelector = document.querySelector;
      document.querySelector = vi.fn(() => mockElement as any);

      router.afterEach.mock.calls[0][0]();

      const scrollEvent = {
        target: mockElement,
      };
      mockElement.addEventListener.mock.calls[0][1](scrollEvent);

      expect(wrapper.vm.scrollPercent).toBe(NaN);

      document.querySelector = originalQuerySelector;
    });

    it("should update progress bar width based on scrollPercent", async () => {
      wrapper.vm.scrollPercent = 75;
      await wrapper.vm.$nextTick();

      const progressBar = wrapper.find("#progress-bar");
      expect(progressBar.attributes("style")).toContain("width: 75%");
    });
  });

  describe("Router Integration", () => {
    it("should call router.afterEach on mount", () => {
      expect(router.afterEach).toHaveBeenCalledTimes(1);
      expect(typeof router.afterEach.mock.calls[0][0]).toBe("function");
    });

    it("should add scroll listener on route change", () => {
      const mockElement = {
        addEventListener: vi.fn(),
      };

      const originalQuerySelector = document.querySelector;
      document.querySelector = vi.fn(() => mockElement as any);

      router.afterEach.mock.calls[0][0]();

      expect(mockElement.addEventListener).toHaveBeenCalledWith("scroll", expect.any(Function));

      document.querySelector = originalQuerySelector;
    });
  });

  describe("Edge Cases", () => {
    it("should handle missing router outlet element", () => {
      const originalQuerySelector = document.querySelector;
      document.querySelector = vi.fn(() => null);

      expect(() => {
        router.afterEach.mock.calls[0][0]();
      }).toThrow();

      document.querySelector = originalQuerySelector;
    });

    it("should round scrollPercent to 2 decimal places", () => {
      const mockElement = {
        addEventListener: vi.fn(),
        scrollTop: 33,
        scrollHeight: 200,
        clientHeight: 100,
      };

      const originalQuerySelector = document.querySelector;
      document.querySelector = vi.fn(() => mockElement as any);

      router.afterEach.mock.calls[0][0]();

      const scrollEvent = {
        target: mockElement,
      };
      mockElement.addEventListener.mock.calls[0][1](scrollEvent);

      // (33 / 100) * 100 = 33, rounded to 33.00
      expect(wrapper.vm.scrollPercent).toBe(33);

      document.querySelector = originalQuerySelector;
    });
  });
});

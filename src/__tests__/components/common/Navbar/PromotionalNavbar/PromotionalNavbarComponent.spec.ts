import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

// Mock Vuetify's useDisplay hook with a reactive ref defined at module level
const smAndDownRef = ref(false);

vi.mock("vuetify", async () => {
  const actual = await vi.importActual("vuetify");
  return {
    ...actual,
    useDisplay: vi.fn(() => ({
      smAndDown: smAndDownRef,
    })),
  };
});

// Mock the TranslationService - note: this is hoisted
vi.mock("@/services/TranslationService/TranslationService", () => ({
  default: {
    translate: vi.fn((key: string) => {
      const translations: Record<string, string> = {
        "NAVBAR.PROMOTION": "Web Developer & Designer",
      };
      return translations[key] || key;
    }),
  },
}));

import PromotionalNavbarComponent from "@/components/common/Navbar/PromotionalNavbar/PromotionalNavbarComponent.vue";
import TranslationService from "@/services/TranslationService/TranslationService";

describe("PromotionalNavbarComponent", () => {
  let wrapper: any;

  beforeEach(() => {
    smAndDownRef.value = false;
    vi.clearAllMocks();
    wrapper = mount(PromotionalNavbarComponent, {
      global: {
        stubs: {
          "v-toolbar": {
            template:
              "<div class='toolbar bg-grey-darken-4' :title='title' :density='density' :elevation='elevation'></div>",
            props: ["title", "density", "elevation", "class"],
          },
        },
      },
    });
  });

  describe("Component Rendering", () => {
    it("should render the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("should render the promotional navbar container", () => {
      const container = wrapper.find("#promotional-navbar");
      expect(container.exists()).toBe(true);
    });

    it("should render the v-toolbar component", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.exists()).toBe(true);
    });

    it("should render successfully without errors", () => {
      expect(wrapper.html()).toBeDefined();
      expect(wrapper.html().length).toBeGreaterThan(0);
    });
  });

  describe("Translation Service Integration", () => {
    it("should use TranslationService to get slogan on large screens", () => {
      expect(TranslationService.translate).toHaveBeenCalledWith("NAVBAR.PROMOTION");
    });

    it("should translate NAVBAR.PROMOTION key to Web Developer & Designer", () => {
      const result = TranslationService.translate("NAVBAR.PROMOTION");
      expect(result).toBe("Web Developer & Designer");
    });

    it("should call translate during component mount", () => {
      expect(TranslationService.translate).toHaveBeenCalled();
    });
  });

  describe("Responsive Behavior", () => {
    it("should show translated slogan on large screens", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Web Developer & Designer");
    });

    it("should show Jordan Bradfield on small screens", async () => {
      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();

      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Jordan Bradfield");
    });

    it("should toggle slogan based on screen size", async () => {
      let toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Web Developer & Designer");

      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Jordan Bradfield");

      smAndDownRef.value = false;
      await wrapper.vm.$nextTick();
      toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Web Developer & Designer");
    });
  });

  describe("Toolbar Properties", () => {
    it("should have toolbar class", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.classes()).toContain("toolbar");
    });

    it("should have bg-grey-darken-4 class", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.classes()).toContain("bg-grey-darken-4");
    });

    it("should have compact density", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("density")).toBe("compact");
    });

    it("should have elevation 2", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("elevation")).toBe("2");
    });

    it("should have title attribute set", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBeDefined();
    });
  });

  describe("DOM Structure", () => {
    it("should have promotional-navbar ID on root", () => {
      expect(wrapper.element.id).toBe("promotional-navbar");
    });

    it("root element should be a div", () => {
      expect(wrapper.element.tagName).toBe("DIV");
    });

    it("should contain toolbar inside container", () => {
      const container = wrapper.find("#promotional-navbar");
      const toolbar = container.find(".toolbar");
      expect(toolbar.exists()).toBe(true);
    });
  });

  describe("Component Instance", () => {
    it("should be a valid Vue component", () => {
      expect(wrapper.vm).toBeDefined();
      expect(wrapper.vm.$options).toBeDefined();
    });

    it("should mount without errors", () => {
      expect(wrapper.vm).toBeTruthy();
    });

    it("should have component element", () => {
      expect(wrapper.element).toBeDefined();
    });
  });

  describe("Slogan Content", () => {
    it("should display text in title", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBeTruthy();
    });

    it("should be one of two possible values", () => {
      const toolbar = wrapper.find(".toolbar");
      const title = toolbar.attributes("title");
      expect(title === "Jordan Bradfield" || title === "Web Developer & Designer").toBe(true);
    });

    it("should display Web Developer & Designer by default", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Web Developer & Designer");
    });
  });

  describe("Reactive Updates", () => {
    it("should update slogan when smAndDown changes", async () => {
      let toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Web Developer & Designer");

      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();

      toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBe("Jordan Bradfield");
    });

    it("should maintain title through multiple updates", async () => {
      for (let i = 0; i < 3; i++) {
        smAndDownRef.value = i % 2 === 0;
        await wrapper.vm.$nextTick();

        const toolbar = wrapper.find(".toolbar");
        const expectedTitle = smAndDownRef.value ? "Jordan Bradfield" : "Web Developer & Designer";
        expect(toolbar.attributes("title")).toBe(expectedTitle);
      }
    });

    it("should handle rapid screen size changes", async () => {
      for (let i = 0; i < 5; i++) {
        smAndDownRef.value = !smAndDownRef.value;
        await wrapper.vm.$nextTick();
        const toolbar = wrapper.find(".toolbar");
        expect(toolbar.attributes("title")).toBeDefined();
      }
    });
  });

  describe("Integration Tests", () => {
    it("should integrate TranslationService and Display hook", () => {
      const toolbar = wrapper.find(".toolbar");
      const title = toolbar.attributes("title");

      expect(title).toBeDefined();
      expect(title === "Jordan Bradfield" || title === "Web Developer & Designer").toBe(true);
    });

    it("should render with all attributes", () => {
      const toolbar = wrapper.find(".toolbar");

      expect(toolbar.attributes("title")).toBeDefined();
      expect(toolbar.attributes("density")).toBe("compact");
      expect(toolbar.attributes("elevation")).toBe("2");
    });

    it("should maintain stability through renders", async () => {
      for (let i = 0; i < 3; i++) {
        await wrapper.vm.$nextTick();
        const toolbar = wrapper.find(".toolbar");
        expect(toolbar.exists()).toBe(true);
        expect(toolbar.attributes("title")).toBeDefined();
      }
    });

    it("should work end-to-end with service and display", async () => {
      expect(TranslationService.translate).toHaveBeenCalled();
      expect(wrapper.find(".toolbar").attributes("title")).toBe("Web Developer & Designer");

      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      expect(wrapper.find(".toolbar").attributes("title")).toBe("Jordan Bradfield");
    });
  });

  describe("Edge Cases", () => {
    it("should always have title defined", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.attributes("title")).toBeDefined();
    });

    it("should have proper styling classes", () => {
      const toolbar = wrapper.find(".toolbar");
      expect(toolbar.classes()).toContain("toolbar");
      expect(toolbar.classes()).toContain("bg-grey-darken-4");
    });

    it("should handle remount", () => {
      wrapper.unmount();
      const newWrapper = mount(PromotionalNavbarComponent, {
        global: {
          stubs: {
            "v-toolbar": {
              template:
                "<div class='toolbar bg-grey-darken-4' :title='title' :density='density' :elevation='elevation'></div>",
              props: ["title", "density", "elevation", "class"],
            },
          },
        },
      });
      expect(newWrapper.find(".toolbar").exists()).toBe(true);
      newWrapper.unmount();
    });
  });
});

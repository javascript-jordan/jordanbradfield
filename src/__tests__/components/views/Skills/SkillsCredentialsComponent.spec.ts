import SkillsCredentialsComponent from "@/components/views/Skills/SkillsCredentialsComponent.vue";
import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

describe("SkillsCredentialsComponent", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(SkillsCredentialsComponent, {
      global: {
        stubs: {
          SkillsComponent: true,
          CredentialsComponent: true,
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
    it("should render h1 heading", () => {
      const heading = wrapper.find("h1");
      expect(heading.exists()).toBe(true);
    });

    it("should display 'Skills & Credentials' text", () => {
      const heading = wrapper.find("h1");
      expect(heading.text()).toBe("Skills & Credentials");
    });

    it("should have correct heading content", () => {
      expect(wrapper.text()).toContain("Skills & Credentials");
    });

    it("should have h1 with correct text content", () => {
      const h1 = wrapper.find("h1");
      expect(h1.element.textContent).toBe("Skills & Credentials");
    });

    it("should render only one h1 element", () => {
      const h1s = wrapper.findAll("h1");
      expect(h1s).toHaveLength(1);
    });
  });

  describe("Sub-components", () => {
    it("should render SkillsComponent", () => {
      const skillsComponent = wrapper.findComponent({ name: "SkillsComponent" });
      expect(skillsComponent.exists()).toBe(true);
    });

    it("should render CredentialsComponent", () => {
      const credentialsComponent = wrapper.findComponent({ name: "CredentialsComponent" });
      expect(credentialsComponent.exists()).toBe(true);
    });
  });

  describe("HTML Structure", () => {
    it("should have correct root element", () => {
      const root = wrapper.find("#skills");
      expect(root.exists()).toBe(true);
      expect(root.classes()).toContain("p-1");
    });

    it("should have flex container", () => {
      const flexDiv = wrapper.find(".flex");
      expect(flexDiv.exists()).toBe(true);
      expect(flexDiv.classes()).toContain("align-items-center");
      expect(flexDiv.classes()).toContain("justify-content-center");
      expect(flexDiv.classes()).toContain("m-t-2");
    });

    it("should have correct tag structure", () => {
      expect(wrapper.html()).toContain('<div id="skills" class="p-1">');
      expect(wrapper.html()).toContain("<h1>Skills &amp; Credentials</h1>");
      expect(wrapper.html()).toContain(
        '<div class="flex align-items-center justify-content-center m-t-2">',
      );
    });
  });

  describe("Component Props", () => {
    it("should not have any required props", () => {
      const component = wrapper.vm.$options.props;
      expect(component).toBeUndefined();
    });

    it("should mount without props", () => {
      expect(wrapper.vm).toBeDefined();
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
    it("should handle component remounting", () => {
      wrapper.unmount();
      const newWrapper = mount(SkillsCredentialsComponent, {
        global: {
          stubs: {
            SkillsComponent: true,
            CredentialsComponent: true,
          },
        },
      });
      expect(newWrapper.find("h1").text()).toBe("Skills & Credentials");
    });
  });

  describe("Integration Tests", () => {
    it("should render complete skills and credentials page", () => {
      expect(wrapper.find("h1").exists()).toBe(true);
      expect(wrapper.findComponent({ name: "SkillsComponent" }).exists()).toBe(true);
      expect(wrapper.findComponent({ name: "CredentialsComponent" }).exists()).toBe(true);
    });

    it("should work as page component", () => {
      expect(wrapper.vm).toBeDefined();
      expect(wrapper.html()).toBeDefined();
    });
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { reactive } from "vue";

// Mock Vue Router with reactive route
const mockRoute = reactive({
  name: "Home",
  path: "/",
  params: {},
  query: {},
});

vi.mock("vue-router", () => ({
  useRoute: vi.fn(() => mockRoute),
  RouteLocationNormalizedLoadedGeneric: {},
  RouteRecordNameGeneric: {},
}));

// Mock router constants
vi.mock("@/router", () => ({
  ROUTES: [
    { name: "Home", icon: "mdi-home", path: "/" },
    { name: "Experience", icon: "mdi-briefcase", path: "/experience" },
    { name: "Skills", icon: "mdi-lightbulb", path: "/skills" },
    { name: "Contact", icon: "mdi-email", path: "/contact" },
  ],
}));

import DrawerNavbar from "@/components/common/Navbar/DrawerNavbar/DrawerNavbar.vue";

describe("DrawerNavbar", () => {
  let wrapper: any;

  beforeEach(() => {
    mockRoute.path = "/";
    mockRoute.name = "Home";
    wrapper = mount(DrawerNavbar, {
      props: { open: false },
      global: {
        stubs: {
          "v-icon": {
            template:
              "<span class='v-icon' :class='twoclasses' @click='$emit(\"click\")'><slot></slot></span>",
            props: ["class"],
            computed: {
              twoclasses() {
                return this.class || "";
              },
            },
            emits: ["click"],
          },
          "v-list": {
            template:
              "<ul class='v-list' :class='listClasses'><li v-for='item of items' :key='item.to' :class='{ active: item.active }'>{{ item.title }}</li></ul>",
            props: ["items", "class", "itemValue", "itemProps", "slim"],
            computed: {
              listClasses() {
                return this.class || "";
              },
            },
          },
        },
      },
    });
  });

  describe("Component Rendering", () => {
    it("should render the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("should have drawer-navbar ID", () => {
      expect(wrapper.element.id).toBe("drawer-navbar");
    });

    it("should have flex class", () => {
      expect(wrapper.element.classList.contains("flex")).toBe(true);
    });

    it("should not have open class when closed", () => {
      expect(wrapper.element.classList.contains("open")).toBe(false);
    });
  });

  describe("Open/Close Behavior", () => {
    it("should have open class when open prop is true", async () => {
      await wrapper.setProps({ open: true });
      expect(wrapper.element.classList.contains("open")).toBe(true);
    });

    it("should remove open class when open prop is false", async () => {
      await wrapper.setProps({ open: true });
      await wrapper.setProps({ open: false });
      expect(wrapper.element.classList.contains("open")).toBe(false);
    });

    it("should toggle open class reactively", async () => {
      expect(wrapper.element.classList.contains("open")).toBe(false);
      await wrapper.setProps({ open: true });
      expect(wrapper.element.classList.contains("open")).toBe(true);
      await wrapper.setProps({ open: false });
      expect(wrapper.element.classList.contains("open")).toBe(false);
    });

    it("should respond to open prop changes", async () => {
      const initialOpen = wrapper.element.classList.contains("open");
      await wrapper.setProps({ open: true });
      const afterOpen = wrapper.element.classList.contains("open");
      expect(initialOpen).toBe(false);
      expect(afterOpen).toBe(true);
    });
  });

  describe("Navigation Items", () => {
    it("should render v-list component", () => {
      const list = wrapper.find(".v-list");
      expect(list.exists()).toBe(true);
    });

    it("should render all navigation items", () => {
      const items = wrapper.findAll(".v-list li");
      expect(items).toHaveLength(4);
    });

    it("should render items with correct names", () => {
      const items = wrapper.findAll(".v-list li");
      expect(items[0].text()).toContain("Home");
      expect(items[1].text()).toContain("Experience");
      expect(items[2].text()).toContain("Skills");
      expect(items[3].text()).toContain("Contact");
    });

    it("should set active class on current route item", () => {
      const items = wrapper.findAll(".v-list li");
      expect(items[0].classes()).toContain("active");
    });

    it("should remove active class when navigating to different route", async () => {
      mockRoute.path = "/experience";
      mockRoute.name = "Experience";
      await wrapper.vm.$nextTick();
      const items = wrapper.findAll(".v-list li");
      expect(items[0].classes()).not.toContain("active");
      expect(items[1].classes()).toContain("active");
    });

    it("should have py-0 class on list", () => {
      const list = wrapper.find(".v-list");
      expect(list.attributes("class")).toContain("py-0");
    });
  });

  describe("Close Button", () => {
    it("should have close button with mdi-close icon", () => {
      const closeButton = wrapper.find(".close-button");
      expect(closeButton.exists()).toBe(true);
      const icon = closeButton.find(".v-icon");
      expect(icon.exists()).toBe(true);
      expect(icon.text()).toContain("mdi-close");
    });

    it("should emit toggle-drawer event when close button is clicked", async () => {
      const icon = wrapper.find(".close-button .v-icon");
      await icon.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });

    it("should emit toggle-drawer with false value when close button clicked", async () => {
      const icon = wrapper.find(".close-button .v-icon");
      await icon.trigger("click");
      expect(wrapper.emitted("toggle-drawer")[0]).toEqual([false]);
    });

    it("close button should have correct styling classes", () => {
      const closeButton = wrapper.find(".close-button");
      expect(closeButton.classes()).toContain("flex");
      expect(closeButton.classes()).toContain("justify-flex-end");
      expect(closeButton.classes()).toContain("p-r-2");
      expect(closeButton.classes()).toContain("p-y-2");
      expect(closeButton.classes()).toContain("m-b-2");
    });
  });

  describe("User Info", () => {
    it("should display user picture container", () => {
      const pic = wrapper.find(".pic");
      expect(pic.exists()).toBe(true);
    });

    it("should display user picture image", () => {
      const img = wrapper.find(".pic img");
      expect(img.exists()).toBe(true);
      expect(img.attributes("src")).toBe("/img/headshot.JPG");
      expect(img.attributes("alt")).toBe("");
      expect(img.attributes("height")).toBe("100");
    });

    it("should display user name", () => {
      const info = wrapper.find(".pic-info .info");
      expect(info.text()).toContain("Jordan Bradfield");
    });

    it("should display user title", () => {
      const info = wrapper.find(".pic-info .info");
      expect(info.text()).toContain("Tech Lead");
    });

    it("should have pic-info flex container", () => {
      const picInfo = wrapper.find(".pic-info");
      expect(picInfo.classes()).toContain("flex");
      expect(picInfo.classes()).toContain("align-center");
    });

    it("should have correct styling on pic container", () => {
      const pic = wrapper.find(".pic");
      expect(pic.classes()).toContain("bg-grey-darken-4");
      expect(pic.classes()).toContain("p-1");
      expect(pic.classes()).toContain("elevation-2");
    });

    it("should have correct styling on info container", () => {
      const info = wrapper.find(".pic-info .info");
      expect(info.classes()).toContain("p-x-1");
    });
  });

  describe("DOM Structure", () => {
    it("should have left drawer section", () => {
      const left = wrapper.find(".left");
      expect(left.exists()).toBe(true);
    });

    it("should have right overlay section", () => {
      const right = wrapper.find(".right");
      expect(right.exists()).toBe(true);
    });

    it("should have header in left section", () => {
      const header = wrapper.find(".left .header");
      expect(header.exists()).toBe(true);
    });

    it("should have nav-items in left section", () => {
      const navItems = wrapper.find(".left .nav-items");
      expect(navItems.exists()).toBe(true);
    });

    it("left section should have correct width class", () => {
      const left = wrapper.find(".left");
      expect(left.classes()).toContain("w-80");
    });

    it("left section should have correct background", () => {
      const left = wrapper.find(".left");
      expect(left.classes()).toContain("bg-grey-darken-4");
    });

    it("header should have correct styling", () => {
      const header = wrapper.find(".left .header");
      expect(header.classes()).toContain("bg-primary");
      expect(header.classes()).toContain("elevation-6");
    });

    it("right overlay should have correct width class", () => {
      const right = wrapper.find(".right");
      expect(right.classes()).toContain("w-30");
    });
  });

  describe("Overlay Interaction", () => {
    it("should emit toggle-drawer event when right overlay is clicked", async () => {
      const right = wrapper.find(".right");
      await right.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });

    it("should emit toggle-drawer with false value when overlay clicked", async () => {
      const right = wrapper.find(".right");
      await right.trigger("click");
      expect(wrapper.emitted("toggle-drawer")[0]).toEqual([false]);
    });

    it("should close drawer when overlay clicked", async () => {
      await wrapper.setProps({ open: true });
      expect(wrapper.element.classList.contains("open")).toBe(true);
      const right = wrapper.find(".right");
      await right.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });
  });

  describe("Navigation Items Click Behavior", () => {
    it("should emit toggle-drawer event when navigation item is clicked", async () => {
      // Navigation items are rendered with onClick callback which emits toggle-drawer
      const navItems = wrapper.vm.navItems;
      navItems[0].onClick();
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });

    it("should emit toggle-drawer with false when item clicked", async () => {
      // The item click behavior is handled by the component's onClick callback
      // which is called for each navItem
      wrapper.vm.navItems.forEach((item: any, index: number) => {
        if (index === 1) {
          item.onClick();
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });
  });

  describe("Route Integration", () => {
    it("should use Vue Router to get current route", () => {
      // Component should be using useRoute internally
      expect(wrapper.vm.$options.setup).toBeDefined();
    });

    it("should display correct active item for current route", () => {
      mockRoute.path = "/skills";
      mockRoute.name = "Skills";
      // Remount to get updated route
      wrapper = mount(DrawerNavbar, {
        props: { open: false },
        global: {
          stubs: {
            "v-icon": {
              template: "<span class='v-icon' @click='$emit(\"click\")'><slot></slot></span>",
              emits: ["click"],
            },
            "v-list": {
              template:
                "<ul class='v-list'><li v-for='item of items' :key='item.to' :class='{ active: item.active }'>{{ item.title }}</li></ul>",
              props: ["items", "class", "itemValue", "itemProps", "slim"],
            },
          },
        },
      });
      const items = wrapper.findAll(".v-list li");
      expect(items[2].classes()).toContain("active");
    });

    it("should update active item when route changes", async () => {
      let items = wrapper.findAll(".v-list li");
      expect(items[0].classes()).toContain("active");
      mockRoute.path = "/experience";
      mockRoute.name = "Experience";
      await wrapper.vm.$nextTick();
      items = wrapper.findAll(".v-list li");
      expect(items[1].classes()).toContain("active");
    });
  });

  describe("Component Props", () => {
    it("should accept open prop", () => {
      expect(wrapper.props("open")).toBe(false);
    });

    it("should update when open prop changes", async () => {
      await wrapper.setProps({ open: true });
      expect(wrapper.props("open")).toBe(true);
    });

    it("should have correct initial prop value", () => {
      const newWrapper = mount(DrawerNavbar, {
        props: { open: false },
        global: {
          stubs: {
            "v-icon": { template: "<span></span>" },
            "v-list": { template: "<ul></ul>", props: ["items", "class"] },
          },
        },
      });
      expect(newWrapper.props("open")).toBe(false);
    });

    it("should work with open prop as true", () => {
      const newWrapper = mount(DrawerNavbar, {
        props: { open: true },
        global: {
          stubs: {
            "v-icon": { template: "<span></span>" },
            "v-list": { template: "<ul></ul>", props: ["items", "class"] },
          },
        },
      });
      expect(newWrapper.element.classList.contains("open")).toBe(true);
    });
  });

  describe("Component Emits", () => {
    it("should define toggle-drawer emit", () => {
      expect(wrapper.vm.$options.emits).toContain("toggle-drawer");
    });

    it("should emit toggle-drawer only with false value", async () => {
      const icon = wrapper.find(".close-button .v-icon");
      await icon.trigger("click");
      const emitted = wrapper.emitted("toggle-drawer");
      expect(emitted).toBeTruthy();
      if (emitted) {
        expect(emitted[0][0]).toBe(false);
      }
    });

    it("should allow multiple toggle-drawer emissions", async () => {
      const closeButton = wrapper.find(".close-button .v-icon");
      await closeButton.trigger("click");
      await closeButton.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toHaveLength(2);
    });
  });

  describe("Navigation Items Data", () => {
    it("should generate correct nav items structure", () => {
      const navItems = wrapper.vm.navItems;
      expect(navItems).toHaveLength(4);
      expect(navItems[0].title).toBe("Home");
      expect(navItems[0].prependIcon).toBe("mdi-home");
      expect(navItems[0].to).toBe("/");
    });

    it("should include route path in nav items", () => {
      const navItems = wrapper.vm.navItems;
      expect(navItems[0].to).toBe("/");
      expect(navItems[1].to).toBe("/experience");
      expect(navItems[2].to).toBe("/skills");
      expect(navItems[3].to).toBe("/contact");
    });

    it("should set onClick callback for each nav item", () => {
      const navItems = wrapper.vm.navItems;
      navItems.forEach((item: any) => {
        expect(item.onClick).toBeDefined();
        expect(typeof item.onClick).toBe("function");
      });
    });

    it("should mark correct item as active based on current route", () => {
      mockRoute.path = "/contact";
      wrapper = mount(DrawerNavbar, {
        props: { open: false },
        global: {
          stubs: {
            "v-icon": { template: "<span></span>" },
            "v-list": { template: "<ul></ul>", props: ["items", "class"] },
          },
        },
      });
      const navItems = wrapper.vm.navItems;
      expect(navItems[3].active).toBe(true);
      expect(navItems[0].active).toBe(false);
    });
  });

  describe("Icon Styling", () => {
    it("close button icon should have correct styling", () => {
      const icon = wrapper.find(".close-button .v-icon");
      expect(icon.classes()).toContain("bg-transparent");
      expect(icon.classes()).toContain("border-0");
      expect(icon.classes()).toContain("border-b-0");
    });
  });

  describe("Edge Cases", () => {
    it("should handle rapid open/close toggles", async () => {
      for (let i = 0; i < 5; i++) {
        await wrapper.setProps({ open: i % 2 === 1 });
      }
      expect(wrapper.element.classList.contains("open")).toBe(false);
    });

    it("should maintain state after prop changes", async () => {
      await wrapper.setProps({ open: true });
      await wrapper.vm.$nextTick();
      const firstState = wrapper.element.classList.contains("open");
      await wrapper.vm.$nextTick();
      const secondState = wrapper.element.classList.contains("open");
      expect(firstState).toBe(secondState);
    });

    it("should render correctly with no open prop provided", () => {
      const newWrapper = mount(DrawerNavbar, {
        global: {
          stubs: {
            "v-icon": { template: "<span></span>" },
            "v-list": { template: "<ul></ul>", props: ["items", "class"] },
          },
        },
      });
      expect(newWrapper.element.id).toBe("drawer-navbar");
    });

    it("should handle multiple emissions without state interference", async () => {
      const closeButton = wrapper.find(".close-button .v-icon");
      const overlay = wrapper.find(".right");
      await closeButton.trigger("click");
      await overlay.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toHaveLength(2);
    });
  });

  describe("Integration Tests", () => {
    it("should work with drawer opening and closing sequence", async () => {
      expect(wrapper.element.classList.contains("open")).toBe(false);
      await wrapper.setProps({ open: true });
      expect(wrapper.element.classList.contains("open")).toBe(true);
      const closeButton = wrapper.find(".close-button .v-icon");
      await closeButton.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });

    it("should maintain navigation state when drawer is open", async () => {
      mockRoute.path = "/skills";
      mockRoute.name = "Skills";
      wrapper = mount(DrawerNavbar, {
        props: { open: true },
        global: {
          stubs: {
            "v-icon": {
              template: "<span class='v-icon' @click='$emit(\"click\")'><slot></slot></span>",
              emits: ["click"],
            },
            "v-list": {
              template:
                "<ul class='v-list'><li v-for='item of items' :key='item.to' :class='{ active: item.active }'>{{ item.title }}</li></ul>",
              props: ["items", "class", "itemValue", "itemProps", "slim"],
            },
          },
        },
      });
      const items = wrapper.findAll(".v-list li");
      expect(items[2].classes()).toContain("active");
      expect(wrapper.element.classList.contains("open")).toBe(true);
    });

    it("should display all user info when drawer is open", async () => {
      await wrapper.setProps({ open: true });
      const pic = wrapper.find(".pic img");
      const name = wrapper.text();
      expect(pic.exists()).toBe(true);
      expect(name).toContain("Jordan Bradfield");
      expect(name).toContain("Tech Lead");
    });

    it("complete user interaction flow", async () => {
      // Start closed
      expect(wrapper.element.classList.contains("open")).toBe(false);
      // Open drawer
      await wrapper.setProps({ open: true });
      expect(wrapper.element.classList.contains("open")).toBe(true);
      // Click navigation item (emits toggle-drawer)
      wrapper.vm.navItems[1].onClick();
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
      // Verify navigation items are present
      const items = wrapper.findAll(".v-list li");
      expect(items.length).toBeGreaterThan(0);
    });
  });
});

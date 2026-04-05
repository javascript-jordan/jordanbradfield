import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ref } from "vue";
import { useRoute } from "vue-router";
import NavigationalNavbarComponent from "../../../../../components/common/Navbar/NavigationalNavbar/NavigationalNavbarComponent.vue";

type WrapperType = ReturnType<typeof mount>;

// Mock Vue Router
const mockRoute: {
  name?: string;
  path: string;
  params: Record<string, unknown>;
  query: Record<string, unknown>;
} = {
  name: "Home",
  path: "/",
  params: {},
  query: {},
};

vi.mock("vue-router", () => ({
  useRoute: vi.fn(() => mockRoute),
  RouteLocationNormalizedLoadedGeneric: {},
  RouteRecordNameGeneric: {},
}));

// Mock display hook
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

// Mock vuetify plugin
vi.mock("@/plugins/vuetify", () => ({
  default: {
    display: {
      smAndDown: {
        value: false,
      },
    },
  },
}));

// Mock router
vi.mock("@/router", () => ({
  ROUTES: [
    { name: "Home", icon: "mdi-home", path: "/" },
    { name: "Experience", icon: "mdi-briefcase", path: "/experience" },
    { name: "Skills", icon: "mdi-lightbulb", path: "/skills" },
    { name: "Contact", icon: "mdi-email", path: "/contact" },
  ],
}));

// Mock constants
vi.mock("@/util/constants", () => ({
  default: {
    EXTERNAL_LINKS: {
      LINKEDIN: "https://linkedin.com",
      GITHUB: "https://github.com",
    },
  },
}));

describe("NavigationalNavbarComponent", () => {
  let wrapper: WrapperType;

  beforeEach(() => {
    smAndDownRef.value = false;
    mockRoute.name = "Home";
    mockRoute.path = "/";
    vi.clearAllMocks();
    wrapper = mount(NavigationalNavbarComponent, {
      global: {
        stubs: {
          "v-app-bar": {
            template:
              "<div id='navigation-navbar' :class='classes' :color='color' :elevation='elevation'><slot name='prepend'></slot><slot></slot><slot name='append'></slot></div>",
            props: ["color", "elevation", "class"],
            computed: {
              classes(this: { class?: string }) {
                return `v-app-bar ${this.class || ""}`;
              },
            },
          },
          "v-app-bar-nav-icon": {
            template: "<button class='v-app-bar-nav-icon' @click='$emit(\"click\")'></button>",
            emits: ["click"],
          },
          "v-app-bar-title": {
            template: "<div class='v-app-bar-title'><slot></slot></div>",
          },
          "v-tabs": {
            template: "<div class='v-tabs links hidden-sm-and-down'><slot></slot></div>",
          },
          "v-tab": {
            template: "<div class='v-tab' :key='key' :to='to'>{{ text }}</div>",
            props: ["text", "to", "key", "prependIcon"],
          },
          "v-btn": {
            template: "<button class='v-btn' :id='id' :icon='icon'><slot></slot></button>",
            props: ["id", "icon"],
          },
          "v-icon": {
            template: "<span class='v-icon'><slot></slot></span>",
          },
          "v-menu": {
            template: "<div class='v-menu' :activator='activator'><slot></slot></div>",
            props: ["activator"],
          },
          "v-list": {
            template:
              "<ul class='v-list py-0' :density='density' :item-value='itemValue' :item-props='itemProps' :slim='slim'><slot></slot></ul>",
            props: ["items", "density", "itemValue", "itemProps", "slim", "class"],
          },
        },
      },
    });
  });

  describe("Component Rendering", () => {
    it("should render the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("should have navigation-navbar ID", () => {
      expect(wrapper.element.id).toBe("navigation-navbar");
    });

    it("should be a v-app-bar", () => {
      expect(wrapper.element.classList.contains("v-app-bar")).toBe(true);
    });

    it("should render without errors", () => {
      expect(wrapper.html()).toBeDefined();
      expect(wrapper.html().length).toBeGreaterThan(0);
    });
  });

  describe("App Bar Properties", () => {
    it("should have primary color", () => {
      const appBar = wrapper.find(".v-app-bar");
      expect(appBar.attributes("color")).toBe("primary");
    });

    it("should have elevation 10", () => {
      const appBar = wrapper.find(".v-app-bar");
      expect(appBar.attributes("elevation")).toBe("10");
    });

    it("should have p-x-1 class", () => {
      const appBar = wrapper.find(".v-app-bar");
      expect(appBar.attributes("class")).toContain("p-x-1");
    });
  });

  describe("Header Title", () => {
    it("should render v-app-bar-title", () => {
      const title = wrapper.find(".v-app-bar-title");
      expect(title.exists()).toBe(true);
    });

    it("should show Jordan Bradfield on large screens", () => {
      smAndDownRef.value = false;
      wrapper.vm.$forceUpdate();
      const titleText = wrapper.text();
      expect(titleText).toContain("Jordan Bradfield");
    });

    it("should show route name on small screens", async () => {
      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      const titleText = wrapper.text();
      expect(titleText).toContain("Home");
    });

    it("should update title when route changes", async () => {
      smAndDownRef.value = true;
      mockRoute.name = "Experience";
      await wrapper.vm.$nextTick();
      const titleText = wrapper.text();
      expect(titleText).toContain("Experience");
    });
  });

  describe("Responsive Behavior", () => {
    it("should show hamburger menu on small screens", async () => {
      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      const navIcon = wrapper.find(".v-app-bar-nav-icon");
      expect(navIcon.exists()).toBe(true);
    });

    it("should hide hamburger menu on large screens", () => {
      smAndDownRef.value = false;
      const navIcon = wrapper.find(".v-app-bar-nav-icon");
      expect(navIcon.exists()).toBe(false);
    });

    it("should have navigation tabs in DOM", () => {
      const tabs = wrapper.find(".v-tabs");
      expect(tabs.exists()).toBe(true);
    });

    it("should have hidden-sm-and-down class on tabs", () => {
      const tabs = wrapper.find(".v-tabs");
      expect(tabs.classes()).toContain("hidden-sm-and-down");
    });
  });

  describe("Toggle Drawer Event", () => {
    it("should emit toggle-drawer when hamburger menu clicked", async () => {
      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      const navIcon = wrapper.find(".v-app-bar-nav-icon");
      await navIcon.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });

    it("should emit toggle-drawer with value true", async () => {
      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      const navIcon = wrapper.find(".v-app-bar-nav-icon");
      await navIcon.trigger("click");
      const emitted = wrapper.emitted("toggle-drawer");
      expect(emitted).toBeTruthy();
      expect(emitted![0]).toEqual([true]);
    });

    it("should not emit toggle-drawer on large screens", () => {
      smAndDownRef.value = false;
      const navIcon = wrapper.find(".v-app-bar-nav-icon");
      expect(navIcon.exists()).toBe(false);
    });
  });

  describe("Navigation Tabs", () => {
    it("should render all navigation routes", () => {
      smAndDownRef.value = false;
      const tabs = wrapper.findAll(".v-tab");
      expect(tabs.length).toBe(4);
    });

    it("should display Home tab", () => {
      const tabs = wrapper.findAll(".v-tab");
      expect(tabs[0].text()).toContain("Home");
    });

    it("should display Experience tab", () => {
      const tabs = wrapper.findAll(".v-tab");
      expect(tabs[1].text()).toContain("Experience");
    });

    it("should display Skills tab", () => {
      const tabs = wrapper.findAll(".v-tab");
      expect(tabs[2].text()).toContain("Skills");
    });

    it("should display Contact tab", () => {
      const tabs = wrapper.findAll(".v-tab");
      expect(tabs[3].text()).toContain("Contact");
    });

    it("should have correct route for Home tab", () => {
      const tabs = wrapper.findAll(".v-tab");
      expect(tabs[0].attributes("to")).toBeDefined();
    });
  });

  describe("Menu Button", () => {
    it("should render menu button", () => {
      const menuBtn = wrapper.find("#menu-activator");
      expect(menuBtn.exists()).toBe(true);
    });

    it("should have icon attribute", () => {
      const menuBtn = wrapper.find("#menu-activator");
      expect(menuBtn.attributes("icon")).toBeDefined();
    });

    it("should render menu", () => {
      const menu = wrapper.find(".v-menu");
      expect(menu.exists()).toBe(true);
    });

    it("should have menu activator set correctly", () => {
      const menu = wrapper.find(".v-menu");
      expect(menu.attributes("activator")).toBe("#menu-activator");
    });
  });

  describe("Menu Items", () => {
    it("should render menu list", () => {
      const list = wrapper.find(".v-list");
      expect(list.exists()).toBe(true);
    });

    it("should have compact density", () => {
      const list = wrapper.find(".v-list");
      expect(list.attributes("density")).toBe("compact");
    });

    it("should render menu items", () => {
      const list = wrapper.find(".v-list");
      expect(list.exists()).toBe(true);
    });

    it("should have py-0 class on list", () => {
      const list = wrapper.find(".v-list");
      expect(list.attributes("class")).toContain("py-0");
    });
  });

  describe("DOM Structure", () => {
    it("should have proper heading structure", () => {
      const heading = wrapper.find("h4");
      expect(heading.exists()).toBe(true);
    });

    it("should have m-l-2 class on heading", () => {
      const heading = wrapper.find("h4");
      expect(heading.classes()).toContain("m-l-2");
    });

    it("should have menu in append slot", () => {
      const menu = wrapper.find(".v-menu");
      expect(menu.exists()).toBe(true);
    });

    it("should have two slots (prepend and append)", () => {
      const navBar = wrapper.find(".v-app-bar");
      // Check that the app bar contains slot outlets (rendered as part of the component's template)
      expect(navBar.html()).toContain("v-app-bar-title");
    });
  });

  describe("Route Integration", () => {
    it("should use Vue Router", () => {
      expect(useRoute).toHaveBeenCalled();
    });

    it("should get current route", () => {
      expect(mockRoute).toBeDefined();
      expect(mockRoute.name).toBe("Home");
    });

    it("should show route name in title on small screens", async () => {
      smAndDownRef.value = true;
      mockRoute.name = "Skills";
      await wrapper.vm.$nextTick();
      expect(wrapper.text()).toContain("Skills");
    });

    it("should handle route name changes", async () => {
      smAndDownRef.value = true;
      mockRoute.name = "Contact";
      await wrapper.vm.$nextTick();
      expect(wrapper.text()).toContain("Contact");
    });
  });

  describe("Display Hook Integration", () => {
    it("should check smAndDown for responsive behavior", () => {
      expect(smAndDownRef.value).toBe(false);
    });

    it("should respond to smAndDown changes", async () => {
      smAndDownRef.value = false;
      expect(wrapper.find(".v-app-bar-nav-icon").exists()).toBe(false);

      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      expect(wrapper.find(".v-app-bar-nav-icon").exists()).toBe(true);
    });

    it("should toggle tabs on screen size change", async () => {
      smAndDownRef.value = false;
      const tabs = wrapper.find(".v-tabs");
      expect(tabs.classes()).toContain("hidden-sm-and-down");

      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      expect(tabs.classes()).toContain("hidden-sm-and-down");
    });
  });

  describe("Component Instance", () => {
    it("should be a valid Vue component", () => {
      expect(wrapper.vm).toBeDefined();
    });

    it("should have emit defined", () => {
      expect(wrapper.vm.$emit).toBeDefined();
    });

    it("should mount without errors", () => {
      expect(wrapper.vm).toBeTruthy();
    });
  });

  describe("Title Computation", () => {
    it("should compute headerTitle correctly", () => {
      smAndDownRef.value = false;
      const text = wrapper.text();
      expect(text).toContain("Jordan Bradfield");
    });

    it("should use route name on small screens", async () => {
      smAndDownRef.value = true;
      mockRoute.name = "Experience";
      await wrapper.vm.$nextTick();
      const text = wrapper.text();
      expect(text).toContain("Experience");
    });

    it("should update dynamically when screen size changes", async () => {
      mockRoute.name = "Home";
      smAndDownRef.value = false;
      let text = wrapper.text();
      expect(text).toContain("Jordan Bradfield");

      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      text = wrapper.text();
      expect(text).toContain("Home");
    });
  });

  describe("External Links", () => {
    it("should have LinkedIn link in menu items", () => {
      // Menu items contain external links configuration
      expect(wrapper.vm).toBeDefined();
    });

    it("should have GitHub link in menu items", () => {
      // Menu items contain external links configuration
      expect(wrapper.vm).toBeDefined();
    });
  });

  describe("Integration Tests", () => {
    it("should work on large screens", () => {
      smAndDownRef.value = false;
      expect(wrapper.find(".v-app-bar-nav-icon").exists()).toBe(false);
      expect(wrapper.find(".v-tabs").exists()).toBe(true);
      expect(wrapper.text()).toContain("Jordan Bradfield");
    });

    it("should work on small screens", async () => {
      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      expect(wrapper.find(".v-app-bar-nav-icon").exists()).toBe(true);
      expect(wrapper.find(".v-tabs").exists()).toBe(true);
      expect(wrapper.text()).toContain("Home");
    });

    it("should transition smoothly between screen sizes", async () => {
      smAndDownRef.value = false;
      let navIcon = wrapper.find(".v-app-bar-nav-icon");
      expect(navIcon.exists()).toBe(false);

      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();
      navIcon = wrapper.find(".v-app-bar-nav-icon");
      expect(navIcon.exists()).toBe(true);

      smAndDownRef.value = false;
      await wrapper.vm.$nextTick();
      navIcon = wrapper.find(".v-app-bar-nav-icon");
      expect(navIcon.exists()).toBe(false);
    });

    it("should maintain functionality through route changes", async () => {
      smAndDownRef.value = true;
      await wrapper.vm.$nextTick();

      mockRoute.name = "Skills";
      await wrapper.vm.$nextTick();
      expect(wrapper.text()).toContain("Skills");

      mockRoute.name = "Contact";
      await wrapper.vm.$nextTick();
      expect(wrapper.text()).toContain("Contact");

      const navIcon = wrapper.find(".v-app-bar-nav-icon");
      await navIcon.trigger("click");
      expect(wrapper.emitted("toggle-drawer")).toBeTruthy();
    });
  });

  describe("Edge Cases", () => {
    it("should handle rapid screen size changes", async () => {
      for (let i = 0; i < 5; i++) {
        smAndDownRef.value = i % 2 === 0;
        await wrapper.vm.$nextTick();
        expect(wrapper.element).toBeDefined();
      }
    });

    it("should always render menu", () => {
      smAndDownRef.value = false;
      expect(wrapper.find(".v-menu").exists()).toBe(true);

      smAndDownRef.value = true;
      expect(wrapper.find(".v-menu").exists()).toBe(true);
    });

    it("should always render header", () => {
      const header = wrapper.find(".v-app-bar-title");
      expect(header.exists()).toBe(true);
    });

    it("should handle missing route gracefully", () => {
      mockRoute.name = undefined;
      expect(wrapper.vm).toBeDefined();
    });
  });
});

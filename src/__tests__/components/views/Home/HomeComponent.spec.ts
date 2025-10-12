import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import HomeComponent from "../../../../components/views/Home/HomeComponent.vue";

describe("HomeCompoment", () => {
  it("Should render the Vuetify app", () => {
    const wrapper = mount(HomeComponent);

    expect(wrapper.text()).toContain("Home");
  });
});

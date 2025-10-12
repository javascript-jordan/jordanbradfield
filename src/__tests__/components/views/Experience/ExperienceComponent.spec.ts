import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import ExperienceComponent from "../../../../components/views/Experience/ExperienceComponent.vue";

describe("ExperienceCompoment", () => {
  it("Should render the Vuetify app", () => {
    const wrapper = mount(ExperienceComponent);

    expect(wrapper.text()).toContain("Experience");
  });
});

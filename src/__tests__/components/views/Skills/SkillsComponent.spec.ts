import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import SkillsComponent from "../../../../components/views/Skills/SkillsComponent.vue";

describe("SkillsCompoment", () => {
  it("Should render the Vuetify app", () => {
    const wrapper = mount(SkillsComponent);

    expect(wrapper.text()).toContain("Skills");
  });
});

import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import ContactComponent from "../../../../components/views/Contact/ContactComponent.vue";

describe("ContactCompoment", () => {
  it("Should render the Vuetify app", () => {
    const wrapper = mount(ContactComponent);

    expect(wrapper.text()).toContain("Contact");
  });
});

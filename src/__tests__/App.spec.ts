import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  it("Should render the Vuetify app", () => {
    const wrapper = mount(App);
    console.log(wrapper.html());

    expect(wrapper.findComponent("v-app").exists()).toBe(true);
  });
});

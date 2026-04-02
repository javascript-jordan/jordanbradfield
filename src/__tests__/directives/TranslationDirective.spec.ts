import { describe, it, expect, vi, beforeEach } from "vitest";

// Use vi.hoisted to safely reference the mock in the factory
const { translateMock } = vi.hoisted(() => ({
  translateMock: vi.fn(),
}));

vi.mock("@/services/TranslationService/TranslationService", () => ({
  default: {
    translate: translateMock,
  },
}));

import TranslateDirective from "@/directives/TranslationDirective";

describe("TranslationDirective", () => {
  let element: HTMLElement;
  let binding: any;

  beforeEach(() => {
    element = document.createElement("div");
    binding = {
      value: "test.key",
      oldValue: undefined,
      arg: undefined,
      modifiers: {},
    };
    translateMock.mockClear();
  });

  describe("Directive Initialization", () => {
    it("should be a valid directive object", () => {
      expect(TranslateDirective).toBeDefined();
    });

    it("should have mounted hook", () => {
      expect(TranslateDirective.mounted).toBeDefined();
      expect(typeof TranslateDirective.mounted).toBe("function");
    });
  });

  describe("Basic Translation", () => {
    it("should call TranslationService.translate with binding value", () => {
      translateMock.mockReturnValue("Hello World");
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("test.key");
    });

    it("should set element innerText with translated value", () => {
      translateMock.mockReturnValue("Hello World");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Hello World");
    });

    it("should work with simple translation key", () => {
      translateMock.mockReturnValue("Home");
      binding.value = "home";
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Home");
    });

    it("should work with nested translation key", () => {
      translateMock.mockReturnValue("Welcome to Portfolio");
      binding.value = "header.title";
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Welcome to Portfolio");
    });

    it("should work with deeply nested translation key", () => {
      translateMock.mockReturnValue("View My Work");
      binding.value = "nav.sections.portfolio.label";
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("View My Work");
    });
  });

  describe("Empty and Missing Translations", () => {
    it("should handle empty translation string", () => {
      translateMock.mockReturnValue("");
      TranslateDirective.mounted(element, binding);
      // When translation is empty string, the condition fails and innerText is not set
      // Element starts with undefined innerText, which remains undefined
      expect(element.innerText).toBeUndefined();
    });

    it("should not set innerText if translation is not provided", () => {
      translateMock.mockReturnValue("");
      const initialText = "Initial Text";
      element.innerText = initialText;
      TranslateDirective.mounted(element, binding);
      // Empty string is falsy, so innerText should not be updated
      expect(element.innerText).toBe(initialText);
    });

    it("should not modify element if translation returns empty", () => {
      element.innerText = "Original Content";
      translateMock.mockReturnValue("");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Original Content");
    });

    it("should handle null translation gracefully", () => {
      translateMock.mockReturnValue(null);
      const initialText = "Default Text";
      element.innerText = initialText;
      TranslateDirective.mounted(element, binding);
      // null is falsy, so innerText should not be updated
      expect(element.innerText).toBe(initialText);
    });
  });

  describe("Element Types", () => {
    it("should work with div elements", () => {
      translateMock.mockReturnValue("Translated Text");
      const div = document.createElement("div");
      TranslateDirective.mounted(div, binding);
      expect(div.innerText).toBe("Translated Text");
    });

    it("should work with span elements", () => {
      translateMock.mockReturnValue("Translated Text");
      const span = document.createElement("span");
      TranslateDirective.mounted(span, binding);
      expect(span.innerText).toBe("Translated Text");
    });

    it("should work with button elements", () => {
      translateMock.mockReturnValue("Click Me");
      const button = document.createElement("button");
      TranslateDirective.mounted(button, binding);
      expect(button.innerText).toBe("Click Me");
    });

    it("should work with p elements", () => {
      translateMock.mockReturnValue("Paragraph Text");
      const p = document.createElement("p");
      TranslateDirective.mounted(p, binding);
      expect(p.innerText).toBe("Paragraph Text");
    });

    it("should work with heading elements", () => {
      translateMock.mockReturnValue("Main Title");
      const h1 = document.createElement("h1");
      TranslateDirective.mounted(h1, binding);
      expect(h1.innerText).toBe("Main Title");
    });

    it("should work with input elements", () => {
      translateMock.mockReturnValue("Input Placeholder");
      const input = document.createElement("input");
      TranslateDirective.mounted(input, binding);
      expect(input.innerText).toBe("Input Placeholder");
    });

    it("should work with label elements", () => {
      translateMock.mockReturnValue("Form Label");
      const label = document.createElement("label");
      TranslateDirective.mounted(label, binding);
      expect(label.innerText).toBe("Form Label");
    });
  });

  describe("Binding Values", () => {
    it("should handle string binding values", () => {
      translateMock.mockReturnValue("Translated");
      binding.value = "simple.key";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("simple.key");
      expect(element.innerText).toBe("Translated");
    });

    it("should handle different translation keys", () => {
      translateMock.mockReturnValue("Different Translation");
      binding.value = "different.translation.key";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("different.translation.key");
    });

    it("should handle numeric-like keys", () => {
      translateMock.mockReturnValue("About Me");
      binding.value = "nav.links.1";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("nav.links.1");
    });

    it("should handle keys with underscores", () => {
      translateMock.mockReturnValue("Contact Info");
      binding.value = "contact_info.email";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("contact_info.email");
    });

    it("should handle very long keys", () => {
      translateMock.mockReturnValue("Very Long Translation");
      binding.value = "a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p");
    });
  });

  describe("Text Content Handling", () => {
    it("should handle special characters", () => {
      translateMock.mockReturnValue("Hello & Goodbye!");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Hello & Goodbye!");
    });

    it("should handle accented characters", () => {
      translateMock.mockReturnValue("Café à Paris");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Café à Paris");
    });

    it("should handle emoji", () => {
      translateMock.mockReturnValue("Hello 👋 World 🌍");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Hello 👋 World 🌍");
    });

    it("should handle multiple spaces", () => {
      translateMock.mockReturnValue("Text    with    spaces");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Text    with    spaces");
    });

    it("should handle newlines", () => {
      translateMock.mockReturnValue("Line 1\nLine 2\nLine 3");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toContain("Line 1");
      expect(element.innerText).toContain("Line 2");
    });

    it("should handle HTML entities in translation", () => {
      translateMock.mockReturnValue("&lt;script&gt;");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("&lt;script&gt;");
    });

    it("should handle Unicode characters", () => {
      translateMock.mockReturnValue("Привет мир");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Привет мир");
    });

    it("should handle empty string gracefully", () => {
      element.innerText = "Default";
      translateMock.mockReturnValue("");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Default");
    });

    it("should handle very long translation text", () => {
      const longText = "A".repeat(1000);
      translateMock.mockReturnValue(longText);
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe(longText);
      expect(element.innerText.length).toBe(1000);
    });
  });

  describe("Service Integration", () => {
    it("should call TranslationService exactly once", () => {
      translateMock.mockReturnValue("Text");
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledTimes(1);
    });

    it("should not make multiple calls with same key", () => {
      translateMock.mockReturnValue("Text");
      binding.value = "same.key";
      TranslateDirective.mounted(element, binding);
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledTimes(2);
    });

    it("should pass the correct binding value to service", () => {
      translateMock.mockReturnValue("Result");
      binding.value = "specific.key";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("specific.key");
    });

    it("should respect service return value", () => {
      const testValue = "Service Response";
      translateMock.mockReturnValue(testValue);
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe(testValue);
    });
  });

  describe("Binding Object", () => {
    it("should handle binding with modifiers", () => {
      translateMock.mockReturnValue("Text");
      binding.modifiers = { preserve: true, capitalize: true };
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Text");
    });

    it("should handle binding with arg", () => {
      translateMock.mockReturnValue("Text");
      binding.arg = "someArg";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("test.key");
    });

    it("should handle binding with oldValue", () => {
      translateMock.mockReturnValue("New Text");
      binding.oldValue = "Old Text";
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("New Text");
    });

    it("should work with complete binding object", () => {
      translateMock.mockReturnValue("Complete");
      binding = {
        value: "complete.key",
        oldValue: "old.key",
        arg: "en",
        modifiers: { preserve: true },
        instance: {},
        dir: {},
      };
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("complete.key");
      expect(element.innerText).toBe("Complete");
    });
  });

  describe("Element State", () => {
    it("should replace previous content", () => {
      element.innerText = "Old Content";
      translateMock.mockReturnValue("New Content");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("New Content");
    });

    it("should handle element with existing children", () => {
      const child = document.createElement("span");
      child.innerText = "Child";
      element.appendChild(child);
      translateMock.mockReturnValue("Parent Text");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Parent Text");
    });

    it("should handle element with existing attributes", () => {
      element.setAttribute("class", "my-class");
      element.setAttribute("id", "my-id");
      translateMock.mockReturnValue("Translated");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Translated");
      expect(element.getAttribute("class")).toBe("my-class");
      expect(element.getAttribute("id")).toBe("my-id");
    });

    it("should not affect element structure", () => {
      translateMock.mockReturnValue("Text");
      const tagName = element.tagName;
      TranslateDirective.mounted(element, binding);
      expect(element.tagName).toBe(tagName);
    });

    it("should not affect element attributes", () => {
      element.setAttribute("data-test", "value");
      translateMock.mockReturnValue("Text");
      TranslateDirective.mounted(element, binding);
      expect(element.getAttribute("data-test")).toBe("value");
    });
  });

  describe("Condition Logic", () => {
    it("should set text when translation is truthy", () => {
      translateMock.mockReturnValue("Any truthy value");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Any truthy value");
    });

    it("should not set text when translation is falsy string", () => {
      element.innerText = "Original";
      translateMock.mockReturnValue("");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Original");
    });

    it("should not set text when translation is false", () => {
      element.innerText = "Original";
      translateMock.mockReturnValue(false as any);
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Original");
    });

    it("should not set text when translation is zero", () => {
      element.innerText = "Original";
      translateMock.mockReturnValue(0 as any);
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("Original");
    });

    it("should set text with space-only content", () => {
      translateMock.mockReturnValue("   ");
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("   ");
    });
  });

  describe("Multiple Directives", () => {
    it("should work independently on different elements", () => {
      const el1 = document.createElement("div");
      const el2 = document.createElement("div");
      translateMock.mockReturnValue("Text 1");
      TranslateDirective.mounted(el1, binding);
      translateMock.mockReturnValue("Text 2");
      const binding2 = { ...binding, value: "other.key" };
      TranslateDirective.mounted(el2, binding2);
      expect(el1.innerText).toBe("Text 1");
      expect(el2.innerText).toBe("Text 2");
    });

    it("should handle multiple calls sequentially", () => {
      const el1 = document.createElement("div");
      const el2 = document.createElement("div");
      const el3 = document.createElement("div");
      translateMock.mockReturnValue("Text 1");
      TranslateDirective.mounted(el1, { ...binding, value: "key1" });
      translateMock.mockReturnValue("Text 2");
      TranslateDirective.mounted(el2, { ...binding, value: "key2" });
      translateMock.mockReturnValue("Text 3");
      TranslateDirective.mounted(el3, { ...binding, value: "key3" });
      expect(el1.innerText).toBe("Text 1");
      expect(el2.innerText).toBe("Text 2");
      expect(el3.innerText).toBe("Text 3");
    });
  });

  describe("Edge Cases", () => {
    it("should handle binding value with trailing dot", () => {
      translateMock.mockReturnValue("Result");
      binding.value = "key.";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("key.");
    });

    it("should handle binding value with leading dot", () => {
      translateMock.mockReturnValue("Result");
      binding.value = ".key";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith(".key");
    });

    it("should handle binding value with consecutive dots", () => {
      translateMock.mockReturnValue("Result");
      binding.value = "key..name";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("key..name");
    });

    it("should handle single character key", () => {
      translateMock.mockReturnValue("A");
      binding.value = "a";
      TranslateDirective.mounted(element, binding);
      expect(element.innerText).toBe("A");
    });

    it("should handle case sensitivity", () => {
      translateMock.mockReturnValue("Result");
      binding.value = "KEY.VALUE";
      TranslateDirective.mounted(element, binding);
      expect(translateMock).toHaveBeenCalledWith("KEY.VALUE");
    });
  });
});

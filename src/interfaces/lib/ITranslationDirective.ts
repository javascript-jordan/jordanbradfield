import type { DirectiveBinding } from "vue";

export default interface ITranslationDirective {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => void;
}

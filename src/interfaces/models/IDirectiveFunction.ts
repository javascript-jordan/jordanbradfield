import { DirectiveBinding } from "@vue/runtime-dom";

type IDirectiveFunction = (
  element: HTMLElement,
  binding: DirectiveBinding
) => void;

export default IDirectiveFunction;

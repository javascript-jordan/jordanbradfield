import Ii18nService from "@/interfaces/classes/Ii18nService";
import IStringsDirective from "@/interfaces/classes/IStringsDirective";
import IDirectiveFunction from "@/interfaces/models/IDirectiveFunction";
import IStrings from "@/interfaces/models/IStrings";
import I18nService from "@/services/I18nService";
import { DirectiveBinding } from "vue";

class StringsDirective implements IStringsDirective {
  readonly _STRINGS: IStrings;
  readonly i18nService: Ii18nService;

  constructor() {
    this.i18nService = new I18nService();
    this._STRINGS = this.i18nService.getStrings();
  }

  public setup(): IDirectiveFunction {
    return (element: HTMLElement, binding: DirectiveBinding) => {
      let translation = "";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let currentNesting: any; // TODO: Remove the use of any
      const nestings: string[] = binding.value.split(".");

      nestings.forEach((nesting: string, i: number) => {
        try {
          if (!i) currentNesting = this._STRINGS[nesting];
          else if (i + 1 === nestings.length)
            translation = currentNesting[nesting];
          else currentNesting = currentNesting[nesting];
        } catch (error) {
          console.error(
            `StringsDirective.setup(): Error parsing json with key ${binding.value}`
          );
        }
      });

      element.innerText = translation;
    };
  }
}

export default StringsDirective;

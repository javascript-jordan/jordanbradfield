import IDirectiveFunction from "../models/IDirectiveFunction";
import IStrings from "../models/IStrings";
import Ii18nService from "./Ii18nService";

interface IStringsDirective {
  readonly _STRINGS: IStrings;
  readonly i18nService: Ii18nService;
  setup(): IDirectiveFunction;
}

export default IStringsDirective;

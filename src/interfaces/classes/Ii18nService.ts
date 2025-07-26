import IStrings from "../models/IStrings";

interface Ii18nService {
  readonly _LOCALE: string;
  readonly _STRINGS: IStrings;
  getStrings(): IStrings;
  setStrings(): IStrings;
}

export default Ii18nService;

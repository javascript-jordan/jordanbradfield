import { default as en } from "@/assets/i18n/en";
import { default as es } from "@/assets/i18n/es";
import { default as fr } from "@/assets/i18n/fr";
import Ii18nService from "@/interfaces/classes/Ii18nService";
import IStrings from "@/interfaces/models/IStrings";

class I18nService implements Ii18nService {
  readonly _LOCALE: string = window.navigator.language.split("-")[0];
  readonly _STRINGS: IStrings;

  constructor() {
    this._STRINGS = this.setStrings();
  }

  public getStrings(): IStrings {
    return this._STRINGS;
  }

  public setStrings(): IStrings {
    return { en, es, fr }[this._LOCALE] || en;
  }
}

export default I18nService;

import en from "@/i18n/en";
import es from "@/i18n/es";
import fr from "@/i18n/fr";
import type { ObjectOrString } from "@/interfaces/ILanguagePack";
import type { ITranslationService } from "./ITranslationService";

class TranslationService implements ITranslationService {
  ALL_LANGUAGES: ObjectOrString = { en, fr, es };
  CURRENT_LANGUAGE: string = window.navigator.language.split("-")[0] || "en";

  get currentLanguage(): ObjectOrString {
    return (this, this.ALL_LANGUAGES[this.CURRENT_LANGUAGE]);
  }

  translate(key: string): string {
    const languagePack: ObjectOrString = (this.ALL_LANGUAGES[this.CURRENT_LANGUAGE] ||
      en) as ObjectOrString;
    const keys: string[] = key.split(".");
    let currentSubObject: ObjectOrString;
    let result: string = "";

    keys.forEach((subKey: string, i: number) => {
      if (!currentSubObject) {
        currentSubObject = languagePack[subKey] as ObjectOrString;
      } else {
        if (typeof currentSubObject !== "string") {
          currentSubObject = currentSubObject[subKey] as ObjectOrString;
        }

        if (typeof currentSubObject === "string" && i + 1 === keys.length) {
          result = currentSubObject;
        }
      }
    });

    return result;
  }
}

export default new TranslationService();

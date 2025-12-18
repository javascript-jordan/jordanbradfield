import type { ObjectOrString } from "@/interfaces/ILanguagePack";

export interface ITranslationService {
  ALL_LANGUAGES: ObjectOrString;
  CURRENT_LANGUAGE: string;
  translate(key: string): string;
}

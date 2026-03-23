import TranslationService from "@/services/TranslationService/TranslationService";
import type ITranslationDirective from "../interfaces/lib/ITranslationDirective";

const TranslateDirective: ITranslationDirective = {
  mounted: (el: HTMLElement, binding) => {
    const translation: string = TranslationService.translate(binding.value);

    if (translation) el.innerText = translation;
  },
};

export default TranslateDirective;

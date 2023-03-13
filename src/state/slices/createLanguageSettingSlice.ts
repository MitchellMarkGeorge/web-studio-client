import { StateCreator } from "zustand";
import { CSSPreset, HTMLPreset, JavascriptPreset, WebStudioState } from "../types";

export const createLanguageSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState,  "htmlSettings" | "cssSettings" | "javascriptSettings" | "updateLanguageSettings">
> = (set, get) => ({
    javascriptSettings: {
        preset: JavascriptPreset.ES6,
        additionalLibraries: [],
    },

    htmlSettings: {
        preset: HTMLPreset.DEFAULT
    },

    cssSettings: {
        preset: CSSPreset.DEFAULT,
        additionalLibraries: [],
        enableColorView: true
    },

    updateLanguageSettings: (language, settings) => {
        switch (language) {
            case "js":
                console.log(settings);
            case "css":
                console.log(settings);
            case "html":
                console.log(settings);
        }
    },
});

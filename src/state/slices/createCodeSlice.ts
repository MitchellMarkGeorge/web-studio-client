import { StateCreator } from "zustand";
import { WebStudioState } from "../types";

export const createCodeSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState,  "javascriptCode" | "cssCode" | "htmlCode" | "updateCode">
> = (set, get) => ({
    javascriptCode: "",
    cssCode: "",
    htmlCode: "",
    updateCode: (language, code) => {
        switch (language) {
            case "js":
                set({ javascriptCode: code});
            case "css":
                set({ cssCode: code});
            case "html":
                set({ htmlCode: code});
        }
    },
});

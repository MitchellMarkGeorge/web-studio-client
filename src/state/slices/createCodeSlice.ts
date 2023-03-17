import { StateCreator } from "zustand";
import { WebStudioState } from "../types";

export const createCodeSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState, "javascriptCode" | "cssCode" | "htmlCode" | "updateCode">
> = (set, get) => ({
  javascriptCode: "",
  cssCode: "",
  htmlCode: "",
  updateCode: (language, code) => {
    switch (language) {
      case "js": {
        // console.log("js");
        set({ javascriptCode: code });
        break;
      }
      case "css": {
        // console.log("css");
        set({ cssCode: code });
        break;
      }
      case "html": {
        // console.log("html");
        set({ htmlCode: code });
        break;
      }
    }
  },
});

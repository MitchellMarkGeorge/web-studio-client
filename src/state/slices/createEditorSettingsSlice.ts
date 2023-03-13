import { StateCreator } from "zustand";
import { WebStudioState } from "../types";

export const createEditorSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState,  "editorSettings" | "updateEditorSettings">
> = (set, get) => ({
  editorSettings: {
    autocompletion: true,
    bracketMatching: true,
    closeBrackets: true,
    enableLinting: true,
    enableReletiveLineNumbers: false,
    lineNumbers: true,
    formatOnSave: false
  },

  updateEditorSettings: (settings) => {
    console.log(settings);
  },
});

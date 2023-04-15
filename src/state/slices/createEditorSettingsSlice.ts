import { StateCreator } from "zustand";
import { WebStudioState } from "../types";

export const createEditorSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState,  "editorSettings" | "updateEditorSettings">
> = (set, get) => ({
  editorSettings: {
    autocompletionEnabled: false,
    bracketMatchingEnabled: true,
    closeBracketsEnabled: true,
    lintingEnabled: true,
    enableReletiveLineNumbers: false,
    lineNumbersEnabled: true,
    formatOnSave: false // think about this one
  },

  updateEditorSettings: (settings) => {
    console.log(settings);
  },
});

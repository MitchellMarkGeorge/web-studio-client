import { create } from "zustand";
import { createCodeSettingsSlice } from "./slices/createCodeSlice";
import { createEditorSettingsSlice } from "./slices/createEditorSettingsSlice";
import { createLanguageSettingsSlice } from "./slices/createLanguageSettingSlice";
import { createProjectSettingsSlice } from "./slices/createProjectSettingsSlice";
import {
  WebStudioState,
} from "./types";
export const useWebStudioState = create<WebStudioState>(
  (set, get, storeApi) => ({
    ...createCodeSettingsSlice(set, get, storeApi),
    ...createEditorSettingsSlice(set, get, storeApi),
    ...createLanguageSettingsSlice(set, get, storeApi),
    ...createProjectSettingsSlice(set, get, storeApi),
  })
);

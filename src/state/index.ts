import { create } from "zustand";
import { createEditorSettingsSlice } from "./slices/createEditorSettingsSlice";
import { createLanguageSettingsSlice } from "./slices/createLanguageSettingSlice";
import { createProjectSettingsSlice } from "./slices/createProjectSettingsSlice";
import {
  WebStudioState,
} from "./types";
export const useWebStudioState = create<WebStudioState>(
  (set, get, storeApi) => ({
    ...createEditorSettingsSlice(set, get, storeApi),
    ...createLanguageSettingsSlice(set, get, storeApi),
    ...createProjectSettingsSlice(set, get, storeApi),
    isPaneDragging: false,
    setIsPaneDragging: (isPaneDragging) => {
      set({ isPaneDragging });
    },
    showModal: false,
    setShowModal: (showModal) => {
      set({ showModal });
    },
    previewUrl: "",
    setPreviewUrl: (previewUrl) => {
        set({ previewUrl })
    },
  }),
);

import { create } from "zustand";
import { createEditorSettingsSlice } from "./slices/createEditorSettingsSlice";
import { createLanguageSettingsSlice } from "./slices/createLanguageSettingSlice";
import { createProjectSettingsSlice } from "./slices/createProjectSettingsSlice";
import { WebStudioState } from "./types";
import { createWorkspaceSettingsSlice } from "./slices/createWorkspaceSettingsSlice";
import { useWorkspaceState } from "./WorkspaceState";
export const useWebStudioState = create<WebStudioState>(
  (set, get, storeApi) => ({
    ...createWorkspaceSettingsSlice(set, get, storeApi),
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
      set({ previewUrl });
    },
    loadProject: (projectResponse) => {
      set({
        projectSettings: {
          projectName: projectResponse.name,
          enableJs: projectResponse.enableJs,
        },
        editorSettings: projectResponse.editorSettings,
        workspaceSettings: projectResponse.workspaceSettings,
        javascriptSettings: projectResponse.javascriptSettings,
        htmlSettings: projectResponse.htmlSettings,
        cssSettings: projectResponse.cssSettings,
        projectId: projectResponse.id,
      });

      useWorkspaceState.setState({
        js: projectResponse.javascriptCode,
        css: projectResponse.cssCode,
        html: projectResponse.htmlCode,
      });
    },
  })
);

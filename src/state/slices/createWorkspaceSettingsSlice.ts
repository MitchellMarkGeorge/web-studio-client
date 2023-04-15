import { StateCreator } from "zustand";
import { WebStudioState } from "../types";

export const createWorkspaceSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState, "workspaceSettings" | "updateWorkSpaceSettings">
> = (set, get) => ({
    workspaceSettings: {
        autoSave: false,
        livePreview: false,
        layout: "colunm"
    },
    updateWorkSpaceSettings: (settings) => {
        console.log(settings);
    }

});
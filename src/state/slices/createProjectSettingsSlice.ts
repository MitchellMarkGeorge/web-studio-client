import { StateCreator } from "zustand";
import { WebStudioState } from "../types";

export const createProjectSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState,  "projectSettings" | "updateProjectSettings">
> = (set, get) => ({
    projectSettings: {
        projectName: "",
        enableJs: true
    },
    updateProjectSettings: (settings) => {
        console.log(settings);
        // set jssettings to null
    },
});
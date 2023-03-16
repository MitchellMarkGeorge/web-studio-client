import { StateCreator } from "zustand";
import { WebStudioState } from "../types";

export const createProjectSettingsSlice: StateCreator<
  WebStudioState,
  [],
  [],
  Pick<WebStudioState, "projectSettings" | "updateProjectSettings">
> = (set, get) => ({
  projectSettings: {
    projectName: "",
    enableJs: true,
  },
  updateProjectSettings: (settings) => {
    const { projectSettings: previousProjectSettings } = get();
    set({ projectSettings: Object.assign(previousProjectSettings, settings) });
    // set jssettings to null
  },
});

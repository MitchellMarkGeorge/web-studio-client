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
    const updatedSettings = Object.assign(previousProjectSettings, settings);
    if (settings.enableJs === false) {
      set({ projectSettings: updatedSettings, javascriptCode: "" });
    } else {
      set({ projectSettings: updatedSettings });
    }
    // set jssettings to null
  },
});

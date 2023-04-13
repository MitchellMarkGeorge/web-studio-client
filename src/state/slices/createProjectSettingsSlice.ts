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
  updateProjectSettings: (settings: any) => {
    const { projectSettings: previousProjectSettings } = get();
    const updatedSettings = Object.assign(previousProjectSettings, settings);
    set({ projectSettings: updatedSettings });
  },
});

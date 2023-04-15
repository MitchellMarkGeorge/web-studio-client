import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import SettingCheckbox from "./SettingOptionInputs/Checkbox";
import LayoutSelect from "./SettingOptionInputs/LayoutSelect";
import { useSettingModalState } from "../../../../state/SettingsModalState";
import { LayoutOptions } from "../../../../state/types";

export default function WorkspaceSettings() {
  const tempWorkspaceSettings = useSettingModalState(
    (state) => state.tempWorkspaceSettings
  );
  const updateTempWorkspaceSettings = useSettingModalState(
    (state) => state.updateTempWorkspaceSettings
  );
  const toggleAutoSave = () => {
    updateTempWorkspaceSettings({ autoSave: !tempWorkspaceSettings.autoSave });
  };

  const setLayoutOption = (layout: LayoutOptions) => {
    updateTempWorkspaceSettings({ layout });
  };

  const toggleLivePreview = () => {
    updateTempWorkspaceSettings({
      livePreview: !tempWorkspaceSettings.livePreview,
    });
  };
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="Live Preview"
        settingDescription="Automatically run your code as you type in the editor."
        inputElement={
          <SettingCheckbox
            isChecked={tempWorkspaceSettings.livePreview}
            onClick={toggleLivePreview}
          />
        }
      />
      {/* <SettingsOption
        settingName="Auto Save"
        settingDescription="Automatically save your code as you type in the editor."
        inputElement={
          <SettingCheckbox
            isChecked={tempWorkspaceSettings.autoSave}
            onClick={toggleAutoSave}
          />
        }
      /> */}
      <SettingsOption
        settingName="Workspace Layout"
        settingDescription="Change the layout of your workspace."
        inputElement={
          <LayoutSelect
            selectedLayout={tempWorkspaceSettings.layout}
            setLayoutOption={setLayoutOption}
          />
        }
      />
    </SettingSectionContainer>
  );
}

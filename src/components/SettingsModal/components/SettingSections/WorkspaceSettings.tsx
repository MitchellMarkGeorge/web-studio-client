import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import SettingCheckbox from "./SettingOptionInputs/Checkbox";

export default function WorkspaceSettings() {
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="Live Preview"
        settingDescription="Automatically run your code as you type in the editor."
        inputElement={<SettingCheckbox/>}
      />
      <SettingsOption
        settingName="Auto Save"
        settingDescription="Automatically save your code as you type in the editor."
        inputElement={<SettingCheckbox />}
      />
      <SettingsOption
        settingName="Workspace Layout"
        settingDescription="Change the layout of your workspace."
        inputElement={<SettingCheckbox />}
      />
    </SettingSectionContainer>
  );
}
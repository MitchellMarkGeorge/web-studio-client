import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import SettingCheckbox from "./SettingOptionInputs/Checkbox";
import { Input } from "./SettingOptionInputs/Input";
import { useSettingModalState } from "../../../../state/SettingsModalState";

export default function ProjectSettings() {
  const tempProjectSettings = useSettingModalState(
    (state) => state.tempProjectSettings
  );
  const updateTempProjectSettings = useSettingModalState(
    (state) => state.updateTempProjectSettings
  );
  const toggleEnableJavascript = () => {
    updateTempProjectSettings({ enableJs: !tempProjectSettings.enableJs });
  };
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="Project Name"
        settingDescription="Change the name of your project."
        inputElement={
          <Input
            placeholder="Project Name"
            value={tempProjectSettings.projectName}
            onChange={(e) =>
              updateTempProjectSettings({ projectName: e.target.value })
            }
          />
        }
      />
      <SettingsOption
        settingName="Enable JavaScript"
        settingDescription="Toggle the Javascript editor for your project."
        inputElement={
          <SettingCheckbox
            isChecked={tempProjectSettings.enableJs}
            onClick={toggleEnableJavascript}
          />
        }
      />
    </SettingSectionContainer>
  );
}

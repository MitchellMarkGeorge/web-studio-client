import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import SettingCheckbox from "./SettingOptionInputs/Checkbox";

export default function EditorSettings() {
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="Enable Line Numbers"
        settingDescription="Show line numbers in your editors."
        inputElement={<SettingCheckbox/>}
      />
      <SettingsOption
        settingName="Enable Bracket Matching"
        settingDescription="Automatically highlight the matching bracket."
        inputElement={<SettingCheckbox/>}
      />
      <SettingsOption
        settingName="Enable Close Brackets"
        settingDescription="Automatically close matching brackets."
        inputElement={<SettingCheckbox/>}
      />
      <SettingsOption
        settingName="Format on Save"
        settingDescription="Automatically format your code on save."
        inputElement={<SettingCheckbox/>}
      />
      <SettingsOption
        settingName="Tab Size"
        settingDescription="Customize the tab size of the editors."
        inputElement={<SettingCheckbox/>}
      />
    </SettingSectionContainer>
  );
}
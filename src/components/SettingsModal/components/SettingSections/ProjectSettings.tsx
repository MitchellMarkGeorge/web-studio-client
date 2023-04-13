import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import SettingCheckbox from "./SettingOptionInputs/Checkbox";

export default function ProjectSettings() {
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="Project Name"
        settingDescription="Change the name of your project."
        inputElement={<div>Hello</div>}
      />
      <SettingsOption
        settingName="Enable JavaScript"
        settingDescription="Toggle the Javascript editor for your project."
        inputElement={<SettingCheckbox/>}
      />
    </SettingSectionContainer>
  );
}

import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import Select from "./SettingOptionInputs/Select";

export default function JavascriptSettings() {
  const jsPresets = [
    "ES6",
    "TypeScript",
    "CoffeScript",
    "Latest"
  ]
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="JavaScript Preset"
        settingDescription="Select a JavaScript Preset for your project. "
        inputElement={<Select options={jsPresets}/>}
      />
      <SettingsOption
        settingName="External Libraries"
        settingDescription="Add external Javascript libraries to use in your project."
        inputElement={<div>Hello</div>}
      />
    </SettingSectionContainer>
  );
}

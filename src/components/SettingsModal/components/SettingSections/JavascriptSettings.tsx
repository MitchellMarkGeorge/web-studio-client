import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";

export default function JavascriptSettings() {
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="JavaScript Preset"
        settingDescription="Select a JavaScript Preset for your project. "
        inputElement={<div>Hello</div>}
      />
      <SettingsOption
        settingName="External Libraries"
        settingDescription="Add external Javascript libraries to use in your project."
        inputElement={<div>Hello</div>}
      />
    </SettingSectionContainer>
  );
}

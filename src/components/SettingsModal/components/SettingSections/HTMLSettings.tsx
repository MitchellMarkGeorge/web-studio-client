import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";

export default function HTMLSettings() {
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="HTML Preset"
        settingDescription="Select a HTML Preset for your project. "
        inputElement={<div>Hello</div>}
      />
    </SettingSectionContainer>
  );
}


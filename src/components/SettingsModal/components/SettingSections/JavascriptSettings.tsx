import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import Select from "./SettingOptionInputs/Select";
import { JavascriptPreset, javascriptPresets } from "../../../../state/types";
import { useSettingModalState } from "../../../../state/SettingsModalState";

export default function JavascriptSettings() {
  const tempJavascriptSettings = useSettingModalState(
    (state) => state.tempJavascriptSettings
  );
  const updateTempJavascriptSettings = useSettingModalState(
    (state) => state.updateTempJavascriptSettings
  );

  const selectOption = (preset: JavascriptPreset) => {
    updateTempJavascriptSettings({ preset });
  };

  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="JavaScript Preset"
        settingDescription="Select a JavaScript Preset for your project. "
        inputElement={
          <Select
            options={javascriptPresets}
            selectOption={selectOption}
            selectedOption={tempJavascriptSettings.preset}
          />
        }
      />
      {/* <SettingsOption
        settingName="External Libraries"
        settingDescription="Add external Javascript libraries to use in your project."
        inputElement={<div>Hello</div>}
      /> */}
    </SettingSectionContainer>
  );
}

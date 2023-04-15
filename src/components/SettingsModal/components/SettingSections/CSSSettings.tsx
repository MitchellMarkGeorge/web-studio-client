import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import { useSettingModalState } from "../../../../state/SettingsModalState";
import { CSSPreset, cssPresets } from "../../../../state/types";
import Select from "./SettingOptionInputs/Select";

export default function CSSSettings() {
  const tempCssSettings = useSettingModalState(
    (state) => state.tempCssSettings
  );
  const updateTempCssSettings = useSettingModalState(
    (state) => state.updateTempCSSSettings
  );

  const selectOption = (preset: CSSPreset) => {
    updateTempCssSettings({ preset });
  };
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="CSS Preset"
        settingDescription="Select a CSS Preset for your project. "
        inputElement={<Select options={cssPresets} selectedOption={tempCssSettings.preset} selectOption={selectOption}/>}
      />
      {/* <SettingsOption
        settingName="External Libraries"
        settingDescription="Add external Javascript libraries to use in your project."
        inputElement={<div>Hello</div>}
      /> */}
    </SettingSectionContainer>
  );
}

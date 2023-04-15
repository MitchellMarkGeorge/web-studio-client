import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import { useSettingModalState } from "../../../../state/SettingsModalState";
import { HTMLPreset, htmlPresets } from "../../../../state/types";
import Select from "./SettingOptionInputs/Select";

export default function HTMLSettings() {
  const tempHtmlSettings = useSettingModalState(
    (state) => state.tempHtmlSettings
  );
  const updateTempHtmlSettings = useSettingModalState(
    (state) => state.updateTempHTMLSettings
  );

  const selectOption = (preset: HTMLPreset) => {
    updateTempHtmlSettings({ preset });
  };
  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="HTML Preset"
        settingDescription="Select a HTML Preset for your project. "
        inputElement={
          <Select
            options={htmlPresets}
            selectOption={selectOption}
            selectedOption={tempHtmlSettings.preset}
          />
        }
      />
    </SettingSectionContainer>
  );
}

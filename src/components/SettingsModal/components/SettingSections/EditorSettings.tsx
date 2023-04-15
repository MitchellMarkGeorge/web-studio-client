import React from "react";
import { SettingSectionContainer } from "./utils";
import { SettingsOption } from "../SettingsOption";
import SettingCheckbox from "./SettingOptionInputs/Checkbox";
import { useSettingModalState } from "../../../../state/SettingsModalState";

export default function EditorSettings() {
  const tempEditorSettings = useSettingModalState(
    (state) => state.tempEditorSettings
  );
  const updateTempEditorSettings = useSettingModalState(
    (state) => state.updateTempEditorSettings
  );

  const toggleLineNumbers = () => {
    updateTempEditorSettings({
      lineNumbersEnabled: !tempEditorSettings.lineNumbersEnabled,
    });
  };

  const toggleBracketMatching = () => {
    updateTempEditorSettings({
      bracketMatchingEnabled: !tempEditorSettings.bracketMatchingEnabled,
    });
  };

  const toggleCloseBrackets = () => {
    updateTempEditorSettings({
      closeBracketsEnabled: !tempEditorSettings.closeBracketsEnabled,
    });
  };

  return (
    <SettingSectionContainer>
      <SettingsOption
        settingName="Enable Line Numbers"
        settingDescription="Show line numbers in your editors."
        inputElement={
          <SettingCheckbox
            isChecked={tempEditorSettings.lineNumbersEnabled}
            onClick={toggleLineNumbers}
          />
        }
      />
      <SettingsOption
        settingName="Enable Bracket Matching"
        settingDescription="Automatically highlight the matching bracket."
        inputElement={
          <SettingCheckbox
            isChecked={tempEditorSettings.bracketMatchingEnabled}
            onClick={toggleBracketMatching}
          />
        }
      />
      <SettingsOption
        settingName="Enable Close Brackets"
        settingDescription="Automatically close matching brackets."
        inputElement={
          <SettingCheckbox
            isChecked={tempEditorSettings.closeBracketsEnabled}
            onClick={toggleCloseBrackets}
          />
        }
      />
      {/* <SettingsOption
        settingName="Format on Save"
        settingDescription="Automatically format your code on save."
        inputElement={<SettingCheckbox isChecked/>}
      /> */}
      {/* <SettingsOption
        settingName="Tab Size"
        settingDescription="Customize the tab size of the editors."
        inputElement={<SettingCheckbox isChecked/>}
      /> */}
    </SettingSectionContainer>
  );
}

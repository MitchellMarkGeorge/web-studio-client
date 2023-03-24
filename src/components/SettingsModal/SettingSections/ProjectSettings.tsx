import debounce from "lodash.debounce";
import React from "react";
import { useWebStudioState } from "../../../state";
import {
  SettingSectionContainer,
  SettingsInput,
  SettingsOptionField,
} from "./utils";

export default function ProjectSettings() {
  const projectSettings = useWebStudioState((state) => state.projectSettings);
  const updateProjectSettings = useWebStudioState(
    (state) => state.updateProjectSettings
  );

  const { enableJs, projectName } = projectSettings;

  const updateProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    updateProjectSettings({ projectName: e.target.value });
  };

  const toggleEnableJs = () => {
    updateProjectSettings({ enableJs: !enableJs });
  };
  return (
    <SettingSectionContainer>
      <SettingsOptionField>
        <label>Project Name:</label>
        <SettingsInput
          placeholder="Project Name"
        //   value={projectName}
          onChange={updateProjectName}
        />
      </SettingsOptionField>
      <SettingsOptionField>
        <label>Enable JavaScript:</label>
        <SettingsInput
          type="checkbox"
        //   defaultChecked={enableJs}
        //   onClick={toggleEnableJs}
        />
      </SettingsOptionField>
    </SettingSectionContainer>
  );
}

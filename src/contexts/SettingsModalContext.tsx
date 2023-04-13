import React, { useContext, useState } from "react";
import {
  CSSSettings,
  EditorSettings,
  HTMLSettings,
  JavascriptSettings,
  ProjectSettings,
  WorkspaceSettings,
} from "../state/types";
import { useWebStudioState } from "../state";

interface SettingsModalContextType {
  projectSettings: ProjectSettings;
  workspaceSettings: WorkspaceSettings;
  editorSettings: EditorSettings;
  javascriptSettings: JavascriptSettings;
  cssSettings: CSSSettings;
  htmlSettings: HTMLSettings;

  updateProjectSettings: (settings: Partial<ProjectSettings>) => void;
  updateWorkspaceSettings: (settings: Partial<WorkspaceSettings>) => void;
  updateEditorSettings: (settings: Partial<EditorSettings>) => void;
  updateJavascriptSettings: (settings: Partial<JavascriptSettings>) => void;
  updateCSSSettings: (settings: Partial<CSSSettings>) => void;
  updateHTMLSettings: (settings: Partial<HTMLSettings>) => void;
  restoreDefaultSettings: () => void;
  saveSettings: () => void;
}

const SettingsModalContext =
  React.createContext<SettingsModalContextType | null>(null);

export const useSettingsModalContext = () =>
  useContext(SettingsModalContext) as SettingsModalContextType;

interface Props {
  children: React.ReactNode;
}
export const SettingsModalProvider = (props: Props) => {
  const webStudioState = useWebStudioState();

  const [projectSettings, setProjectSettings] = useState(
    webStudioState.projectSettings
  );
  const [workspaceSettings, setWorkSpaceSettings] = useState(
    webStudioState.workspaceSettings
  );
  const [editorSettings, setEditorSettings] = useState(
    webStudioState.editorSettings
  );
  const [javascriptSettings, setJavascriptSettings] = useState(
    webStudioState.javascriptSettings
  );
  const [cssSettings, setCSSSettings] = useState(webStudioState.cssSettings);
  const [htmlSettings, setHTMLSettings] = useState(webStudioState.htmlSettings);

  const updateProjectSettings = (settings: Partial<ProjectSettings>) => {
    setProjectSettings({
      ...projectSettings,
      ...settings,
    });
  };
  const updateWorkspaceSettings = (settings: Partial<WorkspaceSettings>) => {
    setWorkSpaceSettings({
      ...workspaceSettings,
      ...settings,
    });
  };
  const updateEditorSettings = (settings: Partial<EditorSettings>) => {
    setEditorSettings({
      ...editorSettings,
      ...settings,
    });
  };
  const updateJavascriptSettings = (settings: Partial<JavascriptSettings>) => {
    setJavascriptSettings({
      ...javascriptSettings,
      ...settings,
    });
  };
  const updateCSSSettings = (settings: Partial<CSSSettings>) => {
    setCSSSettings({
      ...cssSettings,
      ...settings,
    });
  };
  const updateHTMLSettings = (settings: Partial<HTMLSettings>) => {
    setHTMLSettings({
      ...htmlSettings,
      ...settings,
    });
  };
  const restoreDefaultSettings = () => {};
  const saveSettings = () => {};

  const contextValue = {
    projectSettings,
    workspaceSettings,
    editorSettings,
    javascriptSettings,
    cssSettings,
    htmlSettings,
    updateProjectSettings,
    updateWorkspaceSettings,
    updateEditorSettings,
    updateJavascriptSettings,
    updateCSSSettings,
    updateHTMLSettings,
    restoreDefaultSettings,
    saveSettings,
  };

  return (
    <SettingsModalContext.Provider value={contextValue}>
      {props.children}
    </SettingsModalContext.Provider>
  );
};

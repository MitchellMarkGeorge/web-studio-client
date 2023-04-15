import {
  CSSSettings,
  EditorSettings,
  HTMLSettings,
  JavascriptSettings,
  ProjectSettings,
  WorkspaceSettings,
} from "./types";
import { useWebStudioState } from ".";
import { create } from "zustand";

// this setting modal state is meant to resemple a tempoaty state of settings that can be commited to the overall state once the user is done updating the state
interface SettingsModalState {
  tempProjectSettings: ProjectSettings;
  tempWorkspaceSettings: WorkspaceSettings;
  tempEditorSettings: EditorSettings;
  tempJavascriptSettings: JavascriptSettings;
  tempCssSettings: CSSSettings;
  tempHtmlSettings: HTMLSettings;
  updateTempProjectSettings: (settings: Partial<ProjectSettings>) => void;
  updateTempWorkspaceSettings: (settings: Partial<WorkspaceSettings>) => void;
  updateTempEditorSettings: (settings: Partial<EditorSettings>) => void;
  updateTempJavascriptSettings: (settings: Partial<JavascriptSettings>) => void;
  updateTempCSSSettings: (settings: Partial<CSSSettings>) => void;
  updateTempHTMLSettings: (settings: Partial<HTMLSettings>) => void;
  syncToStoreSettings: () => void;
  restoreDefaultSettings: () => void;
  saveSettings: () => void;
  isUnsaved: boolean
}

export const useSettingModalState = create<SettingsModalState>((set, get) => ({
  tempProjectSettings: useWebStudioState.getState().projectSettings,
  tempWorkspaceSettings: useWebStudioState.getState().workspaceSettings,
  tempEditorSettings: useWebStudioState.getState().editorSettings,
  tempJavascriptSettings: useWebStudioState.getState().javascriptSettings,
  tempCssSettings: useWebStudioState.getState().cssSettings,
  tempHtmlSettings: useWebStudioState.getState().htmlSettings,
  updateTempProjectSettings: (settings) => {
    const { tempProjectSettings } = get();
    set({ tempProjectSettings: { ...tempProjectSettings, ...settings, }, isUnsaved: true });
  },
  updateTempWorkspaceSettings: (settings) => {
    const { tempWorkspaceSettings } = get();
    set({ tempWorkspaceSettings: { ...tempWorkspaceSettings, ...settings }, isUnsaved: true });
  },
  updateTempEditorSettings: (settings) => {
    const { tempEditorSettings } = get();
    set({ tempEditorSettings: { ...tempEditorSettings, ...settings }, isUnsaved: true });
  },
  updateTempJavascriptSettings: (settings) => {
    const { tempJavascriptSettings } = get();
    set({ tempJavascriptSettings: { ...tempJavascriptSettings, ...settings }, isUnsaved: true });
  },
  updateTempCSSSettings: (settings) => {
    const { tempCssSettings } = get();
    set({ tempCssSettings: { ...tempCssSettings, ...settings }, isUnsaved: true });
  },
  updateTempHTMLSettings: (settings) => {
    const { tempHtmlSettings } = get();
    set({ tempHtmlSettings: { ...tempHtmlSettings, ...settings }, isUnsaved: true });
  },
  restoreDefaultSettings: () => {
    // set both temp state and overall state to defaults
  },
  saveSettings: () => {
    const {
      tempProjectSettings,
      tempEditorSettings,
      tempWorkspaceSettings,
      tempJavascriptSettings,
      tempCssSettings,
      tempHtmlSettings,
    } = get();
    useWebStudioState.setState({
      projectSettings: tempProjectSettings,
      editorSettings: tempEditorSettings,
      workspaceSettings: tempWorkspaceSettings,
      javascriptSettings: tempJavascriptSettings,
      cssSettings: tempCssSettings,
      htmlSettings: tempHtmlSettings,
    });
    set({ isUnsaved: false });
  },
  syncToStoreSettings: () => {
    set({
      tempEditorSettings: useWebStudioState.getState().editorSettings,
      tempWorkspaceSettings: useWebStudioState.getState().workspaceSettings,
      tempProjectSettings: useWebStudioState.getState().projectSettings,
      tempJavascriptSettings: useWebStudioState.getState().javascriptSettings,
      tempCssSettings: useWebStudioState.getState().cssSettings,
      tempHtmlSettings: useWebStudioState.getState().htmlSettings,
    });
  },
  isUnsaved: false,
}));

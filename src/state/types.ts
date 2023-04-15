export interface WebStudioState {
  // hack to style the iframe while the split pane is being dragged
  isPaneDragging: boolean;
  setIsPaneDragging: (isPaneDragging: boolean) => void;
  // javascriptCode: string;
  // htmlCode: string;
  // cssCode: string;
  // updateCode: (code: { js: string, html: string, css: string}) => void;
  javascriptSettings: JavascriptSettings; // can be disabled -- so should it be null?
  htmlSettings: HTMLSettings;
  cssSettings: CSSSettings;
  updateLanguageSettings: (
    language: "js" | "html" | "css",
    settings:
      | Partial<JavascriptSettings>
      | Partial<HTMLSettings>
      | Partial<CSSSettings>
  ) => void;
  editorSettings: EditorSettings;
  updateEditorSettings: (settings: Partial<EditorSettings>) => void;
  projectSettings: ProjectSettings;
  updateProjectSettings: (settings: Partial<ProjectSettings>) => void;
  workspaceSettings: WorkspaceSettings
  updateWorkSpaceSettings: (settings: Partial<WorkspaceSettings>) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void
  previewUrl: string
  setPreviewUrl: (previewUrl: string) => void
}

export interface EditorSettings {
  lineNumbersEnabled: boolean;
  lintingEnabled: boolean;
  bracketMatchingEnabled: boolean;
  closeBracketsEnabled: boolean;
  autocompletionEnabled: boolean;
  // indentWithTab: boolean
  enableReletiveLineNumbers: boolean;
  formatOnSave: boolean
  // tabSize: number;
  // highlightActiveLine
  // think about this
  // enableVimMode: boolean
}

export type LayoutOptions =  "colunm" | "row";

export interface WorkspaceSettings {
  autoSave: boolean;
  // readonly: boolean;
  // colorScheme: "light" | "dark";
  // layout: "colunm" | "row" | "tabs"
  layout: LayoutOptions;
}

export interface ProjectSettings {
  projectName: string;
  enableJs: boolean;
  // type:
}

export interface JavascriptSettings {
  preset: JavascriptPreset;
  additionalLibraries: string[]; // cdns
}

export interface HTMLSettings {
  preset: HTMLPreset;
}

export interface CSSSettings {
  preset: CSSPreset;
  additionalLibraries: string[]; // cdns
  enableColorView: boolean;
}


export enum JavascriptPreset {
  TYPESCRIPT = "TypeScript",
  COFFEESCRIPT = "CoffeeScript",
  ES6 = "ES6",
  VUE = "Vue",
  REACT = "React",
  LATEST = "Latest",
  // DEFAULT = ES6
}

// use const enums??
export const javascriptPresets = Object.values(JavascriptPreset);

export enum CSSPreset {
  DEFAULT = "CSS",
  SCSS = "SCSS",
  SASS = "SASS",
  LESS = "Less"
}

export const cssPresets = Object.values(CSSPreset);

export enum HTMLPreset {
  DEFAULT = "HTML",
  // PUG = "Pug",
  // TODO: think of other html presets
}

export const htmlPresets = Object.values(HTMLPreset);

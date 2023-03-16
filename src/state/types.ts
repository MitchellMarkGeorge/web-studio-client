export interface WebStudioState {
  javascriptCode: string;
  htmlCode: string;
  cssCode: string;
  updateCode: (language: "js" | "html" | "css", code: string) => void;
  javascriptSettings: JavascriptSettings | null; // can be disabled -- so should it be null?
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
}

export interface EditorSettings {
  lineNumbers: boolean;
  enableLinting: boolean;
  bracketMatching: boolean;
  closeBrackets: boolean;
  autocompletion: boolean;
  // indentWithTab: boolean
  enableReletiveLineNumbers: boolean;
  formatOnSave: boolean
  // tabSize: number;
  // highlightActiveLine
  // think about this
  // enableVimMode: boolean
}

export interface WebStudioSettings {
  autoSave: boolean;
  readonly: boolean;
  colorScheme: "light" | "dark";
  layout: "colunm" | "row" | "tabs"
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

export const enum JavascriptPreset {
  TYPESCRIPT = "TypeScript",
  COFFEESCRIPT = "CoffeeScript",
  ES6 = "ES6",
  VUE = "Vue",
  REACT = "React",
  LATEST = "Latest",
  // DEFAULT = ES6
}

export const enum CSSPreset {
  DEFAULT = "CSS",
  SCSS = "SCSS",
  SASS = "SASS",
}

export const enum HTMLPreset {
  DEFAULT = "HTML",
  // PUG = "Pug",
  // TODO: think of other html presets
}

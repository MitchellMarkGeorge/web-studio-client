import axios from "axios";
import {
  CSSSettings,
  EditorSettings,
  HTMLSettings,
  JavascriptSettings,
  WorkspaceSettings,
} from "../state/types";

const axiosInstace = axios.create({
  baseURL: "http://localhost:8000",
});

export interface ProjectResponse {
  id: number;
  name: string;
  enableJs: boolean;
  javascriptCode: string;
  cssCode: string;
  htmlCode: string;
  workspaceSettings: WorkspaceSettings;
  editorSettings: EditorSettings;
  javascriptSettings: JavascriptSettings;
  cssSettings: CSSSettings;
  htmlSettings: HTMLSettings;
}

const getProject = async (projectId: number) => {
  const result = await axiosInstace.get(`/project/${projectId}`);
  return result.data as ProjectResponse;
};

const updateCode = async (
  projectId: number,
  js: string,
  css: string,
  html: string
) => {
  return axiosInstace.put(`/project/${projectId}/code`, { js, css, html });
};

export default {
  getProject,
  updateCode,
};

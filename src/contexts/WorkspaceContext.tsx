import React, { useContext, useState } from "react";
import { useWebStudioState } from "../state";
import { buildPreviewUrl } from "../services/preview";

// this context is meant to act as a primary place where the code is saved to first
// once the user presses the run code button, the code is then saved to the overall state
// if we are saving on type, then it should automatically just go to the overall state
// will try looking for a better way to handle this (hopefully wihtout using context/duplication of data)

// the best option would be to only get the code from the ediotrs when the run button is pressed and build eveythign accordingly
// even that approach is not entirely fool proof - this entire system depends on the fact that the previewUrl's hash changes everytime the URL.createObjectURL is called
// if I make the preview static/hosted in the backend, this system won't work (although that might be easier as it would just be a matter of sending the code to the server and the webpage rebuilding and refreshing)

// for now this works

// will switch to using zustand 

interface WorkspaceContextType {
  js: string;
  css: string;
  html: string;
  saveJs: (js: string) => void;
  saveCSS: (css: string) => void;
  saveHTML: (html: string) => void;
  runCode: () => void;
}

const WorkspaceContext = React.createContext<WorkspaceContextType | null>(
  null
);

export const useWorkspaceContext = () =>
  useContext(WorkspaceContext) as WorkspaceContextType;

interface Props {
  children: React.ReactNode;
}

export const WorkspaceContextProvider = ({ children }: Props) => {
  // the advantage of this context is that the the top level state no longer needs to know about the code
  const [js, setJs] = useState("");
  const [css, setCSS] = useState("");
  const [html, setHTML] = useState("");
  const [isUnsaved, setIsUnsaved] = useState(false);
  const setPreviewUrl = useWebStudioState(state => state.setPreviewUrl);
  // const som = useWebStudioState(state => state.)

  const saveJs = (js: string) => {
    // if (autoSave) { //save it directly to top level state}
    setIsUnsaved(true);
    setJs(js)
  }

  const saveCSS = (css: string) => {
    // if (autoSave) { //save it directly to top level state}
    setIsUnsaved(true);
    setCSS(css)
  }


  const saveHTML = (html: string) => {
    // if (autoSave) { //save it directly to top level state}
    setIsUnsaved(true);
    setHTML(html);
  }

  const runCode = () => {
    const newPreviewUrl = buildPreviewUrl(js, css, html);
    setPreviewUrl(newPreviewUrl);
  }


  const contextValue = {
    js,
    css,
    html,
    saveJs,
    saveCSS,
    saveHTML,
    runCode

  };

  return (
    <WorkspaceContext.Provider value={contextValue}>
      {children}
    </WorkspaceContext.Provider>
  );
};

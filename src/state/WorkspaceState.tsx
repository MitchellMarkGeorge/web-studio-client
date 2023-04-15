import React, { useContext, useState } from "react";
import { useWebStudioState } from ".";
import { buildPreviewUrl } from "../services/preview";
import { create } from "zustand";

// this context is meant to act as a primary place where the code is saved to first
// once the user presses the run code button, the code is then saved to the overall state
// if we are saving on type, then it should automatically just go to the overall state
// will try looking for a better way to handle this (hopefully wihtout using context/duplication of data)

// the best option would be to only get the code from the ediotrs when the run button is pressed and build eveythign accordingly
// even that approach is not entirely fool proof - this entire system depends on the fact that the previewUrl's hash changes everytime the URL.createObjectURL is called
// if I make the preview static/hosted in the backend, this system won't work (although that might be easier as it would just be a matter of sending the code to the server and the webpage rebuilding and refreshing)

// for now this works

// will switch to using zustand

interface WorkspaceState {
  js: string;
  css: string;
  html: string;
  isUnsaved: boolean;
  updateIsUnsaved: (isUnsaved: boolean) => void;
  saveJs: (js: string) => void;
  saveCSS: (css: string) => void;
  saveHTML: (html: string) => void;
  runCode: () => void;
}

export const useWorkspaceState = create<WorkspaceState>((set, get) => ({
  js: "",
  css: "",
  html: "",
  saveJs: (js) => {
    const { workspaceSettings } = useWebStudioState.getState();
    const { runCode } = get();
    set({
      js,
      isUnsaved: true,
    });
    if (workspaceSettings.livePreview) {
      runCode();
    }
  },
  saveCSS: (css) => {
    const { workspaceSettings } = useWebStudioState.getState();
    const { runCode } = get();
    set({
      css,
      isUnsaved: true,
    });
    if (workspaceSettings.livePreview) {
      runCode();
    }
  },
  saveHTML: (html) => {
    const { workspaceSettings } = useWebStudioState.getState();
    const { runCode } = get();
    set({
      html,
      isUnsaved: true,
    });
    if (workspaceSettings.livePreview) {
      runCode();
    }
  },
  runCode: () => {
    console.log("running the code");
    const { setPreviewUrl } = useWebStudioState.getState()
    const { js, css, html } = get();
    const newPreviewUrl = buildPreviewUrl(js, css, html);
    setPreviewUrl(newPreviewUrl);
  },
  isUnsaved: false,
  updateIsUnsaved: (isUnsaved) => {
    set({ isUnsaved });
  },
}));


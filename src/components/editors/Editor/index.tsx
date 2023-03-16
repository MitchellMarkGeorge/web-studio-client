import { basicSetup, EditorView } from "codemirror";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useWebStudioState } from "../../../state";
import { darktheme } from "./theme";
import { javascript } from "@codemirror/lang-javascript";

// const enum EditorLanuage {
//   J,
// }

interface Props {
  // code: string // might bcome usefull when saving to localStorage
  language: any; // need to figure out what this looks like
//   options: EditorLanuage; // need to figure out what this looks like
  onCodeChange: () => void;
}

const CodeMirrorWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* flex: 1; */
  /* display: flex; */
`;


export default function Editor() {
  const container = useRef<HTMLDivElement | null>(null);
  const editorView = useRef<EditorView | null>(null);
  const editorSettings = useWebStudioState(state => state.editorSettings);
  // should the editor be at 100%?? 
  // this technically is not nesseccary as the editor background and the layout background will be same color

  useEffect(() => {
    if (container.current && !editorView.current) {
      editorView.current = new EditorView({
        // extensions: [basicSetup, defaultTheme],
        // need to migrrate to @codemirror/view and configure things myself
        extensions: [basicSetup, darktheme, javascript({ jsx: true })],
        parent: container.current,
      });
    }
  }, []);
  return <CodeMirrorWrapper ref={container} />;
}

import React from "react";
import { CodeMirrorContainer, EditorContainer } from "../components/components";
import EditorBar from "../EditorBar";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import Editor from "../Editor";
import { css } from "@codemirror/lang-css";
import { useWebStudioState } from "../../../state";
import debounce from "lodash.debounce";
import { useWorkspaceContext } from "../../../contexts/WorkspaceContext";

export default function CSSEditor() {
  const { saveCSS } = useWorkspaceContext();
  // should I be trimming the code???
  const onCssChanged = (code: string) => {
    saveCSS(code);
  };
  return (
    <EditorContainer>
      {/* <EditorBar icon={SiCss3} editorName="CSS" iconColor="#5896d0"/> */}
      <EditorBar icon={SiCss3} editorName="CSS" />
      <CodeMirrorContainer>
        <Editor language={css()} onCodeChange={debounce(onCssChanged, 500)} />
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

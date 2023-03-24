import React from "react";
import { CodeMirrorContainer, EditorContainer } from "../common/components";
import EditorBar from "../EditorBar";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import Editor from "../Editor";
import { css } from "@codemirror/lang-css";
import { useWebStudioState } from "../../../state";
import debounce from "lodash.debounce";

export default function CSSEditor() {
  const updateCode = useWebStudioState((state) => state.updateCode);
  // should I be trimming the code???
  const onCssChanged = (code: string) => {
    updateCode("css", code);
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

import React from "react";
import { CodeMirrorContainer, EditorContainer } from "../common/components";
import EditorBar from "../EditorBar";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import Editor from "../Editor";

export default function JavascriptEditor() {
  return (
    <EditorContainer>
      <EditorBar icon={SiJavascript} editorName="Javascript" />
      <CodeMirrorContainer>
        <Editor />
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

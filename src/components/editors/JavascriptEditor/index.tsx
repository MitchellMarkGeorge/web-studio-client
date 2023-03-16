import React from "react";
import { CodeMirrorContainer, EditorContainer } from "../common/components";
import EditorBar from "../EditorBar";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import Editor from "../Editor";
import { javascript } from "@codemirror/lang-javascript";

export default function JavascriptEditor() {
  return (
    <EditorContainer>
      <EditorBar icon={SiJavascript} editorName="Javascript" />
      <CodeMirrorContainer>
        <Editor language={javascript()}/>
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

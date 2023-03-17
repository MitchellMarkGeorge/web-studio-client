import React from "react";
import { EditorContainer, CodeMirrorContainer } from "../common/components";
import EditorBar from "../EditorBar";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import Editor from "../Editor";
import { html } from "@codemirror/lang-html";
import { useWebStudioState } from "../../../state";
import debounce from "lodash.debounce";

export default function HTMLEditor() {
  const updateCode = useWebStudioState((state) => state.updateCode);
  const onHtmlChanged = (code: string) => {
    updateCode("html", code);
  };
  return (
    <EditorContainer>
      <EditorBar icon={SiHtml5} editorName="HTML" />
      <CodeMirrorContainer>
        <Editor language={html()} onCodeChange={debounce(onHtmlChanged, 500)} />
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

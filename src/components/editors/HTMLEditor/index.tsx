import React from "react";
import { EditorContainer, CodeMirrorContainer } from "../components/components";
import EditorBar from "../EditorBar";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import Editor from "../Editor";
import { html } from "@codemirror/lang-html";
import { useWebStudioState } from "../../../state";
import debounce from "lodash.debounce";
import { useWorkspaceContext } from "../../../contexts/WorkspaceContext";

export default function HTMLEditor() {
  // const updateCode = useWebStudioState((state) => state.updateCode);
  const { saveHTML } = useWorkspaceContext();

  const onHtmlChanged = (code: string) => {
    saveHTML(code);
  };

  return (
    <EditorContainer>
      {/* <EditorBar icon={SiHtml5} editorName="HTML" iconColor="#df7743" /> */}
      <EditorBar icon={SiHtml5} editorName="HTML"/>
      <CodeMirrorContainer>
        <Editor language={html()} onCodeChange={debounce(onHtmlChanged, 500)} />
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

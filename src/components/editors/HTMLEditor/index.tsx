import React from "react";
import { EditorContainer, CodeMirrorContainer } from "../components/components";
import EditorBar from "../EditorBar";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import Editor from "../Editor";
import { html } from "@codemirror/lang-html";
import { useWebStudioState } from "../../../state";
import debounce from "lodash.debounce";
import { useWorkspaceState } from "../../../state/WorkspaceState";
import { HTMLPreset } from "../../../state/types";

export default function HTMLEditor() {
  // const updateCode = useWebStudioState((state) => state.updateCode);
  const saveHTML = useWorkspaceState(state => state.saveHTML);
  const htmlCode = useWorkspaceState(state => state.html);
  const htmlSettings = useWebStudioState(state => state.htmlSettings);

  const onHtmlChanged = (code: string) => {
    console.log(code);
    saveHTML(code);
  };


  const preset = htmlSettings.preset !== HTMLPreset.DEFAULT ? htmlSettings.preset : undefined;

  return (
    <EditorContainer>
      {/* <EditorBar icon={SiHtml5} editorName="HTML" iconColor="#df7743" /> */}
      <EditorBar icon={SiHtml5} editorName="HTML" preset={preset}/>
      <CodeMirrorContainer>
        <Editor value={htmlCode} language={html()} onCodeChange={debounce(onHtmlChanged, 500)} />
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

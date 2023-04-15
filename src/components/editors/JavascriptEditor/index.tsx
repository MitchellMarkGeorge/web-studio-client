import React from "react";
import { CodeMirrorContainer, EditorContainer } from "../components/components";
import EditorBar from "../EditorBar";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import Editor from "../Editor";
import { javascript } from "@codemirror/lang-javascript";
import debounce from "lodash.debounce";
import { useWorkspaceState } from "../../../state/WorkspaceState";

export default function JavascriptEditor() {
  const saveJs = useWorkspaceState(state => state.saveJs);

  // should wrap in both useCallback and debounce
  const onJavascriptChange = (code: string) => {
    // console.log(code);
    saveJs(code);
  };
  return (
    <EditorContainer>
      {/* <EditorBar icon={SiJavascript} editorName="Javascript" iconColor="yellow" /> */}
      <EditorBar icon={SiJavascript} editorName="Javascript" />
      <CodeMirrorContainer>
        <Editor
          language={javascript({ jsx: true })}
          onCodeChange={debounce(onJavascriptChange, 500)}
        />
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

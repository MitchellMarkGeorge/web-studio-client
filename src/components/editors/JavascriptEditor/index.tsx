import React from "react";
import { CodeMirrorContainer, EditorContainer } from "../common/components";
import EditorBar from "../EditorBar";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import Editor from "../Editor";
import { javascript } from "@codemirror/lang-javascript";
import { useWebStudioState } from "../../../state";
import debounce from "lodash.debounce";

export default function JavascriptEditor() {
  const updateCode = useWebStudioState((state) => state.updateCode);

  // should wrap in both useCallback and debounce
  const onJavascriptChange = (code: string) => {
    // console.log(code);
    updateCode("js", code);
  };
  return (
    <EditorContainer>
      {/* <EditorBar icon={SiJavascript} editorName="Javascript" iconColor="yellow" /> */}
      <EditorBar icon={SiJavascript} editorName="Javascript" />
      <CodeMirrorContainer>
        <Editor
          language={javascript({ jsx: true})}
          onCodeChange={debounce(onJavascriptChange, 500)}
        />
      </CodeMirrorContainer>
    </EditorContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { useWebStudioState } from "../../state";
import { CSSEditor, HTMLEditor, JavascriptEditor } from "../editors";
import SplitPane from "../layout";
import Preview from "../Preview";

const WebStudioEditorContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

interface Props {
  isJsEnabled: boolean;
}

export default function WebStudioEditor(props: Props) {
  return (
    <WebStudioEditorContainer>
      <SplitPane direction="horizontal">
        <SplitPane direction="vertical">
          <HTMLEditor/>
          <CSSEditor/>
          {props.isJsEnabled && <JavascriptEditor/>}
        </SplitPane>
        <Preview/>
      </SplitPane>
    </WebStudioEditorContainer>
  );
}

import React, { useRef } from "react";
import styled from "styled-components";
import { useWebStudioState } from "../../state";
import { CSSEditor, HTMLEditor, JavascriptEditor } from "../editors";
import SplitPane from "../layout";
import Preview from "../Preview";

const WebStudioWorkspaceContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

interface Props {
  isJsEnabled: boolean;
}

export default function WebStudioWorkspace(props: Props) {
  // the idea behind this is to get the intancces of the codemirror editor object for each editor
  return (
    <WebStudioWorkspaceContainer>
      <SplitPane direction="horizontal">
        <SplitPane direction="vertical">
          <HTMLEditor/>
          <CSSEditor/>
          {props.isJsEnabled && <JavascriptEditor/>}
        </SplitPane>
        <Preview/>
      </SplitPane>
    </WebStudioWorkspaceContainer>
  );
}

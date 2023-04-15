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
  const workspaceSettiong = useWebStudioState(state => state.workspaceSettings);
  const isColunmLayout = workspaceSettiong.layout === "colunm";
  return (
    <WebStudioWorkspaceContainer>
      <SplitPane direction={ isColunmLayout ? "horizontal" : "vertical"}>
        <SplitPane direction={ isColunmLayout ? "vertical" : "horizontal"}>
          <HTMLEditor/>
          <CSSEditor/>
          {props.isJsEnabled && <JavascriptEditor/>}
        </SplitPane>
        <Preview/>
      </SplitPane>
    </WebStudioWorkspaceContainer>
  );
}

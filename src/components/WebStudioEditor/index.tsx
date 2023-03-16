import React from "react";
import styled from "styled-components";
import { useWebStudioState } from "../../state";
import { CSSEditor, HTMLEditor, JavascriptEditor } from "../editors";
import SplitPane from "../layout";

const WebStudioEditorContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;
const Demo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primaryText};
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
          {/* <Demo>HTML</Demo> */}
          {/* <Demo>CSS</Demo> */}
          <CSSEditor/>
          {/* {props.isJsEnabled && <Demo>JavaScript</Demo>} */}
          {props.isJsEnabled && <JavascriptEditor/>}
        </SplitPane>
        <Demo>Preview</Demo>
      </SplitPane>
    </WebStudioEditorContainer>
  );
}

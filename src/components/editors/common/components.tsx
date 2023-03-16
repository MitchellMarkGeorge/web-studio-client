import styled from "styled-components";

export const EditorContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// this container might not be needed
export const CodeMirrorContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  overflow: auto;
  /* align-items: center; */
  /* justify-content: center; */
`;

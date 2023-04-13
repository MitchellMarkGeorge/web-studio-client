import React from "react";
import styled from "styled-components";
import { IconType } from "@react-icons/all-files";

const EditorBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // think about this padding
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 18px;
  gap: 5px;
  /* gap: 10px; // think about this */
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryText};
`;


interface Props {
  icon: IconType; 
  editorName: string;
  iconColor?: string
}

export default function EditorBar({ editorName, icon: Icon }: Props) {
  return (
    <EditorBarContainer>
      <Icon size={"16px"} />
      <div>{editorName}</div>
    </EditorBarContainer>
  );
}

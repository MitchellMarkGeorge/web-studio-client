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
  /* flex: 0 1 auto; */
  /* background-color: #111; */
  /* z-index: 2; */
  /* border-bottom: 1px solid ${(props) => props.theme.colors.secondaryBackground}; */
`;

const EditorBarTextContainer = styled.div`
  display: flex;
  flex-direction: row;
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
      <EditorBarTextContainer>
        <Icon size={"16px"} />
        <div>{editorName}</div>
      </EditorBarTextContainer>
    </EditorBarContainer>
  );
}

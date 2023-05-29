import React from "react";
import styled from "styled-components";
import { IconType } from "@react-icons/all-files";

const EditorBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // think about this padding
  /* padding-left: 18px;
  padding-right: 18px;
  padding-top: 18px; */
  padding: 0.75rem 1.125rem;
  /* gap: 5px; */
  gap: 0.625rem;
  gap: 0.75rem;
  /* gap: 0.375rem; */
  /* gap: 10px; // think about this */
  align-items: center;
  /* font-size: 15px; */
`;

const EditorNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.375rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryText};
`;

const PresetText = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondaryText};
  /* opacity: 0.5; */
  text-transform: uppercase;
`

interface Props {
  icon: IconType;
  editorName: string;
  preset?: string;
}

export default function EditorBar({ editorName, icon: Icon, preset }: Props) {
  return (
    <EditorBarContainer>
      <EditorNameContainer>
        <Icon size={"1rem"} />
        <div>{editorName}</div>
      </EditorNameContainer>
      {preset && <PresetText>{`(${preset})`}</PresetText>}
    </EditorBarContainer>
  );
}

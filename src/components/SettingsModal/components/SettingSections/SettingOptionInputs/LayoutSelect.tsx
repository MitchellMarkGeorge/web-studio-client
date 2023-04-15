import React, { useState } from "react";
import styled from "styled-components";
import { RiLayout4Fill } from "react-icons/ri";
import { RiTableFill } from "react-icons/ri";
import { LayoutOptions } from "../../../../../state/types";

const LayoutSelectContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
`;

const LayoutOption = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primaryText};
  border-radius: 8px;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primaryAccent
      : props.theme.colors.secondaryBackground};
`;

interface Props {
  selectedLayout: LayoutOptions;
  setLayoutOption: (layout: LayoutOptions) => void;
}

export default function LayoutSelect(props: Props) {
  return (
    <LayoutSelectContainer>
      <LayoutOption
        isSelected={props.selectedLayout === "colunm"}
        onClick={() => props.setLayoutOption("colunm")}
      >
        <RiLayout4Fill />
      </LayoutOption>
      <LayoutOption
        isSelected={props.selectedLayout === "row"}
        onClick={() => props.setLayoutOption("row")}
      >
        <RiTableFill />
      </LayoutOption>
    </LayoutSelectContainer>
  );
}

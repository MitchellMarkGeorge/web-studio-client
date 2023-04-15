import React, { useState } from "react";
import styled from "styled-components";
import { RiLayout4Fill } from "react-icons/ri";
import { RiTableFill } from "react-icons/ri";

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
  selectedLayout: string;
  updateLayoutOption: (layout: string) => void;
}

export default function LayoutSelect() {
    // state will be provided from props
  const [layoutOption, setLayoutOption] = useState<"column" | "row">("column");
  return (
    <LayoutSelectContainer>
      <LayoutOption isSelected={layoutOption === "column"} onClick={() => setLayoutOption("column")}>
        <RiLayout4Fill />
      </LayoutOption>
      <LayoutOption isSelected={layoutOption === "row"} onClick={() => setLayoutOption("row")}>
        <RiTableFill />
      </LayoutOption>
    </LayoutSelectContainer>
  );
}

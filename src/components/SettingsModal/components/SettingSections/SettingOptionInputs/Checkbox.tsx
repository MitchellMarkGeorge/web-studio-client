import React from "react";
import styled from "styled-components";
interface Props {
  isChecked: boolean;
  // setIsChecked: () => void;
  onClick: () => void;
}

const CheckboxInput = styled.input`
  appearance: none;
  /* display: inline-block; */
  /* accent-color: ${(props) => props.theme.colors.primaryAccent}; */
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.secondaryText};
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: transparent;

  &:checked {
    border: none;
    background-color: ${(props) => props.theme.colors.primaryAccent};
    &::after {
    // unicode for checkmark
      content: "\\2713";
      /* content: "✓"; */
      /* content: '✓'; */
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors.primaryText};
      height: 100%;
      width: 100%;
    }
  }
`;
export default function SettingCheckbox(props: Props) {
  return (
    <CheckboxInput
      type="checkbox"
        checked={props.isChecked}
        onChange={props.onClick}
    />
  );
}

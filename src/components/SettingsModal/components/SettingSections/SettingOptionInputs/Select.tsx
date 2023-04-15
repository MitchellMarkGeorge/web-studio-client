import React from "react";
import styled from "styled-components";

interface Props<T extends string> {
  selectedOption: T;
  options: T[];
  selectOption: (option: T) => void;
}

const SelectContainer = styled.select`
  /* appearance: none; */
  /* width: 7.5rem; */
  width: 10rem;
  background-color: transparent;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.secondaryText};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.secondaryText};
  font-size: 0.875rem;
  /* font-size: 0.75rem; */
  outline: none;
`;
export default function Select<T extends string>(props: Props<T>) {
  return (
    <SelectContainer
      value={props.selectedOption}
      onChange={(e) => props.selectOption(e.target.value as T)}
    >
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectContainer>
  );
}

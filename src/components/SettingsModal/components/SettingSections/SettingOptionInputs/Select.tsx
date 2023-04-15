import React from 'react'
import styled from 'styled-components'


interface Props {
    options: string[]
}

const SelectContainer = styled.select`
    /* appearance: none; */
    /* width: 7.5rem; */
    width: 10rem;
    background-color: transparent;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme.colors.secondaryText};
    border-radius: 0.5rem;
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 0.875rem;
    /* font-size: 0.75rem; */
    outline: none;
`
export default function Select(props: Props) {
  return (
    <SelectContainer>
        {props.options.map((option) => (
            <option value={option}>{option}</option>
        ))}
    </SelectContainer>
  )
}

import styled from "styled-components";

export const Input = styled.input`
    /* width: 6.25rem; */
    width: 10rem;
    background-color: transparent;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme.colors.secondaryText};
    border-radius: 0.5rem;
    color: ${(props) => props.theme.colors.primaryText};
    /* font: inherit; */
    font-size: 0.875rem;
    outline: none;
`;
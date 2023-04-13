import styled from "styled-components";
// have a general button for the overall project
export const GeneralSettingsButton = styled.button`
  width: 100%;
  /* transition: all 0.3s ease; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  /* font-size: 0.75rem; */
  white-space: nowrap;
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;
import styled from "styled-components";

export const SettingSectionContainer = styled.div`
   height: 100%;
   width: 100%; 
   padding-top: 10px;
   padding-bottom: 10px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   color: ${props => props.theme.colors.secondaryText};
`